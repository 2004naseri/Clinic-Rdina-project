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
    name: "Radina Aesthetic Clinic",
    tagline: "Where Medicine Meets Beauty",
    location: "London & Leeds, United Kingdom",
    email: "info@radinaclinic.com",
    website: "www.radinaclinic.uk",
  },

  // ==================
  // PHONE NUMBERS
  // ==================
  phones: {
    primary: {
      display: "07795 976868",
      link: "tel:+447795976868",
      label: "Main",
    },
    alternative: {
      display: "07990 348048",
      link: "tel:+447990348048",
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
      handle: "@radina_clinic",
      url: "https://www.instagram.com/radina_clinic?igsh=eWh6eWNpeGRtcnE2&utm_source=qr",
      icon: "instagram",
    },
    {
      id: "facebook",
      platform: "Facebook",
      handle: "Radina Clinic",
      url: "https://www.facebook.com/share/188FpPMtDc/?mibextid=wwXIfr",
      icon: "facebook",
    },
    {
      id: "youtube",
      platform: "YouTube",
      handle: "Radina Clinic",
      url: "https://www.youtube.com/channel/UCesEM-54wJHU95avynbbF7A",
      icon: "youtube",
    },
    {
      id: "tiktok",
      platform: "TikTok",
      handle: "@radina.aesthetics",
      url: "https://www.tiktok.com/@radina.aesthetics?_r=1&_t=ZN-94KTGusHnnS",
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
