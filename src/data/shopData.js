// src/data/shopData.js
// ========================================
// SHOP DATA - Skincare Products
// ========================================
// All product information in ONE place

export const shopData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Skin Shop",
    title: "Medical-Grade Skincare",
    description:
      "Shop our curated collection of professional skincare products. Carefully selected by our experts for optimal results.",
    image: {
      src: "/images/shop.webp",
      alt: "Skincare products",
      placeholder: {
        show: false,
        gradient: "from-secondary/20 via-primary/10 to-accent/20",
      },
    },
  },

  // ==================
  // CATEGORIES
  // ==================
  categories: [
    { id: "all", name: "All Products", icon: "grid" },
    { id: "cleanser", name: "Cleansers", icon: "droplet" },
    { id: "serum", name: "Serums", icon: "sparkles" },
    { id: "moisturizer", name: "Moisturizers", icon: "sun" },
    { id: "treatment", name: "Treatments", icon: "zap" },
    { id: "sunscreen", name: "Sunscreen", icon: "shield" },
    { id: "eye-care", name: "Eye Care", icon: "eye" },
  ],

  // ==================
  // PRODUCTS
  // ==================
  products: [
    // CLEANSERS
    {
      id: "gentle-cleanser",
      name: "Gentle Hydrating Cleanser",
      category: "cleanser",
      brand: "Radina Pro",
      price: 38,
      size: "200ml",
      featured: true,
      badge: "Best Seller",
      image: {
        src: "https://images.unsplash.com/photo-1556229010-aa3055f711cf?w=800&q=80",
        alt: "Gentle Cleanser",
      },
      description:
        "Gentle, sulfate-free cleanser that removes impurities without stripping skin's natural moisture.",
      benefits: [
        "Removes makeup & impurities",
        "Maintains pH balance",
        "Suitable for all skin types",
        "Fragrance-free",
      ],
      keyIngredients: ["Hyaluronic Acid", "Glycerin", "Ceramides"],
      howToUse:
        "Apply to damp skin, massage gently, rinse with lukewarm water.",
    },
    {
      id: "exfoliating-cleanser",
      name: "Exfoliating Gel Cleanser",
      category: "cleanser",
      brand: "Radina Pro",
      price: 42,
      size: "150ml",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
        alt: "Exfoliating Cleanser",
      },
      description:
        "Deep-cleansing formula with gentle exfoliating beads for smooth, radiant skin.",
      benefits: [
        "Removes dead skin cells",
        "Unclogs pores",
        "Brightens complexion",
        "Smooth texture",
      ],
      keyIngredients: ["Salicylic Acid", "Jojoba Beads", "Tea Tree Oil"],
      howToUse:
        "Use 2-3 times weekly. Massage onto damp skin, rinse thoroughly.",
    },

    // SERUMS
    {
      id: "vitamin-c-serum",
      name: "Vitamin C Brightening Serum",
      category: "serum",
      brand: "Radina Pro",
      price: 68,
      size: "30ml",
      featured: true,
      badge: "Editor's Choice",
      image: {
        src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
        alt: "Vitamin C Serum",
      },
      description:
        "Powerful antioxidant serum that brightens, evens tone, and protects against environmental damage.",
      benefits: [
        "Brightens dark spots",
        "Evens skin tone",
        "Boosts collagen",
        "Antioxidant protection",
      ],
      keyIngredients: ["Vitamin C 15%", "Ferulic Acid", "Vitamin E"],
      howToUse:
        "Apply 3-4 drops to clean skin morning and evening before moisturizer.",
    },
    {
      id: "hyaluronic-serum",
      name: "Hyaluronic Acid Hydrating Serum",
      category: "serum",
      brand: "Radina Pro",
      price: 56,
      size: "30ml",
      featured: true,
      badge: "Hydration Hero",
      image: {
        src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
        alt: "Hyaluronic Serum",
      },
      description:
        "Multi-weight hyaluronic acid serum that deeply hydrates and plumps skin at multiple levels.",
      benefits: [
        "Deep hydration",
        "Plumps fine lines",
        "Improves elasticity",
        "Lightweight formula",
      ],
      keyIngredients: ["Hyaluronic Acid", "Peptides", "B5"],
      howToUse:
        "Apply to damp skin, follow with moisturizer to lock in hydration.",
    },
    {
      id: "retinol-serum",
      name: "Retinol Renewal Serum",
      category: "serum",
      brand: "Radina Pro",
      price: 72,
      size: "30ml",
      featured: true,
      badge: "Anti-Aging",
      image: {
        src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
        alt: "Retinol Serum",
      },
      description:
        "Advanced retinol formula that reduces fine lines, improves texture, and promotes cell turnover.",
      benefits: [
        "Reduces wrinkles",
        "Improves texture",
        "Fades dark spots",
        "Promotes renewal",
      ],
      keyIngredients: ["Retinol 0.5%", "Niacinamide", "Squalane"],
      howToUse:
        "Apply at night to clean skin. Start 2x weekly, increase gradually. Use SPF daily.",
    },

    // MOISTURIZERS
    {
      id: "daily-moisturizer",
      name: "Daily Hydrating Moisturizer",
      category: "moisturizer",
      brand: "Radina Pro",
      price: 48,
      size: "50ml",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
        alt: "Daily Moisturizer",
      },
      description:
        "Lightweight daily moisturizer that hydrates without heaviness. Perfect for all skin types.",
      benefits: [
        "24-hour hydration",
        "Non-greasy formula",
        "Strengthens barrier",
        "Suitable for all types",
      ],
      keyIngredients: ["Ceramides", "Niacinamide", "Peptides"],
      howToUse: "Apply to clean skin morning and evening.",
    },
    {
      id: "night-cream",
      name: "Intensive Night Cream",
      category: "moisturizer",
      brand: "Radina Pro",
      price: 62,
      size: "50ml",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=800&q=80",
        alt: "Night Cream",
      },
      description:
        "Rich, restorative night cream that repairs and renews skin while you sleep.",
      benefits: [
        "Deep overnight repair",
        "Reduces fine lines",
        "Boosts radiance",
        "Rich, luxurious",
      ],
      keyIngredients: ["Peptides", "Shea Butter", "Vitamin E"],
      howToUse: "Apply generously to clean skin before bed.",
    },

    // TREATMENTS
    {
      id: "glycolic-toner",
      name: "Glycolic Acid Exfoliating Toner",
      category: "treatment",
      brand: "Radina Pro",
      price: 44,
      size: "120ml",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&q=80",
        alt: "Glycolic Toner",
      },
      description:
        "Exfoliating toner that refines pores, smooths texture, and brightens complexion.",
      benefits: [
        "Exfoliates dead cells",
        "Refines pores",
        "Brightens skin",
        "Improves texture",
      ],
      keyIngredients: ["Glycolic Acid 7%", "Witch Hazel", "Aloe Vera"],
      howToUse: "Apply with cotton pad after cleansing, 3-4 times weekly.",
    },
    {
      id: "acne-spot-treatment",
      name: "Acne Spot Treatment",
      category: "treatment",
      brand: "Radina Pro",
      price: 32,
      size: "15ml",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1556228852-80c996b57f9e?w=800&q=80",
        alt: "Spot Treatment",
      },
      description:
        "Fast-acting spot treatment that targets blemishes and reduces inflammation.",
      benefits: [
        "Reduces blemishes",
        "Calms inflammation",
        "Fast-acting",
        "Non-drying",
      ],
      keyIngredients: ["Salicylic Acid", "Tea Tree Oil", "Zinc"],
      howToUse: "Apply directly to blemishes morning and evening.",
    },

    // SUNSCREEN
    {
      id: "mineral-sunscreen",
      name: "Mineral Sunscreen SPF 50",
      category: "sunscreen",
      brand: "Radina Pro",
      price: 42,
      size: "50ml",
      featured: true,
      badge: "Essential",
      image: {
        src: "https://images.unsplash.com/photo-1556228994-a4a8e218b9bd?w=800&q=80",
        alt: "Sunscreen",
      },
      description:
        "Lightweight mineral sunscreen with broad-spectrum protection. No white cast.",
      benefits: [
        "SPF 50 protection",
        "No white cast",
        "Reef-safe formula",
        "Lightweight feel",
      ],
      keyIngredients: ["Zinc Oxide", "Titanium Dioxide", "Vitamin E"],
      howToUse:
        "Apply generously as last step of morning routine. Reapply every 2 hours.",
    },

    // EYE CARE
    {
      id: "eye-cream",
      name: "Firming Eye Cream",
      category: "eye-care",
      brand: "Radina Pro",
      price: 58,
      size: "15ml",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
        alt: "Eye Cream",
      },
      description:
        "Rich eye cream that reduces dark circles, puffiness, and fine lines around delicate eye area.",
      benefits: [
        "Reduces dark circles",
        "Diminishes puffiness",
        "Smooths fine lines",
        "Brightens eye area",
      ],
      keyIngredients: ["Caffeine", "Peptides", "Vitamin K"],
      howToUse: "Gently pat around eye area morning and evening.",
    },
  ],

  // ==================
  // CTA SECTION
  // ==================
  cta: {
    title: "Need Help Choosing Products?",
    description:
      "Book a skincare consultation with our experts. We'll analyze your skin and recommend the perfect products for your needs.",
    buttonText: "Book Consultation",
    buttonLink: "/contact",
  },
};

// Helper functions
export const getProductsByCategory = (categoryId) => {
  if (categoryId === "all") {
    return shopData.products;
  }
  return shopData.products.filter((product) => product.category === categoryId);
};

export const getFeaturedProducts = () => {
  return shopData.products.filter((product) => product.featured);
};

export const getProductById = (id) => {
  return shopData.products.find((product) => product.id === id);
};

export default shopData;
