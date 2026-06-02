import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
// import VideoWalkthrough from "./pages/VideoWalkthrough";
import ContextSection from "./pages/ContextSection";
import MentorSection from "./pages/MentorSection";
import Testimonials from "./pages/Testimonials";
import CourseRoadmap from "./pages/CourseRoadmap";
import ComparisonSection from "./pages/ComparisonSection";
import FinalCTA from "./pages/FinalCTA";
import WhatsAppModal from "./components/WhatsAppModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {/* <VideoWalkthrough /> */}
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
