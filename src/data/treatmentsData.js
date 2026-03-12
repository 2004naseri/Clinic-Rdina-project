// src/data/treatmentsData.js
// ========================================
// COMPLETE TREATMENTS DATA - FULLY POPULATED
// Ready to use - just replace image URLs later
// ========================================

export const treatmentsData = {
  hero: {
    badge: "Our Services",
    title: "Advanced Aesthetic Treatments",
    description:
      "Discover our range of professional treatments designed to enhance your natural beauty",
    image: {
      src: "/public/images/DermalFillers.webp",
      alt: "Radina Clinic",
    },
  },

  categories: [
    { id: "all", name: "All Treatments" },
    { id: "injectable", name: "Injectable Treatments" },
    { id: "skin-care", name: "Skin Care" },
    { id: "body-contouring", name: "Body Contouring" },
  ],

  treatments: [
    // ==========================================
    // 1. BOTOX - COMPLETE WITH ALL 8 SUB-TREATMENTS
    // ==========================================
    {
      id: "botox",
      name: "Botox Anti-Wrinkle Treatments",
      category: "injectable",
      shortDescription:
        "FDA-approved anti-wrinkle injections for natural-looking results",
      longDescription:
        "Botox is the world's most trusted anti-wrinkle treatment, used by millions to smooth lines, prevent wrinkles, and achieve a refreshed, youthful appearance without surgery or downtime.",
      image: {
        src: "/public/images/web pic/botox2.jpg",
        alt: "Botox Treatment",
        placeholder: "B",
      },
      price: "From £150",
      duration: "15-30 minutes",
      featured: true,
      badge: "Most Popular",

      sections: [
        {
          title: "What is Botox?",
          content:
            "Botox is a purified protein that temporarily relaxes facial muscles responsible for expression lines. It's FDA-approved, clinically proven, and delivers natural-looking results that enhance your features without changing your appearance.",
          image: {
            src: "/public/images/botox.jpg",
            alt: "Botox explanation",
          },
          layout: "image-right",
        },
        {
          title: "Safe & Proven",
          content:
            "With over 20 years of clinical use and millions of treatments performed worldwide, Botox has an exceptional safety profile. Our certified specialists use precise techniques to ensure optimal results.",
          image: {
            src: "/public/images/web pic/botox1.jpg",
            alt: "Safe Botox treatment",
            // placeholder: "B2",
          },
          layout: "image-left",
        },
      ],

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

      beforeAfterGallery: [
        {
          src: "/public/images/botox/forhead lines botox/26.jpeg",
          alt: "Botox full face results",
          label: "Forhead Treatment",
        },
        {
          src: "/public/images/botox/forhead lines botox/25.jpeg",
          alt: "Botox forehead results",
          label: "Forehead & Frown Lines ",
        },
        {
          src: "/public/images/botox/CROW’S FEET BOTOX/1.jpeg",
          alt: "Botox eye area results",
          label: "Crow's Feet ",
        },
        {
          src: "/public/images/botox/GUMMY SMILE BOTOX/20.jpeg",
          alt: "Natural Botox results",
          label: "Gummy Smile Botox",
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

      subTreatments: [
        // SUB 1: FOREHEAD BOTOX
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
            src: "/public/images/botox/forhead-botox.jpg",
            alt: "Forehead Botox Treatment",
            // placeholder: "FH",
          },

          sections: [
            {
              title: "Understanding Forehead Lines",
              content:
                "Forehead lines develop from years of facial expressions—raising eyebrows, concentrating, showing surprise. Over time, these repeated muscle movements create permanent horizontal creases that can make you appear older or tired.",
              image: {
                src: "/public/images/botox/forhead lines botox/forhead-botox.jpg",
                // placeholder: "FH1",
              },
              layout: "image-right",
            },
            {
              title: "Natural Movement Preserved",
              content:
                "Our technique uses precise dosing to soften lines while maintaining natural forehead movement. You'll still raise your eyebrows and show emotions normally—just without the deep wrinkles.",
              image: {
                src: "/public/images/botox/forhead lines botox/forhead-botox-2.jpg",
                alt: "Natural forehead results",
                // placeholder: "FH2",
              },
              layout: "image-left",
            },
            {
              title: "Quick & Comfortable",
              content:
                "Treatment takes just 10-15 minutes with minimal discomfort. Most clients return to work immediately after their appointment.",
              image: {
                src: "/public/images/botox/forhead lines botox/forhead-botox-3.webp",
                alt: "Quick treatment",
                // placeholder: "FH3",
              },
              layout: "image-right",
            },
          ],

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
              src: "/public/images/botox/forhead lines botox/forhead-botox.jpg",
              alt: "Forehead Botox results 1",
              label: "Light Lines - 2 Weeks Post Treatment",
            },
            {
              src: "/public/images/botox/forhead lines botox/24.jpeg",

              alt: "Forehead Botox results 2",
              label: "Moderate Lines - 3 Weeks",
            },
            {
              src: "/public/images/botox/forhead lines botox/25.jpeg",

              alt: "Forehead Botox results 3",
              label: "Deep Lines - 4 Weeks Post Treatment",
            },
            {
              src: "/public/images/botox/forhead lines botox/26.jpeg",
              alt: "Forehead Botox results 4",
              label: "Natural Look - Full Results",
            },
            // {
            //   src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=1200&q=80",
            //   alt: "Forehead Botox results 5",
            //   label: "Refreshed Appearance - 2 Weeks",
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

        // SUB 2: GLABELLAR BOTOX
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
            // placeholder: "GB",
          },

          sections: [
            {
              title: "The Problem: Angry Resting Face",
              content:
                "Even when you're relaxed and happy, these vertical lines can make you appear stern, worried, or unapproachable. They're one of the first aging signs people notice and often the most bothersome.",
              image: {
                src: "/public/images/botox/GLABELLAR BOTOX/1.jpeg",
                alt: "Frown lines explanation",
                placeholder: "GB1",
              },
              layout: "image-right",
            },
            {
              title: "Dramatic Transformation",
              content:
                "This is one of our most transformative treatments. Clients consistently report feeling more confident and approachable after treating their frown lines. The difference is immediate and remarkable.",
              image: {
                src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=800&q=80",
                alt: "Confidence boost",
                placeholder: "GB2",
              },
              layout: "image-left",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
              alt: "Glabellar results 1",
              label: "Moderate Lines - 1 Week Post Treatment",
            },
            {
              src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=80",
              alt: "Glabellar results 2",
              label: "Deep Frown Lines - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1200&q=80",
              alt: "Glabellar results 3",
              label: "Complete Smoothing - 10 Days",
            },
            {
              src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80",
              alt: "Glabellar results 4",
              label: "Relaxed Appearance - Full Results",
            },
            {
              src: "https://images.unsplash.com/photo-1598440947619-2c35fc9af908?w=1200&q=80",
              alt: "Glabellar results 5",
              label: "Confident Look - 3 Weeks",
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
              question: "Is this the most dramatic Botox treatment?",
              answer:
                "Many clients find this area provides the most noticeable transformation, as it directly impacts how others perceive your mood and demeanor.",
            },
          ],
        },

        // SUB 3: CROW'S FEET BOTOX
        {
          id: "crows-feet-botox",
          name: "Crow's Feet Botox",
          shortDescription:
            "Smooth fine lines around the eyes for a bright, youthful sparkle",
          longDescription:
            "Crow's feet are the fine lines that radiate from the outer corners of your eyes when you smile or squint. While they're natural, treating them can take years off your appearance while maintaining your beautiful smile.",
          price: "From £150",
          duration: "10-15 minutes",
          image: {
            src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80",
            alt: "Crow's Feet Botox",
            placeholder: "CF",
          },

          sections: [
            {
              title: "Keep Your Smile, Lose the Lines",
              content:
                "Crow's feet treatment doesn't stop you from smiling—it prevents the deep creases from forming. Your smile remains genuine, warm, and beautiful, just smoother around the edges.",
              image: {
                src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
                alt: "Maintaining smile",
                placeholder: "CF1",
              },
              layout: "image-right",
            },
            {
              title: "Brightens the Entire Eye Area",
              content:
                "Smoothing crow's feet creates an instant brightening effect around the eyes, making you look more awake, refreshed, and youthful without surgery or downtime.",
              image: {
                src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
                alt: "Bright eyes",
                placeholder: "CF2",
              },
              layout: "image-left",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
              alt: "Crow's feet results 1",
              label: "Smile Lines - 2 Weeks Post Treatment",
            },
            {
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80",
              alt: "Crow's feet results 2",
              label: "Eye Wrinkles - 10 Days",
            },
            {
              src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=80",
              alt: "Crow's feet results 3",
              label: "Youthful Eyes - 3 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80",
              alt: "Crow's feet results 4",
              label: "Natural Smile - Full Results",
            },
            {
              src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80",
              alt: "Crow's feet results 5",
              label: "Bright Eyes - 2 Weeks",
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
              question: "Why do results last slightly less here?",
              answer:
                "The muscles around the eyes are active throughout the day (blinking, smiling), so Botox may wear off slightly faster (3-4 months vs 4-6 months in other areas).",
            },
          ],
        },

        // SUB 4: GUMMY SMILE
        {
          id: "gummy-smile-botox",
          name: "Gummy Smile Botox",
          shortDescription:
            "Reduce excessive gum display for a balanced, confident smile",
          longDescription:
            "A gummy smile occurs when excessive upper gum tissue shows when you smile. While not a medical concern, many feel self-conscious about it. Botox provides a simple, non-surgical solution.",
          price: "From £120",
          duration: "10 minutes",
          image: {
            src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
            alt: "Gummy Smile Treatment",
            placeholder: "GS",
          },

          sections: [
            {
              title: "Simple, Effective Solution",
              content:
                "This quick treatment relaxes the muscle that lifts your upper lip too high, revealing less gum tissue when you smile. It's a game-changer for confidence.",
              image: {
                src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
                alt: "Smile solution",
                placeholder: "GS1",
              },
              layout: "image-right",
            },
          ],

          benefits: [
            "Reduces visible gum tissue",
            "Creates balanced, proportional smile",
            "Boosts confidence dramatically",
            "Non-surgical alternative to surgery",
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
              src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=1200&q=80",
              alt: "Gummy smile results 1",
              label: "Balanced Smile - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
              alt: "Gummy smile results 2",
              label: "Confidence Boost - 10 Days",
            },
            {
              src: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=1200&q=80",
              alt: "Gummy smile results 3",
              label: "Natural Smile - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
              alt: "Gummy smile results 4",
              label: "Beautiful Results - 3 Weeks",
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

        // SUB 5: NECK BOTOX
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
            src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
            alt: "Neck Botox Treatment",
            placeholder: "NB",
          },

          sections: [
            {
              title: "Smooth Vertical Bands",
              content:
                "The platysma muscle creates visible vertical bands in the neck as we age. Botox relaxes these bands, creating a smoother, more elegant neck profile.",
              image: {
                src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
                alt: "Neck bands",
                placeholder: "NB1",
              },
              layout: "image-right",
            },
            {
              title: "Subtle Lifting Effect",
              content:
                "By relaxing the downward-pulling muscles, the neck appears slightly lifted and more defined—a non-surgical mini neck lift.",
              image: {
                src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
                alt: "Neck lifting",
                placeholder: "NB2",
              },
              layout: "image-left",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
              alt: "Neck Botox results 1",
              label: "Smooth Bands - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1598440947619-2c35fc9af908?w=1200&q=80",
              alt: "Neck Botox results 2",
              label: "Lifted Appearance - 3 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
              alt: "Neck Botox results 3",
              label: "Defined Jawline - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80",
              alt: "Neck Botox results 4",
              label: "Elegant Profile - Full Results",
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

        // SUB 6: NEFERTITI LIFT
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
            src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=80",
            alt: "Nefertiti Lift",
            placeholder: "NL",
          },

          sections: [
            {
              title: "Sculpted Jawline Definition",
              content:
                "By strategically placing Botox along the jawline, we relax downward-pulling muscles, allowing the upward-lifting muscles to create a more defined, sculpted appearance.",
              image: {
                src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80",
                alt: "Jawline definition",
                placeholder: "NL1",
              },
              layout: "image-right",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
              alt: "Nefertiti lift results 1",
              label: "Jawline Definition - 3 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=80",
              alt: "Nefertiti lift results 2",
              label: "Neck Smoothing - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
              alt: "Nefertiti lift results 3",
              label: "Elegant Profile - 4 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
              alt: "Nefertiti lift results 4",
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

        // SUB 7: SMOKER LINES
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
            src: "https://images.unsplash.com/photo-1552693673-1bf958298935?w=1200&q=80",
            alt: "Smoker Lines Treatment",
            placeholder: "SL",
          },

          sections: [
            {
              title: "Soften Lipstick Lines",
              content:
                "These vertical lines can cause lipstick to bleed and make the mouth area look aged. Botox smooths them while maintaining natural lip movement.",
              image: {
                src: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=800&q=80",
                alt: "Smooth lip lines",
                placeholder: "SL1",
              },
              layout: "image-right",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=1200&q=80",
              alt: "Smoker lines results 1",
              label: "Smooth Lips - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
              alt: "Smoker lines results 2",
              label: "Youthful Mouth - 10 Days",
            },
            {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
              alt: "Smoker lines results 3",
              label: "Natural Results - 3 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80",
              alt: "Smoker lines results 4",
              label: "Softened Lines - Full Results",
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

        // SUB 8: CHIN BOTOX
        {
          id: "chin-botox",
          name: "Chin Botox",
          shortDescription: "Smooth chin dimpling and improve chin contour",
          longDescription:
            "Chin Botox treats the 'orange peel' or 'cobblestone' appearance caused by overactive mentalis muscle. It creates a smooth, refined chin contour.",
          price: "From £130",
          duration: "10 minutes",
          image: {
            src: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200&q=80",
            alt: "Chin Botox Treatment",
            placeholder: "CB",
          },

          sections: [
            {
              title: "Eliminate Orange Peel Chin",
              content:
                "The mentalis muscle creates an uneven, dimpled texture on the chin. Botox relaxes this muscle for a smooth, refined appearance.",
              image: {
                src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
                alt: "Smooth chin",
                placeholder: "CB1",
              },
              layout: "image-right",
            },
          ],

          benefits: [
            "Smooths chin dimpling",
            "Eliminates 'orange peel' texture",
            "Improves chin contour",
            "Quick procedure",
            "Natural results",
            "No downtime",
            "Can combine with filler",
            "Enhances profile",
          ],

          resultsTimeline: {
            initial: "5-7 days",
            full: "2 weeks",
            duration: "3-4 months",
          },

          beforeAfterGallery: [
            {
              src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
              alt: "Chin Botox results 1",
              label: "Smooth Chin - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1598440947619-2c35fc9af908?w=1200&q=80",
              alt: "Chin Botox results 2",
              label: "Refined Contour - 10 Days",
            },
            {
              src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
              alt: "Chin Botox results 3",
              label: "No Dimpling - 3 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
              alt: "Chin Botox results 4",
              label: "Beautiful Results - Full Effect",
            },
          ],

          faqs: [
            {
              question: "Who needs chin Botox?",
              answer:
                "Anyone bothered by chin dimpling or a 'pebbly' texture when making facial expressions. It's a subtle but impactful treatment.",
            },
            {
              question: "Can it improve a weak chin?",
              answer:
                "For projection, chin filler is better. Botox is specifically for smoothing texture and reducing dimpling.",
            },
          ],
        },
      ],
    },

    // ==========================================
    // 2. DERMAL FILLERS - COMPLETE WITH ALL SUB-TREATMENTS
    // ==========================================
    {
      id: "fillers",
      name: "Dermal Fillers",
      category: "injectable",
      shortDescription:
        "Restore volume, enhance contours, and smooth wrinkles naturally",
      longDescription:
        "Dermal fillers use hyaluronic acid to restore lost volume, enhance facial features, and create youthful, natural-looking results without surgery.",
      image: {
        src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200&q=80",
        alt: "Dermal Fillers",
        placeholder: "F",
      },
      price: "From £250",
      duration: "30-45 minutes",
      featured: true,
      badge: "Versatile",

      sections: [
        {
          title: "Natural Volume Restoration",
          content:
            "As we age, we lose facial volume in key areas. Hyaluronic acid fillers restore this volume naturally, creating a refreshed, youthful appearance.",
          image: {
            src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
            alt: "Volume restoration",
            placeholder: "F1",
          },
          layout: "image-right",
        },
        {
          title: "Immediate, Beautiful Results",
          content:
            "See instant improvement after treatment. Results continue to enhance over 2 weeks as the filler settles and integrates naturally with your tissues.",
          image: {
            src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
            alt: "Immediate results",
            placeholder: "F2",
          },
          layout: "image-left",
        },
      ],

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

      beforeAfterGallery: [
        {
          src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80",
          alt: "Filler results 1",
          label: "Lip Enhancement - Immediate",
        },
        {
          src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80",
          alt: "Filler results 2",
          label: "Cheek Augmentation - 1 Week",
        },
        {
          src: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=1200&q=80",
          alt: "Filler results 3",
          label: "Nasolabial Folds - 2 Weeks",
        },
        {
          src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80",
          alt: "Filler results 4",
          label: "Under Eye - 1 Week",
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

      subTreatments: [
        // FILLER SUB 1: LIP FILLER
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
            src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80",
            alt: "Lip Filler",
            placeholder: "LF",
          },

          sections: [
            {
              title: "Natural Enhancement Philosophy",
              content:
                "Our approach: enhance, don't change. We create fuller, more defined lips that look naturally beautiful—never overdone or fake.",
              image: {
                src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80",
                alt: "Natural lips",
                placeholder: "LF1",
              },
              layout: "image-right",
            },
            {
              title: "Customized To Your Features",
              content:
                "Every lip is unique. We customize treatment to your facial proportions, desired outcome, and natural lip anatomy.",
              image: {
                src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80",
                alt: "Custom lips",
                placeholder: "LF2",
              },
              layout: "image-left",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=1200&q=80",
              alt: "Lip filler results 1",
              label: "Natural Volume - Immediate Results",
            },
            {
              src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
              alt: "Lip filler results 2",
              label: "Defined Border - 1 Week",
            },
            {
              src: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=1200&q=80",
              alt: "Lip filler results 3",
              label: "Symmetry Correction - 3 Days",
            },
            {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
              alt: "Lip filler results 4",
              label: "Beautiful Full Lips - Final",
            },
            {
              src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=1200&q=80",
              alt: "Lip filler results 5",
              label: "Hydrated Lips - 2 Weeks",
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

        // FILLER SUB 2: UNDER EYE FILLER
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
            src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80",
            alt: "Under Eye Filler",
            placeholder: "UE",
          },

          sections: [
            {
              title: "Erase Tired Eyes",
              content:
                "Tear trough hollows create shadows that make you look tired, even when well-rested. Filler restores volume and eliminates this shadowing.",
              image: {
                src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80",
                alt: "Bright eyes",
                placeholder: "UE1",
              },
              layout: "image-right",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80",
              alt: "Under eye filler results 1",
              label: "Dark Circles Reduced - 1 Week",
            },
            {
              src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1200&q=80",
              alt: "Under eye filler results 2",
              label: "Hollows Filled - Immediate",
            },
            {
              src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
              alt: "Under eye filler results 3",
              label: "Refreshed Look - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80",
              alt: "Under eye filler results 4",
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

        // FILLER SUB 3: NASOLABIAL FILLER
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
            src: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=1200&q=80",
            alt: "Nasolabial Filler",
            placeholder: "NF",
          },

          sections: [
            {
              title: "Restore Youthful Contours",
              content:
                "These smile lines deepen with age due to volume loss. Filler restores mid-face volume, creating a natural lift and smoothing.",
              image: {
                src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80",
                alt: "Smooth folds",
                placeholder: "NF1",
              },
              layout: "image-right",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=1200&q=80",
              alt: "Nasolabial filler results 1",
              label: "Deep Folds Softened - 1 Week",
            },
            {
              src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&q=80",
              alt: "Nasolabial filler results 2",
              label: "Mid-Face Lift - Immediate",
            },
            {
              src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=1200&q=80",
              alt: "Nasolabial filler results 3",
              label: "Smooth Lines - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80",
              alt: "Nasolabial filler results 4",
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

        // FILLER SUB 4: CHIN FILLER
        {
          id: "chin-filler",
          name: "Chin Filler",
          shortDescription:
            "Enhance chin projection and profile for better facial balance",
          longDescription:
            "Chin filler adds projection, improves profile, creates symmetry, and enhances overall facial harmony.",
          price: "From £320",
          duration: "30 minutes",
          image: {
            src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
            alt: "Chin Filler",
            placeholder: "CF",
          },

          sections: [
            {
              title: "Profile Enhancement",
              content:
                "A well-defined chin creates balance and harmony. Filler can dramatically improve your side profile in just 30 minutes.",
              image: {
                src: "https://images.unsplash.com/photo-1598440947619-2c35fc9af908?w=800&q=80",
                alt: "Profile improvement",
                placeholder: "CF1",
              },
              layout: "image-right",
            },
          ],

          benefits: [
            "Adds chin projection",
            "Improves profile",
            "Creates symmetry",
            "Defines jawline",
            "Non-surgical",
            "Immediate results",
            "Reversible",
            "Long-lasting",
          ],

          resultsTimeline: {
            initial: "Immediate",
            full: "1-2 weeks",
            duration: "12-18 months",
          },

          beforeAfterGallery: [
            {
              src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
              alt: "Chin filler results 1",
              label: "Enhanced Projection - Immediate",
            },
            {
              src: "https://images.unsplash.com/photo-1598440947619-2c35fc9af908?w=1200&q=80",
              alt: "Chin filler results 2",
              label: "Profile Improvement - 1 Week",
            },
            {
              src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
              alt: "Chin filler results 3",
              label: "Facial Balance - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
              alt: "Chin filler results 4",
              label: "Defined Chin - Full Results",
            },
          ],

          faqs: [
            {
              question: "Is this better than surgery?",
              answer:
                "For mild to moderate enhancement, yes! Filler provides immediate results without surgery or downtime.",
            },
            {
              question: "Can it fix asymmetry?",
              answer:
                "Absolutely! We can correct minor asymmetries and create better balance.",
            },
          ],
        },

        // FILLER SUB 5: JAWLINE FILLER
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
            src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
            alt: "Jawline Filler",
            placeholder: "JF",
          },

          sections: [
            {
              title: "Sculpted Definition",
              content:
                "A defined jawline creates an elegant, youthful appearance. Filler can transform a soft jawline into a sculpted, contoured feature.",
              image: {
                src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                alt: "Jawline sculpting",
                placeholder: "JF1",
              },
              layout: "image-right",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
              alt: "Jawline filler results 1",
              label: "Defined Jawline - Immediate",
            },
            {
              src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=80",
              alt: "Jawline filler results 2",
              label: "Sculpted Angles - 1 Week",
            },
            {
              src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
              alt: "Jawline filler results 3",
              label: "Profile Enhancement - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=80",
              alt: "Jawline filler results 4",
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

        // FILLER SUB 6: CHEEK FILLER
        {
          id: "cheek-filler",
          name: "Cheek Filler",
          shortDescription:
            "Restore volume and lift for youthful, sculpted cheekbones",
          longDescription:
            "Cheek filler restores lost volume, creates lift, defines cheekbones, and rejuvenates the entire mid-face.",
          price: "From £350",
          duration: "40 minutes",
          image: {
            src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
            alt: "Cheek Filler",
            placeholder: "CHF",
          },

          sections: [
            {
              title: "Youthful Volume",
              content:
                "Cheek volume loss is one of the first signs of aging. Restoring this volume creates an instant lifting effect and youthful appearance.",
              image: {
                src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80",
                alt: "Cheek volume",
                placeholder: "CHF1",
              },
              layout: "image-right",
            },
          ],

          benefits: [
            "Restores cheek volume",
            "Creates natural lift",
            "Defines cheekbones",
            "Rejuvenates mid-face",
            "Improves smile lines",
            "Long-lasting results",
            "Natural appearance",
            "Minimal downtime",
          ],

          resultsTimeline: {
            initial: "Immediate",
            full: "1-2 weeks",
            duration: "12-18 months",
          },

          beforeAfterGallery: [
            {
              src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
              alt: "Cheek filler results 1",
              label: "Volume Restored - Immediate",
            },
            {
              src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=1200&q=80",
              alt: "Cheek filler results 2",
              label: "Lifted Appearance - 1 Week",
            },
            {
              src: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=1200&q=80",
              alt: "Cheek filler results 3",
              label: "Defined Cheekbones - 2 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
              alt: "Cheek filler results 4",
              label: "Youthful Mid-Face - Full Results",
            },
          ],

          faqs: [
            {
              question: "Will I look puffy?",
              answer:
                "Not when done correctly! We create subtle, natural lift that enhances your features without looking overdone.",
            },
            {
              question: "Can this help with sagging?",
              answer:
                "Yes! By restoring volume in the cheeks, we create a lifting effect that improves lower face sagging.",
            },
          ],
        },
      ],
    },

    // ==========================================
    // 3. SKIN BOOSTERS - COMPLETE
    // ==========================================
    {
      id: "skin-boosters",
      name: "Skin Boosters",
      category: "skin-care",
      shortDescription: "Deep hydration and radiance for glowing, healthy skin",
      longDescription:
        "Skin boosters deliver intense hydration deep into the skin, improving texture, elasticity, and overall radiance for a natural glow.",
      image: {
        src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&q=80",
        alt: "Skin Boosters",
        placeholder: "SB",
      },
      price: "From £180",
      duration: "30 minutes",
      featured: true,
      badge: "Hydrating",

      sections: [
        {
          title: "Deep Hydration from Within",
          content:
            "Skin boosters contain hyaluronic acid that attracts and retains moisture, providing deep hydration that radiates from within.",
          image: {
            src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
            alt: "Skin hydration",
            placeholder: "SB1",
          },
          layout: "image-right",
        },
        {
          title: "Glowing Results",
          content:
            "Experience visibly smoother, plumper, and more radiant skin after a course of treatments. Your skin will glow from within.",
          image: {
            src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=800&q=80",
            alt: "Glowing skin",
            placeholder: "SB2",
          },
          layout: "image-left",
        },
      ],

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
          src: "https://images.unsplash.com/photo-1515688594390-b649af70d282?w=1200&q=80",
          alt: "Skin booster results 1",
          label: "Hydrated Glow - 4 Weeks",
        },
        {
          src: "https://images.unsplash.com/photo-1506956191951-7a88da4435e5?w=1200&q=80",
          alt: "Skin booster results 2",
          label: "Smooth Texture - 3 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
          alt: "Skin booster results 3",
          label: "Radiant Skin - 6 Weeks",
        },
        {
          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
          alt: "Skin booster results 4",
          label: "Plump Skin - Full Results",
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

      subTreatments: [], // No sub-treatments for skin boosters
    },

    // ==========================================
    // 4. MICRONEEDLING - COMPLETE
    // ==========================================
    {
      id: "microneedling",
      name: "Microneedling",
      category: "skin-care",
      shortDescription:
        "Stimulate collagen production for smoother, firmer, more youthful skin",
      longDescription:
        "Microneedling creates controlled micro-injuries to stimulate your skin's natural healing process, boosting collagen and elastin production for transformative results.",
      image: {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
        alt: "Microneedling",
        placeholder: "MN",
      },
      price: "From £150",
      duration: "45 minutes",
      featured: false,

      sections: [
        {
          title: "Collagen Stimulation",
          content:
            "Microneedling triggers your body's natural healing response, producing fresh collagen and elastin for firmer, smoother, more youthful skin.",
          image: {
            src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
            alt: "Collagen production",
            placeholder: "MN1",
          },
          layout: "image-right",
        },
        {
          title: "Versatile Treatment",
          content:
            "Effective for acne scars, fine lines, large pores, uneven texture, and overall skin rejuvenation. Safe for all skin types.",
          image: {
            src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
            alt: "Versatile results",
            placeholder: "MN2",
          },
          layout: "image-left",
        },
      ],

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
          src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=80",
          alt: "Microneedling results 1",
          label: "Acne Scars Reduced - 6 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
          alt: "Microneedling results 2",
          label: "Fine Lines Improved - 4 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=80",
          alt: "Microneedling results 3",
          label: "Texture Enhanced - 5 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
          alt: "Microneedling results 4",
          label: "Overall Glow - 3 Sessions",
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

      subTreatments: [
        {
          id: "microneedling-prp",
          name: "Microneedling + PRP",
          shortDescription:
            "Enhanced results with your own platelet-rich plasma",
          longDescription:
            "Combining microneedling with PRP (your own platelet-rich plasma) amplifies results, accelerating healing and boosting collagen production.",
          price: "From £300",
          duration: "60 minutes",
          image: {
            src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80",
            alt: "Microneedling with PRP",
            placeholder: "MP",
          },

          sections: [
            {
              title: "Amplified Results",
              content:
                "PRP contains growth factors that dramatically enhance microneedling results, accelerating healing and maximizing collagen production.",
              image: {
                src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
                alt: "PRP benefits",
                placeholder: "MP1",
              },
              layout: "image-right",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=80",
              alt: "Microneedling PRP results 1",
              label: "Dramatic Improvement - 3 Sessions",
            },
            {
              src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
              alt: "Microneedling PRP results 2",
              label: "Scar Reduction - 4 Sessions",
            },
            {
              src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=80",
              alt: "Microneedling PRP results 3",
              label: "Glowing Skin - 6 Weeks",
            },
            {
              src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
              alt: "Microneedling PRP results 4",
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
      ],
    },

    // ==========================================
    // 5. MESOTHERAPY - COMPLETE
    // ==========================================
    {
      id: "mesotherapy",
      name: "Mesotherapy",
      category: "skin-care",
      shortDescription:
        "Nutrient-rich injections for skin rejuvenation and targeted treatment",
      longDescription:
        "Mesotherapy delivers vitamins, minerals, and hyaluronic acid directly into the skin for rejuvenation, brightening, and targeted improvement.",
      image: {
        src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80",
        alt: "Mesotherapy",
        placeholder: "MT",
      },
      price: "From £150",
      duration: "30 minutes",
      featured: false,

      sections: [
        {
          title: "Targeted Nutrition",
          content:
            "Delivers essential nutrients directly where your skin needs them most, bypassing the digestive system for maximum effectiveness.",
          image: {
            src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
            alt: "Skin nutrition",
            placeholder: "MT1",
          },
          layout: "image-right",
        },
      ],

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

      beforeAfterGallery: [
        {
          src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=80",
          alt: "Mesotherapy results 1",
          label: "Brightness - 4 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
          alt: "Mesotherapy results 2",
          label: "Even Tone - 3 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=80",
          alt: "Mesotherapy results 3",
          label: "Radiant Glow - 5 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
          alt: "Mesotherapy results 4",
          label: "Healthy Skin - Full Results",
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

      subTreatments: [
        {
          id: "under-eye-mesotherapy",
          name: "Under Eye Mesotherapy",
          shortDescription:
            "Brighten and rejuvenate the delicate under-eye area",
          longDescription:
            "Specialized mesotherapy for the under-eye area targets dark circles, fine lines, and crepey skin with gentle, effective treatment.",
          price: "From £130",
          duration: "20 minutes",
          image: {
            src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1200&q=80",
            alt: "Under Eye Mesotherapy",
            placeholder: "UEM",
          },

          sections: [
            {
              title: "Gentle Yet Effective",
              content:
                "The under-eye area requires special care. Our gentle mesotherapy cocktail brightens, hydrates, and rejuvenates this delicate area.",
              image: {
                src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
                alt: "Under eye treatment",
                placeholder: "UEM1",
              },
              layout: "image-right",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80",
              alt: "Under eye mesotherapy results 1",
              label: "Brighter Eyes - 3 Sessions",
            },
            {
              src: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=1200&q=80",
              alt: "Under eye mesotherapy results 2",
              label: "Reduced Dark Circles - 4 Sessions",
            },
            {
              src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
              alt: "Under eye mesotherapy results 3",
              label: "Smooth Texture - 5 Sessions",
            },
            {
              src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=1200&q=80",
              alt: "Under eye mesotherapy results 4",
              label: "Refreshed Look - Full Results",
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

        {
          id: "hand-mesotherapy",
          name: "Hand Mesotherapy",
          shortDescription: "Rejuvenate aging hands for a youthful appearance",
          longDescription:
            "Hand mesotherapy restores volume, reduces age spots, improves texture, and creates younger-looking hands.",
          price: "From £150",
          duration: "25 minutes",
          image: {
            src: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200&q=80",
            alt: "Hand Mesotherapy",
            placeholder: "HM",
          },

          sections: [
            {
              title: "Turn Back Time on Your Hands",
              content:
                "Hands often show age first. Mesotherapy restores volume, fades spots, and creates smoother, more youthful-looking hands.",
              image: {
                src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
                alt: "Hand rejuvenation",
                placeholder: "HM1",
              },
              layout: "image-right",
            },
          ],

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
              src: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=1200&q=80",
              alt: "Hand mesotherapy results 1",
              label: "Volume Restored - 3 Sessions",
            },
            {
              src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
              alt: "Hand mesotherapy results 2",
              label: "Faded Spots - 4 Sessions",
            },
            {
              src: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&q=80",
              alt: "Hand mesotherapy results 3",
              label: "Smooth Texture - 5 Sessions",
            },
            {
              src: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=1200&q=80",
              alt: "Hand mesotherapy results 4",
              label: "Youthful Hands - Full Results",
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
      ],
    },

    // ==========================================
    // 6. NON-SURGICAL RHINOPLASTY - COMPLETE
    // ==========================================
    {
      id: "non-surgical-rhinoplasty",
      name: "Non-Surgical Rhinoplasty",
      category: "injectable",
      shortDescription:
        "Reshape your nose without surgery using dermal fillers",
      longDescription:
        "Non-surgical rhinoplasty uses dermal fillers to smooth bumps, lift the tip, straighten the bridge, and create a more balanced nose profile—all without surgery.",
      image: {
        src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=80",
        alt: "Non-Surgical Rhinoplasty",
        placeholder: "R",
      },
      price: "From £350",
      duration: "30 minutes",
      featured: true,
      badge: "Instant",

      sections: [
        {
          title: "No Surgery Required",
          content:
            "Achieve nose refinement without going under the knife. Immediate results with no downtime, no anesthesia, and no recovery period.",
          image: {
            src: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80",
            alt: "No surgery needed",
            placeholder: "R1",
          },
          layout: "image-right",
        },
        {
          title: "Natural Balance",
          content:
            "We enhance your natural features, creating harmony and proportion without changing who you are. The goal is refinement, not transformation.",
          image: {
            src: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
            alt: "Natural balance",
            placeholder: "R2",
          },
          layout: "image-left",
        },
      ],

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
          src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=80",
          alt: "Rhinoplasty results 1",
          label: "Bridge Smoothing - Immediate",
        },
        {
          src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=80",
          alt: "Rhinoplasty results 2",
          label: "Tip Lift - Same Day",
        },
        {
          src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=80",
          alt: "Rhinoplasty results 3",
          label: "Profile Enhancement - 1 Week",
        },
        {
          src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
          alt: "Rhinoplasty results 4",
          label: "Balanced Appearance - 2 Weeks",
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

      subTreatments: [],
    },

    // ==========================================
    // 7. FAT DISSOLVING - COMPLETE
    // ==========================================
    {
      id: "fat-dissolving",
      name: "Fat Dissolving (Lemon Bottle)",
      category: "body-contouring",
      shortDescription:
        "Target stubborn fat without surgery for a contoured body",
      longDescription:
        "Fat dissolving injections break down stubborn fat cells, which are then naturally eliminated by your body for permanent fat reduction.",
      image: {
        src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
        alt: "Fat Dissolving",
        placeholder: "FD",
      },
      price: "From £150",
      duration: "30 minutes",
      featured: true,
      badge: "Popular",

      sections: [
        {
          title: "Targeted Fat Reduction",
          content:
            "Precisely target areas resistant to diet and exercise, like double chin, abdomen, thighs, and love handles.",
          image: {
            src: "https://images.unsplash.com/photo-1598440947619-2c35fc9af908?w=800&q=80",
            alt: "Targeted treatment",
            placeholder: "FD1",
          },
          layout: "image-right",
        },
        {
          title: "Permanent Results",
          content:
            "Once fat cells are destroyed, they don't come back. Maintain results with a healthy lifestyle.",
          image: {
            src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
            alt: "Permanent results",
            placeholder: "FD2",
          },
          layout: "image-left",
        },
      ],

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
          src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=80",
          alt: "Fat dissolving results 1",
          label: "Double Chin Reduced - 3 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1598440947619-2c35fc9af908?w=1200&q=80",
          alt: "Fat dissolving results 2",
          label: "Abdomen Contoured - 5 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80",
          alt: "Fat dissolving results 3",
          label: "Thighs Slimmed - 4 Sessions",
        },
        {
          src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=1200&q=80",
          alt: "Fat dissolving results 4",
          label: "Arms Toned - 3 Sessions",
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

      subTreatments: [],
    },
  ],

  cta: {
    title: "Ready to Begin Your Transformation?",
    description: "Book a free consultation with our expert team.",
    buttonText: "Book Free Consultation",
    buttonLink: "/contact",
  },

  whyChooseUs: [
    "CPD-certified specialists",
    "Premium, approved products",
    "Natural-looking results",
    "Safe, professional environment",
    "Personalized consultations",
  ],
};

// Helper Functions
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
      if (treatment.subTreatments && treatment.subTreatments.length > 0) {
        const subTreatment = treatment.subTreatments.find(
          (st) => st.id === parentId,
        );
        if (subTreatment) {
          return {
            ...subTreatment,
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
  if (!parent || !parent.subTreatments) return null;

  const subTreatment = parent.subTreatments.find((st) => st.id === subId);
  if (!subTreatment) return null;

  return {
    ...subTreatment,
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
