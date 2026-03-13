// src/data/treatmentsData.js
// ============================================================
// TREATMENTS DATA  —  Radina Aesthetic Clinic
// ============================================================
// IMAGE PATHS:
//   All real images → /images/<folder>/<file>
//   Empty src ""   → no image yet, will show placeholder
// ============================================================

export const treatmentsData = {
  // ─────────────────────────────────────────
  // HERO  (Treatments listing page)
  // ─────────────────────────────────────────
  hero: {
    badge: "Our Services",
    title: "Advanced Aesthetic Treatments",
    description:
      "Discover our range of professional treatments designed to enhance your natural beauty",
    image: {
      src: "/images/filler/dermal.webp",
      alt: "Radina Clinic Treatments",
    },
  },

  // ─────────────────────────────────────────
  // CATEGORIES  (filter tabs)
  // ─────────────────────────────────────────
  categories: [
    { id: "all", name: "All Treatments" },
    { id: "injectable", name: "Injectable Treatments" },
    { id: "skin-care", name: "Skin Care" },
    { id: "body-contouring", name: "Body Contouring" },
  ],

  // ─────────────────────────────────────────
  // TREATMENTS
  // ─────────────────────────────────────────
  treatments: [
    // ============================================================
    // 1. BOTOX
    // ============================================================
    {
      id: "botox",
      name: "Botox Anti-Wrinkle Treatments",
      category: "injectable",
      shortDescription:
        "FDA-approved anti-wrinkle injections for natural-looking results",
      longDescription:
        "Botox is the world's most trusted anti-wrinkle treatment, used by millions to smooth lines, prevent wrinkles, and achieve a refreshed, youthful appearance without surgery or downtime.",
      // ── card / hero image ──
      image: {
        src: "/images/botox/forhead-botox2.jpg",
        alt: "Botox Treatment",
      },
      price: "From £150",
      duration: "15-30 minutes",
      featured: true,
      badge: "Most Popular",

      benefits: [
        "Smooths expression lines naturally",
        "Prevents new wrinkles from forming",
        "Quick 15-30 minute treatment",
        "No downtime or recovery",
        "Results last 3-6 months",
        "FDA-approved and clinically proven",
      ],

      resultsTimeline: {
        initial: "3-5 days",
        full: "10-14 days",
        duration: "3-6 months",
      },

      // ── main gallery (one image per key sub-treatment) ──
      beforeAfterGallery: [
        {
          src: "/images/botox/forhead lines botox/26.jpeg",
          alt: "Forehead treatment",
          label: "Forehead Lines",
        },
        {
          src: "/images/botox/forhead lines botox/25.jpeg",
          alt: "Frown lines",
          label: "Forehead & Frown",
        },
        {
          src: "/public/images/botox/CROW’S FEET BOTOX/1.jpeg",
          alt: "Crow's feet",
          label: "Crow's Feet",
        },
        {
          src: "/images/botox/GUMMY SMILE BOTOX/20.jpeg",
          alt: "Gummy smile",
          label: "Gummy Smile",
        },
      ],

      faqs: [
        {
          question: "Does Botox hurt?",
          answer:
            "Botox injections use ultra-fine needles and cause minimal discomfort. Most clients describe it as a slight pinch. Numbing cream is available if needed.",
        },
        {
          question: "Will I look frozen?",
          answer:
            "Not at all! We use precise techniques to maintain natural expressions while smoothing unwanted lines. You'll look refreshed, never frozen.",
        },
        {
          question: "How long until I see results?",
          answer:
            "Initial results appear within 3-5 days, with full results visible after 10-14 days. Results typically last 3-6 months.",
        },
      ],

      // ──────────────────────────────────────
      // BOTOX SUB-TREATMENTS  (9 total)
      // ──────────────────────────────────────
      subTreatments: [
        // ── Botox Sub 1: Forehead Lines ──────────────────────────
        {
          id: "forehead-botox",
          name: "Forehead Lines Botox",
          shortDescription:
            "Smooth horizontal forehead wrinkles for a refreshed, youthful look",
          longDescription:
            "Forehead Botox targets horizontal lines across the forehead caused by repeated expressions like raising eyebrows. Our precise technique delivers smooth, natural results while preserving your ability to express emotions.",
          price: "From £160",
          duration: "10-15 minutes",
          image: {
            src: "/public/images/botox/forhead lines botox/forhead-botox-2.jpg",
            alt: "Forehead Botox Treatment",
          },
          benefits: [
            "Smooths horizontal forehead lines",
            "Prevents deeper lines from forming",
            "Maintains natural expressions",
            "Brightens upper face appearance",
            "Quick 10-15 minute procedure",
            "Results visible in 3-5 days",
            "Lasts 3-6 months",
            "No downtime required",
          ],
          resultsTimeline: {
            initial: "3-5 days",
            full: "10-14 days",
            duration: "3-6 months",
          },
          beforeAfterGallery: [
            {
              src: "/public/images/botox/forhead lines botox/24.jpeg",
              alt: "Forehead results 1",
              label: "Light Lines - 2 Weeks",
            },
            {
              src: "/images/botox/forhead lines botox/25.jpeg",
              alt: "Forehead results 2",
              label: "Moderate Lines - 3 Weeks",
            },
            {
              src: "/images/botox/forhead lines botox/26.jpeg",
              alt: "Forehead results 3",
              label: "Deep Lines - 4 Weeks",
            },
            {
              src: "/images/botox/forhead lines botox/27.jpg",
              alt: "Forehead results 4",
              label: "Natural Look - Full Results",
            },
            // {
            //   src: "/images/botox/forhead lines botox/forhead-botox-2.jpg",
            //   alt: "Forehead results 5",
            //   label: "Refreshed - 2 Weeks",
            // },
            // {
            //   src: "/images/botox/forhead lines botox/forhead-botox-3.webp",
            //   alt: "Forehead results 6",
            //   label: "Smooth Forehead - Full Effect",
            // },
          ],
          faqs: [
            {
              question: "Will I still be able to move my forehead?",
              answer:
                "Yes! We use precise dosing to soften lines while preserving natural movement. You'll still raise your eyebrows and express emotions normally.",
            },
            {
              question: "How many units do I need?",
              answer:
                "Typically 10-20 units depending on line depth and muscle strength. We'll assess during your consultation and recommend the optimal amount.",
            },
            {
              question: "Can it be combined with other areas?",
              answer:
                "Absolutely! Forehead Botox is often combined with frown lines and crow's feet for complete upper face rejuvenation.",
            },
            {
              question: "When will I see results?",
              answer:
                "Initial smoothing appears within 3-5 days, with full results visible after 10-14 days. Results typically last 3-6 months.",
            },
          ],
        },

        // ── Botox Sub 2: Glabellar (Frown Lines) ─────────────────
        {
          id: "glabellar-botox",
          name: "Glabellar Botox (Frown Lines)",
          shortDescription:
            "Eliminate the '11 lines' between your eyebrows for a relaxed appearance",
          longDescription:
            "Glabellar lines—the vertical creases between your eyebrows—can make you look angry, stressed, or upset even when you're feeling happy. Botox treatment in this area provides dramatic, transformative results.",
          price: "From £180",
          duration: "10-15 minutes",
          image: {
            src: "/public/images/botox/GLABELLAR BOTOX/Glabellar botox 1.webp",
            alt: "Glabellar Botox Treatment",
          },
          benefits: [
            "Eliminates frown lines completely",
            "Creates relaxed, approachable appearance",
            "Prevents lines from deepening further",
            "Dramatically improves facial expressions",
            "Boosts confidence instantly",
            "Long-lasting results (4-6 months)",
            "Minimal discomfort",
            "No downtime required",
          ],
          resultsTimeline: {
            initial: "3-5 days",
            full: "7-10 days",
            duration: "4-6 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/botox/GLABELLAR BOTOX/1.jpeg",
              alt: "Glabellar results 1",
              label: "Frown Lines - Before & After",
            },
            {
              src: "/images/botox/GLABELLAR BOTOX/2.jpeg",
              alt: "Glabellar results 2",
              label: "Deep Frown Lines - 2 Weeks",
            },
            {
              src: "/images/botox/GLABELLAR BOTOX/3.jpeg",
              alt: "Glabellar results 3",
              label: "Complete Smoothing - 10 Days",
            },
            {
              src: "/images/botox/GLABELLAR BOTOX/4.jpeg",
              alt: "Glabellar results 4",
              label: "Relaxed Appearance - Full Result",
            },
          ],
          faqs: [
            {
              question: "How many units are needed?",
              answer:
                "Typically 15-25 units depending on muscle strength and line depth. Men often need slightly more than women due to stronger muscles.",
            },
            {
              question: "Will I still be able to frown?",
              answer:
                "You'll still be able to frown slightly, but the deep creases won't form. The goal is softening, not freezing—you'll maintain natural expressions.",
            },
            {
              question: "Is this the most dramatic Botox result?",
              answer:
                "Many clients find this area provides the most noticeable transformation, as it directly impacts how others perceive your mood and demeanor.",
            },
          ],
        },

        // ── Botox Sub 3: Crow's Feet ──────────────────────────────
        {
          id: "crows-feet-botox",
          name: "Crow's Feet Botox",
          shortDescription:
            "Smooth fine lines around the eyes for a bright, youthful sparkle",
          longDescription:
            "Crow's feet are the fine lines that radiate from the outer corners of your eyes when you smile or squint. Treating them can take years off your appearance while maintaining your beautiful smile.",
          price: "From £150",
          duration: "10-15 minutes",
          image: {
            src: "/public/images/botox/CROW’S FEET BOTOX/crows-feet-btx-4.jpg",
            alt: "Crow's Feet Botox Treatment",
          },
          benefits: [
            "Softens eye wrinkles dramatically",
            "Brightens the entire eye area",
            "Creates youthful, rested appearance",
            "Maintains your natural smile",
            "Quick and virtually painless",
            "Visible results within days",
            "No impact on vision or eye function",
            "Complements other facial treatments",
          ],
          resultsTimeline: {
            initial: "3-5 days",
            full: "10-14 days",
            duration: "3-4 months",
          },
          beforeAfterGallery: [
            {
              src: "/public/images/botox/CROW’S FEET BOTOX/1.jpeg",
              alt: "Crow's feet results 1",
              label: "Eye Wrinkles - Before & After",
            },
            {
              src: "/public/images/botox/CROW’S FEET BOTOX/2.jpeg",

              alt: "Crow's feet results 2",
              label: "Smile Lines - 2 Weeks",
            },
            {
              src: "/public/images/botox/CROW’S FEET BOTOX/3.jpeg",

              alt: "Crow's feet results 3",
              label: "Youthful Eyes - 3 Weeks",
            },
            {
              src: "/public/images/botox/CROW’S FEET BOTOX/4.jpeg",

              alt: "Crow's feet results 4",
              label: "Natural Smile - Full Results",
            },
            {
              src: "/public/images/botox/CROW’S FEET BOTOX/5.jpeg",

              alt: "Crow's feet results 5",
              label: "Bright Eyes - Full Effect",
            },
          ],
          faqs: [
            {
              question: "Will this affect my smile?",
              answer:
                "Not at all! We target only the muscles causing wrinkles, not those responsible for smiling. Your smile stays natural and beautiful.",
            },
            {
              question: "Can I combine with other areas?",
              answer:
                "Yes! Crow's feet are often treated alongside forehead and frown lines for complete upper face rejuvenation—what we call the 'Botox Three.'",
            },
            {
              question: "Why do results last less here?",
              answer:
                "The muscles around the eyes are active throughout the day (blinking, smiling), so Botox may wear off slightly faster (3-4 months vs 4-6 months in other areas).",
            },
          ],
        },

        // ── Botox Sub 4: Gummy Smile ──────────────────────────────
        {
          id: "gummy-smile-botox",
          name: "Gummy Smile Botox",
          shortDescription:
            "Reduce excessive gum display for a balanced, confident smile",
          longDescription:
            "A gummy smile occurs when excessive upper gum tissue shows when you smile. Botox provides a simple, non-surgical solution that creates a more balanced, proportional smile.",
          price: "From £120",
          duration: "10 minutes",
          image: {
            src: "/images/botox/GUMMY SMILE BOTOX/Gummy-Smile-Botox.png",
            alt: "Gummy Smile Botox Treatment",
          },
          benefits: [
            "Reduces visible gum tissue",
            "Creates balanced, proportional smile",
            "Boosts confidence dramatically",
            "Non-surgical alternative",
            "Quick 10-minute treatment",
            "Natural-looking results",
            "Minimal discomfort",
            "Immediate social impact",
          ],
          resultsTimeline: {
            initial: "3-7 days",
            full: "2 weeks",
            duration: "3-4 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/botox/GUMMY SMILE BOTOX/18.jpeg",
              alt: "Gummy smile results 1",
              label: "Balanced Smile - Before & After",
            },
            {
              src: "/images/botox/GUMMY SMILE BOTOX/19.jpeg",
              alt: "Gummy smile results 2",
              label: "Confidence Boost - 10 Days",
            },
            {
              src: "/images/botox/GUMMY SMILE BOTOX/20.jpeg",
              alt: "Gummy smile results 3",
              label: "Natural Smile - 2 Weeks",
            },
            {
              src: "/images/botox/GUMMY SMILE BOTOX/21.jpeg",
              alt: "Gummy smile results 4",
              label: "Beautiful Results - 3 Weeks",
            },
            {
              src: "/images/botox/GUMMY SMILE BOTOX/22.jpeg",
              alt: "Gummy smile results 5",
              label: "Full Effect - 4 Weeks",
            },
          ],
          faqs: [
            {
              question: "Will I still smile normally?",
              answer:
                "Yes! You'll smile naturally with less gum showing. The treatment only limits excessive lip elevation, not your ability to smile.",
            },
            {
              question: "How much reduction can I expect?",
              answer:
                "Most clients see a 50-70% reduction in visible gum tissue, creating a more balanced, aesthetically pleasing smile.",
            },
            {
              question: "Is this better than surgery?",
              answer:
                "For mild to moderate gummy smiles, Botox is an excellent non-surgical alternative. Severe cases may still require surgical correction.",
            },
          ],
        },

        // ── Botox Sub 5: Neck Tightening ──────────────────────────
        {
          id: "neck-botox",
          name: "Neck Skin Tightening Botox",
          shortDescription:
            "Smooth neck bands and tighten skin for a youthful neck profile",
          longDescription:
            "Neck Botox targets platysma muscle bands that create vertical lines and contribute to neck sagging. This treatment provides a subtle lift and smooth appearance.",
          price: "From £200",
          duration: "15-20 minutes",
          image: {
            src: "/public/images/botox/neck tight/necktight.webp",
            alt: "Neck Botox Treatment",
          },
          benefits: [
            "Smooths vertical neck bands",
            "Provides subtle lifting effect",
            "Tightens loose neck skin",
            "Creates defined jawline",
            "Non-surgical alternative",
            "Minimal downtime",
            "Natural-looking results",
            "Complements facelift results",
          ],
          resultsTimeline: {
            initial: "1 week",
            full: "2 weeks",
            duration: "4-6 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/botox/neck tight/1.jpeg",
              alt: "Neck results 1",
              label: "Smooth Bands - 2 Weeks",
            },
            {
              src: "/images/botox/neck tight/2.jpeg",
              alt: "Neck results 2",
              label: "Lifted Appearance - 3 Weeks",
            },
            {
              src: "/images/botox/neck tight/3.jpeg",
              alt: "Neck results 3",
              label: "Elegant Profile - Full Result",
            },
          ],
          faqs: [
            {
              question: "Is this the same as a Nefertiti Lift?",
              answer:
                "They're similar! Nefertiti Lift extends slightly higher along the jawline for more definition. We'll recommend the best approach during consultation.",
            },
            {
              question: "Will it help with a double chin?",
              answer:
                "It can slightly improve the appearance, but for significant fat reduction, we recommend combining with fat dissolving injections.",
            },
          ],
        },

        // ── Botox Sub 6: Nefertiti Lift (Platysma) ───────────────
        {
          id: "nefertiti-lift",
          name: "Nefertiti Lift (Platysma Botox)",
          shortDescription:
            "Define the jawline and smooth the neck for an elegant profile",
          longDescription:
            "Named after Queen Nefertiti's famously elegant jawline, this treatment uses Botox along the jawline and upper neck to create definition and lift.",
          price: "From £250",
          duration: "20 minutes",
          image: {
            src: "/images/botox/Platysma Botox/10.jpeg",
            alt: "Nefertiti Lift Treatment",
          },
          benefits: [
            "Defines and sculpts jawline",
            "Smooths neck bands",
            "Creates lifting effect",
            "Non-surgical alternative",
            "Elegant, natural results",
            "Boosts facial profile",
            "Long-lasting effects",
            "No downtime required",
          ],
          resultsTimeline: {
            initial: "1-2 weeks",
            full: "3 weeks",
            duration: "4-6 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/botox/Platysma Botox/10.jpeg",
              alt: "Nefertiti results 1",
              label: "Jawline Definition - 3 Weeks",
            },
            {
              src: "/images/botox/Platysma Botox/11.jpeg",
              alt: "Nefertiti results 2",
              label: "Neck Smoothing - 2 Weeks",
            },
            {
              src: "/images/botox/Platysma Botox/12.jpeg",
              alt: "Nefertiti results 3",
              label: "Elegant Profile - 4 Weeks",
            },
            {
              src: "/images/botox/Platysma Botox/13.jpeg",
              alt: "Nefertiti results 4",
              label: "Lifted Appearance - Full Results",
            },
          ],
          faqs: [
            {
              question: "Who is a good candidate?",
              answer:
                "Ideal for those with mild jowling, loss of jawline definition, or early signs of neck aging. Not suitable for severe sagging.",
            },
            {
              question: "How is this different from regular neck Botox?",
              answer:
                "The Nefertiti Lift extends higher along the jawline for more definition, while regular neck Botox focuses on bands lower in the neck.",
            },
          ],
        },

        // ── Botox Sub 7: Smoker Lines (Perioral) ─────────────────
        {
          id: "smoker-lines-botox",
          name: "Smoker Lines Botox (Perioral Lines)",
          shortDescription:
            "Smooth vertical lines around the mouth for a youthful appearance",
          longDescription:
            "Perioral lines (smoker's lines) are vertical wrinkles around the mouth caused by repetitive pursing, smoking, or natural aging. Botox softens these lines beautifully.",
          price: "From £140",
          duration: "10 minutes",
          image: {
            src: "/public/images/botox/Perioral Lines Botox/smokerlines.avif",
            alt: "Smoker Lines Botox Treatment",
          },
          benefits: [
            "Smooths vertical lip lines",
            "Prevents lipstick bleeding",
            "Maintains lip movement",
            "Quick treatment",
            "Natural-looking results",
            "Minimal discomfort",
            "No impact on speech",
            "Can combine with fillers",
          ],
          resultsTimeline: {
            initial: "5-7 days",
            full: "2 weeks",
            duration: "3-4 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/botox/Perioral Lines Botox/14.jpeg",
              alt: "Smoker lines results 1",
              label: "Smooth Lips - Before & After",
            },
            {
              src: "/images/botox/Perioral Lines Botox/15.jpeg",
              alt: "Smoker lines results 2",
              label: "Youthful Mouth - 2 Weeks",
            },
          ],
          faqs: [
            {
              question: "Will it affect my ability to purse my lips?",
              answer:
                "You'll still be able to purse your lips normally, just with less wrinkling. We use minimal doses to maintain function.",
            },
            {
              question: "Should I combine with lip filler?",
              answer:
                "Often yes! Botox smooths the lines while filler adds volume—a powerful combination for the mouth area.",
            },
          ],
        },

        // ── Botox Sub 9: Chain Botox ──────────────────────────────
        {
          id: "chain-botox",
          name: "Chain Botox",
          shortDescription:
            "Targeted Botox treatment for a refined, natural result",
          longDescription:
            "Chain Botox delivers precise, controlled injections to address specific muscle groups, creating a smooth, natural-looking result tailored to your facial anatomy.",
          price: "From £150",
          duration: "15-20 minutes",
          image: {
            src: "/public/images/botox/chain botox/chain.jfif",
            alt: "Chain Botox Treatment",
          },
          benefits: [
            "Precise, targeted treatment",
            "Natural-looking results",
            "Minimal discomfort",
            "No downtime required",
            "Quick procedure",
            "Long-lasting effects",
            "Tailored to facial anatomy",
            "Expert technique",
          ],
          resultsTimeline: {
            initial: "3-5 days",
            full: "10-14 days",
            duration: "3-6 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/botox/chain botox/16.jpeg",
              alt: "Chain Botox results 1",
              label: "Before & After - 2 Weeks",
            },
            {
              src: "/images/botox/chain botox/17.jpeg",
              alt: "Chain Botox results 2",
              label: "Natural Results - Full Effect",
            },
          ],
          faqs: [
            {
              question: "What makes Chain Botox different?",
              answer:
                "Chain Botox uses a precise, linked injection technique to create a smooth, even result across targeted muscle groups.",
            },
            {
              question: "How long do results last?",
              answer:
                "Results typically last 3-6 months. Maintenance appointments keep results looking their best.",
            },
          ],
        },
      ], // end botox subTreatments
    },

    // ============================================================
    // 2. DERMAL FILLERS
    // ============================================================
    {
      id: "fillers",
      name: "Dermal Fillers",
      category: "injectable",
      shortDescription:
        "Restore volume, enhance contours, and smooth wrinkles naturally",
      longDescription:
        "Dermal fillers use hyaluronic acid to restore lost volume, enhance facial features, and create youthful, natural-looking results without surgery.",
      // ── card / hero image ──
      image: {
        src: "/images/filler/dermal.webp",
        alt: "Dermal Fillers",
      },
      price: "From £250",
      duration: "30-45 minutes",
      featured: true,
      badge: "Versatile",

      benefits: [
        "Immediate visible results",
        "Natural-looking enhancement",
        "Minimal downtime",
        "Reversible if desired",
        "Stimulates collagen",
        "Lasts 6-18 months",
        "Versatile treatment",
        "FDA-approved",
      ],

      resultsTimeline: {
        initial: "Immediate",
        full: "1-2 weeks",
        duration: "6-18 months",
      },

      // ── main gallery (one image per sub-treatment) ──
      beforeAfterGallery: [
        {
          src: "/images/filler/lip-filler/1.jpeg",
          alt: "Lip filler",
          label: "Lip Enhancement",
        },
        {
          src: "/images/filler/under eye filler/14.jpeg",
          alt: "Under eye filler",
          label: "Under Eye Filler",
        },
        {
          src: "/images/filler/Nasolabial Fold Filler/20.jpeg",
          alt: "Nasolabial filler",
          label: "Nasolabial Folds",
        },
        {
          src: "/images/filler/Jawline Contouring Filler/10.jpeg",
          alt: "Jawline filler",
          label: "Jawline Contouring",
        },
      ],

      faqs: [
        {
          question: "Do fillers hurt?",
          answer:
            "Most fillers contain lidocaine for comfort. We also use topical numbing cream to minimize any discomfort.",
        },
        {
          question: "How long do they last?",
          answer:
            "Results typically last 6-18 months depending on the area treated and type of filler used.",
        },
        {
          question: "Will I look overdone?",
          answer:
            "No! We believe in subtle, natural enhancement. Our goal is to refresh your appearance, not change it.",
        },
      ],

      // ──────────────────────────────────────
      // FILLER SUB-TREATMENTS  (8 total)
      // ──────────────────────────────────────
      subTreatments: [
        // ── Filler Sub 1: Lip Filler ──────────────────────────────
        {
          id: "lip-filler",
          name: "Lip Filler",
          shortDescription:
            "Add volume, definition, and symmetry to lips naturally",
          longDescription:
            "Lip filler enhances lip volume, defines the border, creates beautiful symmetry, and hydrates dry lips using hyaluronic acid.",
          price: "From £250",
          duration: "30 minutes",
          image: {
            src: "/images/filler/lip-filler/1.jpeg",
            alt: "Lip Filler Treatment",
          },
          benefits: [
            "Adds natural volume",
            "Defines lip border",
            "Improves symmetry",
            "Hydrates lips",
            "Immediate results",
            "Fully customizable",
            "Reversible",
            "Lasts 6-12 months",
          ],
          resultsTimeline: {
            initial: "Immediate",
            full: "1 week",
            duration: "6-12 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/filler/lip-filler/1.jpeg",
              alt: "Lip results 1",
              label: "Natural Volume - Immediate",
            },
            {
              src: "/images/filler/lip-filler/2.jpeg",
              alt: "Lip results 2",
              label: "Defined Border - 1 Week",
            },
            {
              src: "/images/filler/lip-filler/3.jpeg",
              alt: "Lip results 3",
              label: "Symmetry - 3 Days",
            },
            {
              src: "/images/filler/lip-filler/4.jpeg",
              alt: "Lip results 4",
              label: "Full Lips - 2 Weeks",
            },
            {
              src: "/images/filler/lip-filler/5.jpeg",
              alt: "Lip results 5",
              label: "Beautiful Results - Final",
            },
            {
              src: "/images/filler/lip-filler/6.jpeg",
              alt: "Lip results 6",
              label: "Hydrated Lips - Full Effect",
            },
          ],
          faqs: [
            {
              question: "Will my lips look natural?",
              answer:
                "Absolutely! We specialize in natural enhancement. You'll have fuller, more defined lips that suit your face perfectly.",
            },
            {
              question: "How much filler do I need?",
              answer:
                "Typically 0.5-1ml for subtle enhancement, 1-2ml for moderate volume. We'll recommend the perfect amount during consultation.",
            },
            {
              question: "Does it hurt?",
              answer:
                "Most fillers contain lidocaine for comfort. We also use numbing cream. Most clients report minimal discomfort.",
            },
          ],
        },

        // ── Filler Sub 2: Under Eye Filler ────────────────────────
        {
          id: "under-eye-filler",
          name: "Under Eye Filler (Tear Trough)",
          shortDescription:
            "Reduce dark circles and hollows for a refreshed, youthful look",
          longDescription:
            "Under eye filler fills the tear trough hollows, reduces dark circles, and creates a smooth, youthful under-eye area.",
          price: "From £300",
          duration: "30 minutes",
          image: {
            src: "/images/filler/under eye filler/14.jpeg",
            alt: "Under Eye Filler Treatment",
          },
          benefits: [
            "Reduces dark circles",
            "Fills tear trough hollows",
            "Brightens eye area",
            "Creates youthful appearance",
            "Immediate results",
            "Long-lasting",
            "Minimal downtime",
            "Safe when done expertly",
          ],
          resultsTimeline: {
            initial: "Immediate",
            full: "1-2 weeks",
            duration: "12-18 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/filler/under eye filler/14.jpeg",
              alt: "Under eye results 1",
              label: "Dark Circles Reduced - 1 Week",
            },
            {
              src: "/images/filler/under eye filler/15.jpeg",
              alt: "Under eye results 2",
              label: "Hollows Filled - Immediate",
            },
            {
              src: "/images/filler/under eye filler/16.jpeg",
              alt: "Under eye results 3",
              label: "Refreshed Look - 2 Weeks",
            },
            {
              src: "/images/filler/under eye filler/17.jpeg",
              alt: "Under eye results 4",
              label: "Youthful Eyes - Full Results",
            },
          ],
          faqs: [
            {
              question: "Is this treatment safe?",
              answer:
                "Yes, when performed by experienced practitioners. The under-eye area requires advanced technique and precision.",
            },
            {
              question: "Will it look puffy?",
              answer:
                "Not when done correctly. We use specialized techniques to create smooth, natural results without puffiness.",
            },
          ],
        },

        // ── Filler Sub 3: Nasolabial Fold Filler ─────────────────
        {
          id: "nasolabial-filler",
          name: "Nasolabial Fold Filler",
          shortDescription:
            "Smooth smile lines from nose to mouth for a youthful appearance",
          longDescription:
            "Nasolabial fold filler softens the deep lines that run from the nose to the mouth corners, creating a smoother, more youthful mid-face.",
          price: "From £280",
          duration: "30 minutes",
          image: {
            src: "/images/filler/Nasolabial Fold Filler/20.jpeg",
            alt: "Nasolabial Filler Treatment",
          },
          benefits: [
            "Softens deep smile lines",
            "Restores mid-face volume",
            "Creates lifting effect",
            "Natural results",
            "Immediate improvement",
            "Long-lasting",
            "Minimal downtime",
            "Complements other treatments",
          ],
          resultsTimeline: {
            initial: "Immediate",
            full: "1 week",
            duration: "9-15 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/filler/Nasolabial Fold Filler/20.jpeg",
              alt: "Nasolabial results 1",
              label: "Deep Folds Softened - 1 Week",
            },
            {
              src: "/images/filler/Nasolabial Fold Filler/21.jpeg",
              alt: "Nasolabial results 2",
              label: "Mid-Face Lift - Immediate",
            },
            {
              src: "/images/filler/Nasolabial Fold Filler/22.jpeg",
              alt: "Nasolabial results 3",
              label: "Smooth Lines - 2 Weeks",
            },
            {
              src: "/images/filler/Nasolabial Fold Filler/23.jpeg",
              alt: "Nasolabial results 4",
              label: "Youthful Appearance - Full Results",
            },
          ],
          faqs: [
            {
              question: "Will this make me look puffy?",
              answer:
                "Not when done properly. We use precise placement to smooth lines without creating puffiness.",
            },
            {
              question: "Should I do cheeks instead?",
              answer:
                "Sometimes! Often, treating the cheeks provides a better overall result. We'll assess and recommend during consultation.",
            },
          ],
        },

        // ── Filler Sub 4: Chin Filler ─────────────────────────────
        // {
        //   id: "chin-filler",
        //   name: "Chin Filler",
        //   shortDescription:
        //     "Enhance chin projection and profile for better facial balance",
        //   longDescription:
        //     "Chin filler adds projection, improves profile, creates symmetry, and enhances overall facial harmony.",
        //   price: "From £320",
        //   duration: "30 minutes",
        //   // ── no image yet ──
        //   image: {
        //     src: "/public/images/filler/chain filler/31.jpeg",
        //     alt: "Chin Filler Treatment",
        //   },
        //   benefits: [
        //     "Adds chin projection",
        //     "Improves profile",
        //     "Creates symmetry",
        //     "Defines jawline",
        //     "Non-surgical",
        //     "Immediate results",
        //     "Reversible",
        //     "Long-lasting",
        //   ],
        //   resultsTimeline: {
        //     initial: "Immediate",
        //     full: "1-2 weeks",
        //     duration: "12-18 months",
        //   },
        //   beforeAfterGallery: [
        //     {
        //       src: "/public/images/filler/chain filler/31.jpeg",
        //       alt: "chin filler",
        //       label: "",
        //     },
        //     {
        //       src: "/public/images/filler/chain filler/32.jpeg",
        //       alt: "chin filler",
        //       label: "",
        //     },
        //     {
        //       src: "/public/images/filler/chain filler/33.jpeg",
        //       alt: "chin filler",
        //       label: "",
        //     },
        //   ],
        //   faqs: [
        //     {
        //       question: "Is this better than surgery?",
        //       answer:
        //         "For mild to moderate enhancement, yes! Filler provides immediate results without surgery or downtime.",
        //     },
        //     {
        //       question: "Can it fix asymmetry?",
        //       answer:
        //         "Absolutely! We can correct minor asymmetries and create better balance.",
        //     },
        //   ],
        // },

        // ── Filler Sub 5: Jawline Contouring ──────────────────────
        {
          id: "jawline-filler",
          name: "Jawline Contouring Filler",
          shortDescription:
            "Define and sculpt the jawline for a chiseled, elegant look",
          longDescription:
            "Jawline filler creates definition, enhances angles, and provides a non-surgical jaw sculpting solution.",
          price: "From £400",
          duration: "45 minutes",
          image: {
            src: "/images/filler/Jawline Contouring Filler/10.jpeg",
            alt: "Jawline Filler Treatment",
          },
          benefits: [
            "Creates defined jawline",
            "Enhances angles",
            "Improves profile",
            "Non-surgical contouring",
            "Immediate results",
            "Long-lasting",
            "Masculine or feminine options",
            "Boosts confidence",
          ],
          resultsTimeline: {
            initial: "Immediate",
            full: "1-2 weeks",
            duration: "12-18 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/filler/Jawline Contouring Filler/10.jpeg",
              alt: "Jawline results 1",
              label: "Defined Jawline - Immediate",
            },
            {
              src: "/images/filler/Jawline Contouring Filler/11.jpeg",
              alt: "Jawline results 2",
              label: "Sculpted Angles - 1 Week",
            },
            {
              src: "/images/filler/Jawline Contouring Filler/12.jpeg",
              alt: "Jawline results 3",
              label: "Profile Enhancement - 2 Weeks",
            },
            {
              src: "/images/filler/Jawline Contouring Filler/13.jpeg",
              alt: "Jawline results 4",
              label: "Chiseled Look - Full Results",
            },
          ],
          faqs: [
            {
              question: "How much filler is needed?",
              answer:
                "Typically 2-4ml depending on your goals and anatomy. We'll create a customized treatment plan during consultation.",
            },
            {
              question: "Does it help with jowls?",
              answer:
                "It can provide a lifting effect that minimizes jowls by creating definition along the jawline.",
            },
          ],
        },

        // ── Filler Sub 6: Cheek Filler ────────────────────────────
        // {
        //   id: "cheek-filler",
        //   name: "Cheek Filler",
        //   shortDescription:
        //     "Restore volume and lift for youthful, sculpted cheekbones",
        //   longDescription:
        //     "Cheek filler restores lost volume, creates lift, defines cheekbones, and rejuvenates the entire mid-face.",
        //   price: "From £350",
        //   duration: "40 minutes",
        //   // ── no image yet ──
        //   image: { src: "", alt: "Cheek Filler Treatment" },
        //   benefits: [
        //     "Restores cheek volume",
        //     "Creates natural lift",
        //     "Defines cheekbones",
        //     "Rejuvenates mid-face",
        //     "Improves smile lines",
        //     "Long-lasting results",
        //     "Natural appearance",
        //     "Minimal downtime",
        //   ],
        //   resultsTimeline: {
        //     initial: "Immediate",
        //     full: "1-2 weeks",
        //     duration: "12-18 months",
        //   },
        //   beforeAfterGallery: [],
        //   faqs: [
        //     {
        //       question: "Will I look puffy?",
        //       answer:
        //         "Not when done correctly! We create subtle, natural lift that enhances your features without looking overdone.",
        //     },
        //     {
        //       question: "Can this help with sagging?",
        //       answer:
        //         "Yes! By restoring volume in the cheeks, we create a lifting effect that improves lower face sagging.",
        //     },
        //   ],
        // },

        // ── Filler Sub 7: Chain Filler ────────────────────────────
        {
          id: "chain-filler",
          name: "Chain Filler",
          shortDescription:
            "Precise filler technique for smooth, natural contouring",
          longDescription:
            "Chain filler uses a linked injection technique to distribute filler evenly across treatment areas, creating seamless, natural-looking volume and contour.",
          price: "From £280",
          duration: "30-40 minutes",
          image: {
            src: "/images/filler/chain filler/31.jpeg",
            alt: "Chain Filler Treatment",
          },
          benefits: [
            "Even filler distribution",
            "Natural-looking results",
            "Smooth contouring",
            "Minimal swelling",
            "Long-lasting effects",
            "Tailored technique",
            "No downtime",
            "Immediate results",
          ],
          resultsTimeline: {
            initial: "Immediate",
            full: "1-2 weeks",
            duration: "9-15 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/filler/chain filler/31.jpeg",
              alt: "Chain filler results 1",
              label: "Smooth Contour - Immediate",
            },
            {
              src: "/images/filler/chain filler/32.jpeg",
              alt: "Chain filler results 2",
              label: "Natural Volume - 1 Week",
            },
            {
              src: "/images/filler/chain filler/33.jpeg",
              alt: "Chain filler results 3",
              label: "Full Results - 2 Weeks",
            },
          ],
          faqs: [
            {
              question: "What makes chain filler different?",
              answer:
                "The chain technique distributes filler in a linked pattern for a more even, natural result compared to single-point injections.",
            },
            {
              question: "How long do results last?",
              answer:
                "Typically 9-15 months depending on the area treated and individual metabolism.",
            },
          ],
        },

        // ── Filler Sub 8: Hair Filler ─────────────────────────────
        {
          id: "hair-filler",
          name: "Hair Filler",
          shortDescription:
            "Stimulate hair growth and restore scalp health with targeted injections",
          longDescription:
            "Hair filler delivers a nourishing cocktail of vitamins, minerals, and hyaluronic acid directly into the scalp to strengthen hair follicles, reduce hair loss, and promote healthy regrowth.",
          price: "From £200",
          duration: "30 minutes",
          image: {
            src: "/images/filler/hair filler/1.jpeg",
            alt: "Hair Filler Treatment",
          },
          benefits: [
            "Stimulates hair growth",
            "Strengthens hair follicles",
            "Reduces hair loss",
            "Improves scalp health",
            "Adds shine and thickness",
            "Minimal discomfort",
            "No downtime",
            "Natural results",
          ],
          resultsTimeline: {
            initial: "4-6 weeks",
            full: "3-6 months",
            duration: "Long-lasting with maintenance",
            sessions: "3-4 sessions recommended",
          },
          beforeAfterGallery: [
            {
              src: "/images/filler/hair filler/1.jpeg",
              alt: "Hair filler results 1",
              label: "Hair Growth - 6 Weeks",
            },
            {
              src: "/images/filler/hair filler/2.jpeg",
              alt: "Hair filler results 2",
              label: "Thickness Improved - 3 Sessions",
            },
            {
              src: "/images/filler/hair filler/3.jpeg",
              alt: "Hair filler results 3",
              label: "Scalp Health - 2 Months",
            },
            {
              src: "/images/filler/hair filler/4.jpeg",
              alt: "Hair filler results 4",
              label: "Regrowth - 4 Sessions",
            },
            {
              src: "/images/filler/hair filler/5.jpeg",
              alt: "Hair filler results 5",
              label: "Full Results - 6 Months",
            },
          ],
          faqs: [
            {
              question: "Who is this suitable for?",
              answer:
                "Anyone experiencing hair thinning, hair loss, or poor scalp health. Suitable for both men and women.",
            },
            {
              question: "How many sessions do I need?",
              answer:
                "Typically 3-4 sessions spaced 4 weeks apart, followed by maintenance every 3-6 months.",
            },
          ],
        },
      ], // end fillers subTreatments
    },

    // ============================================================
    // 3. SKIN BOOSTERS
    // ============================================================
    {
      id: "skin-boosters",
      name: "Skin Boosters",
      category: "skin-care",
      shortDescription: "Deep hydration and radiance for glowing, healthy skin",
      longDescription:
        "Skin boosters deliver intense hydration deep into the skin, improving texture, elasticity, and overall radiance for a natural glow.",
      image: {
        src: "/images/skin-booster/1.jpeg",
        alt: "Skin Boosters Treatment",
      },
      price: "From £180",
      duration: "30 minutes",
      featured: true,
      badge: "Hydrating",

      benefits: [
        "Intense hydration",
        "Improved skin texture",
        "Natural radiance",
        "Fine line reduction",
        "Long-lasting results",
        "Minimal downtime",
        "Suitable for all skin types",
        "Complements other treatments",
      ],

      resultsTimeline: {
        initial: "Immediate glow",
        full: "2-4 weeks",
        duration: "6 months",
        sessions: "3 sessions recommended",
      },

      beforeAfterGallery: [
        {
          src: "/images/skin-booster/1.jpeg",
          alt: "Skin booster results 1",
          label: "Hydrated Glow - 4 Weeks",
        },
        {
          src: "/images/skin-booster/2.jpeg",
          alt: "Skin booster results 2",
          label: "Smooth Texture - 3 Sessions",
        },
        {
          src: "/images/skin-booster/3.jpeg",
          alt: "Skin booster results 3",
          label: "Radiant Skin - 6 Weeks",
        },
        {
          src: "/images/skin-booster/4.jpeg",
          alt: "Skin booster results 4",
          label: "Plump Skin - Full Results",
        },
        {
          src: "/images/skin-booster/5.jpeg",
          alt: "Skin booster results 5",
          label: "Natural Glow - Full Effect",
        },
      ],

      faqs: [
        {
          question: "How many sessions do I need?",
          answer:
            "Typically 3 sessions spaced 2-4 weeks apart for optimal results, followed by maintenance every 6 months.",
        },
        {
          question: "Is there downtime?",
          answer:
            "Minimal. You may have slight redness for a few hours, but can return to normal activities immediately.",
        },
        {
          question: "Who is this suitable for?",
          answer:
            "Anyone looking to improve skin hydration, texture, and radiance. Suitable for all skin types and ages.",
        },
      ],

      subTreatments: [], // no sub-treatments
    },

    // ============================================================
    // 4. MICRONEEDLING
    // ============================================================
    {
      id: "microneedling",
      name: "Microneedling",
      category: "skin-care",
      shortDescription:
        "Stimulate collagen production for smoother, firmer, more youthful skin",
      longDescription:
        "Microneedling creates controlled micro-injuries to stimulate your skin's natural healing process, boosting collagen and elastin production for transformative results.",
      image: {
        src: "/images/micronedling/1.jpeg",
        alt: "Microneedling Treatment",
      },
      price: "From £150",
      duration: "45 minutes",
      featured: false,

      benefits: [
        "Reduces fine lines and wrinkles",
        "Improves skin texture",
        "Minimizes pore size",
        "Fades acne scars",
        "Safe for all skin types",
        "Natural results",
        "Minimal downtime",
        "Long-lasting improvements",
      ],

      resultsTimeline: {
        initial: "1-2 weeks",
        full: "3-6 months",
        duration: "Long-lasting",
        sessions: "3-6 sessions recommended",
      },

      beforeAfterGallery: [
        {
          src: "/images/micronedling/1.jpeg",
          alt: "Microneedling results 1",
          label: "Skin Texture - Before & After",
        },
        {
          src: "/images/micronedling/2.jpeg",
          alt: "Microneedling results 2",
          label: "Acne Scars - 3 Sessions",
        },
        {
          src: "/images/micronedling/3.jpeg",
          alt: "Microneedling results 3",
          label: "Fine Lines - 4 Sessions",
        },
        {
          src: "/images/micronedling/4.jpeg",
          alt: "Microneedling results 4",
          label: "Pore Size - 5 Sessions",
        },
        {
          src: "/images/micronedling/5.jpeg",
          alt: "Microneedling results 5",
          label: "Overall Glow - 3 Sessions",
        },
        {
          src: "/images/micronedling/6.jpeg",
          alt: "Microneedling results 6",
          label: "Radiant Skin - 6 Sessions",
        },
        {
          src: "/images/micronedling/7.jpeg",
          alt: "Microneedling results 7",
          label: "Smooth Texture - 4 Sessions",
        },
        {
          src: "/images/micronedling/8.jpeg",
          alt: "Microneedling results 8",
          label: "Collagen Boost - 5 Sessions",
        },
        {
          src: "/images/micronedling/9.jpeg",
          alt: "Microneedling results 9",
          label: "Youthful Skin - 6 Sessions",
        },
        {
          src: "/images/micronedling/10.jpeg",
          alt: "Microneedling results 10",
          label: "Transformed - Full Results",
        },
        {
          src: "/images/micronedling/11.jpeg",
          alt: "Microneedling results 11",
          label: "Final Effect - 6 Months",
        },
        {
          src: "/images/micronedling/IMG_2084.JPG.jpeg",
          alt: "Microneedling results 12",
          label: "Before & After Comparison",
        },
        {
          src: "/images/micronedling/IMG_2085.JPG.jpeg",
          alt: "Microneedling results 13",
          label: "Full Transformation",
        },
      ],

      faqs: [
        {
          question: "Does it hurt?",
          answer:
            "We apply numbing cream before treatment, so most clients feel only mild pressure. Discomfort is minimal.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Redness lasts 1-3 days. Most clients return to work the next day with minimal makeup.",
        },
        {
          question: "How many sessions do I need?",
          answer:
            "Typically 3-6 sessions spaced 4-6 weeks apart for optimal results, depending on your concerns.",
        },
      ],

      // ──────────────────────────────────────
      // MICRONEEDLING SUB-TREATMENTS
      // ──────────────────────────────────────
      subTreatments: [
        // ── Microneedling Sub 1: PRP ──────────────────────────────
        {
          id: "microneedling-prp",
          name: "Microneedling + PRP",
          shortDescription:
            "Enhanced results with your own platelet-rich plasma",
          longDescription:
            "Combining microneedling with PRP (your own platelet-rich plasma) amplifies results, accelerating healing and boosting collagen production.",
          price: "From £300",
          duration: "60 minutes",
          // ── shares microneedling images until dedicated PRP images are added ──
          image: {
            src: "/images/micronedling/1.jpeg",
            alt: "Microneedling + PRP Treatment",
          },
          benefits: [
            "Enhanced collagen production",
            "Faster healing",
            "More dramatic results",
            "Natural and safe",
            "Reduces scarring",
            "Improves texture significantly",
            "Long-lasting improvements",
            "Suitable for all skin types",
          ],
          resultsTimeline: {
            initial: "1 week",
            full: "3-6 months",
            duration: "Long-lasting",
            sessions: "3-4 sessions recommended",
          },
          beforeAfterGallery: [
            {
              src: "/images/micronedling/2.jpeg",
              alt: "PRP results 1",
              label: "Dramatic Improvement - 3 Sessions",
            },
            {
              src: "/images/micronedling/3.jpeg",
              alt: "PRP results 2",
              label: "Scar Reduction - 4 Sessions",
            },
            {
              src: "/images/micronedling/4.jpeg",
              alt: "PRP results 3",
              label: "Glowing Skin - 6 Weeks",
            },
            {
              src: "/images/micronedling/5.jpeg",
              alt: "PRP results 4",
              label: "Transformed Texture - Full Results",
            },
          ],
          faqs: [
            {
              question: "What is PRP?",
              answer:
                "Platelet-Rich Plasma is derived from your own blood. It contains growth factors that accelerate healing and tissue regeneration.",
            },
            {
              question: "Is it safe?",
              answer:
                "Absolutely! Since it's your own blood, there's no risk of allergic reaction or rejection. It's completely natural and safe.",
            },
          ],
        },
      ], // end microneedling subTreatments
    },

    // ============================================================
    // 5. MESOTHERAPY
    // ============================================================
    {
      id: "mesotherapy",
      name: "Mesotherapy",
      category: "skin-care",
      shortDescription:
        "Nutrient-rich injections for skin rejuvenation and targeted treatment",
      longDescription:
        "Mesotherapy delivers vitamins, minerals, and hyaluronic acid directly into the skin for rejuvenation, brightening, and targeted improvement.",
      image: {
        src: "/public/images/Mesotherapy.jpg",
        alt: "Mesotherapy Treatment",
      },
      price: "From £150",
      duration: "30 minutes",
      featured: false,

      benefits: [
        "Brightens skin tone",
        "Reduces pigmentation",
        "Improves texture",
        "Hydrates deeply",
        "Minimal downtime",
        "Natural glow",
        "Customizable cocktails",
        "Safe for all skin types",
      ],

      resultsTimeline: {
        initial: "1-2 sessions",
        full: "After course",
        duration: "Several months",
        sessions: "4-6 sessions recommended",
      },

      // ── note: image 3 is used for under-eye sub-treatment card ──
      beforeAfterGallery: [
        {
          src: "/images/misotrops/1.jpeg",
          alt: "Mesotherapy results 1",
          label: "Brightness - 4 Sessions",
        },
        {
          src: "/images/misotrops/2.jpeg",
          alt: "Mesotherapy results 2",
          label: "Even Tone - 3 Sessions",
        },
        {
          src: "/images/misotrops/4.jpeg",
          alt: "Mesotherapy results 3",
          label: "Healthy Skin - Full Result",
        },
      ],

      faqs: [
        {
          question: "What's in mesotherapy?",
          answer:
            "A customized blend of vitamins, minerals, amino acids, and hyaluronic acid tailored to your skin's specific needs.",
        },
        {
          question: "How many sessions do I need?",
          answer:
            "Typically 4-6 sessions spaced 1-2 weeks apart, followed by maintenance every few months.",
        },
      ],

      // ──────────────────────────────────────
      // MESOTHERAPY SUB-TREATMENTS  (2 total)
      // ──────────────────────────────────────
      subTreatments: [
        // ── Mesotherapy Sub 1: Under Eye ─────────────────────────
        {
          id: "under-eye-mesotherapy",
          name: "Under Eye Mesotherapy",
          shortDescription:
            "Brighten and rejuvenate the delicate under-eye area",
          longDescription:
            "Specialized mesotherapy for the under-eye area targets dark circles, fine lines, and crepey skin with gentle, effective treatment.",
          price: "From £130",
          duration: "20 minutes",
          // ── misotrops/3.jpeg is the under-eye specific image ──
          image: {
            src: "/public/images/misotrops/1.jpeg",
            alt: "Under Eye Mesotherapy Treatment",
          },
          benefits: [
            "Reduces dark circles",
            "Brightens under-eye area",
            "Improves crepey texture",
            "Hydrates delicate skin",
            "Gentle treatment",
            "No downtime",
            "Safe and effective",
            "Complements other treatments",
          ],
          resultsTimeline: {
            initial: "2 sessions",
            full: "4-6 sessions",
            duration: "3-6 months",
          },
          beforeAfterGallery: [
            {
              src: "/public/images/misotrops/1.jpeg",

              alt: "Under eye meso results 1",
              label: "Brighter Eyes - Before & After",
            },
            {
              src: "/public/images/misotrops/2.jpeg",

              alt: "Under eye meso results 1",
              label: "Brighter Eyes - Before & After",
            },
            {
              src: "/public/images/misotrops/3.jpeg",

              alt: "Under eye meso results 1",
              label: "Brighter Eyes - Before & After",
            },
          ],
          faqs: [
            {
              question: "Is this better than filler?",
              answer:
                "Different! Filler adds volume for hollows, while mesotherapy brightens and improves skin quality. Sometimes we combine both.",
            },
            {
              question: "Is it safe for sensitive skin?",
              answer:
                "Yes! The treatment is gentle and specifically formulated for the delicate under-eye area.",
            },
          ],
        },

        // ── Mesotherapy Sub 2: Hand Mesotherapy ──────────────────
        {
          id: "hand-mesotherapy",
          name: "Hand Mesotherapy",
          shortDescription: "Rejuvenate aging hands for a youthful appearance",
          longDescription:
            "Hand mesotherapy restores volume, reduces age spots, improves texture, and creates younger-looking hands.",
          price: "From £150",
          duration: "25 minutes",
          image: {
            src: "/images/misotrophy-hands/1.jpeg",
            alt: "Hand Mesotherapy Treatment",
          },
          benefits: [
            "Restores volume",
            "Fades age spots",
            "Improves texture",
            "Hydrates skin",
            "Reduces vein visibility",
            "Natural results",
            "Minimal downtime",
            "Long-lasting",
          ],
          resultsTimeline: {
            initial: "2 sessions",
            full: "4 sessions",
            duration: "6-12 months",
          },
          beforeAfterGallery: [
            {
              src: "/images/misotrophy-hands/1.jpeg",
              alt: "Hand meso results 1",
              label: "Volume Restored - 3 Sessions",
            },
            {
              src: "/images/misotrophy-hands/2.jpeg",
              alt: "Hand meso results 2",
              label: "Faded Spots - 4 Sessions",
            },
            {
              src: "/images/misotrophy-hands/3.jpeg",
              alt: "Hand meso results 3",
              label: "Youthful Hands - Full Result",
            },
          ],
          faqs: [
            {
              question: "How many sessions do I need?",
              answer:
                "Typically 3-4 sessions spaced 2-3 weeks apart for optimal results.",
            },
            {
              question: "Can this replace hand filler?",
              answer:
                "Sometimes! For mild volume loss, mesotherapy works beautifully. Severe cases may need filler as well.",
            },
          ],
        },
      ], // end mesotherapy subTreatments
    },

    // ============================================================
    // 6. NON-SURGICAL RHINOPLASTY
    // ============================================================
    {
      id: "non-surgical-rhinoplasty",
      name: "Non-Surgical Rhinoplasty",
      category: "injectable",
      shortDescription:
        "Reshape your nose without surgery using dermal fillers",
      longDescription:
        "Non-surgical rhinoplasty uses dermal fillers to smooth bumps, lift the tip, straighten the bridge, and create a more balanced nose profile—all without surgery.",
      image: {
        src: "/images/non-surgecal/1.jpeg",
        alt: "Non-Surgical Rhinoplasty Treatment",
      },
      price: "From £350",
      duration: "30 minutes",
      featured: true,
      badge: "Instant",

      benefits: [
        "No surgery or anesthesia",
        "Immediate results",
        "Minimal downtime",
        "Reversible if desired",
        "Natural appearance",
        "Lasts 9-18 months",
        "Safe when done expertly",
        "Corrects minor imperfections",
      ],

      resultsTimeline: {
        initial: "Immediate",
        full: "1-2 weeks",
        duration: "9-18 months",
      },

      beforeAfterGallery: [
        {
          src: "/images/non-surgecal/1.jpeg",
          alt: "Rhinoplasty results 1",
          label: "Bridge Smoothing - Immediate",
        },
        {
          src: "/images/non-surgecal/2.jpeg",
          alt: "Rhinoplasty results 2",
          label: "Tip Lift - Same Day",
        },
        {
          src: "/images/non-surgecal/3.jpeg",
          alt: "Rhinoplasty results 3",
          label: "Profile Enhancement - 1 Week",
        },
        {
          src: "/images/non-surgecal/4.jpeg",
          alt: "Rhinoplasty results 4",
          label: "Balanced Appearance - 2 Weeks",
        },
        {
          src: "/images/non-surgecal/5.jpeg",
          alt: "Rhinoplasty results 5",
          label: "Natural Result - 3 Weeks",
        },
        {
          src: "/images/non-surgecal/6.jpeg",
          alt: "Rhinoplasty results 6",
          label: "Full Effect - Final",
        },
      ],

      faqs: [
        {
          question: "Can it replace surgery?",
          answer:
            "For minor corrections like bumps, asymmetry, or tip refinement, yes. For major reshaping or reduction, surgical rhinoplasty is needed.",
        },
        {
          question: "Is it safe?",
          answer:
            "Yes, when performed by experienced practitioners using approved fillers and proper technique. The nose requires advanced expertise.",
        },
        {
          question: "What if I don't like it?",
          answer:
            "Hyaluronic acid fillers are reversible! If you're unhappy, we can dissolve them immediately.",
        },
      ],

      subTreatments: [], // no sub-treatments
    },

    // ============================================================
    // 7. FAT DISSOLVING  (Lemon Bottle)
    // ============================================================
    {
      id: "fat-dissolving",
      name: "Fat Dissolving (Lemon Bottle)",
      category: "body-contouring",
      shortDescription:
        "Target stubborn fat without surgery for a contoured body",
      longDescription:
        "Fat dissolving injections break down stubborn fat cells, which are then naturally eliminated by your body for permanent fat reduction.",
      image: {
        src: "/images/lemon/1.jpeg",
        alt: "Fat Dissolving Treatment",
      },
      price: "From £150",
      duration: "30 minutes",
      featured: true,
      badge: "Popular",

      benefits: [
        "Non-surgical solution",
        "Targets stubborn fat",
        "No downtime",
        "Permanent results with lifestyle",
        "Natural body contouring",
        "Quick sessions",
        "Safe and effective",
        "Visible results in weeks",
      ],

      resultsTimeline: {
        initial: "2-3 weeks",
        full: "After 3-5 sessions",
        duration: "Permanent with healthy lifestyle",
      },

      beforeAfterGallery: [
        {
          src: "/images/lemon/1.jpeg",
          alt: "Fat dissolving results 1",
          label: "Double Chin - 3 Sessions",
        },
        {
          src: "/images/lemon/2.jpeg",
          alt: "Fat dissolving results 2",
          label: "Abdomen - 5 Sessions",
        },
        {
          src: "/images/lemon/3.jpeg",
          alt: "Fat dissolving results 3",
          label: "Thighs - 4 Sessions",
        },
        {
          src: "/images/lemon/4.jpeg",
          alt: "Fat dissolving results 4",
          label: "Arms - 3 Sessions",
        },
        {
          src: "/images/lemon/5.jpeg",
          alt: "Fat dissolving results 5",
          label: "Full Results - 5 Sessions",
        },
      ],

      faqs: [
        {
          question: "Does it hurt?",
          answer:
            "Mild discomfort during injection. We use fine needles and numbing cream if needed. Most clients tolerate it very well.",
        },
        {
          question: "How many sessions?",
          answer:
            "Typically 3-5 sessions spaced 3-4 weeks apart for optimal results, depending on the area and amount of fat.",
        },
        {
          question: "Is it permanent?",
          answer:
            "Yes! Once fat cells are destroyed, they don't regenerate. Maintain results with a healthy lifestyle.",
        },
      ],

      subTreatments: [], // no sub-treatments
    },
  ], // end treatments array

  // ─────────────────────────────────────────
  // CTA  (bottom of treatments listing page)
  // ─────────────────────────────────────────
  cta: {
    title: "Ready to Begin Your Transformation?",
    description: "Book a free consultation with our expert team.",
    buttonText: "Book Free Consultation",
    buttonLink: "/contact",
  },

  // ─────────────────────────────────────────
  // WHY CHOOSE US
  // ─────────────────────────────────────────
  whyChooseUs: [
    "CPD-certified specialists",
    "Premium, approved products",
    "Natural-looking results",
    "Safe, professional environment",
    "Personalised consultations",
  ],
}; // end treatmentsData

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export const getTreatmentsByCategory = (categoryId) => {
  if (categoryId === "all") return treatmentsData.treatments;
  return treatmentsData.treatments.filter((t) => t.category === categoryId);
};

