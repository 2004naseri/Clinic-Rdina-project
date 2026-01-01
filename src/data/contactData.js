// src/data/contactData.js
// ========================================
// CONTACT DATA - Easy to Edit!
// ========================================
// All contact information in ONE place

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
  // CONTACT INFO
  // ==================
  contactInfo: {
    phone: {
      display: "+93 XXX XXX XXX",
      link: "tel:+93XXXXXXXXX",
      available: "Mon-Sat: 9AM-8PM",
    },
    email: {
      display: "info@radinaclinic.com",
      link: "mailto:info@radinaclinic.com",
      response: "Within 24 hours",
    },
    address: {
      street: "123 Beauty Avenue",
      city: "Kabul",
      country: "Afghanistan",
      full: "123 Beauty Avenue, Kabul, Afghanistan",
      mapLink: "https://maps.google.com", // Replace with real Google Maps link
    },
    hours: {
      weekdays: "Monday - Friday: 9:00 AM - 8:00 PM",
      saturday: "Saturday: 10:00 AM - 6:00 PM",
      sunday: "Sunday: Closed",
    },
  },

  // ==================
  // SOCIAL MEDIA
  // ==================
  socialMedia: [
    {
      id: "instagram",
      platform: "Instagram",
      url: "https://instagram.com/radinaclinic",
      handle: "@radinaclinic",
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
      url: "https://wa.me/93XXXXXXXXX",
      handle: "+93 XXX XXX XXX",
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
      placeholder: "+93 XXX XXX XXX",
      type: "tel",
      required: true,
    },
    service: {
      label: "Service Interested In",
      placeholder: "Select a service",
      type: "select",
      required: false,
      options: [
        "General Consultation",
        "Facial Treatments",
        "Laser Therapy",
        "Injectable Treatments",
        "Body Contouring",
        "Skincare Products",
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
        "Evening (4PM - 8PM)",
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
      action: "tel:+93XXXXXXXXX",
      buttonText: "Call Now",
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      icon: "whatsapp",
      action: "https://wa.me/93XXXXXXXXX",
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
      question: "What should I bring to my appointment?",
      answer:
        "Just bring yourself! If you have any medical history or are on medications, please inform us during booking.",
    },
    {
      id: 4,
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
