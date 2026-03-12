// src/data/packagesData.js
// ========================================
// PACKAGES DATA — Updated from real clinic flyers
// ========================================

export const packagesData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Special Offers",
    title: "Treatment Packages",
    description:
      "Curated multi-session programmes designed to deliver visible, lasting results. Each package combines complementary treatments for maximum impact.",
    image: {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
      alt: "Radina Aesthetic Clinic treatment packages",
    },
    urgency: "Availability is limited. Early booking is recommended.",
  },

  // ==================
  // PACKAGES
  // ==================
  packages: [
    // ─────────────────────────────────────────
    // PACKAGE 1 — Ageless Glow
    // ─────────────────────────────────────────
    {
      id: "ageless-glow",
      number: "01",
      name: "Ageless Glow Package",
      tagline: "Wrinkle reduction & radiant, hydrated skin.",
      description:
        "This package is ideal for clients seeking wrinkle reduction together with brighter and hydrated skin.",
      price: 560,
      originalPrice: 699,
      currency: "GBP",
      savings: 139,
      sessions: 3,
      duration: "Approx. 6 weeks",
      featured: false,
      badge: "Special Offer",
      idealFor: "Wrinkles, dehydration, dull skin and early ageing signs.",
      image: {
        src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80",
        alt: "Ageless Glow Package",
      },
      sessionPlan: [
        {
          number: 1,
          name: "Botox",
          timing: "Session 1",
          description:
            "Botox treatment to reduce wrinkles in the forehead, frown and crow's feet, creating a smoother foundation for subsequent skin treatments.",
        },
        {
          number: 2,
          name: "Brightening Microneedling",
          timing: "Approximately 2 weeks later",
          description:
            "Microneedling combined with a brightening serum to enhance radiance, refine texture and initiate skin brightening.",
        },
        {
          number: 3,
          name: "Microneedling with Salmon DNA",
          timing: "4 weeks later",
          description:
            "A regenerative hydration session to improve elasticity, softness and natural glow.",
        },
      ],
    },

    // ─────────────────────────────────────────
    // PACKAGE 2 — (share when ready)
    // ─────────────────────────────────────────
    // Add Package 2 here when you share the flyer

    // ─────────────────────────────────────────
    // PACKAGE 3 — Ultimate Skin Rebirth
    // ─────────────────────────────────────────
    {
      id: "ultimate-skin-rebirth",
      number: "03",
      name: "Ultimate Skin Rebirth Package",
      tagline:
        "Complete skin rejuvenation — wrinkles, pigmentation & hydration.",
      description:
        "A comprehensive package designed for clients seeking visible improvement in wrinkles, pigmentation, hydration and overall skin quality.",
      price: 699,
      originalPrice: 850,
      currency: "GBP",
      savings: 151,
      sessions: 4,
      duration: "Approx. 10 weeks",
      featured: true,
      badge: "Most Comprehensive",
      specialOffer: {
        label: "Special Ramadan to Eid Offer",
        active: true,
      },
      idealFor:
        "Wrinkles, pigmentation, dehydration, dull skin and clients seeking complete rejuvenation.",
      image: {
        src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
        alt: "Ultimate Skin Rebirth Package",
      },
      sessionPlan: [
        {
          number: 1,
          name: "Botox",
          timing: "Session 1",
          description:
            "Wrinkle reduction and preparation for advanced rejuvenation treatments.",
        },
        {
          number: 2,
          name: "Brightening Microneedling",
          timing: "Approximately 2 weeks later",
          description:
            "Improved tone, enhanced radiance and initiation of pigmentation correction.",
        },
        {
          number: 3,
          name: "Microneedling with Salmon DNA",
          timing: "4 weeks later",
          description:
            "Deep hydration, regeneration and improved skin softness.",
        },
        {
          number: 4,
          name: "Glow Microneedling — Finishing Session",
          timing: "4 weeks later",
          description:
            "Final texture refinement, glow enhancement and maintenance of results.",
        },
      ],
    },
  ],

  // ==================
  // WHY CHOOSE PACKAGES
  // ==================
  benefits: [
    {
      title: "Save on Every Package",
      description:
        "Bundle treatments and save versus individual session pricing.",
    },
    {
      title: "Structured Treatment Plan",
      description:
        "Each session is timed for maximum skin response and recovery.",
    },
    {
      title: "Compounding Results",
      description:
        "Multiple treatments work together — results improve with every session.",
    },
    {
      title: "Medical Oversight",
      description: "Every package is supervised by Dr. Shakiba Hussaini, MD.",
    },
  ],

  // ==================
  // CTA
  // ==================
  cta: {
    title: "Not Sure Which Package Is Right for You?",
    description:
      "Book a free consultation with Dr. Hussaini. She will assess your skin, discuss your goals, and recommend the most suitable package for your needs.",
    buttonText: "Book Free Consultation",
    buttonLink: "/contact",
    note: "All packages include complimentary skin analysis and personalised aftercare guidance.",
    urgency: "Availability is limited. Early booking is recommended.",
  },
};

export const getFeaturedPackage = () =>
  packagesData.packages.find((pkg) => pkg.featured);

export const getPackageById = (id) =>
  packagesData.packages.find((pkg) => pkg.id === id);

export default packagesData;
