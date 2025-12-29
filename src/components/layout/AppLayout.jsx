// src/components/layout/AppLayout.jsx
// ========================================
// MAIN LAYOUT WRAPPER
// ========================================

import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";
import Footer from "../Footer";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content - Add id for skip-to-main link */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AppLayout;
