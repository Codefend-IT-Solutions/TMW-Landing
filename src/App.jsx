import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import ContextSection from "./pages/ContextSection";
import MentorSection from "./pages/MentorSection";

import MarketPerformance from "./components/MarketPerformance";
import CourseRoadmap from "./pages/CourseRoadmap";
import ComparisonSection from "./pages/ComparisonSection";
import FinalCTA from "./pages/FinalCTA";

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ContextSection />
        <MentorSection />

        <MarketPerformance />
        <CourseRoadmap />
        <ComparisonSection />
        <FinalCTA />
      </main>
    </div>
  );
}

export default App;
