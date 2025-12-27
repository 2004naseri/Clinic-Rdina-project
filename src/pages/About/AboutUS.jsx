import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HeroSection from "./HeroSection";
import AboutIntroSection from "./AboutIntroSection";
import VisionMissionSection from "./VisionMissionSection";
import TeamSection from "./TeamSection";
import CoreValuesSection from "./../../components/CoreValuesSection";

const AboutUs = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section");

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        // Offset for the sticky navbar height (h-20 = 80px)
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [section]);

  return (
    <div className="bg-white">
      {/* Hero Section with Beautiful Header Image */}
      <HeroSection />

      {/* Main About Section - Each ID matches NavbarData.js paths */}
      <div id="about">
        <AboutIntroSection />
      </div>

      <div id="vision-mission">
        <VisionMissionSection />
      </div>

      <div id="core-values">
        <CoreValuesSection />
      </div>

      <div id="team">
        <TeamSection />
      </div>
    </div>
  );
};

export default AboutUs;
