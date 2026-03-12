// src/data/aboutData.js
// ========================================
// ABOUT DATA — Radina Aesthetic Clinic
// ========================================

export const aboutData = {
  // ==================
  // HERO
  // ==================
  hero: {
    badge: "About Radina",
    title: "Where Medicine Meets Beauty",
    description:
      "A clinic built on medical excellence, scientific integrity, and a genuine commitment to natural, lasting results. Every client is seen as an individual — never a treatment.",
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80",
      alt: "Radina Aesthetic Clinic",
    },
  },

  // ==================
  // INTRO STATEMENT
  // ==================
  intro: {
    statement:
      "At Radina Aesthetic Clinic, we believe aesthetic medicine must be medically sound, ethically driven, and supported by scientific evidence. Every treatment begins with listening — understanding your goals, your concerns, and your skin.",
    signature: {
      name: "Dr. Shakiba Hussaini",
      title: "MD · Co-Founder, Radina Aesthetic Clinic",
    },
  },

  // ==================
  // PHILOSOPHY
  // ==================
  philosophy: {
    title: "Our Approach",
    principles: [
      {
        id: 1,
        number: "01",
        title: "Medically Sound",
        description:
          "Every treatment is grounded in clinical medicine. Dr. Hussaini's background in cardiology, diagnostics, and ACLS provides a rigorous medical foundation for safe, precise aesthetic practice.",
      },
      {
        id: 2,
        number: "02",
        title: "Ethically Driven",
        description:
          "We never recommend treatments that aren't needed. Patient safety and honest assessment guide every consultation — even when that means doing less.",
      },
      {
        id: 3,
        number: "03",
        title: "Scientifically Evidenced",
        description:
          "Our protocols are selected based on peer-reviewed research. Dr. Hussaini is a published medical researcher and Editor-in-Chief of Ariana Medical Journal.",
      },
      {
        id: 4,
        number: "04",
        title: "Naturally Beautiful",
        description:
          "Results should enhance — never mask — your natural appearance. We pursue subtle, long-lasting improvements that reflect the best version of you.",
      },
    ],
  },

  // ==================
  // CREDENTIALS
  // ==================
  credentials: {
    title: "Qualifications & Standards",
    categories: [
      {
        id: 1,
        category: "Medical Qualifications",
        items: [
          "Doctor of Medicine (MD) — Kabul University of Medical Sciences",
          "Advanced Cardiac Life Support (ACLS) Certified",
          "Echocardiography & Diagnostic Ultrasound Training",
          "Aesthetic Medicine — Injectable Specialist",
        ],
      },
      {
        id: 2,
        category: "Academic & Research",
        items: [
          "Published Researcher — Public Health Challenges (Wiley Journal)",
          "Editor-in-Chief, Ariana Medical Journal",
          "University Lecturer in Medical Sciences",
          "Medical Content Producer & Healthcare Educator",
        ],
      },
      {
        id: 3,
        category: "Clinical Standards",
        items: [
          "UK Clinical & Aesthetic Standards Compliant",
          "Evidence-based treatment protocols only",
          "Individualised skin assessment for every client",
          "Ongoing professional development & research engagement",
        ],
      },
    ],
  },

  // ==================
  // FACILITY
  // ==================
  facility: {
    title: "The Radina Environment",
    description:
      "A calm, professional clinic environment where every detail is designed for your comfort, privacy, and confidence.",
    features: [
      {
        id: 1,
        title: "Professional Clinical Setting",
        description:
          "A clean, safe environment aligned with UK clinical standards",
        image: {
          src: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80",
          alt: "Clinical setting",
        },
      },
      {
        id: 2,
        title: "Private Treatment Suites",
        description: "Fully equipped, discreet rooms for a relaxed experience",
        image: {
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
          alt: "Treatment room",
        },
      },
      {
        id: 3,
        title: "Medical-Grade Equipment",
        description:
          "Clinically proven devices and pharmaceutical-grade products only",
        image: {
          src: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80",
          alt: "Medical equipment",
        },
      },
    ],
  },

  // ==================
  // STATISTICS
  // ==================
  statistics: [
    { metric: "MD", label: "Medically Qualified Doctor" },
    { metric: "ACLS", label: "Advanced Cardiac Life Support" },
    { metric: "Wiley", label: "Peer-Reviewed Published Research" },
    { metric: "UK", label: "Clinical & Aesthetic Standards" },
  ],

  // ==================
  // DOCTOR (single)
  // ==================
  doctor: {
    name: "Dr. Shakiba Hussaini",
    credentials: "MD",
    role: "Co-Founder & Aesthetic Practitioner",
    specialization:
      "Aesthetic Medicine · Medical Research · Clinical Education",
    image: {
      src: "/images/boss.jpg",
      alt: "Dr. Shakiba Hussaini",
    },
    link: "/meet-the-team",
  },

  // ==================
  // CTA
  // ==================
  cta: {
    title: "Begin Your Aesthetic Journey",
    description:
      "Schedule a consultation with Dr. Hussaini. She will assess your skin, listen to your goals, and design a personalised, medically guided treatment plan.",
    primaryButton: { text: "Book Consultation", link: "/contact" },
    secondaryButton: { text: "Explore Treatments", link: "/treatments" },
    note: "Complimentary skin analysis included with every consultation.",
  },
};

export default aboutData;
