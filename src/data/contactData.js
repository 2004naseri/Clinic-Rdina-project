// src/data/contactData.js
// ========================================
// CONTACT DATA
// Social links & phone numbers live in siteConfig.js
// ========================================
import { social, phones, whatsapp, hours } from "./siteConfig";

export const contactData = {
  hero: {
    badge: "Get In Touch",
    title: "Book Your Consultation",
    description:
      "Ready to begin your journey? Contact us to schedule your complimentary consultation with Dr. Hussaini.",
    image: {
      src: "/public/images/web pic/about.jpeg",
      alt: "Contact Radina Clinic",
    },
  },

  contactInfo: {
    phone: {
      display: phones.primary.display,
      link: phones.primary.link,
      available: "Mon–Fri: 9AM–6PM, Sat: 10AM–4PM",
    },
    whatsapp: {
      display: whatsapp.display,
      link: whatsapp.messageLink,
      available: whatsapp.available,
    },
    additionalPhones: [
      {
        display: phones.alternative.display,
        link: phones.alternative.link,
        label: phones.alternative.label,
      },
    ],
    email: {
      display: "info@radinaclinic.com",
      link: "mailto:info@radinaclinic.com",
      response: "within 24 hours",
    },
    address: {
      fullAddress: "London & Leeds, United Kingdom",
      mapLink: "https://maps.google.com",
    },
    hours,
  },

  socialMedia: social,

  quickActions: [
    {
      id: "call",
      title: "Call Us",
      description: "Speak with our team directly",
      icon: "phone",
      action: phones.primary.link,
      buttonText: "Call Now",
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Chat with us instantly",
      icon: "whatsapp",
      action: whatsapp.messageLink,
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
        "Morning (9AM – 12PM)",
        "Afternoon (12PM – 4PM)",
        "Evening (4PM – 6PM)",
      ],
    },
    message: {
      label: "Message (Optional)",
      placeholder: "Tell us about your concerns…",
      type: "textarea",
      required: false,
      rows: 4,
    },
  },

  faqs: [
    {
      id: 1,
      question: "Do I need an appointment?",
      answer:
        "Yes, we operate by appointment only to ensure personalised attention. Walk-ins are welcome based on availability.",
    },
    {
      id: 2,
      question: "Is the consultation free?",
      answer:
        "Yes — your first consultation is completely complimentary. Dr. Hussaini will assess your skin and discuss your goals with no obligation.",
    },
    {
      id: 3,
      question: "Where are you located?",
      answer:
        "We serve clients in both London and Leeds. Specify your preferred location when booking and we'll arrange accordingly.",
    },
    {
      id: 4,
      question: "What should I bring?",
      answer:
        "Just yourself. If you have medical history or are on medications, please let us know at the time of booking.",
    },
    {
      id: 5,
      question: "Do you offer payment plans?",
      answer:
        "Yes — flexible payment options are available for treatment packages. Ask during your consultation.",
    },
  ],

  formSuccess: {
    title: "Thank You!",
    message:
      "We've received your request. Dr. Hussaini's team will contact you within 24 hours to confirm your appointment.",
    buttonText: "Back to Home",
  },
};

export default contactData;
