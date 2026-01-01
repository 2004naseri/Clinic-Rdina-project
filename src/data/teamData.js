// src/data/teamData.js
// ========================================
// TEAM DATA - Easy to Edit!
// ========================================
// All team member information in ONE place

export const teamData = {
  // ==================
  // PAGE HERO
  // ==================
  hero: {
    badge: "Our Team",
    title: "Meet Our Expert Team",
    description:
      "Our board-certified professionals bring decades of combined experience in aesthetic medicine. Meet the experts dedicated to your beauty journey.",
    image: {
      src: "/images/clinic.jpg",
      alt: "Radina Clinic team",
      placeholder: {
        show: false,
        gradient: "from-primary/20 via-secondary/10 to-accent/20",
      },
    },
  },

  // ==================
  // TEAM MEMBERS
  // ==================
  team: [
    {
      id: "dr-sarah-ahmad",
      name: "Dr. Shakiba Hussaini",
      role: "Medical Director & Founder",
      specialty: "Aesthetic Medicine",
      featured: true,
      image: {
        src: "/images/boss.jpg",
        alt: "Dr. Shakiba Hussaini",
      },
      bio: "Dr. Sarah Ahmad is a board-certified physician with over 15 years of experience in aesthetic medicine. She founded Radina Clinic with a vision to provide personalized, natural-looking results through advanced medical techniques.",
      credentials: [
        "Board Certified in Aesthetic Medicine",
        "15+ years experience",
        "Advanced Injectable Specialist",
        "Laser Therapy Expert",
      ],
      specialties: [
        "Botox & Fillers",
        "Laser Treatments",
        "Anti-Aging Therapies",
        "Facial Rejuvenation",
      ],
      education: [
        "MD, Medical University",
        "Fellowship in Aesthetic Medicine",
        "Advanced Dermatology Training",
      ],
    },
    {
      id: "dr-michael-hassan",
      name: "Dr. Michael Hassan",
      role: "Senior Aesthetic Physician",
      specialty: "Laser & Body Contouring",
      featured: true,
      image: {
        src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
        alt: "Dr. Michael Hassan",
      },
      bio: "With 12 years of experience, Dr. Hassan specializes in advanced laser treatments and non-surgical body contouring. His precise technique and attention to detail deliver exceptional results.",
      credentials: [
        "Board Certified Physician",
        "12+ years experience",
        "Laser Surgery Specialist",
        "Body Contouring Expert",
      ],
      specialties: [
        "Laser Hair Removal",
        "Skin Resurfacing",
        "Body Contouring",
        "Scar Reduction",
      ],
      education: [
        "MD, International Medical School",
        "Laser Surgery Certification",
        "Advanced Body Sculpting Training",
      ],
    },
    {
      id: "nurse-amina-rahman",
      name: "Amina Rahman, RN",
      role: "Lead Aesthetic Nurse",
      specialty: "Injectable Treatments",
      featured: true,
      image: {
        src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80",
        alt: "Amina Rahman",
      },
      bio: "Amina brings 8 years of specialized experience in aesthetic nursing. Her gentle approach and artistic eye make her highly sought after for injectable treatments.",
      credentials: [
        "Registered Nurse",
        "8+ years in aesthetics",
        "Advanced Injector Certified",
        "Patient Care Specialist",
      ],
      specialties: [
        "Botox Administration",
        "Dermal Fillers",
        "PRP Treatments",
        "Medical Facials",
      ],
      education: [
        "BSN, Nursing School",
        "Advanced Aesthetic Training",
        "Injectable Certification",
      ],
    },
    {
      id: "farah-karimi",
      name: "Farah Karimi",
      role: "Senior Aesthetician",
      specialty: "Skincare & Facials",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
        alt: "Farah Karimi",
      },
      bio: "Farah is a licensed aesthetician with 10 years of experience in advanced skincare treatments. She creates customized facial protocols for each client's unique needs.",
      credentials: [
        "Licensed Aesthetician",
        "10+ years experience",
        "Advanced Skincare Specialist",
        "Chemical Peel Expert",
      ],
      specialties: [
        "HydraFacial",
        "Chemical Peels",
        "Microdermabrasion",
        "Skincare Consultation",
      ],
      education: [
        "Licensed Aesthetician",
        "Advanced Skincare Diploma",
        "Chemical Peel Certification",
      ],
    },
    {
      id: "leila-azizi",
      name: "Leila Azizi",
      role: "Laser Technician",
      specialty: "Laser Treatments",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
        alt: "Leila Azizi",
      },
      bio: "Leila specializes in laser treatments with 6 years of hands-on experience. Her technical expertise ensures safe and effective laser procedures for all skin types.",
      credentials: [
        "Certified Laser Technician",
        "6+ years experience",
        "IPL Specialist",
        "Safety Protocol Expert",
      ],
      specialties: [
        "Laser Hair Removal",
        "IPL Photofacial",
        "Laser Skin Tightening",
        "Pigmentation Treatment",
      ],
      education: [
        "Laser Technology Certification",
        "Advanced IPL Training",
        "Skin Type Analysis",
      ],
    },
    {
      id: "roya-mansouri",
      name: "Roya Mansouri",
      role: "Patient Care Coordinator",
      specialty: "Client Relations",
      featured: false,
      image: {
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
        alt: "Roya Mansouri",
      },
      bio: "Roya ensures every patient has a seamless experience at Radina Clinic. From initial consultation to post-treatment care, she's here to answer questions and provide support.",
      credentials: [
        "Patient Care Specialist",
        "5+ years in healthcare",
        "Client Relations Expert",
        "Treatment Coordinator",
      ],
      specialties: [
        "Treatment Planning",
        "Patient Education",
        "Follow-up Care",
        "Scheduling Management",
      ],
      education: [
        "Healthcare Administration",
        "Customer Service Excellence",
        "Medical Office Management",
      ],
    },
  ],

  // ==================
  // STATS & ACHIEVEMENTS
  // ==================
  stats: {
    title: "Our Track Record",
    metrics: [
      { number: "15+", label: "Years Combined Experience" },
      { number: "10,000+", label: "Treatments Performed" },
      { number: "98%", label: "Patient Satisfaction" },
      { number: "6", label: "Expert Team Members" },
    ],
  },

  // ==================
  // WHY CHOOSE US
  // ==================
  whyChooseUs: {
    title: "Why Choose Our Team?",
    features: [
      {
        icon: "certification",
        title: "Certified Professionals",
        description:
          "All team members are licensed and certified in their specialties.",
      },
      {
        icon: "experience",
        title: "Years of Experience",
        description: "Decades of combined expertise in aesthetic medicine.",
      },
      {
        icon: "personalized",
        title: "Personalized Care",
        description:
          "We take time to understand your unique goals and concerns.",
      },
      {
        icon: "results",
        title: "Proven Results",
        description: "Thousands of satisfied patients with beautiful outcomes.",
      },
    ],
  },

  // ==================
  // CTA SECTION
  // ==================
  cta: {
    title: "Ready to Meet Your Beauty Goals?",
    description:
      "Book a consultation with our expert team. We'll assess your skin, discuss your goals, and create a personalized treatment plan just for you.",
    buttonText: "Schedule Consultation",
    buttonLink: "/contact",
  },
};

// Helper functions
export const getFeaturedTeam = () => {
  return teamData.team.filter((member) => member.featured);
};

export const getTeamMemberById = (id) => {
  return teamData.team.find((member) => member.id === id);
};

export default teamData;
