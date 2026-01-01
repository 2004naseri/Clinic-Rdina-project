// src/pages/MeetTheTeamPage.jsx
// ========================================
// MEET THE TEAM PAGE
// ========================================

import { Section, Container, SectionHeader, Button } from "../../components/ui";
import teamData from "../../data/teamData";

const MeetTheTeamPage = () => {
  const { hero, team, stats, whyChooseUs, cta } = teamData;

  // Split featured and other team members
  const featuredTeam = team.filter((m) => m.featured);
  const otherTeam = team.filter((m) => !m.featured);

  return (
    <main id="main-content" className="relative bg-background">
      {/* ====================
          1. HERO SECTION
      ==================== */}
      <Section
        background="transparent"
        padding="large"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {hero.image.src && !hero.image.placeholder?.show ? (
            <>
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
            </>
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${hero.image.placeholder.gradient}`}
            />
          )}
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center py-12 lg:py-20">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white tracking-[0.3em] uppercase text-xs font-medium mb-6 rounded-full border border-white/30">
              {hero.badge}
            </span>
            <h1 className="backdrop-blur-xl bg-white/30 p-7 rounded-xl text-4xl">
              {hero.title}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </Section>

      {/* ====================
          2. FEATURED TEAM MEMBERS - COMPACT & BEAUTIFUL
      ==================== */}
      <Section background="white" padding="default">
        <Container>
          <SectionHeader
            title="Our Leadership Team"
            description="Meet the experienced professionals leading Radina Clinic."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTeam.map((member, index) => (
              <div
                key={member.id}
                className="group"
                style={{
                  animation: "slideUp 0.5s ease-out backwards",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="card card-hover overflow-hidden p-0">
                  {/* Image - Smaller aspect ratio */}
                  <div className="relative aspect-square overflow-hidden bg-surface">
                    <img
                      src={member.image.src}
                      alt={member.image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.slice(0, 2).map((spec, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content - Compact */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="font-display text-xl text-text-primary mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {member.bio}
                    </p>

                    {/* Key credentials - compact */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                      {member.credentials.slice(0, 2).map((cred, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 text-xs text-text-muted"
                        >
                          <svg
                            className="w-3 h-3 text-primary flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ====================
          3. STATS SECTION
      ==================== */}
      <Section background="primary" padding="default">
        <Container>
          <div className="text-center mb-12">
            <h2 className="heading-lg text-white mb-4">{stats.title}</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.metrics.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl lg:text-5xl text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-white/80 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ====================
          4. OTHER TEAM MEMBERS
      ==================== */}
      {otherTeam.length > 0 && (
        <Section background="surface" padding="default">
          <Container>
            <SectionHeader
              title="Our Supporting Team"
              description="Dedicated professionals ensuring your complete care."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherTeam.map((member, index) => (
                <div
                  key={member.id}
                  className="card card-hover"
                  style={{
                    animation: "slideUp 0.5s ease-out backwards",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Compact Layout */}
                  <div className="flex gap-4 mb-4">
                    {/* Small Image */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-surface">
                      <img
                        src={member.image.src}
                        alt={member.image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg text-text-primary mb-0.5 truncate">
                        {member.name}
                      </h3>
                      <p className="text-xs text-primary font-medium mb-1">
                        {member.role}
                      </p>
                      <p className="text-xs text-text-muted">
                        {member.specialty}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.slice(0, 3).map((spec, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ====================
          5. WHY CHOOSE US
      ==================== */}
      <Section background="white" padding="default">
        <Container>
          <SectionHeader
            title={whyChooseUs.title}
            description="What sets our team apart."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.features.map((feature, i) => (
              <div
                key={i}
                className="text-center"
                style={{
                  animation: "slideUp 0.5s ease-out backwards",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ====================
          6. CTA SECTION
      ==================== */}
      <Section background="surface" padding="default">
        <Container>
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-center max-w-3xl mx-auto shadow-elegant">
            <h2 className="heading-lg mb-4">{cta.title}</h2>
            <p className="text-body-lg text-text-secondary mb-8 leading-relaxed">
              {cta.description}
            </p>
            <Button to={cta.buttonLink} variant="primary" size="large">
              {cta.buttonText}
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default MeetTheTeamPage;
