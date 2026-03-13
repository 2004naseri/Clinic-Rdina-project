// ============================================================
// conditionsData.js — Conditions data with FAQs, stats & related treatments
// ============================================================

export const conditionsData = {
  hero: {
    badge: "Skin Conditions",
    title: "Conditions We Treat",
    description:
      "From acne to aging, we offer advanced treatments for a wide range of skin concerns. Discover personalized solutions for your unique needs.",
    image: {
      src: "/images/micronedling/1.jpeg",
      alt: "Skin conditions we treat",
    },
  },

  conditions: [
    // ─────────────────────────────────────────────
    // 1. ACNE
    // ─────────────────────────────────────────────
    {
      id: "acne",
      name: "Acne & Breakouts",
      tagline: "Clear skin is closer than you think.",
      category: "Skin Clarity",
      shortDescription:
        "Clear active breakouts and prevent future acne with medical-grade treatments.",
      longDescription:
        "Our comprehensive acne treatment program combines professional treatments, medical-grade products, and personalized skincare routines to clear existing breakouts and prevent future acne formation. Whether you're dealing with mild occasional breakouts or severe cystic acne, our dermatologists create a tailored protocol that targets root causes — excess oil, bacteria, clogged pores, and inflammation.",
      image: {
        src: "/images/acne.jpeg",
        alt: "Acne treatment",
      },
      severity: "Mild to Severe",
      featured: true,
      stats: [
        { value: "94%", label: "Clearance Rate" },
        { value: "3–6", label: "Sessions Avg." },
        { value: "2 wks", label: "First Results" },
      ],
      symptoms: [
        { label: "Pimples & Blackheads", icon: "●" },
        { label: "Inflamed Skin", icon: "●" },
        { label: "Scarring", icon: "●" },
        { label: "Oily Skin", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "Chemical Peels",
          description: "Exfoliate deep layers to unclog pores and reduce oil.",
          duration: "45 min",
          sessions: "4–6",
        },
        {
          name: "Microneedling",
          description: "Stimulate healing and reduce active inflammation.",
          duration: "60 min",
          sessions: "3–4",
        },
        {
          name: "Medical-Grade Facials",
          description: "Deep cleanse and extract with clinical actives.",
          duration: "75 min",
          sessions: "Monthly",
        },
        {
          name: "Acne Treatment Program",
          description: "Full protocol combining topicals and in-clinic care.",
          duration: "Ongoing",
          sessions: "Custom",
        },
      ],
      faqs: [
        {
          q: "How long before I see results from acne treatments?",
          a: "Most clients notice improvement within 2–4 weeks. Full clearance typically takes 3–6 sessions depending on severity.",
        },
        {
          q: "Are the treatments painful?",
          a: "Most treatments are well-tolerated. Chemical peels may cause a mild tingling sensation; microneedling is performed with a numbing cream.",
        },
        {
          q: "Will my acne come back after treatment?",
          a: "With a consistent maintenance plan and medical-grade home care products, most clients maintain clear skin long-term.",
        },
        {
          q: "Can I wear makeup after treatment?",
          a: "We recommend avoiding heavy makeup for 24–48 hours post-treatment to allow the skin to heal properly.",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 2. WRINKLES
    // ─────────────────────────────────────────────
    {
      id: "wrinkles",
      name: "Fine Lines & Wrinkles",
      tagline: "Turn back the clock, naturally.",
      category: "Anti-Aging",
      shortDescription:
        "Reduce signs of aging with advanced anti-aging treatments.",
      longDescription:
        "Combat fine lines and wrinkles with our range of proven anti-aging treatments. From Botox to dermal fillers, laser resurfacing to collagen-stimulating therapies — we design a personalised anti-aging strategy that restores volume, smooths texture, and rejuvenates your overall appearance with natural-looking results.",
      image: {
        src: "/images/wrinkless.webp",
        alt: "Anti-aging treatment",
      },
      severity: "Mild to Moderate",
      featured: true,
      stats: [
        { value: "98%", label: "Satisfaction Rate" },
        { value: "1–2", label: "Sessions Avg." },
        { value: "72 hrs", label: "First Results" },
      ],
      symptoms: [
        { label: "Crow's Feet", icon: "●" },
        { label: "Forehead Lines", icon: "●" },
        { label: "Smile Lines", icon: "●" },
        { label: "Loss of Volume", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "Botox Injections",
          description:
            "Relax expression lines with precision neurotoxin therapy.",
          duration: "20 min",
          sessions: "1 (repeat 3–4 mo)",
        },
        {
          name: "Dermal Fillers",
          description: "Restore lost volume and sculpt facial contours.",
          duration: "30–45 min",
          sessions: "1–2",
        },
        {
          name: "Laser Resurfacing",
          description: "Stimulate collagen and resurface skin texture.",
          duration: "60 min",
          sessions: "3–5",
        },
        {
          name: "Microneedling",
          description: "Trigger natural collagen remodelling deep in the skin.",
          duration: "60 min",
          sessions: "4–6",
        },
      ],
      faqs: [
        {
          q: "How long do Botox results last?",
          a: "Botox results typically last 3–4 months. With regular treatments, many clients find results last longer over time.",
        },
        {
          q: "Will fillers look natural?",
          a: "Our approach is always subtle enhancement. We use advanced injection techniques to ensure completely natural-looking results.",
        },
        {
          q: "Is there downtime after these treatments?",
          a: "Botox and fillers have minimal downtime — most clients return to normal activities immediately. Laser treatments may involve 3–5 days of redness.",
        },
        {
          q: "At what age should I start anti-aging treatments?",
          a: "Preventative treatments are most effective in your late 20s to early 30s, but it's never too late to start. We'll recommend the right approach for your age.",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 3. PIGMENTATION
    // ─────────────────────────────────────────────
    {
      id: "pigmentation",
      name: "Pigmentation & Dark Spots",
      tagline: "Reveal your most radiant, even skin.",
      category: "Skin Tone",
      shortDescription:
        "Even skin tone and fade discoloration for radiant skin.",
      longDescription:
        "Our pigmentation treatments target dark spots, melasma, sun damage, and uneven skin tone using advanced laser technology and medical-grade products. We address pigmentation at its source — melanin overproduction — to deliver lasting, even results that make your skin glow.",
      image: {
        src: "/images/darkspot.webp",
        alt: "Pigmentation treatment",
      },
      severity: "Mild to Severe",
      featured: true,
      stats: [
        { value: "90%", label: "Tone Improvement" },
        { value: "4–8", label: "Sessions Avg." },
        { value: "3 wks", label: "Visible Fading" },
      ],
      symptoms: [
        { label: "Dark Spots", icon: "●" },
        { label: "Melasma", icon: "●" },
        { label: "Sun Damage", icon: "●" },
        { label: "Uneven Tone", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "IPL Photofacial",
          description: "Target melanin with intense pulsed light therapy.",
          duration: "30 min",
          sessions: "3–5",
        },
        {
          name: "Chemical Peels",
          description: "Exfoliate pigmented surface cells for a brighter tone.",
          duration: "45 min",
          sessions: "4–6",
        },
        {
          name: "Laser Resurfacing",
          description: "Precision laser targets stubborn deep pigmentation.",
          duration: "60 min",
          sessions: "3–4",
        },
        {
          name: "Medical-Grade Skincare",
          description:
            "Tyrosinase inhibitors to prevent new pigment formation.",
          duration: "Daily",
          sessions: "Ongoing",
        },
      ],
      faqs: [
        {
          q: "Can pigmentation be completely removed?",
          a: "Most forms of pigmentation respond very well to treatment. Some deep pigmentation like melasma requires ongoing management to prevent recurrence.",
        },
        {
          q: "Will the dark spots come back?",
          a: "With proper sun protection (SPF 50+) and maintenance treatments, results are long-lasting. Sun exposure is the primary cause of recurrence.",
        },
        {
          q: "Is IPL safe for dark skin tones?",
          a: "We offer treatments suitable for all skin tones. For deeper skin types, we may recommend alternative laser options for safe, effective results.",
        },
        {
          q: "How soon can I go back to normal activities?",
          a: "Most pigmentation treatments have little to no downtime. Skin may appear slightly red for a few hours post-treatment.",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 4. SCARRING
    // ─────────────────────────────────────────────
    {
      id: "scarring",
      name: "Acne Scars & Scarring",
      tagline: "Smooth the story your skin tells.",
      category: "Skin Texture",
      shortDescription:
        "Smooth and improve the appearance of scars for clearer skin.",
      longDescription:
        "Advanced scar treatment options including microneedling, laser therapy, and dermal fillers help reduce the appearance of acne scars and dramatically improve skin texture. Our multi-modality approach targets both the surface irregularity and the underlying collagen structure for transformative results.",
      image: { src: "/images/scars.webp", alt: "Scar treatment" },
      severity: "Mild to Severe",
      featured: false,
      stats: [
        { value: "85%", label: "Texture Improvement" },
        { value: "4–6", label: "Sessions Avg." },
        { value: "6 wks", label: "Collagen Response" },
      ],
      symptoms: [
        { label: "Pitted Scars", icon: "●" },
        { label: "Raised Scars", icon: "●" },
        { label: "Uneven Texture", icon: "●" },
        { label: "Discoloration", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "Microneedling",
          description: "Breaks down scar tissue and stimulates new collagen.",
          duration: "60 min",
          sessions: "4–6",
        },
        {
          name: "Laser Resurfacing",
          description: "Ablative laser resurfaces pitted scar tissue.",
          duration: "60 min",
          sessions: "3–5",
        },
        {
          name: "Chemical Peels",
          description: "Dissolve surface layers to even skin texture.",
          duration: "45 min",
          sessions: "4–6",
        },
        {
          name: "PRP Facial",
          description: "Growth factors accelerate scar remodelling.",
          duration: "75 min",
          sessions: "3–4",
        },
      ],
      faqs: [
        {
          q: "Can all types of acne scars be treated?",
          a: "Yes. Different modalities target different scar types — pitted, rolling, boxcar, and raised scars all respond to specific treatments.",
        },
        {
          q: "How many sessions will I need?",
          a: "Most clients see significant improvement in 4–6 sessions. Deep or severe scarring may require additional treatments.",
        },
        {
          q: "Is there downtime after microneedling?",
          a: "Expect 24–48 hours of redness. Most clients return to work the next day with minimal visible signs of treatment.",
        },
        {
          q: "Can scars be completely erased?",
          a: "While complete erasure is not always possible, we consistently achieve 70–90% improvement, which is transformative for most clients.",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 5. ROSACEA
    // ─────────────────────────────────────────────
    {
      id: "rosacea",
      name: "Rosacea & Redness",
      tagline: "Calm, balanced skin every day.",
      category: "Sensitivity",
      shortDescription:
        "Calm inflammation and reduce persistent facial redness.",
      longDescription:
        "Specialized treatments for rosacea target redness, visible blood vessels, and inflammation using gentle yet effective therapies tailored to sensitive skin. Our expert dermatologists develop a long-term management plan that keeps flare-ups at bay and restores skin confidence.",
      image: { src: "/images/Rosacea.webp", alt: "Rosacea treatment" },
      severity: "Mild to Moderate",
      featured: false,
      stats: [
        { value: "88%", label: "Redness Reduction" },
        { value: "3–5", label: "Sessions Avg." },
        { value: "4 wks", label: "First Results" },
      ],
      symptoms: [
        { label: "Facial Redness", icon: "●" },
        { label: "Visible Blood Vessels", icon: "●" },
        { label: "Bumps & Pimples", icon: "●" },
        { label: "Sensitive Skin", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "IPL Photofacial",
          description: "Target and collapse visible capillaries.",
          duration: "30 min",
          sessions: "3–5",
        },
        {
          name: "Laser Therapy",
          description: "Reduce diffuse redness with vascular laser.",
          duration: "45 min",
          sessions: "3–4",
        },
        {
          name: "Medical-Grade Skincare",
          description: "Anti-inflammatory actives to reduce daily reactivity.",
          duration: "Daily",
          sessions: "Ongoing",
        },
        {
          name: "Gentle Facials",
          description:
            "Calming, clinic-grade facials designed for rosacea skin.",
          duration: "60 min",
          sessions: "Monthly",
        },
      ],
      faqs: [
        {
          q: "Is rosacea curable?",
          a: "Rosacea is a chronic condition but highly manageable. With the right treatment protocol, most clients achieve near-complete control of symptoms.",
        },
        {
          q: "What triggers rosacea flare-ups?",
          a: "Common triggers include sun exposure, spicy foods, alcohol, hot drinks, stress, and temperature extremes. We'll help you identify and manage your personal triggers.",
        },
        {
          q: "Are the treatments safe for sensitive skin?",
          a: "Absolutely. All our rosacea protocols are specifically designed for reactive, sensitive skin with gentle, evidence-based modalities.",
        },
        {
          q: "How often do I need maintenance treatments?",
          a: "Most clients benefit from quarterly maintenance sessions once their skin is stabilised, combined with a daily home care routine.",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 6. SUN DAMAGE
    // ─────────────────────────────────────────────
    {
      id: "sun-damage",
      name: "Sun Damage & Photo-Aging",
      tagline: "Undo years of sun exposure.",
      category: "Skin Renewal",
      shortDescription:
        "Reverse sun damage and restore youthful, healthy skin.",
      longDescription:
        "Repair and reverse the effects of sun exposure with treatments that target pigmentation, texture issues, and premature aging caused by UV damage. Our comprehensive photo-aging protocols restore a healthy, youthful glow while protecting your skin from future damage.",
      image: { src: "/images/sun.jpg", alt: "Sun damage treatment" },
      severity: "Mild to Severe",
      featured: true,
      stats: [
        { value: "92%", label: "Improvement Rate" },
        { value: "3–6", label: "Sessions Avg." },
        { value: "2 wks", label: "Visible Change" },
      ],
      symptoms: [
        { label: "Age Spots", icon: "●" },
        { label: "Freckles", icon: "●" },
        { label: "Rough Texture", icon: "●" },
        { label: "Uneven Tone", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "IPL Photofacial",
          description: "Erase sun spots and even skin tone in a flash.",
          duration: "30 min",
          sessions: "3–5",
        },
        {
          name: "Chemical Peels",
          description: "Resurface damaged, sun-thickened skin layers.",
          duration: "45 min",
          sessions: "4–6",
        },
        {
          name: "Laser Resurfacing",
          description: "Full skin renewal targeting deep photo damage.",
          duration: "60 min",
          sessions: "2–4",
        },
        {
          name: "Medical-Grade Skincare",
          description: "Antioxidant-rich actives to repair and protect.",
          duration: "Daily",
          sessions: "Ongoing",
        },
      ],
      faqs: [
        {
          q: "Can years of sun damage really be reversed?",
          a: "Yes — modern laser and light therapies can dramatically reverse even decades of accumulated sun damage, restoring clarity and even tone.",
        },
        {
          q: "Will I need to avoid sun after treatment?",
          a: "Sun avoidance and SPF 50+ are critical during and after treatment. We'll provide a complete post-care protocol.",
        },
        {
          q: "How many sessions for significant improvement?",
          a: "Most clients see dramatic improvement after 3–4 sessions. Mild sun damage may clear in as few as 2 treatments.",
        },
        {
          q: "What's the difference between IPL and laser for sun damage?",
          a: "IPL treats broader areas of general pigmentation and redness; laser targets specific, deeper lesions. We often combine both for optimal results.",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 7. LARGE PORES
    // ─────────────────────────────────────────────
    {
      id: "large-pores",
      name: "Large Pores",
      tagline: "Refined, porcelain-smooth skin.",
      category: "Skin Texture",
      shortDescription:
        "Minimize pore size for smoother, refined skin texture.",
      longDescription:
        "Professional treatments that cleanse, tighten, and minimize the appearance of enlarged pores for a smoother, more refined complexion. Our pore-refining protocols combine deep cleansing with collagen-stimulating treatments to visibly reduce pore size and improve overall skin texture.",
      image: { src: "/images/LargePores.png", alt: "Large pores treatment" },
      severity: "Mild to Moderate",
      featured: false,
      stats: [
        { value: "80%", label: "Pore Reduction" },
        { value: "3–5", label: "Sessions Avg." },
        { value: "3 wks", label: "First Results" },
      ],
      symptoms: [
        { label: "Visible Pores", icon: "●" },
        { label: "Oily Skin", icon: "●" },
        { label: "Blackheads", icon: "●" },
        { label: "Uneven Texture", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "HydraFacial",
          description:
            "Vacuum extraction + hydration for instant pore clarity.",
          duration: "45 min",
          sessions: "Monthly",
        },
        {
          name: "Microneedling",
          description: "Tighten pore walls by stimulating collagen scaffold.",
          duration: "60 min",
          sessions: "3–4",
        },
        {
          name: "Chemical Peels",
          description: "Dissolve sebum plugs and refine skin surface.",
          duration: "45 min",
          sessions: "4–6",
        },
        {
          name: "Laser Therapy",
          description: "Heat treatment to contract and tighten enlarged pores.",
          duration: "30 min",
          sessions: "3–4",
        },
      ],
      faqs: [
        {
          q: "Can pores actually shrink permanently?",
          a: "Pore size is largely genetic, but with consistent treatment and home care, their appearance can be dramatically minimised long-term.",
        },
        {
          q: "Why do I have large pores?",
          a: "Genetics, excess sebum production, age-related collagen loss, and sun damage all contribute to enlarged pores.",
        },
        {
          q: "What's the best single treatment for large pores?",
          a: "Microneedling has the strongest evidence for long-term pore size reduction, but a combination approach delivers the best results.",
        },
        {
          q: "Is HydraFacial suitable for sensitive skin?",
          a: "Yes — HydraFacial is one of the gentlest yet most effective treatments available and is suitable for virtually all skin types.",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 8. SAGGING SKIN
    // ─────────────────────────────────────────────
    {
      id: "sagging-skin",
      name: "Sagging Skin & Loss of Volume",
      tagline: "Lift and restore without going under the knife.",
      category: "Anti-Aging",
      shortDescription: "Restore firmness and lift to aging, sagging skin.",
      longDescription:
        "Combat skin laxity and volume loss with advanced treatments that tighten, lift, and restore youthful contours to the face and body. Our non-surgical lifting protocols harness the latest radiofrequency, ultrasound, and filler technologies to turn back time — beautifully.",
      image: { src: "/images/SaggingSkin.jpg", alt: "Sagging skin treatment" },
      severity: "Moderate to Severe",
      featured: false,
      stats: [
        { value: "91%", label: "Lift Improvement" },
        { value: "2–4", label: "Sessions Avg." },
        { value: "1 mo", label: "Peak Results" },
      ],
      symptoms: [
        { label: "Loss of Firmness", icon: "●" },
        { label: "Jowls", icon: "●" },
        { label: "Neck Laxity", icon: "●" },
        { label: "Volume Loss", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "Dermal Fillers",
          description: "Rebuild facial scaffolding and restore volume.",
          duration: "45 min",
          sessions: "1–2",
        },
        {
          name: "Laser Therapy",
          description: "Heat-based collagen contraction for skin tightening.",
          duration: "60 min",
          sessions: "3–4",
        },
        {
          name: "Body Contouring",
          description: "Non-surgical lifting for face and body laxity.",
          duration: "60–90 min",
          sessions: "4–6",
        },
        {
          name: "PRP Facial",
          description: "Growth factors rebuild collagen and elastin networks.",
          duration: "75 min",
          sessions: "3–4",
        },
      ],
      faqs: [
        {
          q: "Can non-surgical treatments really lift skin?",
          a: "Modern non-surgical technologies achieve remarkable lifting results. Many clients see improvements comparable to minor surgical procedures.",
        },
        {
          q: "How long do lifting treatments last?",
          a: "Results typically last 12–24 months depending on treatment type. Annual maintenance treatments extend and preserve results.",
        },
        {
          q: "Is there any downtime?",
          a: "Most skin tightening treatments have zero to minimal downtime. Some mild swelling or tenderness for 24–48 hours is normal.",
        },
        {
          q: "Am I too young or too old for these treatments?",
          a: "Prevention in the 30s–40s is ideal, but transformative results are achievable at any age. We'll recommend the right approach for your stage.",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 9. DARK CIRCLES
    // ─────────────────────────────────────────────
    {
      id: "dark-circles",
      name: "Dark Circles & Under-Eye Issues",
      tagline: "Wake up looking refreshed, every day.",
      category: "Eye Rejuvenation",
      shortDescription: "Brighten and refresh tired-looking under-eye area.",
      longDescription:
        "Specialized treatments for dark circles, puffiness, and under-eye concerns that brighten and rejuvenate the delicate eye area. We address hollow tear troughs, pigmentation, and fine lines with precision techniques that restore a bright, well-rested appearance.",
      image: { src: "/images/DarkCircles.jpg", alt: "Dark circles treatment" },
      severity: "Mild to Moderate",
      featured: false,
      stats: [
        { value: "87%", label: "Brightening Effect" },
        { value: "1–3", label: "Sessions Avg." },
        { value: "1 wk", label: "Visible Results" },
      ],
      symptoms: [
        { label: "Dark Circles", icon: "●" },
        { label: "Puffiness", icon: "●" },
        { label: "Fine Lines", icon: "●" },
        { label: "Hollowness", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "Dermal Fillers",
          description:
            "Fill hollow tear troughs for an instantly refreshed look.",
          duration: "30 min",
          sessions: "1",
        },
        {
          name: "IPL Photofacial",
          description: "Lighten pigmentation beneath the eyes.",
          duration: "20 min",
          sessions: "2–3",
        },
        {
          name: "Medical-Grade Skincare",
          description: "Targeted eye creams with retinol and peptides.",
          duration: "Daily",
          sessions: "Ongoing",
        },
        {
          name: "PRP Facial",
          description: "Stimulate new collagen in the delicate under-eye area.",
          duration: "75 min",
          sessions: "2–3",
        },
      ],
      faqs: [
        {
          q: "Are tear trough fillers safe?",
          a: "When performed by an experienced clinician, tear trough fillers are very safe. We use hyaluronic acid, which is fully reversible.",
        },
        {
          q: "Will fillers look natural under the eyes?",
          a: "In skilled hands, tear trough fillers produce beautifully natural results. The goal is always refreshed, not treated.",
        },
        {
          q: "Can dark circles be caused by something medical?",
          a: "Yes — iron deficiency, allergies, and thyroid issues can contribute. We always assess underlying causes before recommending treatment.",
        },
        {
          q: "How long do under-eye fillers last?",
          a: "Under-eye fillers typically last 12–18 months, sometimes longer, as the area has limited movement.",
        },
      ],
    },

    // ─────────────────────────────────────────────
    // 10. UNWANTED HAIR
    // ─────────────────────────────────────────────
    {
      id: "unwanted-hair",
      name: "Unwanted Hair",
      tagline: "Permanently smooth. Effortlessly confident.",
      category: "Hair Removal",
      shortDescription:
        "Permanent hair reduction with advanced laser technology.",
      longDescription:
        "Safe, effective laser hair removal for all skin types and body areas. Achieve smooth, hair-free skin with long-lasting results using our state-of-the-art laser systems. Say goodbye to razors, waxing, and ingrown hairs — permanently.",
      image: { src: "/images/UnwantedHair.webp", alt: "Hair removal" },
      severity: "All Levels",
      featured: false,
      stats: [
        { value: "95%", label: "Hair Reduction" },
        { value: "6–8", label: "Sessions Avg." },
        { value: "3 wks", label: "Between Sessions" },
      ],
      symptoms: [
        { label: "Excess Body Hair", icon: "●" },
        { label: "Facial Hair", icon: "●" },
        { label: "Ingrown Hairs", icon: "●" },
        { label: "Shaving Irritation", icon: "●" },
      ],
      relatedTreatments: [
        {
          name: "Laser Hair Removal",
          description:
            "Permanently disable hair follicles with targeted laser energy.",
          duration: "15–60 min",
          sessions: "6–8",
        },
      ],
      faqs: [
        {
          q: "Is laser hair removal permanent?",
          a: "Laser hair removal delivers permanent reduction of up to 90–95%. A small percentage of hair may regrow finer and lighter.",
        },
        {
          q: "Is it painful?",
          a: "Modern laser systems are highly comfortable. Most clients describe a mild snapping sensation. Cooling systems minimise any discomfort.",
        },
        {
          q: "How many sessions do I need?",
          a: "Hair grows in cycles, so 6–8 sessions are needed to target all follicles in their active growth phase.",
        },
        {
          q: "Is it safe for all skin tones?",
          a: "Yes — we use advanced laser systems suitable for all Fitzpatrick skin types, including darker skin tones.",
        },
      ],
    },
  ],

  cta: {
    title: "Not Sure Which Condition Best Describes Your Concern?",
    description:
      "Our experts will assess your skin, identify your specific concerns, and recommend the most effective treatment plan for optimal results.",
    buttonText: "Schedule Consultation",
    buttonLink: "/contact",
    image: { src: "/images/boss.jpg", alt: "Free consultation" },
  },
};

export const getFeaturedConditions = () =>
  conditionsData.conditions.filter((c) => c.featured);

export const getConditionById = (id) =>
  conditionsData.conditions.find((c) => c.id === id);

export default conditionsData;
