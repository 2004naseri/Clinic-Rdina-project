// src/data/siteConfig.js
// ========================================
// SITE-WIDE CONFIG — Single source of truth
// Update here and it reflects everywhere:
// Footer, ContactPage, Navbar, WhatsApp button, etc.
// ========================================

export const siteConfig = {
  // ==================
  // CLINIC INFO
  // ==================
  clinic: {
    name: "Aesthetics by GS",
    tagline: "Confidence Looks Beautiful On You",
    location: "Leeds, United Kingdom",
    address: "Unit 1, Gemini Business Park, 9 Sheepscar Way, Leeds, LS7 3JB",
    email: "info@aestheticsbygs.com",
    website: "www.aestheticsbygs.com",
    domain: "aestheticsbygs.com",
  },

  // ==================
  // PHONE NUMBERS
  // ==================
  phones: {
    primary: {
      display: "",
      link: "",
      label: "Main",
    },
    alternative: {
      display: "",
      link: "",
      label: "Alternative",
    },
  },

  // ==================
  // WHATSAPP
  // ==================
  whatsapp: {
    number: "07770535370",
    display: "07770 535370",
    link: "https://wa.me/447770535370",
    messageLink:
      "https://wa.me/447770535370?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation",
    available: "Mon–Sat: 9AM–6PM",
  },

  // ==================
  // SOCIAL MEDIA
  // ==================
  social: [
    {
      id: "instagram",
      platform: "Instagram",
      handle: "@aesthetics_b_gs",
      url: "https://www.instagram.com/aesthetics_b_gs?stkn=cTcybDN1bWV3OWRs&utm_source=qr",
      icon: "instagram",
    },
    {
      id: "tiktok",
      platform: "TikTok",
      handle: "@aesthetics_gs",
      url: "https://www.tiktok.com/@aesthetics_gs?_r=1&_t=ZN-99hdomMbcPu",
      icon: "tiktok",
    },
    {
      id: "whatsapp",
      platform: "WhatsApp",
      handle: "07770 535370",
      url: "https://wa.me/447770535370",
      icon: "whatsapp",
    },
  ],

  // ==================
  // OPENING HOURS
  // ==================
  hours: [
    { day: "Mon — Fri", hours: "09:00 – 18:00", open: true },
    { day: "Saturday", hours: "10:00 – 16:00", open: true },
    { day: "Sunday", hours: "Closed", open: false },
  ],
};

// ─── Handy individual exports ─────────────────────────────────
export const { clinic, phones, whatsapp, social, hours } = siteConfig;

export default siteConfig;
