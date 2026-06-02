import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import VideoWalkthrough from "./pages/VideoWalkthrough";
import ContextSection from "./pages/ContextSection";
import MentorSection from "./pages/MentorSection";
import Testimonials from "./pages/Testimonials";
import CourseRoadmap from "./pages/CourseRoadmap";
import ComparisonSection from "./pages/ComparisonSection";
import FinalCTA from "./pages/FinalCTA";
import WhatsAppModal from "./components/WhatsAppModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ─── Safari / iOS Cache Flush ──────────────────────────────────────────────
  // Older iOS devices cache heavy .mp4 buffers aggressively via WebKit.
  // On every deploy we bump CURRENT_VERSION so stale clients hard-reload once.
  useEffect(() => {
    const CURRENT_VERSION = 'v1.2_safari_clean';
    const savedVersion = localStorage.getItem('app_version');

    if (savedVersion !== CURRENT_VERSION) {
      // 1. Purge every entry in the Cache API (service-worker caches, etc.)
      if ('caches' in window) {
        caches.keys().then((names) => {
          for (let name of names) caches.delete(name);
        });
      }
      // 2. Wipe old heavy LocalStorage items (stale video buffers, old state)
      localStorage.clear();
      // 3. Stamp the new version so we don't loop after reload
      localStorage.setItem('app_version', CURRENT_VERSION);
      // 4. Force a hard reload from the server, bypassing the browser cache
      window.location.reload(true);
    }
  }, []);
  // ──────────────────────────────────────────────────────────────────────────

  const handleOpenModal = () => {
    // Trigger dataLayer events as requested
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "discord_button_click" });
    window.dataLayer.push({ event: "whatsapp_popup_open" });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <Navbar onJoinClick={handleOpenModal} />
      <main>
        <Hero onJoinClick={handleOpenModal} />
        <VideoWalkthrough />
        <ContextSection />
        <MentorSection />
        <Testimonials />
        <CourseRoadmap onJoinClick={handleOpenModal} />
        <ComparisonSection />
        <FinalCTA onJoinClick={handleOpenModal} />
      </main>

      {/* WhatsApp Modal Popup Flow */}
      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
