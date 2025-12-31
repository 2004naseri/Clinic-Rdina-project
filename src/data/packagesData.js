// src/data/packagesData.js
// ========================================
// PACKAGES DATA - Easy to Edit!
// ========================================
// All treatment packages in ONE place

export const packagesData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Special Offers",
    title: "Treatment Packages",
    description:
      "Save more with our curated treatment packages. Designed to address multiple concerns and deliver comprehensive results.",
    image: {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
      alt: "Treatment packages",
      placeholder: {
        show: false,
        gradient: "from-accent/20 via-primary/10 to-secondary/20",
      },
    },
  },

  // ==================
  // PACKAGES
  // ==================
  packages: [
    {
      id: "glow-starter",
      name: "Glow Starter",
      tier: "bronze",
      tagline: "Perfect for beginners",
      price: 299,
      originalPrice: 380,
      savings: 81,
      duration: "1 month",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?w=800&q=80",
        alt: "Glow Starter Package",
      },
      includes: [
        "1x HydraFacial",
        "1x Medical-Grade Facial",
        "Skincare consultation",
        "Home care routine guide",
      ],
      benefits: [
        "Deep cleansing",
        "Instant glow",
        "Hydrated skin",
        "No downtime",
      ],
      idealFor: ["First-time visitors", "Dull, tired skin", "Quick refresh"],
    },
    {
      id: "radiance-renewal",
      name: "Radiance Renewal",
      tier: "silver",
      tagline: "Most popular choice",
      price: 699,
      originalPrice: 920,
      savings: 221,
      duration: "2 months",
      featured: true,
      badge: "Best Value",
      image: {
        src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
        alt: "Radiance Renewal Package",
      },
      includes: [
        "2x HydraFacial",
        "1x Chemical Peel",
        "1x Microneedling",
        "1x Medical-Grade Facial",
        "Personalized skincare kit",
      ],
      benefits: [
        "Visible skin improvement",
        "Reduced fine lines",
        "Even skin tone",
        "Improved texture",
        "Long-lasting results",
      ],
      idealFor: [
        "Aging concerns",
        "Uneven texture",
        "Pigmentation issues",
        "Regular maintenance",
      ],
    },
    {
      id: "ultimate-transformation",
      name: "Ultimate Transformation",
      tier: "gold",
      tagline: "Complete rejuvenation",
      price: 1499,
      originalPrice: 2100,
      savings: 601,
      duration: "3 months",
      featured: false,
      badge: "Premium",
      image: {
        src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
        alt: "Ultimate Transformation Package",
      },
      includes: [
        "3x HydraFacial",
        "2x Microneedling",
        "1x Laser Resurfacing",
        "2x Chemical Peel",
        "1x IPL Photofacial",
        "Botox treatment (20 units)",
        "Premium skincare kit",
        "Monthly check-ins",
      ],
      benefits: [
        "Dramatic transformation",
        "Anti-aging results",
        "Smoother, firmer skin",
        "Reduced wrinkles",
        "Radiant complexion",
        "Comprehensive care",
      ],
      idealFor: [
        "Major skin concerns",
        "Anti-aging focus",
        "Complete makeover",
        "Long-term results",
      ],
    },
    {
      id: "acne-solution",
      name: "Acne Solution Package",
      tier: "specialized",
      tagline: "Clear skin, confidence restored",
      price: 599,
      originalPrice: 780,
      savings: 181,
      duration: "6 weeks",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        alt: "Acne Solution Package",
      },
      includes: [
        "2x Acne Treatment Facial",
        "2x Chemical Peel",
        "1x LED Light Therapy",
        "Medical-grade acne kit",
        "Weekly progress tracking",
      ],
      benefits: [
        "Reduces active breakouts",
        "Prevents future acne",
        "Fades scarring",
        "Balances oil production",
        "Clearer complexion",
      ],
      idealFor: [
        "Active acne",
        "Acne-prone skin",
        "Post-acne scarring",
        "Teenagers & adults",
      ],
    },
    {
      id: "bridal-beauty",
      name: "Bridal Beauty Package",
      tier: "specialized",
      tagline: "Radiant on your special day",
      price: 899,
      originalPrice: 1180,
      savings: 281,
      duration: "8 weeks",
      featured: false,
      badge: "Bridal",
      image: {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        alt: "Bridal Beauty Package",
      },
      includes: [
        "3x HydraFacial",
        "1x Microneedling",
        "1x Chemical Peel",
        "1x IPL Photofacial",
        "Luxury facial (pre-wedding)",
        "Bridal skincare kit",
        "Wedding day touch-up",
      ],
      benefits: [
        "Flawless skin",
        "Wedding-ready glow",
        "Even tone & texture",
        "Long-lasting results",
        "Camera-ready appearance",
      ],
      idealFor: [
        "Brides-to-be",
        "Special events",
        "Photo shoots",
        "2-3 months before wedding",
      ],
    },
    {
      id: "mens-refresh",
      name: "Men's Refresh Package",
      tier: "specialized",
      tagline: "Tailored for men's skin",
      price: 499,
      originalPrice: 650,
      savings: 151,
      duration: "1 month",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80",
        alt: "Men's Refresh Package",
      },
      includes: [
        "2x Men's Facial",
        "1x Chemical Peel",
        "Beard area treatment",
        "Men's skincare kit",
        "Grooming consultation",
      ],
      benefits: [
        "Reduces oiliness",
        "Clears pores",
        "Smooths rough skin",
        "Refreshed appearance",
        "Easy maintenance",
      ],
      idealFor: [
        "Men's skin concerns",
        "First-time treatments",
        "Professional look",
        "Low-maintenance routine",
      ],
    },
  ],

  // ==================
  // WHY CHOOSE PACKAGES
  // ==================
  benefits: {
    title: "Why Choose Our Packages?",
    features: [
      {
        icon: "savings",
        title: "Save Up to 30%",
        description:
          "Bundle treatments and save compared to individual pricing.",
      },
      {
        icon: "calendar",
        title: "Structured Plan",
        description: "Follow a proven treatment schedule for optimal results.",
      },
      {
        icon: "results",
        title: "Better Results",
        description: "Multiple treatments work together for enhanced outcomes.",
      },
      {
        icon: "support",
        title: "Ongoing Support",
        description:
          "Regular check-ins and adjustments to your treatment plan.",
      },
    ],
  },

  // ==================
  // CTA SECTION
  // ==================
  cta: {
    title: "Ready to Start Your Transformation?",
    description:
      "Book a free consultation to discuss which package is perfect for your skin goals. Our experts will create a customized plan just for you.",
    buttonText: "Book Free Consultation",
    buttonLink: "/contact",
    note: "All packages include complimentary skin analysis and personalized aftercare.",
  },
};

// Helper functions
export const getPackagesByTier = (tier) => {
  return packagesData.packages.filter((pkg) => pkg.tier === tier);
};

export const getFeaturedPackage = () => {
  return packagesData.packages.find((pkg) => pkg.featured);
};

export const getPackageById = (id) => {
  return packagesData.packages.find((pkg) => pkg.id === id);
};

export default packagesData;
