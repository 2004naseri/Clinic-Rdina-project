// src/data/treatmentsData.js
// ========================================
// TREATMENTS DATA - UPDATED WITH FULL CONTENT
// ========================================

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
      src: "/images/treatment-hero.jpg",
      alt: "Radina Clinic Treatments",
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
    {
      id: "all",
      name: "All Treatments",
      icon: "grid",
    },
    {
      id: "injectable",
      name: "Injectable",
      icon: "droplet",
    },
    {
      id: "facial",
      name: "Facial",
      icon: "face",
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
  // ALL TREATMENTS - UPDATED WITH FULL CONTENT
  // ==================
  treatments: [
    // 1. BOTOX - ANTI-WRINKLE
    {
      id: "botox",
      name: "Botox® Injections (Anti-Wrinkle)",
      category: "injectable",
      shortDescription:
        "Smooth wrinkles and prevent new lines from forming with the world's most trusted anti-wrinkle treatment.",
      longDescription: `Botox is one of the most effective and widely trusted non-surgical facial rejuvenation treatments worldwide. It offers a fast, safe, and highly effective way to reduce wrinkles and fine lines, restoring a smoother, fresher, and more youthful appearance — all without surgery or downtime.

Botox works by temporarily relaxing the facial muscles responsible for dynamic wrinkles caused by repeated expressions such as frowning or smiling. By softening muscle activity, the skin appears smoother and more refreshed, while your natural facial expressions are preserved.`,
      image: {
        src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
        alt: "Botox injections",
        placeholder: "B",
      },
      duration: "15-30 minutes",
      price: "From £150",
      featured: true,
      badge: "Most Popular",

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
        "Reduces fine lines and wrinkles",
        "Prevents new wrinkles from forming",
        "Natural-looking results",
        "No downtime required",
        "Results last 3-6 months",
        "Safe and FDA-approved",
      ],

      // How it works
      howItWorks:
        "Botox works by temporarily relaxing the facial muscles responsible for dynamic wrinkles. The treatment is quick, virtually painless, and requires no downtime. Results appear within 3-5 days, with full effects visible after 10-14 days.",

      // Results timeline
      resultsTimeline: {
        initial: "3-5 days",
        full: "10-14 days",
        duration: "3-6 months",
      },

      // FAQ
      faqs: [
        {
          question: "Is Botox painful?",
          answer:
            "Injections are performed using ultra-fine needles, making the procedure minimally uncomfortable. Topical numbing cream can be applied if needed.",
        },
        {
          question: "Will my results look natural?",
          answer:
            "Absolutely. At Radina, our priority is natural, elegant results. You will look refreshed, not frozen or overdone.",
        },
        {
          question: "How long do results last?",
          answer:
            "The effects generally last 3-6 months. With regular treatments, muscle activity gradually decreases, helping results last longer over time.",
        },
      ],
    },

    // 2. NON-SURGICAL RHINOPLASTY
    {
      id: "non-surgical-rhinoplasty",
      name: "Non-Surgical Rhinoplasty",
      category: "injectable",
      shortDescription:
        "Reshape and refine your nose without surgery using precise dermal filler injections.",
      longDescription: `Non-surgical rhinoplasty is one of the most advanced and popular non-invasive methods for reshaping the nose. Using precise dermal filler injections, this treatment helps you achieve a more balanced, smoother, and harmonized nasal appearance in a short period — all without surgery, anesthesia, or downtime.

This procedure involves the careful injection of medical-grade dermal fillers (usually hyaluronic acid-based) to correct minor imperfections and asymmetries. It is ideal for individuals who wish to enhance the appearance of their nose without undergoing surgical intervention.`,
      image: {
        src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
        alt: "Non-surgical rhinoplasty",
        placeholder: "N",
      },
      duration: "20-30 minutes",
      price: "From £300",
      featured: true,
      badge: "Non-Surgical",

      treatmentAreas: [
        "Smoothing bumps or irregularities on the bridge",
        "Correcting depressions or minor asymmetries",
        "Lifting the tip of the nose",
        "Enhancing facial symmetry",
        "Improving post-surgical appearance (revision)",
      ],

      benefits: [
        "Non-surgical and minimally invasive",
        "Immediate and natural-looking results",
        "No downtime or recovery period",
        "Reversible if desired",
        "Safe when performed by trained professionals",
        "Results last 9-18 months",
      ],

      howItWorks:
        "Medical-grade hyaluronic acid fillers are carefully injected to reshape the nose. The procedure is performed with precision, ensuring natural and proportional results that complement your facial features.",

      resultsTimeline: {
        initial: "Immediate",
        full: "1-2 weeks",
        duration: "9-18 months",
      },

      faqs: [
        {
          question: "Is this a replacement for surgical rhinoplasty?",
          answer:
            "While non-surgical rhinoplasty cannot replace major surgical corrections, it offers a safe and effective non-invasive alternative for those seeking subtle, natural, and reversible results.",
        },
        {
          question: "Is the procedure painful?",
          answer:
            "Injections are performed using ultra-fine needles, resulting in minimal discomfort. Topical anesthetic can be applied for additional comfort.",
        },
      ],
    },

    // 3. DERMAL FILLERS
    {
      id: "dermal-fillers",
      name: "Dermal Fillers",
      category: "injectable",
      shortDescription:
        "Restore lost volume, smooth wrinkles, and enhance facial contours naturally.",
      longDescription: `Dermal fillers are among the most effective and popular non-surgical aesthetic treatments worldwide. They can restore lost volume, smooth wrinkles, and redefine facial contours — all without surgery, anesthesia, or prolonged downtime.

Dermal fillers are injectable substances, primarily composed of hyaluronic acid (HA) — a naturally occurring component of the skin that helps maintain hydration, elasticity, and volume. By strategically injecting fillers into targeted areas, we can reduce deep lines and wrinkles, restore lost volume, improve facial symmetry, and enhance overall youthful appearance.`,
      image: {
        src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
        alt: "Dermal fillers",
        placeholder: "D",
      },
      duration: "30-60 minutes",
      price: "From £200",
      featured: true,
      badge: "Popular",

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

      howItWorks:
        "Medical-grade hyaluronic acid fillers are injected into specific areas to restore volume and smooth lines. The treatment provides immediate, natural-looking results tailored to each individual.",

      resultsTimeline: {
        initial: "Immediate",
        full: "7-14 days",
        duration: "6-18 months",
      },

      faqs: [
        {
          question: "Are dermal fillers safe?",
          answer:
            "Yes. When performed by experienced, qualified practitioners using UK-approved or EMA-certified products, dermal fillers are highly safe. Minor, temporary side effects may include redness, mild swelling, or minor bruising.",
        },
        {
          question: "When will I see results?",
          answer:
            "Initial results are visible right after treatment. Full results typically appear within 7-14 days, lasting 6-18 months or longer depending on filler type and treatment area.",
        },
      ],
    },

    // 4. SKIN BOOSTERS
    {
      id: "skin-boosters",
      name: "Skin Boosters",
      category: "skincare",
      shortDescription:
        "Deep hydration and rejuvenation for radiant, healthy-looking skin.",
      longDescription: `Skin Boosters are one of the most advanced non-surgical skin rejuvenation treatments, designed to deliver deep hydration, restore elasticity, and enhance the overall radiance of the skin. Using precise micro-injections, this treatment revitalizes the skin, leaving it smoother, healthier, and visibly younger.

Skin Boosters consist of micro-injections containing hyaluronic acid and nourishing skin ingredients. They penetrate the deeper layers of the skin to deliver intensive hydration, reduce fine lines and surface dryness, improve skin texture and softness, and restore natural radiance and glow.`,
      image: {
        src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
        alt: "Skin boosters",
        placeholder: "S",
      },
      duration: "30-45 minutes",
      price: "From £180",
      featured: true,

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

      howItWorks:
        "As we age or due to environmental factors, skin can become dry, tired, and lackluster. Skin Boosters directly hydrate the mid-dermal layers and stimulate the natural production of collagen and elastin, resulting in fresher, firmer, and more elastic skin.",

      resultsTimeline: {
        initial: "Immediate",
        full: "2-4 weeks",
        duration: "4-6 months",
        sessions: "3-5 sessions, 2-4 weeks apart",
      },

      faqs: [
        {
          question: "Is there any downtime?",
          answer:
            "Usually, there is no downtime, and normal daily activities can be resumed immediately.",
        },
        {
          question: "Are Skin Boosters safe?",
          answer:
            "Yes. When performed by trained specialists using approved medical-grade products, Skin Boosters are safe and low-risk. Temporary side effects may include mild redness, slight swelling, or minor bruising.",
        },
      ],
    },

    // 5. MESOTHERAPY
    {
      id: "mesotherapy",
      name: "Mesotherapy",
      category: "skincare",
      shortDescription:
        "Nourish and rejuvenate your skin from within with vitamin-rich micro-injections.",
      longDescription: `Mesotherapy is an advanced non-surgical aesthetic treatment designed to rejuvenate the skin and body through precise micro-injections of vitamins, hyaluronic acid, and active nutrients. This treatment helps to restore vitality, reduce localized fat, improve skin quality, and combat signs of aging.

This procedure involves direct injections of specialized nutrient-rich solutions into the mid-dermal or subcutaneous layers. Depending on the treatment goal, these solutions may include vitamins and antioxidants, hyaluronic acid, minerals and amino acids, and lipolytic compounds for localized fat reduction.`,
      image: {
        src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
        alt: "Mesotherapy",
        placeholder: "M",
      },
      duration: "30-45 minutes",
      price: "From £150",
      featured: false,

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

      howItWorks:
        "By delivering essential nutrients directly to the mid-dermal layer, mesotherapy nourishes skin cells deeply, stimulates natural collagen and elastin production, improves texture, radiance, and skin softness, and reduces localized fat while improving body contour.",

      resultsTimeline: {
        initial: "1-2 sessions",
        full: "3-5 sessions, 2-4 weeks apart",
        duration: "Several months",
      },

      faqs: [
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
    },

    // 6. LEMON BOTTLE FAT DISSOLVING
    {
      id: "lemon-bottle",
      name: "Lemon Bottle Fat Dissolving",
      category: "body",
      shortDescription:
        "Target stubborn fat deposits with this innovative, non-surgical fat reduction treatment.",
      longDescription: `Lemon Bottle Fat Dissolving is an innovative, non-surgical method for targeted fat reduction. Using precise micro-injections of specialized solutions, this treatment helps eliminate stubborn fat deposits resistant to diet and exercise while enhancing the shape and contour of the body naturally.

This treatment involves injecting a specialized solution into areas of localized fat, which breaks down and dissolves fat cells, reduces the volume of targeted areas, improves body contour and proportion, and enhances skin firmness and quality.`,
      image: {
        src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
        alt: "Lemon Bottle fat dissolving",
        placeholder: "L",
      },
      duration: "30-45 minutes",
      price: "From £200",
      featured: false,
      badge: "Innovative",

      treatmentAreas: [
        "Abdomen and flanks — reduce stubborn fat",
        "Thighs and buttocks — contouring and volume reduction",
        "Arms — reduce localized fat and improve shape",
        "Under the chin (double chin) — contouring and facial definition",
      ],

      benefits: [
        "Non-surgical and minimally invasive",
        "Reduces fat resistant to diet and exercise",
        "Natural body contouring and proportion improvement",
        "Enhances skin firmness and quality",
        "Short treatment sessions with no downtime",
        "Visible results in a short period",
      ],

      howItWorks:
        "The solution triggers lipolysis (fat breakdown) in the treated area. The released fat is gradually eliminated through the body's lymphatic system. Additionally, the formulation helps tighten and improve skin quality in the treated area.",

      resultsTimeline: {
        initial: "2-3 weeks",
        full: "After several sessions",
        sessions: "Multiple sessions based on area and amount of fat",
      },

      faqs: [
        {
          question: "Is the procedure painful?",
          answer:
            "Injections are performed using ultra-fine micro-needles, making the treatment minimally uncomfortable. Topical anesthetic can be applied for added comfort if needed.",
        },
        {
          question: "Is it safe?",
          answer:
            "Yes. When performed by trained specialists using approved, high-quality solutions, this treatment is safe and low-risk. Temporary and minor side effects may include mild redness, slight swelling, or minor bruising.",
        },
      ],
    },

    // 7. VITAMIN THERAPY
    {
      id: "vitamin-therapy",
      name: "Vitamin Therapy",
      category: "skincare",
      shortDescription:
        "Revitalize your skin with essential vitamins and nutrients delivered directly where needed.",
      longDescription: `Vitamin Therapy is a non-surgical, professional treatment designed to rejuvenate and nourish the skin. Using precise micro-injections, essential vitamins, antioxidants, and nutrients are delivered directly into the skin to restore cellular energy, radiance, and vitality.

This treatment enhances skin brightness and natural glow, nourishes and revitalizes skin cells, reduces fine lines and signs of fatigue, and is non-surgical and minimally invasive with natural and visible results.`,
      image: {
        src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
        alt: "Vitamin therapy",
        placeholder: "V",
      },
      duration: "20-30 minutes",
      price: "From £120",
      featured: false,

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
        "Quick treatment with no downtime",
      ],

      howItWorks:
        "Essential vitamins, antioxidants, and nutrients are delivered directly into the skin layers, providing immediate nourishment and stimulating natural cellular regeneration.",

      resultsTimeline: {
        initial: "Immediate improvement",
        full: "Progressive results over weeks",
        sessions: "Series of treatments recommended",
      },

      faqs: [
        {
          question: "Is it painful?",
          answer:
            "Delivered using ultra-fine, minimally painful needles. Topical numbing can be applied if desired.",
        },
        {
          question: "Is Vitamin Therapy safe?",
          answer:
            "Yes. When performed by CPD-trained aesthetic specialists using approved, high-quality nutrient solutions, it is safe and low-risk.",
        },
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
