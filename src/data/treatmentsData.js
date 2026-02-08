// src/data/treatmentsData.js
// ========================================
// TREATMENTS DATA - Complete with All Services
// ========================================

export const treatmentsData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Our Services",
    title: "Advanced Aesthetic Treatments",
    description:
      "Discover our range of professional, non-surgical aesthetic treatments designed to enhance your natural beauty safely and effectively.",
    image: {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
      alt: "Radina Clinic treatments",
      placeholder: {
        show: false,
        gradient: "from-primary/20 via-accent/10 to-secondary/20",
      },
    },
  },

  // ==================
  // CATEGORIES
  // ==================
  categories: [
    { id: "all", name: "All Treatments", icon: "grid" },
    { id: "anti-aging", name: "Anti-Aging", icon: "clock" },
    { id: "contouring", name: "Facial Contouring", icon: "face" },
    { id: "skin-rejuvenation", name: "Skin Rejuvenation", icon: "sparkles" },
    { id: "body-contouring", name: "Body Contouring", icon: "body" },
  ],

  // ==================
  // ALL TREATMENTS
  // ==================
  treatments: [
    // ==========================================
    // 1. BOTOX / ANTI-WRINKLE TREATMENT
    // ==========================================
    {
      id: "botox-anti-wrinkle",
      name: "Anti-Wrinkle Treatment (Botox)",
      category: "anti-aging",
      shortDescription:
        "Reduce wrinkles and fine lines for a smoother, more youthful appearance without surgery or downtime.",
      longDescription:
        "Botox is one of the most effective and widely trusted non-surgical facial rejuvenation treatments worldwide. It offers a fast, safe, and highly effective way to reduce wrinkles and fine lines, restoring a smoother, fresher, and more youthful appearance — all without surgery or downtime.",

      // Main image
      image: {
        src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
        alt: "Botox anti-wrinkle treatment",
        placeholder: "B",
      },

      // Pricing & Duration
      price: "From £200",
      duration: "15-30 minutes",
      downtime: "None",
      resultsTime: "3-5 days (full results in 10-14 days)",
      lastingTime: "3-6 months",

      // Featured badge
      featured: true,
      badge: "Most Popular",

      // Treatment Details
      howItWorks: {
        title: "How Does Botox Work?",
        description:
          "Botox works by temporarily relaxing the facial muscles responsible for dynamic wrinkles caused by repeated expressions such as frowning or smiling. By softening muscle activity, the skin appears smoother and more refreshed, while your natural facial expressions are preserved.",
      },

      // Treatment areas
      treatmentAreas: [
        "Forehead lines",
        "Frown lines between the eyebrows",
        "Crow's feet around the eyes",
        "Subtle eyebrow lift",
        "Lines around the mouth",
        "Gummy smile correction",
        "Excessive sweating (underarms, hands, and feet)",
      ],

      // Benefits
      benefits: [
        "Reduces expression-related wrinkles",
        "Prevents deeper lines from forming",
        "Non-surgical facial rejuvenation",
        "Natural-looking results",
        "Quick treatment with no downtime",
        "Results visible within days",
      ],

      // Who is it for
      idealFor: [
        "Individuals with expression-related wrinkles",
        "Those wanting to prevent deeper lines",
        "Anyone seeking non-surgical rejuvenation",
        "People desiring subtle, natural results",
      ],

      // What to expect
      whatToExpect: {
        before: [
          "Avoid blood-thinning medications or alcohol for 24 hours",
          "Arrive with clean skin (no makeup)",
          "Discuss your goals during consultation",
        ],
        during: [
          "Treatment takes 15-30 minutes",
          "Ultra-fine needles used for minimal discomfort",
          "Topical numbing cream available if needed",
        ],
        after: [
          "Return to normal activities immediately",
          "Avoid lying down for 4 hours",
          "No vigorous exercise for 24 hours",
          "Avoid massaging treated areas",
        ],
      },

      // FAQ
      faqs: [
        {
          question: "Is Botox painful?",
          answer:
            "Botox injections are performed using ultra-fine needles and cause minimal discomfort. If needed, a topical numbing cream can be applied to ensure maximum comfort.",
        },
        {
          question: "When will I see results?",
          answer:
            "Initial results usually appear within 3–5 days, with full results visible after 10–14 days.",
        },
        {
          question: "Will my results look natural?",
          answer:
            "Absolutely. At Radina, our priority is natural, elegant results. Botox is carefully tailored to your facial anatomy to enhance your features without creating a frozen or unnatural look.",
        },
        {
          question: "Is Botox safe?",
          answer:
            "Yes. Botox is one of the safest non-surgical aesthetic treatments when performed by trained professionals using approved products. At Radina, safety, quality, and client satisfaction are our top priorities.",
        },
      ],

      // Before & After (placeholder)
      beforeAfter: {
        enabled: true,
        images: [],
      },
    },

    // ==========================================
    // 2. NON-SURGICAL RHINOPLASTY
    // ==========================================
    {
      id: "non-surgical-rhinoplasty",
      name: "Non-Surgical Rhinoplasty",
      category: "contouring",
      shortDescription:
        "Reshape and refine your nose without surgery using precise dermal filler injections.",
      longDescription:
        "Non-surgical rhinoplasty is one of the most advanced and popular non-invasive methods for reshaping the nose. Using precise dermal filler injections, this treatment helps you achieve a more balanced, smoother, and harmonized nasal appearance in a short period — all without surgery, anesthesia, or downtime.",

      image: {
        src: "/images/surgecal.png",
        alt: "Non-surgical rhinoplasty",
        placeholder: "N",
      },

      price: "From £350",
      duration: "20-30 minutes",
      downtime: "None",
      resultsTime: "Immediate",
      lastingTime: "9-18 months",

      featured: true,
      badge: "Instant Results",

      howItWorks: {
        title: "How Does It Work?",
        description:
          "This procedure involves the careful injection of medical-grade dermal fillers (usually hyaluronic acid-based) to correct minor imperfections and asymmetries. It is ideal for individuals who wish to enhance the appearance of their nose without undergoing surgical intervention.",
      },

      treatmentAreas: [
        "Smoothing bumps or irregularities on the bridge",
        "Correcting depressions or minor asymmetries",
        "Lifting the tip of the nose",
        "Enhancing facial symmetry",
        "Improving appearance after previous surgery (revision)",
      ],

      benefits: [
        "No surgery or anesthesia required",
        "Immediate visible results",
        "Minimal discomfort and no downtime",
        "Natural and proportional enhancement",
        "Reversible if desired",
        "Quick 20-30 minute procedure",
      ],

      idealFor: [
        "Those dissatisfied with minor nasal imperfections",
        "People preferring non-surgical approaches",
        "Anyone desiring subtle, natural enhancements",
        "Individuals wanting fast results without downtime",
      ],

      whatToExpect: {
        before: [
          "Consultation to discuss desired outcome",
          "Avoid blood thinners for 24 hours",
          "Arrive with clean face",
        ],
        during: [
          "Procedure takes 20-30 minutes",
          "Precise injections using fine needles",
          "Topical anesthetic applied for comfort",
        ],
        after: [
          "Resume normal activities immediately",
          "Avoid touching or pressing nose for 24 hours",
          "Sleep with head elevated for first night",
          "No strenuous exercise for 24 hours",
        ],
      },

      faqs: [
        {
          question: "Is this a replacement for surgical rhinoplasty?",
          answer:
            "While non-surgical rhinoplasty cannot replace major surgical corrections, it offers a safe and effective non-invasive alternative for those seeking subtle, natural, and reversible results.",
        },
        {
          question: "Will the results look natural?",
          answer:
            "Absolutely. At Radina, all injections are performed with precision and careful attention to facial anatomy, ensuring a nose that is harmonious, proportional, and naturally enhanced, never artificial or exaggerated.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Injections are performed using ultra-fine needles, resulting in minimal discomfort. For additional comfort, topical anesthetic can be applied.",
        },
      ],

      beforeAfter: {
        enabled: true,
        images: [],
      },
    },

    // ==========================================
    // 3. DERMAL FILLERS
    // ==========================================
    {
      id: "dermal-fillers",
      name: "Dermal Fillers",
      category: "anti-aging",
      shortDescription:
        "Restore volume, smooth wrinkles, and enhance facial contours for a youthful, natural look.",
      longDescription:
        "Dermal fillers are among the most effective and popular non-surgical aesthetic treatments worldwide. They can restore lost volume, smooth wrinkles, and redefine facial contours — all without surgery, anesthesia, or prolonged downtime. Dermal fillers are widely used in top UK clinics and are recognized for their safety, efficacy, and natural-looking results.",

      image: {
        src: "/images/DermalFillers.webp",
        alt: "Dermal fillers treatment",
        placeholder: "D",
      },

      price: "From £250",
      duration: "30-45 minutes",
      downtime: "Minimal",
      resultsTime: "Immediate",
      lastingTime: "6-18 months",

      featured: true,
      badge: "Versatile",

      howItWorks: {
        title: "How Do Dermal Fillers Work?",
        description:
          "As we age, hyaluronic acid and natural facial volume diminish, leading to lines, folds, and sagging. Dermal fillers act as biocompatible volumizers, replenishing lost structure and contouring the face without invasive surgery. The treatment provides immediate, natural-looking results tailored to each individual.",
      },

      treatmentAreas: [
        "Lips — to add volume, shape, and symmetry",
        "Cheeks — for contouring and volume restoration",
        "Nasolabial folds — to soften deep lines around the mouth",
        "Chin and jawline — for definition and balance",
        "Under-eye (Tear troughs) — to reduce hollows and dark circles",
        "Hands — to restore lost volume and rejuvenate the skin",
      ],

      benefits: [
        "Immediate and visible results",
        "Non-surgical with no downtime",
        "Safe, reversible, and adjustable",
        "Natural-looking enhancement",
        "Customized treatment based on individual anatomy",
        "Stimulates natural collagen production",
      ],

      idealFor: [
        "Those experiencing volume loss or deep facial lines",
        "Anyone desiring natural-looking enhancements",
        "People wanting fast, effective results",
        "Individuals preferring non-surgical alternatives",
      ],

      whatToExpect: {
        before: [
          "Consultation to assess areas of concern",
          "Avoid alcohol and blood thinners for 24 hours",
          "Clean face, no makeup on treatment day",
        ],
        during: [
          "Treatment takes 30-45 minutes",
          "Ultra-fine needles for precise placement",
          "Minimal discomfort with optional numbing",
        ],
        after: [
          "Mild swelling or redness may occur",
          "Avoid strenuous exercise for 24 hours",
          "Sleep elevated for first night",
          "Full results visible within 7-14 days",
        ],
      },

      faqs: [
        {
          question: "When will I see results?",
          answer:
            "Initial results are visible right after treatment. Full results typically appear within 7–14 days. Results last 6–18 months or longer, depending on filler type, treatment area, and individual factors.",
        },
        {
          question: "Are dermal fillers safe?",
          answer:
            "Yes. When performed by experienced, qualified practitioners using UK-approved or EMA-certified products, dermal fillers are highly safe. Minor, temporary side effects may include redness, mild swelling, or minor bruising.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Injections are performed using ultra-fine needles, minimizing discomfort. For added comfort, topical anesthetics may be applied.",
        },
      ],

      beforeAfter: {
        enabled: true,
        images: [],
      },
    },

    // ==========================================
    // 4. SKIN BOOSTERS
    // ==========================================
    {
      id: "skin-boosters",
      name: "Skin Boosters",
      category: "skin-rejuvenation",
      shortDescription:
        "Deep hydration and skin rejuvenation for a radiant, youthful glow from within.",
      longDescription:
        "Skin Boosters are one of the most advanced non-surgical skin rejuvenation treatments, designed to deliver deep hydration, restore elasticity, and enhance the overall radiance of the skin. Using precise micro-injections, this treatment revitalizes the skin, leaving it smoother, healthier, and visibly younger.",

      image: {
        src: "/images/SkinBoosters.jpeg",
        alt: "Skin boosters treatment",
        placeholder: "S",
      },

      price: "From £180",
      duration: "30 minutes",
      downtime: "Minimal",
      resultsTime: "Immediate, improves over weeks",
      lastingTime: "4-6 months",

      featured: false,
      badge: null,

      howItWorks: {
        title: "How Do Skin Boosters Work?",
        description:
          "As we age or due to environmental factors, skin can become dry, tired, and lackluster. Skin Boosters directly hydrate the mid-dermal layers and stimulate the natural production of collagen and elastin, resulting in fresher, firmer, and more elastic skin.",
      },

      treatmentAreas: [
        "Full face — for overall rejuvenation and radiance",
        "Neck and décolleté — to restore softness and hydration",
        "Hands — to improve texture and reduce dryness",
        "Periorbital area (around the eyes) — to reduce fine lines",
      ],

      benefits: [
        "Deep hydration and skin revitalization",
        "Reduction of fine lines and dry skin",
        "Improved natural radiance and softness",
        "Non-surgical and minimally invasive",
        "Stimulates natural collagen and elastin production",
        "Immediate and natural-looking results",
      ],

      idealFor: [
        "Those with dry, tired, or dull-looking skin",
        "Anyone wishing to reduce fine lines and improve hydration",
        "People desiring smoother, firmer, and more radiant skin",
        "Individuals preferring a safe, non-surgical approach",
      ],

      whatToExpect: {
        before: [
          "Skin assessment and treatment planning",
          "Avoid retinol products 48 hours before",
          "Arrive with clean, makeup-free skin",
        ],
        during: [
          "Multiple micro-injections across treatment area",
          "Treatment takes approximately 30 minutes",
          "Minimal discomfort with fine needles",
        ],
        after: [
          "Mild redness and small bumps (resolve within 24 hours)",
          "Avoid makeup for 12 hours",
          "No strenuous exercise for 24 hours",
          "Typical course: 3–5 sessions spaced 2–4 weeks apart",
        ],
      },

      faqs: [
        {
          question: "When will I see results?",
          answer:
            "Initial results are visible immediately after treatment, with progressive improvements over several weeks. A typical course involves 3–5 sessions spaced 2–4 weeks apart for optimal outcomes.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Skin Boosters are delivered using ultra-fine micro-needles, ensuring minimal discomfort. Topical anesthetic can be applied for additional comfort.",
        },
        {
          question: "Are Skin Boosters safe?",
          answer:
            "Yes. When performed by trained specialists using approved medical-grade products, Skin Boosters are safe and low-risk. Temporary side effects may include mild redness, slight swelling, or minor bruising.",
        },
      ],

      beforeAfter: {
        enabled: true,
        images: [],
      },
    },

    // ==========================================
    // 5. MESOTHERAPY
    // ==========================================
    {
      id: "mesotherapy",
      name: "Mesotherapy",
      category: "skin-rejuvenation",
      shortDescription:
        "Nourish and rejuvenate your skin with targeted vitamin and nutrient injections.",
      longDescription:
        "Mesotherapy is an advanced non-surgical aesthetic treatment designed to rejuvenate the skin and body through precise micro-injections of vitamins, hyaluronic acid, and active nutrients. This treatment helps to restore vitality, reduce localized fat, improve skin quality, and combat signs of aging.",

      image: {
        src: "/images/Mesotherapy.jpg",
        alt: "Mesotherapy treatment",
        placeholder: "M",
      },

      price: "From £150",
      duration: "30-45 minutes",
      downtime: "Minimal",
      resultsTime: "After 1-2 sessions",
      lastingTime: "Several months",

      featured: false,
      badge: null,

      howItWorks: {
        title: "How Does Mesotherapy Work?",
        description:
          "By delivering essential nutrients directly to the mid-dermal layer, mesotherapy nourishes skin cells deeply, stimulates natural collagen and elastin production, improves texture, radiance, and skin softness, and reduces localized fat while improving body contour.",
      },

      treatmentAreas: [
        "Face — for overall rejuvenation and radiance",
        "Neck and décolleté — for smoother, softer skin",
        "Hands — to reduce dryness and surface lines",
        "Abdomen, thighs, and arms — for localized fat reduction",
        "Hair — to strengthen follicles and increase hair density",
      ],

      benefits: [
        "Rejuvenates skin and enhances radiance",
        "Deep hydration and nourishment for skin cells",
        "Reduces localized fat and improves body contour",
        "Stimulates natural collagen and elastin production",
        "Non-surgical and minimally invasive",
        "Natural, visible results",
      ],

      idealFor: [
        "Those seeking skin rejuvenation and improved radiance",
        "Anyone wanting to nourish and revitalize skin or body tissues",
        "People wishing to reduce localized fat deposits",
        "Individuals preferring a safe, non-surgical approach",
      ],

      whatToExpect: {
        before: [
          "Comprehensive consultation",
          "Avoid blood thinners for 24 hours",
          "Clean skin on treatment day",
        ],
        during: [
          "Multiple micro-injections of nutrient cocktail",
          "Treatment duration: 30-45 minutes",
          "Minimal discomfort with fine needles",
        ],
        after: [
          "Mild redness or small bumps (temporary)",
          "Avoid heat and sun exposure for 24 hours",
          "No swimming or sauna for 48 hours",
          "Typical course: 3–5 sessions, 2–4 weeks apart",
        ],
      },

      faqs: [
        {
          question: "When will I see results?",
          answer:
            "Initial results are noticeable after 1–2 sessions. Full results usually appear after 3–5 sessions, spaced 2–4 weeks apart. Results may last several months depending on treatment type and individual factors.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Injections are performed using ultra-fine micro-needles, making the treatment minimally uncomfortable. Topical anesthetic can be applied if needed for added comfort.",
        },
        {
          question: "Is Mesotherapy safe?",
          answer:
            "Yes. When performed by trained professionals using approved medical-grade products, mesotherapy is safe and low-risk. Temporary side effects may include mild redness, slight swelling, or minor bruising.",
        },
      ],

      beforeAfter: {
        enabled: true,
        images: [],
      },
    },

    // ==========================================
    // 6. LEMON BOTTLE FAT DISSOLVING
    // ==========================================
    {
      id: "lemon-bottle-fat-dissolving",
      name: "Lemon Bottle Fat Dissolving",
      category: "body-contouring",
      shortDescription:
        "Non-surgical fat reduction targeting stubborn areas resistant to diet and exercise.",
      longDescription:
        "Lemon Bottle Fat Dissolving is an innovative, non-surgical method for targeted fat reduction. Using precise micro-injections of specialized solutions, this treatment helps eliminate stubborn fat deposits resistant to diet and exercise while enhancing the shape and contour of the body naturally.",

      image: {
        src: "/images/lemon.webp",
        alt: "Fat dissolving treatment",
        placeholder: "L",
      },

      price: "From £200",
      duration: "30-45 minutes",
      downtime: "Minimal",
      resultsTime: "2-3 weeks",
      lastingTime: "Long-lasting (with healthy lifestyle)",

      featured: false,
      badge: "Body Contouring",

      howItWorks: {
        title: "How Does It Work?",
        description:
          "The solution in Lemon Bottle Fat Dissolving triggers lipolysis (fat breakdown) in the treated area. The released fat is gradually eliminated through the body's lymphatic system. Additionally, the formulation helps tighten and improve skin quality in the treated area.",
      },

      treatmentAreas: [
        "Abdomen and flanks — reduce stubborn fat",
        "Thighs and buttocks — contouring and volume reduction",
        "Arms — reduce localized fat and improve shape",
        "Under the chin (double chin) — facial definition",
      ],

      benefits: [
        "Non-surgical and minimally invasive",
        "Reduces fat resistant to diet and exercise",
        "Natural body contouring and proportion improvement",
        "Enhances skin firmness and quality",
        "Short treatment sessions with no downtime",
        "Visible results in a short period",
      ],

      idealFor: [
        "Those with stubborn fat deposits",
        "Anyone preferring a safe, non-surgical approach",
        "People wishing to contour and refine body shape",
        "Individuals desiring natural and visible results",
      ],

      whatToExpect: {
        before: [
          "Body assessment and treatment planning",
          "Maintain healthy diet and hydration",
          "Avoid alcohol 24 hours before",
        ],
        during: [
          "Targeted injections into fat deposits",
          "Treatment duration: 30-45 minutes",
          "Minimal discomfort with fine needles",
        ],
        after: [
          "Mild swelling and tenderness (2-3 days)",
          "Drink plenty of water to aid fat elimination",
          "Light exercise encouraged after 24 hours",
          "Multiple sessions may be needed for optimal results",
        ],
      },

      faqs: [
        {
          question: "When will I see results?",
          answer:
            "Initial results are typically visible after 2–3 weeks, with full results achieved after several sessions depending on the area and amount of fat.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Injections are performed using ultra-fine micro-needles, making the treatment minimally uncomfortable. Topical anesthetic can be applied for added comfort if needed.",
        },
        {
          question: "Is it safe?",
          answer:
            "Yes. When performed by trained specialists using approved, high-quality solutions, this treatment is safe and low-risk. Temporary side effects may include mild redness, slight swelling, or minor bruising.",
        },
      ],

      beforeAfter: {
        enabled: true,
        images: [],
      },
    },

    // ==========================================
    // 7. VITAMIN THERAPY
    // ==========================================
    {
      id: "vitamin-therapy",
      name: "Vitamin Therapy",
      category: "skin-rejuvenation",
      shortDescription:
        "Revitalize your skin with essential vitamins and nutrients for a healthy, radiant glow.",
      longDescription:
        "Vitamin Therapy is a non-surgical, professional treatment designed to rejuvenate and nourish the skin. Using precise micro-injections, essential vitamins, antioxidants, and nutrients are delivered directly into the skin to restore cellular energy, radiance, and vitality.",

      image: {
        src: "/images/vitamine.webp",
        alt: "Vitamin therapy treatment",
        placeholder: "V",
      },

      price: "From £120",
      duration: "20-30 minutes",
      downtime: "None",
      resultsTime: "Immediate, improves over time",
      lastingTime: "3-4 months",

      featured: false,
      badge: null,

      howItWorks: {
        title: "How Does Vitamin Therapy Work?",
        description:
          "Essential vitamins, minerals, and antioxidants are injected directly into the skin's mid-dermal layer, bypassing the digestive system for maximum absorption. This delivers intense nourishment, stimulates natural repair processes, and enhances overall skin health from within.",
      },

      treatmentAreas: [
        "Face — for overall rejuvenation and radiance",
        "Neck and décolleté — for smoother, softer skin",
        "Hands — to nourish and reduce dryness",
      ],

      benefits: [
        "Enhances skin brightness and natural glow",
        "Nourishes and revitalizes skin cells",
        "Reduces fine lines and signs of fatigue",
        "Non-surgical and minimally invasive",
        "Natural and visible results",
        "Boosts overall skin health",
      ],

      idealFor: [
        "Those with dull, tired-looking skin",
        "Anyone seeking enhanced radiance and vitality",
        "People wanting to nourish skin from within",
        "Individuals preferring safe, science-based treatments",
      ],

      whatToExpect: {
        before: [
          "Skin consultation to determine needs",
          "Clean, makeup-free skin on treatment day",
          "Avoid alcohol 24 hours before",
        ],
        during: [
          "Multiple micro-injections of vitamin solution",
          "Quick 20-30 minute treatment",
          "Minimal discomfort with fine needles",
        ],
        after: [
          "Mild redness (resolves within hours)",
          "Avoid makeup for 6 hours",
          "Use gentle skincare products",
          "Regular sessions recommended for best results",
        ],
      },

      faqs: [
        {
          question: "What vitamins are used?",
          answer:
            "The treatment typically includes a customized blend of Vitamin C, B vitamins, hyaluronic acid, amino acids, and antioxidants tailored to your skin's needs.",
        },
        {
          question: "Is it safe?",
          answer:
            "Yes. When performed by CPD-trained aesthetic specialists using approved nutrient solutions, the procedure is safe and low-risk.",
        },
        {
          question: "How often should I have treatments?",
          answer:
            "For optimal results, we recommend a course of 3-4 sessions initially, followed by maintenance treatments every 3-4 months.",
        },
      ],

      beforeAfter: {
        enabled: true,
        images: [],
      },
    },
  ],

  // ==================
  // CTA SECTION
  // ==================
  cta: {
    title: "Ready to Begin Your Transformation?",
    description:
      "Book a free consultation with our expert team. We'll assess your skin, discuss your goals, and create a personalized treatment plan designed specifically for you.",
    buttonText: "Book Free Consultation",
    buttonLink: "/contact",
    features: [
      "Complimentary consultation",
      "Personalized treatment plan",
      "Expert recommendations",
      "No obligation required",
    ],
  },
};

// ==================
// HELPER FUNCTIONS
// ==================

// Get treatments by category
export const getTreatmentsByCategory = (categoryId) => {
  if (categoryId === "all") {
    return treatmentsData.treatments;
  }
  return treatmentsData.treatments.filter((t) => t.category === categoryId);
};

// Get featured treatments
export const getFeaturedTreatments = () => {
  return treatmentsData.treatments.filter((t) => t.featured);
};

// Get treatment by ID
export const getTreatmentById = (id) => {
  return treatmentsData.treatments.find((t) => t.id === id);
};

// Get related treatments (same category, excluding current)
export const getRelatedTreatments = (treatmentId, limit = 3) => {
  const current = getTreatmentById(treatmentId);
  if (!current) return [];

  return treatmentsData.treatments
    .filter((t) => t.category === current.category && t.id !== treatmentId)
    .slice(0, limit);
};

export default treatmentsData;
