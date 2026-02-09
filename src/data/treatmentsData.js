// src/data/treatmentsData.js
// ========================================
// UPDATED TREATMENTS DATA - FULL LIST
// Includes: Botox, Rhinoplasty, Fillers, Skin Boosters, Mesotherapy, Lemon Bottle, Vitamin Therapy
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
  // TRUST BADGES
  // ==================
  trustBadges: [
    { label: "CPD Certified", icon: "award" },
    { label: "Safe & Approved", icon: "shield" },
    { label: "5000+ Clients", icon: "users" },
    { label: "98% Satisfaction", icon: "star" },
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
      image: {
        src: "/images/botox.jpg",
        alt: "Botox anti-wrinkle treatment",
        placeholder: "B",
      },
      price: "From £200",
      duration: "15-30 minutes",
      downtime: "None",
      resultsTime: "3-5 days",
      lastingTime: "3-6 months",
      featured: true,
      badge: "Most Popular",
      beforeAfterGallery: {
        title: "Real Botox Results",
        description: "See the natural, youthful results our clients achieve",
        images: [
          {
            before:
              "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=600&q=80",
            label: "Forehead lines - 2 weeks",
            area: "Forehead",
          },
          {
            before:
              "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
            label: "Crow's feet - 2 weeks",
            area: "Eye area",
          },
          {
            before:
              "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&q=80",
            label: "Full face - 4 weeks",
            area: "Face",
          },
        ],
        disclaimer:
          "Results may vary. Individual results depend on skin type, age, and lifestyle factors.",
      },
      howItWorks: {
        title: "How Does Botox Work?",
        description:
          "Botox works by temporarily relaxing the facial muscles responsible for dynamic wrinkles caused by repeated expressions such as frowning or smiling. By softening muscle activity, the skin appears smoother and more refreshed, while your natural facial expressions are preserved.",
      },
      treatmentAreas: [
        "Forehead lines",
        "Frown lines between the eyebrows",
        "Crow’s feet around the eyes",
        "Subtle eyebrow lift",
        "Lines around the mouth",
        "Gummy smile correction",
        "Excessive sweating (underarms, hands, and feet)",
      ],
      benefits: [
        "Reduces expression-related wrinkles",
        "Prevents deeper lines from forming",
        "Non-surgical facial rejuvenation",
        "Natural-looking results",
        "Quick treatment with no downtime",
        "Results visible within days",
      ],
      idealFor: [
        "Individuals with expression-related wrinkles",
        "Those wanting to prevent deeper lines",
        "Anyone seeking non-surgical rejuvenation",
        "People desiring subtle, natural results",
      ],
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
        src: "/images/nonSurgecal.jpg",
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
      beforeAfterGallery: {
        title: "Non-Surgical Nose Transformation",
        description: "Natural, balanced results without surgery",
        images: [
          {
            before:
              "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
            label: "Bridge smoothing",
            area: "Nose bridge",
          },
          {
            before:
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
            label: "Tip refinement",
            area: "Nose tip",
          },
          {
            before:
              "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
            label: "Profile enhancement",
            area: "Side profile",
          },
        ],
        disclaimer:
          "Results vary based on individual facial anatomy and desired outcome.",
      },
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
    },

    // ==========================================
    // 3. DERMAL FILLERS
    // ==========================================
    {
      id: "dermal-fillers",
      name: "Dermal Fillers",
      category: "contouring",
      shortDescription:
        "Restore volume, smooth wrinkles, and enhance facial contours for a youthful, natural look.",
      longDescription:
        "Dermal fillers are among the most effective and popular non-surgical aesthetic treatments worldwide. They can restore lost volume, smooth wrinkles, and redefine facial contours — all without surgery, anesthesia, or prolonged downtime.",
      image: {
        src: "/images/fillers.jpeg",
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
      beforeAfterGallery: {
        title: "Dermal Filler Transformations",
        description: "Natural volume and contour enhancement",
        images: [
          {
            before:
              "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
            label: "Lip enhancement",
            area: "Lips",
          },
          {
            before:
              "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&q=80",
            label: "Cheek augmentation",
            area: "Cheeks",
          },
          {
            before:
              "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
            label: "Nasolabial folds",
            area: "Smile lines",
          },
        ],
        disclaimer:
          "Results depend on treatment area, product used, and individual characteristics.",
      },
      howItWorks: {
        title: "How Do Dermal Fillers Work?",
        description:
          "As we age, hyaluronic acid and natural facial volume diminish, leading to lines, folds, and sagging. Dermal fillers act as biocompatible volumizers, replenishing lost structure and contouring the face without invasive surgery.",
      },
      treatmentAreas: [
        "Lips — to add volume, shape, and symmetry",
        "Cheeks — for contouring and volume restoration",
        "Nasolabial folds — to soften deep lines",
        "Chin and jawline — for definition and balance",
        "Under-eye (Tear troughs) — to reduce hollows",
        "Hands — to restore volume",
      ],
      benefits: [
        "Immediate and visible results",
        "Non-surgical with no downtime",
        "Safe, reversible, and adjustable",
        "Natural-looking enhancement",
        "Customized treatment",
        "Stimulates collagen production",
      ],
      idealFor: [
        "Those experiencing volume loss or deep facial lines",
        "Anyone desiring natural-looking enhancements",
        "People wanting fast, effective results",
        "Individuals preferring non-surgical alternatives",
      ],
      whatToExpect: {
        before: [
          "Consultation to assess areas",
          "Avoid alcohol and blood thinners for 24 hours",
          "Clean face, no makeup",
        ],
        during: [
          "Treatment takes 30-45 minutes",
          "Ultra-fine needles used for minimal discomfort",
          "Topical anesthetic may be applied",
        ],
        after: [
          "Mild swelling, redness, or bruising may occur",
          "Avoid vigorous exercise for 24 hours",
          "Full results visible in 7-14 days",
        ],
      },
      faqs: [
        {
          question: "When will I see results?",
          answer:
            "Initial results are visible right after treatment. Full results typically appear within 7–14 days. Results last 6–18 months or longer depending on filler type and area.",
        },
        {
          question: "Are dermal fillers safe?",
          answer:
            "Yes. When performed by experienced practitioners using UK-approved products, dermal fillers are highly safe. Minor side effects like redness or swelling are temporary.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Injections are performed using ultra-fine needles, minimizing discomfort. For added comfort, topical anesthetics may be applied.",
        },
      ],
    },

    // ==========================================
    // 4. SKIN BOOSTERS
    // ==========================================
    {
      id: "skin-boosters",
      name: "Skin Boosters",
      category: "skin-rejuvenation",
      shortDescription:
        "Deep hydration and skin revitalization using micro-injections for a radiant, youthful glow.",
      longDescription:
        "Skin Boosters are one of the most advanced non-surgical skin rejuvenation treatments, designed to deliver deep hydration, restore elasticity, and enhance the overall radiance of the skin. Using precise micro-injections, this treatment revitalizes the skin, leaving it smoother, healthier, and visibly younger.",
      image: {
        src: "/public/images/SkinBoosters.jpeg",
        alt: "Skin boosters treatment",
        placeholder: "S",
      },
      price: "From £150",
      duration: "30-45 minutes",
      downtime: "None",
      resultsTime: "Immediate to weeks",
      lastingTime: "6 months",
      featured: false,
      badge: "Deep Hydration",
      beforeAfterGallery: {
        title: "Skin Radiance Results",
        description: "Restoring hydration and natural glow",
        images: [
          {
            before:
              "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=600&q=80",
            label: "Skin Texture",
            area: "Face",
          },
          {
            before:
              "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1552693673-1bf958298935?w=600&q=80", // Note: same image used as placeholder if unique unavailable
            label: "Neck Hydration",
            area: "Neck",
          },
        ],
        disclaimer: "Best results achieved after a course of treatments.",
      },
      howItWorks: {
        title: "How Do Skin Boosters Work?",
        description:
          "Skin Boosters consist of micro-injections containing hyaluronic acid and nourishing skin ingredients. They penetrate the deeper layers of the skin to deliver intensive hydration, reduce fine lines, and stimulate natural collagen and elastin production.",
      },
      treatmentAreas: [
        "Full face — for overall rejuvenation and radiance",
        "Neck and décolleté — to restore softness",
        "Hands — to improve texture and reduce dryness",
        "Periorbital area — to reduce fine lines around eyes",
      ],
      benefits: [
        "Deep hydration and skin revitalization",
        "Reduction of fine lines and dry skin",
        "Improved natural radiance and softness",
        "Stimulates natural collagen production",
        "Non-surgical and minimally invasive",
        "Immediate and natural-looking results",
      ],
      idealFor: [
        "Those with dry, tired, or dull-looking skin",
        "Individuals wishing to reduce fine lines",
        "Anyone desiring smoother, firmer skin",
        "People preferring a safe, non-surgical approach",
      ],
      whatToExpect: {
        before: [
          "Avoid alcohol for 24 hours",
          "Remove makeup before arrival",
          "Consultation to determine treatment plan",
        ],
        during: [
          "Ultra-fine micro-needles used",
          "Minimal discomfort",
          "Topical anesthetic optional",
        ],
        after: [
          "Mild redness or small bumps may appear briefly",
          "Resume normal activities immediately",
          "Progressive improvement over weeks",
        ],
      },
      faqs: [
        {
          question: "When will I see results?",
          answer:
            "Initial results are visible immediately after treatment, with progressive improvements over several weeks. A typical course involves 3–5 sessions spaced 2–4 weeks apart.",
        },
        {
          question: "Are Skin Boosters safe?",
          answer:
            "Yes. When performed by trained specialists using approved medical-grade products, Skin Boosters are safe and low-risk. Temporary side effects may include mild redness or slight swelling.",
        },
        {
          question: "Is there any downtime?",
          answer:
            "Usually, there is no downtime, and normal daily activities can be resumed immediately.",
        },
      ],
    },

    // ==========================================
    // 5. MESOTHERAPY
    // ==========================================
    {
      id: "mesotherapy",
      name: "Mesotherapy",
      category: "skin-rejuvenation",
      shortDescription:
        "Nutrient-rich micro-injections to rejuvenate skin, reduce fat, and treat hair loss.",
      longDescription:
        "Mesotherapy is an advanced non-surgical aesthetic treatment designed to rejuvenate the skin and body through precise micro-injections of vitamins, hyaluronic acid, and active nutrients. This treatment helps to restore vitality, reduce localized fat, improve skin quality, and combat signs of aging.",
      image: {
        src: "/public/images/Mesotherapy.jpg",
        alt: "Mesotherapy treatment",
        placeholder: "M",
      },
      price: "From £150",
      duration: "30-45 minutes",
      downtime: "None",
      resultsTime: "After 1-2 sessions",
      lastingTime: "Several months",
      featured: false,
      badge: "Revitalizing",
      beforeAfterGallery: {
        title: "Mesotherapy Effects",
        description: "Targeted rejuvenation for face and body",
        images: [
          {
            before:
              "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&q=80",
            label: "Skin Brightening",
            area: "Face",
          },
          {
            before:
              "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
            label: "Hair Density",
            area: "Scalp",
          },
        ],
        disclaimer: "Multiple sessions recommended for optimal results.",
      },
      howItWorks: {
        title: "How Does Mesotherapy Work?",
        description:
          "Mesotherapy involves direct injections of specialized nutrient-rich solutions (vitamins, minerals, hyaluronic acid) into the mid-dermal or subcutaneous layers. This nourishes skin cells deeply, stimulates collagen, and can also target localized fat.",
      },
      treatmentAreas: [
        "Face — for overall rejuvenation",
        "Neck and décolleté — for smoother skin",
        "Hands — to reduce dryness",
        "Abdomen, thighs, and arms — for fat reduction",
        "Hair — to strengthen follicles",
      ],
      benefits: [
        "Rejuvenates skin and enhances radiance",
        "Deep hydration and nourishment",
        "Reduces localized fat and improves contour",
        "Stimulates natural collagen production",
        "Non-surgical and minimally invasive",
        "Natural, visible results",
      ],
      idealFor: [
        "Those seeking skin rejuvenation",
        "Individuals wanting to nourish skin tissues",
        "People wishing to reduce localized fat",
        "Anyone preferring a safe, non-surgical approach",
      ],
      whatToExpect: {
        before: [
          "Avoid blood thinners if possible",
          "Consultation to tailor nutrient cocktail",
        ],
        during: ["Ultra-fine micro-needles used", "Minimally uncomfortable"],
        after: [
          "Mild redness or bruising is possible",
          "Avoid sun exposure immediately after",
          "Follow specific post-care instructions",
        ],
      },
      faqs: [
        {
          question: "How many sessions are needed?",
          answer:
            "Typically 3–5 sessions, spaced 2–4 weeks apart, are recommended for optimal results.",
        },
        {
          question: "Is Mesotherapy safe?",
          answer:
            "Yes. When performed by trained professionals using approved medical-grade products, mesotherapy is safe and low-risk.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Injections are performed using ultra-fine micro-needles, making the treatment minimally uncomfortable. Topical anesthetic can be applied if needed.",
        },
      ],
    },

    // ==========================================
    // 6. LEMON BOTTLE FAT DISSOLVING
    // ==========================================
    {
      id: "lemon-bottle-fat-dissolving",
      name: "Lemon Bottle Fat Dissolving",
      category: "body-contouring",
      shortDescription:
        "Target stubborn fat deposits with this innovative, non-surgical fat dissolving treatment.",
      longDescription:
        "Lemon Bottle Fat Dissolving is an innovative, non-surgical method for targeted fat reduction. Using precise micro-injections of specialized solutions, this treatment helps eliminate stubborn fat deposits resistant to diet and exercise while enhancing the shape and contour of the body naturally.",
      image: {
        src: "/public/images/lemon.webp",
        alt: "Lemon Bottle Fat Dissolving",
        placeholder: "LB",
      },
      price: "From £150",
      duration: "20-30 minutes",
      downtime: "None",
      resultsTime: "2-3 weeks",
      lastingTime: "Permanent (with lifestyle)",
      featured: true,
      badge: "Trending",
      beforeAfterGallery: {
        title: "Body Contouring Results",
        description: "Reduction of stubborn fat pockets",
        images: [
          {
            before:
              "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
            label: "Abdominal contour",
            area: "Abdomen",
          },
          {
            before:
              "https://images.unsplash.com/photo-1598440947619-2c35fc9af908?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1598440947619-2c35fc9af908?w=600&q=80", // Placeholder
            label: "Double Chin Reduction",
            area: "Chin",
          },
        ],
        disclaimer: "Results vary. Best combined with a healthy lifestyle.",
      },
      howItWorks: {
        title: "How Does It Work?",
        description:
          "The solution involves injecting a specialized formula into areas of localized fat, triggering lipolysis (fat breakdown). The released fat is gradually eliminated through the body’s lymphatic system, while the formulation also helps tighten the skin.",
      },
      treatmentAreas: [
        "Abdomen and flanks",
        "Thighs and buttocks",
        "Arms",
        "Under the chin (double chin)",
      ],
      benefits: [
        "Non-surgical and minimally invasive",
        "Reduces fat resistant to diet and exercise",
        "Natural body contouring",
        "Enhances skin firmness",
        "Short treatment sessions",
        "Visible results in a short period",
      ],
      idealFor: [
        "Those with stubborn fat deposits",
        "People preferring non-surgical approaches",
        "Anyone wishing to contour body shape",
        "Individuals desiring natural, visible results",
      ],
      whatToExpect: {
        before: ["Drink plenty of water", "Avoid alcohol"],
        during: ["Micro-injections into fat layer", "Minimally uncomfortable"],
        after: [
          "Drink 2-3 liters of water daily to help flush fat",
          "Avoid heavy meals immediately after",
          "Avoid heat/saunas for 24 hours",
        ],
      },
      faqs: [
        {
          question: "When will I see results?",
          answer:
            "Initial results are typically visible after 2–3 weeks, with full results achieved after several sessions depending on the area and amount of fat.",
        },
        {
          question: "Is it painful?",
          answer:
            "The procedure uses ultra-fine needles, making it minimally uncomfortable. Topical anesthetic can be applied for added comfort if needed.",
        },
        {
          question: "Is it safe?",
          answer:
            "Yes. When performed by trained specialists using approved, high-quality solutions, this treatment is safe and low-risk. Temporary side effects may include mild redness or swelling.",
        },
      ],
    },

    // ==========================================
    // 7. VITAMIN THERAPY
    // ==========================================
    {
      id: "vitamin-therapy",
      name: "Vitamin Therapy",
      category: "skin-rejuvenation",
      shortDescription:
        "Direct delivery of essential vitamins and nutrients for revitalized, healthy skin.",
      longDescription:
        "Vitamin Therapy is a non-surgical, professional treatment designed to rejuvenate and nourish the skin. Using precise micro-injections, essential vitamins, antioxidants, and nutrients are delivered directly into the skin to restore cellular energy, radiance, and vitality.",
      image: {
        src: "/public/images/vitamine.webp",
        alt: "Vitamin Therapy",
        placeholder: "V",
      },
      price: "From £100",
      duration: "15-30 minutes",
      downtime: "None",
      resultsTime: "Immediate glow",
      lastingTime: "1-3 months",
      featured: false,
      badge: "Healthy Glow",
      beforeAfterGallery: {
        title: "Vitamin Infusion Results",
        description: "Restoring health and vitality to the skin",
        images: [
          {
            before:
              "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=600&q=80",
            after:
              "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=600&q=80", // Placeholder
            label: "Skin Brightness",
            area: "Face",
          },
        ],
        disclaimer: "Regular sessions maintain skin health best.",
      },
      howItWorks: {
        title: "How Does It Work?",
        description:
          "Essential vitamins, antioxidants, and nutrients are injected directly into the skin layers. This bypasses the digestive system (unlike oral supplements) to provide immediate nourishment to skin cells.",
      },
      treatmentAreas: [
        "Face — for overall rejuvenation",
        "Neck and décolleté",
        "Hands — to nourish and reduce dryness",
      ],
      benefits: [
        "Enhances skin brightness and natural glow",
        "Nourishes and revitalizes skin cells",
        "Reduces fine lines and signs of fatigue",
        "Non-surgical and minimally invasive",
        "Natural and visible results",
      ],
      idealFor: [
        "Individuals seeking skin rejuvenation",
        "Those with tired or dull skin",
        "Anyone wanting a science-based approach to skin health",
      ],
      whatToExpect: {
        before: ["Clean skin", "Consultation regarding vitamin needs"],
        during: ["Quick micro-injections", "Minimally painful"],
        after: ["Immediate glow", "No downtime", "Resume normal activities"],
      },
      faqs: [
        {
          question: "Is it safe?",
          answer:
            "Yes, when performed by CPD-trained specialists using approved nutrient solutions, the procedure is safe and low-risk.",
        },
        {
          question: "How is this different from supplements?",
          answer:
            "Injection therapy delivers nutrients directly to the skin cells, bypassing the digestive system for more potent and targeted results.",
        },
      ],
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
  },

  // ==================
  // WHY CHOOSE RADINA
  // ==================
  whyChooseUs: [
    "CPD-certified specialists",
    "Premium, approved products",
    "Natural-looking results",
    "Safe, professional environment",
    "Personalized consultations",
  ],

  // ==================
  // CONTACT INFO
  // ==================
  sidebarContact: {
    title: "Have Questions?",
    description: "Our team is here to help you understand your options.",
    phone: {
      display: "07795 976868",
      link: "tel:+447795976868",
    },
    whatsapp: {
      display: "WhatsApp Us",
      link: "https://wa.me/447882244808",
    },
  },
};

// Helper functions
export const getTreatmentsByCategory = (categoryId) => {
  if (categoryId === "all") return treatmentsData.treatments;
  return treatmentsData.treatments.filter((t) => t.category === categoryId);
};

export const getFeaturedTreatments = () => {
  return treatmentsData.treatments.filter((t) => t.featured);
};

export const getTreatmentById = (id) => {
  return treatmentsData.treatments.find((t) => t.id === id);
};

export const getRelatedTreatments = (treatmentId, limit = 3) => {
  const current = getTreatmentById(treatmentId);
  if (!current) return [];
  return treatmentsData.treatments
    .filter((t) => t.category === current.category && t.id !== treatmentId)
    .slice(0, limit);
};

export default treatmentsData;
