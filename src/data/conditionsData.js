// src/data/conditionsData.js
// ========================================
// CONDITIONS DATA - Easy to Edit!
// ========================================
// All skin conditions information in ONE place

export const conditionsData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Skin Conditions",
    title: "Conditions We Treat",
    description:
      "From acne to aging, we offer advanced treatments for a wide range of skin concerns. Discover personalized solutions for your unique needs.",
    image: {
      src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
      alt: "Skin conditions we treat",
      placeholder: {
        show: false,
        gradient: "from-secondary/20 via-primary/10 to-accent/20",
      },
    },
  },

  // ==================
  // ALL CONDITIONS
  // ==================
  conditions: [
    {
      id: "acne",
      name: "Acne & Breakouts",
      shortDescription:
        "Clear active breakouts and prevent future acne with medical-grade treatments.",
      longDescription:
        "Our comprehensive acne treatment program combines professional treatments, medical-grade products, and personalized skincare routines to clear existing breakouts and prevent future acne formation.",
      image: {
        src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        alt: "Acne treatment",
        placeholder: "A",
      },
      severity: "Mild to Severe",
      featured: true,
      relatedTreatments: [
        "Chemical Peels",
        "Microneedling",
        "Medical-Grade Facials",
        "Acne Treatment Program",
      ],
      symptoms: [
        "Pimples and blackheads",
        "Inflamed skin",
        "Scarring",
        "Oily skin",
      ],
    },
    {
      id: "wrinkles",
      name: "Fine Lines & Wrinkles",
      shortDescription:
        "Reduce signs of aging with advanced anti-aging treatments.",
      longDescription:
        "Combat fine lines and wrinkles with our range of proven anti-aging treatments including Botox, dermal fillers, laser resurfacing, and collagen-stimulating therapies.",
      image: {
        src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
        alt: "Anti-aging treatment",
        placeholder: "W",
      },
      severity: "Mild to Moderate",
      featured: true,
      relatedTreatments: [
        "Botox Injections",
        "Dermal Fillers",
        "Laser Resurfacing",
        "Microneedling",
      ],
      symptoms: [
        "Crow's feet",
        "Forehead lines",
        "Smile lines",
        "Loss of volume",
      ],
    },
    {
      id: "pigmentation",
      name: "Pigmentation & Dark Spots",
      shortDescription:
        "Even skin tone and fade discoloration for radiant skin.",
      longDescription:
        "Our pigmentation treatments target dark spots, melasma, sun damage, and uneven skin tone using advanced laser technology and medical-grade products.",
      image: {
        src: "https://images.unsplash.com/photo-1598885159329-9377168ac375?w=800&q=80",
        alt: "Pigmentation treatment",
        placeholder: "P",
      },
      severity: "Mild to Severe",
      featured: true,
      relatedTreatments: [
        "IPL Photofacial",
        "Chemical Peels",
        "Laser Resurfacing",
        "Medical-Grade Skincare",
      ],
      symptoms: ["Dark spots", "Melasma", "Sun damage", "Uneven skin tone"],
    },
    {
      id: "scarring",
      name: "Acne Scars & Scarring",
      shortDescription:
        "Smooth and improve the appearance of scars for clearer skin.",
      longDescription:
        "Advanced scar treatment options including microneedling, laser therapy, and dermal fillers help reduce the appearance of acne scars and improve skin texture.",
      image: {
        src: "https://images.unsplash.com/photo-1617897903655-d2c7685eea01?w=800&q=80",
        alt: "Scar treatment",
        placeholder: "S",
      },
      severity: "Mild to Severe",
      featured: false,
      relatedTreatments: [
        "Microneedling",
        "Laser Resurfacing",
        "Chemical Peels",
        "PRP Facial",
      ],
      symptoms: [
        "Pitted scars",
        "Raised scars",
        "Uneven texture",
        "Discoloration",
      ],
    },
    {
      id: "rosacea",
      name: "Rosacea & Redness",
      shortDescription:
        "Calm inflammation and reduce persistent facial redness.",
      longDescription:
        "Specialized treatments for rosacea target redness, visible blood vessels, and inflammation using gentle yet effective therapies tailored to sensitive skin.",
      image: {
        src: "https://images.unsplash.com/photo-1611686684990-87c8e435be05?w=800&q=80",
        alt: "Rosacea treatment",
        placeholder: "R",
      },
      severity: "Mild to Moderate",
      featured: false,
      relatedTreatments: [
        "IPL Photofacial",
        "Laser Therapy",
        "Medical-Grade Skincare",
        "Gentle Facials",
      ],
      symptoms: [
        "Facial redness",
        "Visible blood vessels",
        "Bumps and pimples",
        "Sensitive skin",
      ],
    },
    {
      id: "sun-damage",
      name: "Sun Damage & Photo-Aging",
      shortDescription:
        "Reverse sun damage and restore youthful, healthy skin.",
      longDescription:
        "Repair and reverse the effects of sun exposure with treatments that target pigmentation, texture issues, and premature aging caused by UV damage.",
      image: {
        src: "https://images.unsplash.com/photo-1580870069867-74c57ee60d19?w=800&q=80",
        alt: "Sun damage treatment",
        placeholder: "S",
      },
      severity: "Mild to Severe",
      featured: true,
      relatedTreatments: [
        "IPL Photofacial",
        "Chemical Peels",
        "Laser Resurfacing",
        "Medical-Grade Skincare",
      ],
      symptoms: ["Age spots", "Freckles", "Rough texture", "Uneven tone"],
    },
    {
      id: "large-pores",
      name: "Large Pores",
      shortDescription:
        "Minimize pore size for smoother, refined skin texture.",
      longDescription:
        "Professional treatments that cleanse, tighten, and minimize the appearance of enlarged pores for a smoother, more refined complexion.",
      image: {
        src: "/images/conditions/pores.jpg",
        alt: "Large pores treatment",
        placeholder: "L",
      },
      severity: "Mild to Moderate",
      featured: false,
      relatedTreatments: [
        "HydraFacial",
        "Microneedling",
        "Chemical Peels",
        "Laser Therapy",
      ],
      symptoms: ["Visible pores", "Oily skin", "Blackheads", "Uneven texture"],
    },
    {
      id: "dull-skin",
      name: "Dull & Tired Skin",
      shortDescription: "Restore radiance and glow to lackluster, tired skin.",
      longDescription:
        "Revitalize dull, tired skin with treatments that exfoliate, hydrate, and stimulate cell renewal for a fresh, glowing complexion.",
      image: {
        src: "/images/conditions/dull-skin.jpg",
        alt: "Dull skin treatment",
        placeholder: "D",
      },
      severity: "Mild to Moderate",
      featured: false,
      relatedTreatments: [
        "HydraFacial",
        "Chemical Peels",
        "Medical-Grade Facials",
        "IPL Photofacial",
      ],
      symptoms: [
        "Lack of radiance",
        "Uneven texture",
        "Dehydration",
        "Fatigue signs",
      ],
    },
    {
      id: "uneven-texture",
      name: "Uneven Skin Texture",
      shortDescription: "Smooth rough, bumpy skin for a refined complexion.",
      longDescription:
        "Address rough, bumpy, or uneven skin texture with resurfacing treatments that reveal smoother, more youthful-looking skin.",
      image: {
        src: "/images/conditions/texture.jpg",
        alt: "Skin texture treatment",
        placeholder: "U",
      },
      severity: "Mild to Moderate",
      featured: false,
      relatedTreatments: [
        "Microneedling",
        "Chemical Peels",
        "Laser Resurfacing",
        "HydraFacial",
      ],
      symptoms: ["Rough patches", "Bumpy texture", "Dry skin", "Keratosis"],
    },
    {
      id: "sagging-skin",
      name: "Sagging Skin & Loss of Volume",
      shortDescription: "Restore firmness and lift to aging, sagging skin.",
      longDescription:
        "Combat skin laxity and volume loss with advanced treatments that tighten, lift, and restore youthful contours to the face and body.",
      image: {
        src: "/images/conditions/sagging.jpg",
        alt: "Sagging skin treatment",
        placeholder: "S",
      },
      severity: "Moderate to Severe",
      featured: false,
      relatedTreatments: [
        "Dermal Fillers",
        "Laser Therapy",
        "Body Contouring",
        "PRP Facial",
      ],
      symptoms: ["Loss of firmness", "Jowls", "Neck laxity", "Volume loss"],
    },
    {
      id: "dark-circles",
      name: "Dark Circles & Under-Eye Issues",
      shortDescription: "Brighten and refresh tired-looking under-eye area.",
      longDescription:
        "Specialized treatments for dark circles, puffiness, and under-eye concerns that brighten and rejuvenate the delicate eye area.",
      image: {
        src: "/images/conditions/dark-circles.jpg",
        alt: "Dark circles treatment",
        placeholder: "D",
      },
      severity: "Mild to Moderate",
      featured: false,
      relatedTreatments: [
        "Dermal Fillers",
        "IPL Photofacial",
        "Medical-Grade Skincare",
        "PRP Facial",
      ],
      symptoms: ["Dark circles", "Puffiness", "Fine lines", "Hollowness"],
    },
    {
      id: "unwanted-hair",
      name: "Unwanted Hair",
      shortDescription:
        "Permanent hair reduction with advanced laser technology.",
      longDescription:
        "Safe, effective laser hair removal for all skin types and body areas. Achieve smooth, hair-free skin with long-lasting results.",
      image: {
        src: "/images/conditions/unwanted-hair.jpg",
        alt: "Hair removal",
        placeholder: "U",
      },
      severity: "All Levels",
      featured: false,
      relatedTreatments: ["Laser Hair Removal"],
      symptoms: [
        "Excess body hair",
        "Facial hair",
        "Ingrown hairs",
        "Irritation from shaving",
      ],
    },
  ],

  // ==================
  // CTA SECTION
  // ==================
  cta: {
    title: "Not Sure Which Condition Best Describes Your Concern?",
    description:
      "Our experts will assess your skin, identify your specific concerns, and recommend the most effective treatment plan for optimal results.",
    buttonText: "Schedule Consultation",
    buttonLink: "/contact",
    image: {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
      alt: "Free consultation",
    },
  },
};

// Helper function to get featured conditions
export const getFeaturedConditions = () => {
  return conditionsData.conditions.filter((condition) => condition.featured);
};

// Helper function to get condition by ID
export const getConditionById = (id) => {
  return conditionsData.conditions.find((condition) => condition.id === id);
};

export default conditionsData;
