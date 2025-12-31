// src/data/navbarData.js
// ========================================
// NAVBAR DATA STRUCTURE - Radina Clinic
// ========================================
// Centralized data for easy management and updates

/**
 * Brand/Logo Configuration
 */
export const brandConfig = {
  name: "Radina Clinic",
  tagline: "Beauty & Wellness",
  logo: {
    type: "logo.png", // 'text' | 'image' | 'icon'
    initial: "R",
    imagePath: null, // Path to logo image if type is 'image'
  },
  link: "/",
};

/**
 * Main Navigation Menu Items
 * Structure: Each item can be a simple link or have nested dropdown items
 */
export const navigationItems = [
  {
    id: "treatments",
    label: "Treatments",
    path: "/treatments",
    type: "link", // 'link' | 'dropdown' | 'megamenu'
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
    path: "#",
    type: "dropdown",
    description: "Learn more about us",
    dropdownItems: [
      {
        id: "about-clinic",
        label: "About Radina",
        path: "/about",
        description: "Our story and values",
        icon: "heart",
      },
      {
        id: "pricing",
        label: "Pricing",
        path: "/price-list",
        description: "Transparent pricing",
        icon: "tag",
      },
      {
        id: "blog",
        label: "Blog",
        path: "/blog",
        description: "Beauty tips & insights",
        icon: "book",
      },
      {
        id: "training",
        label: "Training",
        path: "/training",
        description: "Professional courses",
        icon: "graduation",
      },
    ],
  },
];

/**
 * Call-to-Action Configuration
 */
export const ctaConfig = {
  primary: {
    label: "Book Appointment",
    path: "/contact",
    style: "primary", // 'primary' | 'secondary' | 'outline'
    icon: "calendar",
    external: false,
  },
  secondary: {
    label: "Call Us",
    path: "tel:+93XXXXXXXXX",
    style: "outline",
    icon: "phone",
    external: true,
    showOnMobile: true,
  },
};

/**
 * Contact Information
 */
export const contactInfo = {
  phone: {
    display: "+93 XXX XXX XXX",
    link: "tel:+93XXXXXXXXX",
  },
  email: {
    display: "info@radinaclinic.com",
    link: "mailto:info@radinaclinic.com",
  },
  address: {
    street: "123 Beauty Avenue",
    city: "Kabul",
    country: "Afghanistan",
    fullAddress: "123 Beauty Avenue, Kabul, Afghanistan",
  },
  hours: {
    weekdays: "9:00 AM - 8:00 PM",
    saturday: "10:00 AM - 6:00 PM",
    sunday: "Closed",
  },
};

/**
 * Social Media Links
 */
export const socialLinks = [
  {
    id: "instagram",
    platform: "Instagram",
    url: "https://instagram.com/radinaclinic",
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
    url: "https://wa.me/93XXXXXXXXX",
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

/**
 * Navbar Behavior Configuration
 */
export const navbarConfig = {
  behavior: {
    hideOnScroll: true, // Hide navbar when scrolling down
    showOnScrollUp: true, // Show navbar when scrolling up
    transparentOnTop: true, // Transparent when at top of page
    blurWhenScrolled: true, // Add backdrop blur when scrolled
  },
  breakpoints: {
    mobile: 1024, // Show mobile menu below this width (px)
  },
  animation: {
    duration: 300, // Transition duration in ms
    easing: "ease-out",
  },
};

/**
 * Quick Actions (Optional - for mobile menu or quick access)
 */
export const quickActions = [
  {
    id: "consultation",
    label: "Free Consultation",
    path: "/consultation",
    icon: "chat",
    featured: true,
  },
  {
    id: "gift-card",
    label: "Gift Cards",
    path: "/gift-cards",
    icon: "gift",
    featured: false,
  },
  {
    id: "loyalty",
    label: "Loyalty Program",
    path: "/loyalty",
    icon: "star",
    featured: false,
  },
];

/**
 * SEO & Meta Information
 */
export const seoConfig = {
  defaultTitle: "Radina Clinic | Beauty & Wellness",
  titleTemplate: "%s | Radina Clinic",
  description:
    "Experience luxury beauty treatments at Radina Clinic. Expert aesthetics, skincare, and wellness services in Kabul, Afghanistan.",
  keywords: [
    "beauty clinic",
    "aesthetics",
    "skincare",
    "Kabul",
    "Afghanistan",
    "beauty treatments",
  ],
};

/**
 * Helper Functions
 */

// Get all navigation paths for routing
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

// Get navigation item by ID
export const getNavItemById = (id) => {
  return navigationItems.find((item) => item.id === id);
};

// Check if path is active (including dropdown items)
export const isPathActive = (currentPath, itemPath) => {
  if (itemPath === "#") return false;
  return currentPath === itemPath || currentPath.startsWith(itemPath + "/");
};

/**
 * Default Export - All navbar data
 */
// export default {
//   brand: brandConfig,
//   navigation: navigationItems,
//   cta: ctaConfig,
//   contact: contactInfo,
//   social: socialLinks,
//   config: navbarConfig,
//   quickActions: quickActions,
//   seo: seoConfig,
// };
