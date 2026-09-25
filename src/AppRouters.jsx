// src/AppRouters.jsx
// ========================================
// ROUTER CONFIGURATION - UPDATED FOR NESTED ROUTES
// ========================================

import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Suspense } from "react";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/Homepage/HomePage";
import TreatmentsPage from "./pages/treatmentsPage/TreatmentsPage";
import ConditionsPage from "./pages/ConditionsPage/ConditionsPage";
import PackagesPage from "./pages/PackagesPage/PackagesPage";
import MeetTheTeamPage from "./pages/MeetTheTeamPage/MeetTheTeamPag";
// import SkinShopPage from "./pages/SkinShopPage/SkinShopPage ";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TreatmentDetailPage from "./pages/treatmentsPage/TreatmentDetailPage";
import ConditionDetailPage from "./pages/ConditionsPage/ConditionDetailPage";
import SubTreatmentDetailPage from "./pages/treatmentsPage/SubTreatmentDetailPage";

// Loader component
const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
    </div>
  );
};

// In-app 404 — shown when the SPA loads but the path matches no route
const NotFound = () => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-white">
    <p className="font-body text-[10px] tracking-[0.35em] uppercase text-accent font-semibold mb-4">
      Error 404
    </p>
    <h1 className="font-display text-[clamp(40px,6vw,72px)] font-light text-secondary leading-none mb-4">
      Page not found
    </h1>
    <p className="font-body text-[13px] text-text-muted max-w-md mb-8">
      The page you are looking for does not exist or has been moved.
    </p>
    <Link
      to="/"
      className="inline-block px-8 py-3 bg-secondary text-white font-body text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-primary-dark transition-colors"
    >
      Back to Home
    </Link>
  </div>
);

function AppRouters() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/treatments",
          element: <TreatmentsPage />,
        },
        // MAIN TREATMENT OR STANDALONE SUB-TREATMENT
        // Handles: /treatments/botox OR /treatments/forehead-botox
        {
          path: "/treatments/:treatmentId",
          element: <TreatmentDetailPage />,
        },
        // NESTED SUB-TREATMENT (Preferred)
        // Handles: /treatments/botox/forehead-botox
        {
          path: "/treatments/:treatmentId/:subTreatmentId",
          element: <SubTreatmentDetailPage />,
        },
        {
          path: "/conditions",
          element: <ConditionsPage />,
        },
        {
          path: "/conditions/:conditionId",
          element: <ConditionDetailPage />,
        },
        {
          path: "/packages",
          element: <PackagesPage />,
        },
        {
          path: "/meet-the-team",
          element: <MeetTheTeamPage />,
        },
        // {
        //   path: "/skin-shop",
        //   element: <SkinShopPage />,
        // },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        // Catch-all — shown for any URL that doesn't match a real route
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default AppRouters;
