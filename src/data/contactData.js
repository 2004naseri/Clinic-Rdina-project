// src/data/contactData.js
// ========================================
// CONTACT DATA - UPDATED WITH REAL INFO
// ========================================

export const contactData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Get In Touch",
    title: "Book Your Consultation",
    description:
      "Ready to begin your beauty journey? Contact us today to schedule your complimentary consultation with our expert team.",
    image: {
      src: "/images/room.webp",
      alt: "Contact Radina Clinic",
      placeholder: {
        show: false,
        gradient: "from-primary/20 via-accent/10 to-secondary/20",
      },
    },
  },

  // ==================
  // CONTACT INFO - UPDATED
  // ==================
  contactInfo: {
    // Primary phone number
    phone: {
      display: "07795 976868",
      link: "tel:+447795976868",
      available: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
    },

    // WhatsApp number
    whatsapp: {
      display: "07882 244808",
      link: "https://wa.me/447882244808",
      available: "Mon-Sat: 9AM-6PM",
    },

    // Additional phone numbers
    additionalPhones: [
      {
        display: "07990 348048",
        link: "tel:+447990348048",
        label: "Alternative Contact",
      },
    ],

    email: {
      display: "info@radinaclinic.com",
      link: "mailto:info@radinaclinic.com",
      response: "Within 24 hours",
    },

    // Location - Single listing for London & Leeds
    address: {
      city: "London & Leeds",
      country: "United Kingdom",
      fullAddress: "London & Leeds, United Kingdom",
      mapLink: "https://maps.google.com",
    },

    // Opening hours
    hours: {
      weekdays: "Monday - Friday: 09:00 - 18:00",
      saturday: "Saturday: 10:00 - 16:00",
      sunday: "Sunday: Closed",
    },
  },

  // ==================
  // SOCIAL MEDIA - UPDATED
  // ==================
  socialMedia: [
    {
      id: "instagram",
      platform: "Instagram",
      url: "https://instagram.com/RadinaAesthetic",
      handle: "@RadinaAesthetic",
      icon: "instagram",
    },
    {
      id: "facebook",
      platform: "Facebook",
      url: "https://facebook.com/radinaclinic",
      handle: "RadinaClinic",
      icon: "facebook",
    },
    {
      id: "whatsapp",
      platform: "WhatsApp",
      url: "https://wa.me/447882244808",
      handle: "07882 244808",
      icon: "whatsapp",
    },
    {
      id: "tiktok",
      platform: "TikTok",
      url: "https://tiktok.com/@radinaclinic",
      handle: "@radinaclinic",
      icon: "tiktok",
    },
  ],

  // ==================
  // FORM FIELDS
  // ==================
  formFields: {
    name: {
      label: "Full Name",
      placeholder: "Enter your full name",
      type: "text",
      required: true,
    },
    email: {
      label: "Email Address",
      placeholder: "your.email@example.com",
      type: "email",
      required: true,
    },
    phone: {
      label: "Phone Number",
      placeholder: "07XXX XXXXXX",
      type: "tel",
      required: true,
    },
    location: {
      label: "Preferred Location",
      placeholder: "Select a location",
      type: "select",
      required: false,
      options: ["London", "Leeds", "Either location is fine"],
    },
    service: {
      label: "Service Interested In",
      placeholder: "Select a service",
      type: "select",
      required: false,
      options: [
        "General Consultation",
        "Botox / Anti-Wrinkle Treatment",
        "Non-Surgical Rhinoplasty",
        "Dermal Fillers",
        "Skin Boosters",
        "Mesotherapy",
        "Lemon Bottle Fat Dissolving",
        "Vitamin Therapy",
        "Other",
      ],
    },
    preferredDate: {
      label: "Preferred Date",
      placeholder: "Select a date",
      type: "date",
      required: false,
    },
    preferredTime: {
      label: "Preferred Time",
      placeholder: "Select time",
      type: "select",
      required: false,
      options: [
        "Morning (9AM - 12PM)",
        "Afternoon (12PM - 4PM)",
        "Evening (4PM - 6PM)",
      ],
    },
    message: {
      label: "Message (Optional)",
      placeholder: "Tell us about your concerns or questions...",
      type: "textarea",
      required: false,
      rows: 4,
    },
  },

  // ==================
  // QUICK ACTIONS
  // ==================
  quickActions: [
    {
      id: "call",
      title: "Call Us",
      description: "Speak with our team directly",
      icon: "phone",
      action: "tel:+447795976868",
      buttonText: "Call Now",
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      icon: "whatsapp",
      action:
        "https://wa.me/447882244808?text=Hello,%20I%20would%20like%20to%20book%20a%20consultation",
      buttonText: "Message Us",
    },
    {
      id: "email",
      title: "Email Us",
      description: "Send us your questions",
      icon: "email",
      action: "mailto:info@radinaclinic.com",
      buttonText: "Send Email",
    },
  ],

  // ==================
  // FAQ
  // ==================
  faqs: [
    {
      id: 1,
      question: "Do I need an appointment?",
      answer:
        "Yes, we operate by appointment only to ensure personalized attention for each client. Walk-ins are welcome based on availability.",
    },
    {
      id: 2,
      question: "Is the consultation free?",
      answer:
        "Yes! Your first consultation is completely complimentary. We'll assess your skin, discuss your goals, and recommend treatments.",
    },
    {
      id: 3,
      question: "Where are you located?",
      answer:
        "We serve clients in both London and Leeds. When booking, you can specify your preferred location and we'll arrange the appointment accordingly.",
    },
    {
      id: 4,
      question: "What should I bring to my appointment?",
      answer:
        "Just bring yourself! If you have any medical history or are on medications, please inform us during booking.",
    },
    {
      id: 5,
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment options for treatment packages. Ask about our payment plans during your consultation.",
    },
  ],

  // ==================
  // FORM SUCCESS
  // ==================
  formSuccess: {
    title: "Thank You!",
    message:
      "We've received your consultation request. Our team will contact you within 24 hours to confirm your appointment.",
    buttonText: "Back to Home",
  },
};

export default contactData;
