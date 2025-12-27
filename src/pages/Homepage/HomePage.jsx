import React from "react";
import HomePageHeader from "./HomePageHeader";
import IntroSection from "./IntroSection";

import CorePillarsSummary from "./CorePillarsSummary";
import ThematicFocusAreas from "./ThematicFocusAreas";
import CredibilityAndPartners from "./CredibilityAndPartners";
// import CallToActionSection from "./CallToActionSection";

// import Footer from "./../../components/Footer";
import CoreValuesSection from "./../../components/CoreValuesSection";

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Background Slider */}
      <HomePageHeader />

      {/* 2. About OCOC - Introduction */}
      <IntroSection />

      {/* 3. Core Values - 4 Values */}
      <CoreValuesSection />

      {/* 4. Core Pillars - 4 Main Programs (EXACT TEXT) */}
      <CorePillarsSummary />

      {/* 5. 9 Thematic Focus Areas 2024-2028 */}
      <ThematicFocusAreas />

      {/* 6. Impact, Accountability & Partners */}
      <CredibilityAndPartners />

      {/* 7. Call-to-Action / Donate Section */}
      {/* <CallToActionSection /> */}

      {/* 8. Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
