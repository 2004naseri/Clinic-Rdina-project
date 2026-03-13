// src/data/teamData.js
// ========================================
// TEAM DATA
// ========================================

export const teamData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Meet The Doctor",
    title: "The Mind Behind Radina",
    description:
      "Where medical science, research integrity, and natural aesthetics meet with trust.",
    image: {
      src: "/images/web pic/boos2.jpeg",
      alt: "Radina Aesthetic Clinic",
    },
  },

  // ==================
  // THE DOCTOR
  // ==================
  doctor: {
    id: "dr-shakiba-hussaini",
    name: "Dr. Shakiba Hussaini",
    title: "MD",
    roles: [
      "Aesthetic Practitioner",
      "Co-Founder, Radina Aesthetic Clinic",
      "Medical Researcher",
      "Editor-in-Chief, Ariana Medical Journal",
    ],
    image: {
      src: "/images/web pic/dr.jpeg",
      alt: "Dr. Shakiba Hussaini",
    },
    tagline:
      "Aesthetic medicine must be medically sound, ethically driven, and supported by scientific evidence.",
    shortBio:
      "Dr. Shakiba Hussaini is a medical doctor, aesthetic practitioner, and medical researcher with a distinguished background in clinical medicine, public health research, medical education, and aesthetic practice.",
    fullBio: [
      "Dr. Shakiba Hussaini is a medical doctor, aesthetic practitioner, and medical researcher with a distinguished background in clinical medicine, public health research, medical education, and aesthetic practice. Her work is defined by a strong commitment to evidence-based medicine, patient safety, ethical practice, and natural aesthetic outcomes.",
      "She obtained her Doctor of Medicine (MD) degree from Kabul University of Medical Sciences and has extensive clinical experience, particularly in cardiology, non-invasive diagnostics, and acute medical care. Her advanced training includes echocardiography, diagnostic ultrasound, electrocardiography (ECG), hemodynamics, and Advanced Cardiac Life Support (ACLS), providing a solid medical foundation for safe and precise aesthetic treatments.",
      `Dr. Hussaini is also an active medical academic and researcher. Her peer-reviewed research article titled "Understanding care-seeking behavior for reproductive tract infections among Afghan women: A cross-sectional study" has been accepted for publication in Public Health Challenges, a Wiley journal, reflecting her contribution to global public health and women's health research.`,
      "In addition to her research activities, Dr. Hussaini serves as Editor-in-Chief of Ariana Medical Journal, working closely with national and international medical academics and scientific advisors. Her editorial role reflects her dedication to medical scholarship, ethical research standards, and the advancement of healthcare knowledge.",
      "As Co-Founder of Radina Aesthetic Clinic, Dr. Hussaini integrates medical excellence, scientific integrity, and refined aesthetic vision. Every treatment at Radina is guided by thorough consultation, individual assessment, and personalised care, ensuring results that enhance natural beauty while prioritising health and long-term wellbeing.",
    ],
    credentials: [
      {
        icon: "degree",
        label: "Doctor of Medicine (MD)",
        detail: "Kabul University of Medical Sciences",
      },
      {
        icon: "cardio",
        label: "Advanced Cardiac Life Support (ACLS)",
        detail: "Echocardiography · ECG · Hemodynamics",
      },
      {
        icon: "research",
        label: "Published Medical Researcher",
        detail: "Public Health Challenges — Wiley Journal",
      },
      {
        icon: "editor",
        label: "Editor-in-Chief",
        detail: "Ariana Medical Journal",
      },
      {
        icon: "lecturer",
        label: "University Lecturer",
        detail: "Medical Content Producer & Healthcare Business Developer",
      },
      {
        icon: "aesthetic",
        label: "Aesthetic Practitioner",
        detail: "UK Clinical & Aesthetic Standards",
      },
    ],
    expertise: [
      "Anti-wrinkle treatments & botulinum toxin injections",
      "Dermal fillers & natural facial contouring",
      "Skin boosters & advanced hydration therapies",
      "Mesotherapy & skin revitalisation",
      "Non-surgical facial rejuvenation",
      "Personalised, evidence-based aesthetic treatment plans",
    ],
    publication: {
      title:
        "Understanding care-seeking behavior for reproductive tract infections among Afghan women: A cross-sectional study",
      journal: "Public Health Challenges — Wiley Journal",
      status: "Accepted for Publication",
    },
  },

  // ==================
  // CLINIC STATS
  // ==================
  stats: [
    { number: "MD", label: "Medically Qualified Doctor" },
    { number: "ACLS", label: "Advanced Cardiac Life Support" },
    { number: "Wiley", label: "Published Researcher" },
    { number: "UK", label: "Clinical Standards" },
  ],

  // ==================
  // PHILOSOPHY PILLARS
  // ==================
  philosophy: [
    {
      title: "Medically Sound",
      description:
        "Every treatment is grounded in clinical medicine and evidence-based protocols.",
    },
    {
      title: "Ethically Driven",
      description:
        "Patient safety and honest assessment guide every recommendation we make.",
    },
    {
      title: "Scientifically Evidenced",
      description:
        "Treatments are selected based on peer-reviewed research and proven outcomes.",
    },
    {
      title: "Naturally Beautiful",
      description:
        "Results enhance your natural beauty without masking or overdoing.",
    },
  ],

  // ==================
  // CTA
  // ==================
  cta: {
    title: "Ready to Meet Dr. Hussaini?",
    description:
      "Book a consultation and experience the Radina difference — thorough, personal, and medically guided care.",
    buttonText: "Schedule Consultation",
    buttonLink: "/contact",
  },
};

export default teamData;
