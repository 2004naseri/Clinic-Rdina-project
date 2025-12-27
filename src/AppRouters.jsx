// src/AppRouters.jsx
// ========================================
// ROUTER CONFIGURATION
// ========================================

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import AppLayout from "./components/layout/AppLayout";

// Placeholder component for pages
const PlaceholderPage = ({ title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-text-primary mb-4"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {title}
        </h1>
        <p
          className="text-sm sm:text-base leading-relaxed text-text-secondary"
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          This page is under construction
        </p>
      </div>
    </div>
  );
};

// Pages (placeholders for now)
const HomePage = () => <PlaceholderPage title="Welcome to Radina Clinic" />;
const TreatmentsPage = () => <PlaceholderPage title="Our Treatments" />;
const ConditionsPage = () => <PlaceholderPage title="Conditions We Treat" />;
const PackagesPage = () => <PlaceholderPage title="Our Packages" />;
const MeetTheTeamPage = () => <PlaceholderPage title="Meet Our Team" />;
const SkinShopPage = () => <PlaceholderPage title="Skin Shop" />;
const AboutPage = () => <PlaceholderPage title="About Us" />;
const PriceListPage = () => <PlaceholderPage title="Price List" />;
const BlogPage = () => <PlaceholderPage title="Our Blog" />;
const TrainingPage = () => <PlaceholderPage title="Training Programs" />;
const ContactPage = () => <PlaceholderPage title="Contact Us" />;

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
        {
          path: "/price-list",
          element: <PriceListPage />,
        },
        {
          path: "/blog",
          element: <BlogPage />,
        },
        {
          path: "/training",
          element: <TrainingPage />,
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
