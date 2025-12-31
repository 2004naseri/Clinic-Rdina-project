// src/data/treatmentsData.js
// ========================================
// TREATMENTS DATA - Easy to Edit!
// ========================================
// All treatment information in ONE place

export const treatmentsData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Our Expertise",
    title: "Advanced Aesthetic Treatments",
    description:
      "Discover our comprehensive range of medical-grade treatments designed to enhance your natural beauty and boost your confidence.",
    image: {
      src: "/images/treatment-hero.jpg", // 👈 Add your image
      alt: "Radina Clinic Treatments",
      placeholder: {
        show: false, // Set to false when you add image
        gradient: "from-primary/20 via-accent/10 to-secondary/20",
      },
    },
  },

  // ==================
  // CATEGORIES
  // ==================
  categories: [
    {
      id: "all",
      name: "All Treatments",
      icon: "grid",
    },
    {
      id: "facial",
      name: "Facial",
      icon: "face",
    },
    {
      id: "laser",
      name: "Laser",
      icon: "zap",
    },
    {
      id: "injectable",
      name: "Injectable",
      icon: "droplet",
    },
    {
      id: "body",
      name: "Body",
      icon: "user",
    },
    {
      id: "skincare",
      name: "Skincare",
      icon: "sparkles",
    },
  ],

  // ==================
  // ALL TREATMENTS
  // ==================
  treatments: [
    // FACIAL TREATMENTS
    {
      id: "hydrafacial",
      name: "HydraFacial",
      category: "facial",
      shortDescription:
        "Deep cleansing, exfoliation, and hydration treatment for radiant skin.",
      longDescription:
        "HydraFacial is a non-invasive treatment that combines cleansing, exfoliation, extraction, hydration and antioxidant protection. It removes dead skin cells and impurities while simultaneously delivering moisturizing serums into the skin.",
      image: {
        src: "/images/hydrafacial.jpeg", // 👈 Add your image
        alt: "HydraFacial treatment",
        placeholder: "H",
      },
      duration: "30-60 minutes",
      price: "From $150",
      featured: true,
      badge: "Popular",
      benefits: [
        "Deep cleansing and exfoliation",
        "Improved skin texture",
        "Reduced fine lines",
        "Hydrated, glowing skin",
        "No downtime",
      ],
    },
    {
      id: "microneedling",
      name: "Microneedling",
      category: "facial",
      shortDescription:
        "Stimulate collagen production for smoother, firmer skin.",
      longDescription:
        "Microneedling creates micro-injuries in the skin to trigger the body's natural healing process, resulting in increased collagen and elastin production for improved skin texture and appearance.",
      image: {
        src: "/images/microneedling.webp",
        alt: "Microneedling treatment",
        placeholder: "M",
      },
      duration: "45-60 minutes",
      price: "From $200",
      featured: true,
      benefits: [
        "Reduces fine lines and wrinkles",
        "Improves skin texture",
        "Minimizes pore size",
        "Fades scars and stretch marks",
        "Enhances product absorption",
      ],
    },
    {
      id: "chemical-peel",
      name: "Chemical Peel",
      category: "facial",
      shortDescription:
        "Exfoliate and rejuvenate skin for a fresh, youthful appearance.",
      longDescription:
        "Chemical peels use specialized solutions to remove dead skin cells and stimulate new cell growth, revealing fresher, younger-looking skin underneath.",
      image: {
        src: "/images/chemical-peel.jpg",
        alt: "Chemical peel treatment",
        placeholder: "C",
      },
      duration: "30-45 minutes",
      price: "From $100",
      benefits: [
        "Reduces acne and breakouts",
        "Evens skin tone",
        "Minimizes sun damage",
        "Smooths texture",
        "Brightens complexion",
      ],
    },

    // LASER TREATMENTS
    {
      id: "laser-hair-removal",
      name: "Laser Hair Removal",
      category: "laser",
      shortDescription:
        "Permanent hair reduction with advanced laser technology.",
      longDescription:
        "Our state-of-the-art laser technology targets hair follicles to provide long-lasting hair reduction with minimal discomfort. Safe for all skin types.",
      image: {
        src: "/images/laser-hair.jpeg",
        alt: "Laser hair removal",
        placeholder: "L",
      },
      duration: "15-90 minutes",
      price: "From $75",
      featured: true,
      badge: "Most Popular",
      benefits: [
        "Long-lasting results",
        "Smooth, hair-free skin",
        "Minimal discomfort",
        "Safe for all skin types",
        "No ingrown hairs",
      ],
    },
    {
      id: "laser-resurfacing",
      name: "Laser Skin Resurfacing",
      category: "laser",
      shortDescription: "Reduce wrinkles, scars, and improve skin texture.",
      longDescription:
        "Fractional laser technology removes damaged skin layers and stimulates collagen production for smoother, younger-looking skin.",
      image: {
        src: "/images/laser-resurfacing.jpeg",
        alt: "Laser skin resurfacing",
        placeholder: "L",
      },
      duration: "30-90 minutes",
      price: "From $300",
      featured: true,
      benefits: [
        "Reduces wrinkles and fine lines",
        "Improves skin texture",
        "Fades acne scars",
        "Tightens skin",
        "Evens skin tone",
      ],
    },
    {
      id: "ipl-photofacial",
      name: "IPL Photofacial",
      category: "laser",
      shortDescription: "Target pigmentation, redness, and sun damage.",
      longDescription:
        "Intense Pulsed Light (IPL) therapy treats pigmentation issues, redness, and sun damage by targeting specific wavelengths of light.",
      image: {
        src: "/images/ipl.avif",
        alt: "IPL photofacial",
        placeholder: "I",
      },
      duration: "30-45 minutes",
      price: "From $200",
      benefits: [
        "Reduces sun damage",
        "Evens skin tone",
        "Minimizes redness",
        "Fades age spots",
        "Improves texture",
      ],
    },

    // INJECTABLE TREATMENTS
    {
      id: "botox",
      name: "Botox® Injections",
      category: "injectable",
      shortDescription: "Smooth wrinkles and prevent new lines from forming.",
      longDescription:
        "Botox temporarily relaxes facial muscles that cause wrinkles, resulting in smoother, younger-looking skin. FDA-approved and performed by certified professionals.",
      image: {
        src: "/images/botox.jpg",
        alt: "Botox injections",
        placeholder: "B",
      },
      duration: "15-30 minutes",
      price: "From $250",
      featured: true,
      badge: "Quick Treatment",
      benefits: [
        "Reduces fine lines and wrinkles",
        "Prevents new wrinkles",
        "Natural-looking results",
        "No downtime",
        "Results last 3-6 months",
      ],
    },
    {
      id: "dermal-fillers",
      name: "Dermal Fillers",
      category: "injectable",
      shortDescription: "Restore volume and enhance facial contours naturally.",
      longDescription:
        "Hyaluronic acid-based fillers add volume, smooth lines, and enhance facial features for a natural, youthful appearance.",
      image: {
        src: "/images/fillers.jpeg",
        alt: "Dermal fillers",
        placeholder: "D",
      },
      duration: "30-60 minutes",
      price: "From $400",
      featured: true,
      benefits: [
        "Restores facial volume",
        "Smooths deep wrinkles",
        "Enhances lips and cheeks",
        "Immediate results",
        "Long-lasting effects",
      ],
    },
    {
      id: "prp-facial",
      name: "PRP Facial (Vampire Facial)",
      category: "injectable",
      shortDescription: "Use your own plasma to rejuvenate and heal skin.",
      longDescription:
        "Platelet-Rich Plasma (PRP) therapy uses your body's own healing factors to stimulate collagen production and rejuvenate skin naturally.",
      image: {
        src: "/images/prp.webp",
        alt: "PRP facial treatment",
        placeholder: "P",
      },
      duration: "60-90 minutes",
      price: "From $350",
      badge: "Natural",
      benefits: [
        "100% natural treatment",
        "Stimulates collagen",
        "Improves skin texture",
        "Reduces fine lines",
        "Long-lasting results",
      ],
    },

    // SKINCARE TREATMENTS
    {
      id: "medical-facial",
      name: "Medical-Grade Facial",
      category: "skincare",
      shortDescription: "Customized facial using clinical-strength products.",
      longDescription:
        "Professional facial treatment using medical-grade products tailored to your specific skin concerns and goals.",
      image: {
        src: "/images/medical-facial.webp",
        alt: "Medical facial",
        placeholder: "M",
      },
      duration: "60 minutes",
      price: "From $120",
      benefits: [
        "Customized to skin type",
        "Medical-grade products",
        "Deep cleansing",
        "Immediate glow",
        "Relaxing experience",
      ],
    },
    {
      id: "acne-treatment",
      name: "Acne Treatment",
      category: "skincare",
      shortDescription: "Clear breakouts and prevent future acne formation.",
      longDescription:
        "Comprehensive acne treatment program combining medical-grade products, professional treatments, and personalized skincare plans.",
      image: {
        src: "/images/acne.jpeg",
        alt: "Acne treatment",
        placeholder: "A",
      },
      duration: "45-60 minutes",
      price: "From $150",
      benefits: [
        "Clears active breakouts",
        "Prevents future acne",
        "Reduces scarring",
        "Balances oil production",
        "Improves skin health",
      ],
    },
  ],

  // ==================
  // CTA SECTION
  // ==================
  cta: {
    title: "Not Sure Which Treatment Is Right for You?",
    description:
      "Book a complimentary consultation with our experts. We'll assess your skin, discuss your goals, and create a personalized treatment plan.",
    buttonText: "Book Free Consultation",
    buttonLink: "/contact",
    features: [
      "Free skin analysis",
      "Personalized treatment plan",
      "Expert recommendations",
      "No obligation",
    ],
  },
};

// Helper function to get treatments by category
export const getTreatmentsByCategory = (categoryId) => {
  if (categoryId === "all") {
    return treatmentsData.treatments;
  }
  return treatmentsData.treatments.filter(
    (treatment) => treatment.category === categoryId
  );
};

// Helper function to get featured treatments
export const getFeaturedTreatments = () => {
  return treatmentsData.treatments.filter((treatment) => treatment.featured);
};

// Helper function to get treatment by ID
export const getTreatmentById = (id) => {
  return treatmentsData.treatments.find((treatment) => treatment.id === id);
};

export default treatmentsData;
