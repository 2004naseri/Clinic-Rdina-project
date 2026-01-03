// src/data/aboutData.js
// ========================================
// ABOUT DATA - Professional Version
// ========================================

export const aboutData = {
  // ==================
  // HERO SECTION
  // ==================
  hero: {
    badge: "Est. 2018",
    title: "Redefining Aesthetic Excellence",
    subtitle: "Radina Clinic",
    description:
      "A sanctuary where advanced medical aesthetics meets personalized luxury care. We deliver transformative results through precision, artistry, and scientific innovation.",
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80",
      alt: "Radina Clinic",
    },
  },

  // ==================
  // INTRO STATEMENT
  // ==================
  intro: {
    statement:
      "At Radina Clinic, we believe exceptional aesthetic outcomes are achieved through the perfect harmony of medical expertise, cutting-edge technology, and an unwavering commitment to individualized care.",
    signature: {
      name: "Dr. Sarah Ahmad",
      title: "Founder & Medical Director",
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
        title: "Medical Excellence",
        description:
          "Every treatment is performed by board-certified physicians with specialized training in aesthetic medicine and dermatology.",
      },
      {
        id: 2,
        number: "02",
        title: "Personalized Protocols",
        description:
          "We develop bespoke treatment plans based on comprehensive facial analysis, skin assessment, and your unique aesthetic goals.",
      },
      {
        id: 3,
        number: "03",
        title: "Evidence-Based Results",
        description:
          "Our protocols are grounded in clinical research, utilizing only FDA-approved technologies and pharmaceutical-grade products.",
      },
      {
        id: 4,
        number: "04",
        title: "Holistic Beauty",
        description:
          "We address skin health from multiple dimensions—prevention, correction, and maintenance—for sustainable, natural-looking results.",
      },
    ],
  },

  // ==================
  // CREDENTIALS
  // ==================
  credentials: {
    title: "Credentials & Expertise",
    categories: [
      {
        id: 1,
        category: "Medical Qualifications",
        items: [
          "Board Certification in Dermatology",
          "Advanced Aesthetic Medicine Fellowship",
          "Laser Surgery Certification (ASLMS)",
          "Injectable Specialist Certification",
        ],
      },
      {
        id: 2,
        category: "Professional Memberships",
        items: [
          "American Academy of Dermatology",
          "International Society of Aesthetic Physicians",
          "European Academy of Dermatology",
          "World Congress of Aesthetic Medicine",
        ],
      },
      {
        id: 3,
        category: "Technology Partners",
        items: [
          "Allergan Medical Institute",
          "Galderma Training Faculty",
          "Cynosure Certified Center",
          "Venus Concept Elite Provider",
        ],
      },
    ],
  },

  // ==================
  // FACILITY
  // ==================
  facility: {
    title: "State-of-the-Art Facility",
    description:
      "Our clinic combines medical-grade equipment with a serene, spa-like environment designed for your comfort and privacy.",
    features: [
      {
        id: 1,
        title: "Advanced Technology",
        description: "Latest FDA-approved laser systems and aesthetic devices",
        image: {
          src: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80",
          alt: "Medical Equipment",
        },
      },
      {
        id: 2,
        title: "Private Treatment Suites",
        description: "Luxurious, fully-equipped rooms for complete discretion",
        image: {
          src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
          alt: "Treatment Room",
        },
      },
      {
        id: 3,
        title: "Medical-Grade Standards",
        description: "Sterile environment meeting clinical safety protocols",
        image: {
          src: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&q=80",
          alt: "Clinical Standards",
        },
      },
    ],
  },

  // ==================
  // STATISTICS
  // ==================
  statistics: {
    title: "Clinical Excellence",
    stats: [
      {
        id: 1,
        metric: "5,000+",
        label: "Treatments Performed",
      },
      {
        id: 2,
        metric: "98%",
        label: "Patient Satisfaction",
      },
      {
        id: 3,
        metric: "6 Years",
        label: "Trusted Experience",
      },
      {
        id: 4,
        metric: "15+",
        label: "Medical Specialists",
      },
    ],
  },

  // ==================
  // MEDICAL TEAM
  // ==================
  team: {
    title: "Our Medical Team",
    description:
      "Led by board-certified physicians with specialized training in aesthetic medicine and dermatology.",
    members: [
      {
        id: 1,
        name: "Dr. Sarah Ahmad",
        credentials: "MD, FAAD",
        role: "Founder & Medical Director",
        specialization: "Dermatology & Aesthetic Medicine",
        image: {
          src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
          alt: "Dr. Sarah Ahmad",
        },
      },
      {
        id: 2,
        name: "Dr. Mariam Karimi",
        credentials: "MD, MSc",
        role: "Lead Aesthetic Physician",
        specialization: "Injectable Treatments & Facial Sculpting",
        image: {
          src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
          alt: "Dr. Mariam Karimi",
        },
      },
      {
        id: 3,
        name: "Dr. Leila Hosseini",
        credentials: "MD, PhD",
        role: "Senior Dermatologist",
        specialization: "Laser Therapy & Skin Rejuvenation",
        image: {
          src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
          alt: "Dr. Leila Hosseini",
        },
      },
    ],
    cta: {
      text: "View Full Team",
      link: "/meet-the-team",
    },
  },

  // ==================
  // CONSULTATION CTA
  // ==================
  cta: {
    title: "Begin Your Aesthetic Journey",
    description:
      "Schedule a comprehensive consultation with our medical team to discuss your goals and develop a personalized treatment plan.",
    primaryButton: {
      text: "Book Consultation",
      link: "/contact",
    },
    secondaryButton: {
      text: "Explore Treatments",
      link: "/treatments",
    },
    note: "Complimentary consultations available",
  },
};

export default aboutData;
