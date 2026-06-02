/**
 * Express API Server — Firebase Firestore + Google Sheets Pipeline
 *
 * On each POST /api/submit-lead:
 *   Step A → Save lead immediately to Firebase Firestore (guaranteed backup)
 *   Step B → Forward to Google Sheets webhook (best-effort)
 *   Step C → If Google fails/quota, log silently — Firestore already has the data
 *   Step D → Always return { success: true } to the browser
 */

import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

import express from 'express';
import cors from 'cors';

// ─── Firebase Firestore Setup ──────────────────────────────────────────────────

import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:            process.env.FIREBASE_API_KEY,
  authDomain:        process.env.FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.FIREBASE_PROJECT_ID,
  storageBucket:     process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.FIREBASE_APP_ID,
};

// Prevent duplicate initialization on server restarts / hot reloads
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(firebaseApp);

// ─── Express Setup ─────────────────────────────────────────────────────────────

const app  = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// CORS — only allow requests from our own frontend origin
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173';
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no Origin header (e.g. Postman, curl)
    if (!origin || origin === allowedOrigin) {
      callback(null, true);
    } else {
      callback(new Error(`CORS: Origin ${origin} not allowed`));
    }
  },
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

// ─── Health check ──────────────────────────────────────────────────────────────

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── POST /api/submit-lead ─────────────────────────────────────────────────────

app.post('/api/submit-lead', async (req, res) => {
  const { name, whatsappNumber, tradingLevel } = req.body;

  // Basic validation
  if (!name || !whatsappNumber || !tradingLevel) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields: name, whatsappNumber, tradingLevel',
    });
  }

  try {
    // ── Step A: Save to Firebase Firestore immediately ─────────────────────────
    const docRef = await addDoc(collection(db, 'leads'), {
      name,
      whatsappNumber,
      tradingLevel,
      createdAt:        new Date(),
      googleSheetSynced: false,
    });
    console.log(`[Firebase] ✓ Lead saved → doc id: ${docRef.id} | ${name} | ${whatsappNumber}`);

    // ── Step B: Forward to Google Sheets webhook (best-effort) ─────────────────
    const googleSheetUrl = process.env.GOOGLE_SHEET_URL;
    if (googleSheetUrl) {
      try {
        const googleResponse = await fetch(googleSheetUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, whatsappNumber, tradingLevel }),
          signal: AbortSignal.timeout(8000),
        });

        if (googleResponse.ok) {
          console.log('[Google] ✓ Sheets webhook → 200 OK');
        } else {
          // ── Step C: Quota / error — lead is already safe in Firestore ──────
          console.error(
            `[Google] Sheets returned HTTP ${googleResponse.status}. ` +
            `Lead doc ${docRef.id} is safe in Firebase — no data lost.`
          );
        }
      } catch (googleError) {
        // ── Step C (network path): timeout, quota block, DNS failure ──────────
        console.error(
          '[Google] Sheet Limit Reached or network error. Data safely backed up in Firebase.',
          googleError.message
        );
      }
    } else {
      console.warn('[Google] GOOGLE_SHEET_URL not set in .env — skipping webhook.');
    }

    // ── Step D: Always return success — Firebase has the record ───────────────
    return res.status(200).json({ success: true });

  } catch (error) {
    // Firebase itself failed — log and return 500
    console.error('[Firebase] Database Server Error:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// ─── Start server ──────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log('--------------------------------');
  console.log(`[Server] Express API running on http://localhost:${PORT}`);
  console.log(`[Server] CORS: accepting requests from → ${allowedOrigin}`);
  console.log(`[Server] Pipeline → Firebase Firestore + Google Sheets webhook`);
});
