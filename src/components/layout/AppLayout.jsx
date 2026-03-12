// src/components/layout/AppLayout.jsx

import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";
import Footer from "../Footer";
import ScrollToTop from "../../utils/ScrollToTop";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AppLayout;
