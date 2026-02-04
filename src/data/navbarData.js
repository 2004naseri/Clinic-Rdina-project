// src/data/navbarData.js
// ========================================
// NAVBAR DATA - UPDATED WITH CORRECT INFO
// ========================================

export const brandConfig = {
  name: "Radina Clinic",
  tagline: "Beauty & Wellness",
  logo: {
    type: "logo.png",
    initial: "R",
    imagePath: "/images/logo.png",
  },
  link: "/",
};

export const navigationItems = [
  {
    id: "home",
    label: "Home",
    path: "/",
    type: "link",
    description: "",
  },
  {
    id: "treatments",
    label: "Treatments",
    path: "/treatments",
    type: "link",
    description: "Explore our treatments",
  },
  {
    id: "conditions",
    label: "Conditions",
    path: "/conditions",
    type: "link",
    description: "Conditions we treat",
  },
  {
    id: "packages",
    label: "Packages",
    path: "/packages",
    type: "link",
    description: "Special packages",
  },
  {
    id: "team",
    label: "Our Team",
    path: "/meet-the-team",
    type: "link",
    description: "Meet our experts",
  },
  {
    id: "shop",
    label: "Skin Shop",
    path: "/skin-shop",
    type: "link",
    description: "Premium skincare products",
  },
  {
    id: "about",
    label: "About",
    path: "/about",
    type: "link",
    description: "Learn more about us",
  },
];

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
    path: "tel:+447795976868",
    style: "outline",
    icon: "phone",
    external: true,
    showOnMobile: true,
  },
};

// ==================
// UPDATED CONTACT INFO
// ==================
export const contactInfo = {
  phone: {
    display: "07795 976868",
    link: "tel:+447795976868",
  },
  whatsapp: {
    display: "07882 244808",
    link: "https://wa.me/447882244808",
  },
  alternativePhone: {
    display: "07990 348048",
    link: "tel:+447990348048",
  },
  email: {
    display: "info@radinaclinic.com",
    link: "mailto:info@radinaclinic.com",
  },
  address: {
    city: "London & Leeds",
    country: "United Kingdom",
    fullAddress: "London & Leeds, United Kingdom",
  },
  hours: {
    weekdays: "Monday - Friday: 09:00 - 18:00",
    saturday: "Saturday: 10:00 - 16:00",
    sunday: "Sunday: Closed",
  },
};

// ==================
// UPDATED SOCIAL MEDIA LINKS
// ==================
export const socialLinks = [
  {
    id: "instagram",
    platform: "Instagram",
    url: "https://instagram.com/RadinaAesthetic",
    icon: "instagram",
    color: "#E4405F",
  },
  {
    id: "facebook",
    platform: "Facebook",
    url: "https://facebook.com/radinaclinic",
    icon: "facebook",
    color: "#1877F2",
  },
  {
    id: "whatsapp",
    platform: "WhatsApp",
    url: "https://wa.me/447882244808",
    icon: "whatsapp",
    color: "#25D366",
  },
  {
    id: "tiktok",
    platform: "TikTok",
    url: "https://tiktok.com/@radinaclinic",
    icon: "tiktok",
    color: "#000000",
  },
];

export const navbarConfig = {
  behavior: {
    hideOnScroll: true,
    showOnScrollUp: true,
    transparentOnTop: true,
    blurWhenScrolled: true,
  },
  breakpoints: {
    mobile: 1024,
  },
  animation: {
    duration: 300,
    easing: "ease-out",
  },
};

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
    path: "https://wa.me/447882244808",
    icon: "whatsapp",
    featured: true,
  },
];

export const seoConfig = {
  defaultTitle: "Radina Clinic | Beauty & Wellness",
  titleTemplate: "%s | Radina Clinic",
  description:
    "Experience luxury beauty treatments at Radina Clinic. Expert aesthetics, skincare, and wellness services in London & Leeds, UK.",
  keywords: [
    "beauty clinic",
    "aesthetics",
    "skincare",
    "London",
    "Leeds",
    "UK",
    "botox",
    "dermal fillers",
    "non-surgical rhinoplasty",
    "skin boosters",
    "mesotherapy",
  ],
};

// Helper Functions
export const getAllPaths = () => {
  const paths = [];
  navigationItems.forEach((item) => {
    if (item.type === "link" && item.path !== "#") {
      paths.push(item.path);
    }
    if (item.type === "dropdown" && item.dropdownItems) {
      item.dropdownItems.forEach((subItem) => {
        if (subItem.path !== "#") {
          paths.push(subItem.path);
        }
      });
    }
  });
  return paths;
};

export const getNavItemById = (id) => {
  return navigationItems.find((item) => item.id === id);
};

export const isPathActive = (currentPath, itemPath) => {
  if (itemPath === "#") return false;
  return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
};
