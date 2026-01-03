// src/AppRouters.jsx
// ========================================
// ROUTER CONFIGURATION
// ========================================

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/Homepage/HomePage";
import TreatmentsPage from "./pages/treatmentsPage/TreatmentsPage";
import ConditionsPage from "./pages/ConditionsPage/ConditionsPage";
import PackagesPage from "./pages/PackagesPage/PackagesPage";
import MeetTheTeamPage from "./pages/MeetTheTeamPage/MeetTheTeamPag";
import SkinShopPage from "./pages/SkinShopPage/SkinShopPage ";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";

// Loader component
const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="loader"></div>
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
        {
          path: "/conditions",
          element: <ConditionsPage />,
        },
        {
          path: "/packages",
          element: <PackagesPage />,
        },
        {
          path: "/meet-the-team",
          element: <MeetTheTeamPage />,
        },
        {
          path: "/skin-shop",
          element: <SkinShopPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        // {
        //   path: "/price-list",
        //   element: <PriceListPage />,
        // },
        // {
        //   path: "/blog",
        //   element: <BlogPage />,
        // },
        // {
        //   path: "/training",
        //   element: <TrainingPage />,
        // },
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
