// src/data/navbarData.js
// ========================================
// NAVBAR DATA
// ⚠️  Contact info & social links live in siteConfig.js
//     Never duplicate them here — import instead
// ========================================
import { clinic, phones, whatsapp, social, hours } from "./siteConfig";

// ==================
// BRAND
// ==================
export const brandConfig = {
  name: clinic.name,
  tagline: clinic.tagline,
  logo: {
    type: "image",
    imagePath: "/public/images/logo.png",
    initial: "R",
  },
  link: "/",
};

// ==================
// NAVIGATION ITEMS
// ==================
export const navigationItems = [
  { id: "home", label: "Home", path: "/", type: "link" },
  { id: "treatments", label: "Treatments", path: "/treatments", type: "link" },
  { id: "conditions", label: "Conditions", path: "/conditions", type: "link" },
  { id: "packages", label: "Packages", path: "/packages", type: "link" },
  { id: "team", label: "Our Team", path: "/meet-the-team", type: "link" },
  { id: "about", label: "About", path: "/about", type: "link" },
  { id: "contact", label: "Contact Us", path: "/contact", type: "link" },
];

// ==================
// CTA BUTTONS
// ==================
export const ctaConfig = {
  primary: {
    label: "Book Appointment",
    path: "/contact",
    style: "primary",
    icon: "calendar",
    external: false,
  },
  secondary: {
    label: "Call Us",
    path: phones.primary.link,
    style: "outline",
    icon: "phone",
    external: true,
    showOnMobile: true,
  },
};

// ==================
// QUICK ACTIONS (mobile menu etc.)
// ==================
export const quickActions = [
  {
    id: "consultation",
    label: "Free Consultation",
    path: "/contact",
    icon: "chat",
    featured: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp Us",
    path: whatsapp.messageLink,
    icon: "whatsapp",
    featured: true,
  },
];

// ==================
// RE-EXPORT from siteConfig
// So the navbar component only needs to import from ONE file
// ==================
export { phones, whatsapp, hours };
export const socialLinks = social; // alias — keeps existing navbar component working
export const contactInfo = {
  phone: { display: phones.primary.display, link: phones.primary.link },
  whatsapp: { display: whatsapp.display, link: whatsapp.messageLink },
  alternativePhone: {
    display: phones.alternative.display,
    link: phones.alternative.link,
  },
  email: { display: clinic.email, link: `mailto:${clinic.email}` },
  address: {
    city: "London & Leeds",
    country: "United Kingdom",
    fullAddress: clinic.location,
  },
  hours,
};

// ==================
// NAVBAR BEHAVIOUR
// ==================
export const navbarConfig = {
  behavior: {
    hideOnScroll: true,
    showOnScrollUp: true,
    transparentOnTop: true,
    blurWhenScrolled: true,
  },
  breakpoints: { mobile: 1024 },
  animation: { duration: 300, easing: "ease-out" },
};

// ==================
// SEO
// ==================
export const seoConfig = {
  defaultTitle: `${clinic.name} | ${clinic.tagline}`,
  titleTemplate: `%s | ${clinic.name}`,
  description:
    "Experience advanced aesthetic medicine at Radina Aesthetic Clinic. Medical-grade treatments in London & Leeds, UK.",
  keywords: [
    "aesthetic clinic",
    "botox",
    "dermal fillers",
    "skin boosters",
    "mesotherapy",
    "non-surgical rhinoplasty",
    "London",
    "Leeds",
    "UK",
  ],
};

// ==================
// HELPERS
// ==================
export const getNavItemById = (id) =>
  navigationItems.find((item) => item.id === id);
export const isPathActive = (currentPath, itemPath) => {
  if (itemPath === "#") return false;
  return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
};
export const getAllPaths = () =>
  navigationItems
    .filter((item) => item.type === "link" && item.path !== "#")
    .map((item) => item.path);
