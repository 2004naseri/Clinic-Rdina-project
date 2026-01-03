// src/pages/AboutPage.jsx
// ========================================
// ABOUT PAGE - Professional & Attractive with Brand Colors
// ========================================

import { Section, Container, Button, Card } from "../../components/ui";
import { aboutData } from "../../data/aboutData";

const AboutPage = () => {
  return (
    <main className="bg-white">
      <HeroSection />
      <IntroSection />
      <StatisticsSection />
      <PhilosophySection />
      <FacilitySection />
      <CredentialsSection />
      <TeamSection />
      <CTASection />
    </main>
  );
};

// ==========================================
// HERO - Like PackagesPage Style
// ==========================================
const HeroSection = () => {
  const { hero } = aboutData;

  return (
    <Section
      background="transparent"
      padding="large"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center py-12 lg:py-20">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white tracking-[0.3em] uppercase text-xs font-medium mb-6 rounded-full border border-white/30">
            {hero.badge}
          </span>
          <h1 className="backdrop-blur-xl bg-white/30 p-7 rounded-xl text-4xl">
            {hero.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            {hero.description}
          </p>
          <div className="flex gap-4 justify-center">
            <Button to="/contact" variant="primary" size="large">
              Book Consultation
            </Button>
            <Button
              to="/treatments"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              View Treatments
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </Section>
  );
};

// ==========================================
// INTRO - Clean with Brand Colors
// ==========================================
const IntroSection = () => {
  const { intro } = aboutData;

  return (
    <Section background="white" padding="large">
      <Container size="small">
        <div className="space-y-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>

          <p className="font-display text-2xl lg:text-3xl text-text-primary leading-[1.7] font-light text-center">
            {intro.statement}
          </p>

          <div className="text-center pt-8 border-t border-neutral-200">
            <p className="text-sm text-text-primary font-semibold mb-1">
              {intro.signature.name}
            </p>
            <p className="text-xs text-accent tracking-wider uppercase font-medium">
              {intro.signature.title}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

// ==========================================
// STATISTICS - Brand Colors
// ==========================================
const StatisticsSection = () => {
  const { statistics } = aboutData;

  return (
    <Section background="surface" padding="default">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.stats.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center p-8 rounded-2xl bg-white border border-neutral-200 hover:border-primary/30 hover:shadow-md transition-all duration-300"
              style={{
                animation: "fadeIn 0.6s ease-out backwards",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="font-display text-5xl lg:text-6xl text-primary font-light mb-3">
                {stat.metric}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

// ==========================================
// PHILOSOPHY - Professional Cards with Colors
// ==========================================
const PhilosophySection = () => {
  const { philosophy } = aboutData;

  return (
    <Section background="white" padding="large">
      <Container>
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-4 inline-block">
            Our Philosophy
          </span>
          <h2 className="heading-lg text-primary">{philosophy.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {philosophy.principles.map((principle, index) => (
            <div
              key={principle.id}
              className="group card card-hover"
              style={{
                animation: "fadeIn 0.6s ease-out backwards",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-start gap-6 mb-6">
                <span className="text-5xl font-display text-primary/20 font-light flex-shrink-0">
                  {principle.number}
                </span>
              </div>
              <h3 className="font-display text-2xl text-text-primary mb-4 group-hover:text-primary transition-colors">
                {principle.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

// ==========================================
// FACILITY - Card Component
// ==========================================
const FacilitySection = () => {
  const { facility } = aboutData;

  return (
    <Section background="surface" padding="large">
      <Container>
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-4 inline-block">
            Our Facility
          </span>
          <h2 className="heading-lg text-secondary mb-6">{facility.title}</h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {facility.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {facility.features.map((feature) => (
            <Card
              key={feature.id}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              imageHeight="h-72"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

// ==========================================
// CREDENTIALS - Organized with Brand Colors
// ==========================================
const CredentialsSection = () => {
  const { credentials } = aboutData;

  return (
    <Section background="white" padding="large">
      <Container>
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-4 inline-block">
            Accreditations
          </span>
          <h2 className="heading-lg text-primary">{credentials.title}</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {credentials.categories.map((category, index) => (
            <div
              key={category.id}
              className="card"
              style={{
                animation: "fadeIn 0.6s ease-out backwards",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-200">
                <div className="w-1 h-10 bg-primary rounded-full"></div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                  {category.category}
                </h3>
              </div>

              <ul className="space-y-4">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-text-secondary leading-relaxed flex items-start gap-3"
                  >
                    <svg
                      className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

// ==========================================
// TEAM - Professional with Brand Colors
// ==========================================
const TeamSection = () => {
  const { team } = aboutData;

  return (
    <Section background="surface" padding="large">
      <Container>
        <div className="text-center mb-16">
          <span className="text-accent tracking-[0.3em] uppercase text-xs font-medium mb-4 inline-block">
            Medical Experts
          </span>
          <h2 className="heading-lg text-secondary mb-6">{team.title}</h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {team.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {team.members.map((member, index) => (
            <div
              key={member.id}
              className="group text-center"
              style={{
                animation: "fadeIn 0.6s ease-out backwards",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl border-2 border-neutral-200 group-hover:border-primary/30 transition-all duration-500">
                <div className="aspect-[3/4]">
                  <img
                    src={member.image.src}
                    alt={member.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl text-text-primary font-normal group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs text-accent uppercase tracking-wider font-semibold">
                  {member.credentials}
                </p>
                <p className="text-sm text-text-secondary font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-text-muted leading-relaxed">
                  {member.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to={team.cta.link} variant="outline" size="large">
            {team.cta.text}
          </Button>
        </div>
      </Container>
    </Section>
  );
};

// ==========================================
// CTA - Brand Gradient
// ==========================================
const CTASection = () => {
  const { cta } = aboutData;

  return (
    <Section background="primary" padding="default">
      <Container>
        <div className="max-w-3xl mx-auto text-center text-white py-12">
          <h2 className="heading-lg text-white mb-6">{cta.title}</h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              to={cta.primaryButton.link}
              variant="secondary"
              size="large"
              className="bg-white text-primary hover:bg-white/90"
            >
              {cta.primaryButton.text}
            </Button>
            <Button
              to={cta.secondaryButton.link}
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              {cta.secondaryButton.text}
            </Button>
          </div>
          <p className="text-sm text-white/80 italic mt-6">{cta.note}</p>
        </div>
      </Container>
    </Section>
  );
};

export default AboutPage;
