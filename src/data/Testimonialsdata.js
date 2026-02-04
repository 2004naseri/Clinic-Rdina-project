// src/data/testimonialsData.js
// ========================================
// TESTIMONIALS DATA - Client Reviews
// ========================================

export const testimonialsData = {
  // Page header (for standalone testimonials page)
  hero: {
    badge: "Client Stories",
    title: "What Our Clients Say",
    description:
      "Real experiences from real people. Discover how Radina Clinic has helped our clients feel confident and beautiful.",
  },

  // All testimonials
  testimonials: [
    {
      id: 1,
      name: "Sophie M.",
      location: "London",
      treatment: "Botox & Dermal Fillers",
      rating: 5,
      image: {
        src: "", // Add client photo if available
        alt: "Sophie M.",
        placeholder: "SM",
      },
      quote:
        "I had Botox and dermal fillers at Radina, and the results are incredible! My face looks naturally refreshed, and I feel much more confident. The team was professional and made me feel completely at ease.",
      date: "January 2025",
      featured: true,
      verified: true,
    },
    {
      id: 2,
      name: "Emma R.",
      location: "Manchester",
      treatment: "Lemon Bottle Fat Dissolving",
      rating: 5,
      image: {
        src: "",
        alt: "Emma R.",
        placeholder: "ER",
      },
      quote:
        "The Lemon Bottle Fat Dissolving treatment worked wonders for me. I struggled with stubborn fat for years, and after a few sessions, I finally see the results I've been hoping for. Highly recommend Radina!",
      date: "December 2024",
      featured: true,
      verified: true,
    },
    {
      id: 3,
      name: "Hannah L.",
      location: "Birmingham",
      treatment: "Vitamin Therapy & Skin Boosters",
      rating: 5,
      image: {
        src: "",
        alt: "Hannah L.",
        placeholder: "HL",
      },
      quote:
        "Vitamin Therapy and Skin Boosters at Radina have completely transformed my skin. It feels hydrated, radiant, and alive. The process was comfortable, and the staff explained everything clearly.",
      date: "January 2025",
      featured: true,
      verified: true,
    },
    {
      id: 4,
      name: "Laura P.",
      location: "Leeds",
      treatment: "Non-Surgical Rhinoplasty",
      rating: 5,
      image: {
        src: "",
        alt: "Laura P.",
        placeholder: "LP",
      },
      quote:
        "I was nervous about non-surgical rhinoplasty, but the results were amazing. The team made me feel safe and informed throughout, and my nose looks natural and balanced.",
      date: "November 2024",
      featured: true,
      verified: true,
    },
    {
      id: 5,
      name: "Olivia K.",
      location: "London",
      treatment: "Multiple Treatments",
      rating: 5,
      image: {
        src: "",
        alt: "Olivia K.",
        placeholder: "OK",
      },
      quote:
        "The staff at Radina are professional, friendly, and extremely knowledgeable. Every visit is a pleasant experience, and I always leave feeling confident and happy with my results.",
      date: "December 2024",
      featured: false,
      verified: true,
    },
    {
      id: 6,
      name: "Sarah T.",
      location: "London",
      treatment: "Dermal Fillers",
      rating: 5,
      image: {
        src: "",
        alt: "Sarah T.",
        placeholder: "ST",
      },
      quote:
        "The dermal filler treatment gave me the subtle enhancement I was looking for. My cheeks look fuller and more youthful, but still completely natural. I couldn't be happier!",
      date: "January 2025",
      featured: false,
      verified: true,
    },
    {
      id: 7,
      name: "Jessica W.",
      location: "Leeds",
      treatment: "Skin Boosters",
      rating: 5,
      image: {
        src: "",
        alt: "Jessica W.",
        placeholder: "JW",
      },
      quote:
        "After just two sessions of skin boosters, my skin feels completely different - so soft, hydrated and glowing. I've had so many compliments!",
      date: "December 2024",
      featured: false,
      verified: true,
    },
    {
      id: 8,
      name: "Amy H.",
      location: "Manchester",
      treatment: "Botox",
      rating: 5,
      image: {
        src: "",
        alt: "Amy H.",
        placeholder: "AH",
      },
      quote:
        "I was worried Botox would look obvious, but the results are so natural. My forehead is smooth, I can still express myself, and I look like a refreshed version of me. Perfect!",
      date: "November 2024",
      featured: false,
      verified: true,
    },
  ],

  // Statistics
  stats: {
    totalReviews: 500,
    averageRating: 4.9,
    fiveStarPercentage: 98,
    recommendationRate: 99,
  },

  // Trust indicators
  trustIndicators: [
    "Natural-looking results that enhance confidence",
    "Professional, CPD-certified specialists",
    "Comfortable, safe, and welcoming environment",
    "Personalized treatments for every individual",
  ],

  // CTA
  cta: {
    title: "Ready to Start Your Journey?",
    description:
      "Join our happy clients and discover the Radina difference – where beauty, health, and confidence come together.",
    buttonText: "Book Your Consultation",
    buttonLink: "/contact",
  },
};

// ==================
// HELPER FUNCTIONS
// ==================

// Get featured testimonials
export const getFeaturedTestimonials = () => {
  return testimonialsData.testimonials.filter((t) => t.featured);
};

// Get testimonials by treatment
export const getTestimonialsByTreatment = (treatment) => {
  return testimonialsData.testimonials.filter((t) =>
    t.treatment.toLowerCase().includes(treatment.toLowerCase())
  );
};

// Get recent testimonials
export const getRecentTestimonials = (limit = 5) => {
  return testimonialsData.testimonials
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export default testimonialsData;