export const getFeaturedTreatments = () => {
  return treatmentsData.treatments.filter((t) => t.featured);
};

export const getTreatmentById = (parentId, subId = null) => {
  if (!subId) {
    const mainTreatment = treatmentsData.treatments.find(
      (t) => t.id === parentId,
    );
    if (mainTreatment) return mainTreatment;

    for (const treatment of treatmentsData.treatments) {
      if (treatment.subTreatments?.length > 0) {
        const sub = treatment.subTreatments.find((st) => st.id === parentId);
        if (sub) {
          return {
            ...sub,
            isSubTreatment: true,
            parentId: treatment.id,
            parentName: treatment.name,
            category: treatment.category,
          };
        }
      }
    }
    return null;
  }

  const parent = treatmentsData.treatments.find((t) => t.id === parentId);
  if (!parent?.subTreatments) return null;

  const sub = parent.subTreatments.find((st) => st.id === subId);
  if (!sub) return null;

  return {
    ...sub,
    isSubTreatment: true,
    parentId: parent.id,
    parentName: parent.name,
    category: parent.category,
  };
};

export const getSubTreatments = (parentId) => {
  const treatment = treatmentsData.treatments.find((t) => t.id === parentId);
  return treatment?.subTreatments || [];
};

export default treatmentsData;
