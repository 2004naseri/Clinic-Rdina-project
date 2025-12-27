// src/data/navbarData.js
// ========================================
// CENTRAL DATA SOURCE FOR NAVBAR
// ========================================
// This file contains all navbar content in one place
// Easy to maintain and update

export const navbarData = {
  // Logo Information
  logo: {
    text: "Radina Clinic",
    tagline: "Beauty & Aesthetics",
    link: "/",
  },

  // Main Navigation Menu
  mainMenu: [
    {
      id: 1,
      label: "Treatments",
      path: "/treatments",
      hasDropdown: false,
    },
    {
      id: 2,
      label: "Conditions",
      path: "/conditions",
      hasDropdown: false,
    },
    {
      id: 3,
      label: "Packages",
      path: "/packages",
      hasDropdown: false,
    },
    {
      id: 4,
      label: "Meet the Team",
      path: "/meet-the-team",
      hasDropdown: false,
    },
    {
      id: 5,
      label: "Skin Shop",
      path: "/skin-shop",
      hasDropdown: false,
    },
    {
      id: 6,
      label: "Why Face Perfect",
      path: "#", // No direct path, only dropdown
      hasDropdown: true,
      dropdownItems: [
        {
          id: 61,
          label: "About",
          path: "/about",
          description: "Learn about our clinic",
        },
        {
          id: 62,
          label: "Price List",
          path: "/price-list",
          description: "View our pricing",
        },
        {
          id: 63,
          label: "Blog",
          path: "/blog",
          description: "Beauty tips & news",
        },
        {
          id: 64,
          label: "Training",
          path: "/training",
          description: "Professional courses",
        },
      ],
    },
  ],

  // Call-to-Action Button
  ctaButton: {
    label: "Book Appointment",
    path: "/contact",
    variant: "primary", // can be: primary, secondary, outline
  },

  // Contact Information (optional - for future use)
  contactInfo: {
    phone: "+93 XXX XXX XXX",
    email: "info@radinaclinic.com",
    address: "Kabul, Afghanistan",
  },

  // Social Media Links (optional - for future use)
  socialMedia: [
    {
      id: 1,
      platform: "Instagram",
      url: "https://instagram.com/radinaclinic",
      icon: "instagram",
    },
    {
      id: 2,
      platform: "Facebook",
      url: "https://facebook.com/radinaclinic",
      icon: "facebook",
    },
    {
      id: 3,
      platform: "WhatsApp",
      url: "https://wa.me/93XXXXXXXXX",
      icon: "whatsapp",
    },
  ],
};

// Export individual parts for easier imports
export const { logo, mainMenu, ctaButton, contactInfo, socialMedia } =
  navbarData;
