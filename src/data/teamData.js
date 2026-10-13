// src/data/teamData.js

export const teamData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Meet Our Expert Team",
    title: "The People Behind Aesthetics by GS",
    description:
      "Where medical science, research integrity, and natural aesthetics meet with trust.",
    image: {
      src: "/images/brand/clinic-treatment-room-1.jpg",
      alt: "Aesthetics by GS clinic in Leeds",
    },
  },

  // ==================
  // ALL TEAM MEMBERS
  // ==================
  members: [
    // ── Dr. Shakiba Hussaini (Founder / Lead) ──
    {
      id: "dr-shakiba-hussaini",
      featured: true,
      founderBadge: "Co-Founder & Lead",
      name: "Dr. Shakiba Hussaini",
      title: "MD",
      role: "Aesthetic Practitioner · Medical Researcher",
      roles: [
        "Aesthetic Practitioner",
        "Co-Founder, Aesthetics by GS",
        "Medical Researcher",
        "Editor-in-Chief, Ariana Medical Journal",
      ],
      image: {
        src: "/images/web pic/dr.jpeg",
        alt: "Dr. Shakiba Hussaini",
        placeholder: "S",
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
        "As Co-Founder of Aesthetics by GS, Dr. Hussaini integrates medical excellence, scientific integrity, and refined aesthetic vision. Every treatment with us is guided by thorough consultation, individual assessment, and personalised care, ensuring results that enhance natural beauty while prioritising health and long-term wellbeing.",
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

    // ── Golara Shibani ──
    {
      id: "golara-shibani",
      featured: false,
      name: "Golara Shibani",
      title: "RN",
      role: "Registered Nurse & Aesthetic Practitioner",
      roles: [
        "Registered Nurse",
        "Certified Aesthetic Practitioner",
        "UK Trained — Clinical Aesthetics",
      ],
      image: {
        src: "/images/dr-golara.png",
        alt: "Golara Shibani",
        placeholder: "G",
      },
      tagline:
        "True beauty is not about changing who you are — it is about enhancing your natural features and helping you feel confident in your own skin.",
      shortBio:
        "Golara Shibani is a Registered Nurse and certified Aesthetic Practitioner, professionally trained in Clinical Aesthetics in the United Kingdom, combining clinical expertise with an artistic eye for natural, elegant results.",
      fullBio: [
        "Golara Shibani is a Registered Nurse and certified Aesthetic Practitioner, professionally trained in Clinical Aesthetics in the United Kingdom. With a strong medical background and extensive experience in advanced aesthetic treatments, she is committed to delivering safe, ethical, and results-focused care tailored to every client.",
        "Combining clinical expertise with an artistic eye, Golara specialises in natural-looking enhancements designed to refresh, restore, and elevate confidence. Her approach is centred on understanding each client's individual features and goals, creating bespoke treatment plans that achieve elegant and balanced results.",
        "At Aesthetics by GS, every treatment is performed with precision, professionalism, and the highest standards of patient care. From advanced skin rejuvenation to non-surgical aesthetic procedures, clients can expect a premium experience in a welcoming and trusted environment.",
        "Golara believes that true beauty is not about changing who you are — it is about enhancing your natural features and helping you feel confident in your own skin.",
      ],
      credentials: [
        {
          icon: "degree",
          label: "Registered Nurse (RN)",
          detail: "Strong medical & clinical background",
        },
        {
          icon: "aesthetic",
          label: "Certified Aesthetic Practitioner",
          detail: "Clinical Aesthetics — United Kingdom",
        },
        {
          icon: "research",
          label: "Advanced Aesthetic Treatments",
          detail: "Safe, ethical & results-focused care",
        },
        {
          icon: "lecturer",
          label: "Bespoke Treatment Planning",
          detail: "Individualised, patient-centred approach",
        },
      ],
      expertise: [
        "Natural-looking facial enhancements",
        "Skin rejuvenation & advanced treatments",
        "Non-surgical aesthetic procedures",
        "Dermal fillers & anti-wrinkle injections",
        "Bespoke treatment planning",
        "Patient-centred aesthetic consultations",
      ],
    },
  ],

  // ==================
  // CLINIC STATS
  // ==================
  stats: [
    { number: "2", label: "Expert Practitioners" },
    { number: "18+", label: "Years Combined Experience" },
    { number: "UK", label: "Clinical Standards" },
    { number: "MD", label: "Medical Doctor Led" },
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
    title: "Ready to Meet the Team?",
    description:
      "Book a consultation and experience the Aesthetics by GS difference — thorough, personal, and medically guided care from our expert practitioners.",
    buttonText: "Schedule Consultation",
    buttonLink: "/contact",
  },
};

// Backwards-compatible alias so any other file importing `doctor` still works
export const { members } = teamData;
export const doctor = teamData.members[0];

export default teamData;
