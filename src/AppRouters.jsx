// src/AppRouters.jsx
// ========================================
// ROUTER CONFIGURATION - UPDATED FOR NESTED ROUTES
// ========================================

import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
