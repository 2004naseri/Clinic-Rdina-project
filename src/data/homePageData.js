// src/data/homePageData.js
// ========================================
// HOMEPAGE DATA - UPDATED (No Duplicate Treatment Data)
// ========================================
// All text, images, and content for the homepage in ONE place
// NOTE: Featured treatments are now pulled from treatmentsData.js

export const homePageData = {
  // ==================
  // HERO SECTION
  // ==================
  hero: {
    badge: "Beauty & Wellness",
    title: "Enhance Your Natural Beauty",
    description:
      "Experience luxury aesthetic treatments at Radina Clinic. We combine medical expertise with artistry to enhance your natural radiance.",
    buttons: [
      {
        text: "Explore Treatments",
        link: "/treatments",
        variant: "primary",
      },
      {
        text: "Book Appointment",
        link: "/contact",
        variant: "outline",
      },
    ],
    // Hero Image (right side)
    image: {
      src: "/images/hero.jpg", // 👈 REPLACE THIS with your image path
      alt: "Luxury beauty treatment at Radina Clinic",
      // If no image, show this placeholder:
      placeholder: {
        show: false, // Set to false when you add real image
        gradient: "from-primary-light/30 via-secondary-light/20 to-accent/10",
      },
    },
    // Floating badge on hero image
    badge_on_image: {
      icon: "checkmark",
      title: "FDA Approved",
      subtitle: "Medical-Grade Treatments",
    },
    // Stats below hero text
    stats: [
      { number: "10+", label: "Years Experience" },
      { number: "5000+", label: "Happy Clients" },
      { number: "15+", label: "Treatments" },
    ],
  },

  // ==================
  // FEATURED TREATMENTS SECTION CONFIG
  // ==================
  // NOTE: Actual treatment data comes from treatmentsData.js
  // This section just controls the heading and layout
  featuredTreatments: {
    badge: "Our Services",
    title: "Our Signature Treatments",
    description:
      "Discover our most popular aesthetic solutions, tailored to your unique needs.",
    viewAllLink: {
      text: "View All Treatments",
      link: "/treatments",
    },
    // How many featured treatments to show on homepage
    displayLimit: 3,
  },

  // ==================
  // PHILOSOPHY SECTION
  // ==================
  philosophy: {
    badge: "Our Philosophy",
    title: {
      text: "Where Medical Science Meets",
      highlight: "Artistry",
    },
    description:
      "At Radina Clinic, we believe beauty is personal. Our approach combines cutting-edge medical technology with personalized care to enhance your natural features, never change them.",
    image: {
      src: "/images/doctor.jpg", // 👈 REPLACE with your image
      alt: "Radina Clinic interior",
      placeholder: {
        show: false, // Set to false when you add real image
        gradient: "from-secondary-light/30 to-primary-light/20",
      },
    },
    // Floating stats card
    statsCard: {
      number: "10+",
      label: "Years of Excellence",
      rating: {
        stars: 5,
        text: "5000+ Happy Clients",
      },
    },
    // Feature list
    features: [
      {
        title: "Expert Medical Team",
        description: "Board-certified professionals",
        icon: "checkmark",
      },
      {
        title: "Advanced Technology",
        description: "FDA-approved equipment",
        icon: "checkmark",
      },
      {
        title: "Personalized Plans",
        description: "Tailored to your goals",
        icon: "checkmark",
      },
      {
        title: "Luxurious Experience",
        description: "Comfort meets excellence",
        icon: "checkmark",
      },
    ],
    button: {
      text: "Learn Our Story",
      link: "/about",
      variant: "outline",
    },
  },

  // ==================
  // CTA SECTION
  // ==================
  cta: {
    title: "Ready to Begin Your Beauty Journey?",
    description:
      "Book your complimentary consultation today. Our experts will create a personalized treatment plan designed specifically for you.",
    buttons: [
      {
        text: "Book Appointment",
        link: "/contact",
        variant: "primary-white", // White button on gradient
      },
      {
        text: "Browse Services",
        link: "/treatments",
        variant: "outline-white", // Outline white button
      },
    ],
    // Trust indicators
    trustIndicators: [
      { label: "Certified By", value: "FDA Approved" },
      { label: "Years Active", value: "10+ Years" },
      { label: "Satisfaction", value: "98% Rating" },
    ],
  },
};

// Export default
export default homePageData;
