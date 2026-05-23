export const DISCORD_LINK = "https://discord.gg/9VZXvS586r";

// GOOGLE_SHEET_URL has moved to the server side (server/.env → GOOGLE_SHEET_URL).
// The frontend now talks to our own Express API which handles Google forwarding internally.
// In development: http://localhost:3001
// In production: set VITE_API_URL in your deployment environment to your server's public URL
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
