// src/pages/MeetTheTeamPage/MeetTheTeamPage.jsx
// Single-doctor luxury profile page — Tailwind v4
import { useState } from "react";
import { Link } from "react-router-dom";
import teamData from "../../data/teamData";

const { hero, doctor, stats, philosophy, cta } = teamData;

// Credential icons
function CredentialIcon({ type }) {
  const paths = {
    degree:
      "M12 14l9-5-9-5-9 5 9 5zm0 7l-9-5 9-5 9 5-9 5zm0-14l-9 5 9 5 9-5-9-5z",
    cardio:
      "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    research:
      "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    editor:
      "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    lecturer:
      "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    aesthetic:
      "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  };
  return (
    <svg
      className="w-5 h-5 text-accent shrink-0 mt-0.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d={paths[type] || paths.degree}
      />
    </svg>
  );
}

export default function MeetTheTeamPage() {
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <main id="main-content" className="bg-white font-body overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[94vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.classList.add("hidden");
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-[rgba(26,4,50,0.96)] via-secondary/55 to-black/20"
          />
        </div>

        {/* Vertical label */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 z-10
                        hidden lg:flex items-center gap-3 whitespace-nowrap
                        font-body text-[8px] tracking-[0.45em] uppercase text-white/30"
        >
          <span className="w-8 h-px bg-white/30 inline-block" />
          Radina Aesthetic Clinic
          <span className="w-8 h-px bg-white/30 inline-block" />
        </div>

        <div
          className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 pb-16 pt-32
                        animate-[fadeIn_1s_ease_both]"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              {hero.badge}
            </span>
          </div>
          <h1
            className="font-display font-light text-white tracking-tight leading-[0.95] mb-5
                         text-[clamp(44px,7vw,90px)] max-w-[700px]"
          >
            {hero.title}
          </h1>
          <p
            className="font-display text-[clamp(16px,1.8vw,22px)] font-light italic
                         text-white/65 max-w-[560px]"
          >
            "{hero.description}"
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28
                        bg-gradient-to-b from-transparent to-white z-10"
        />
      </section>

      {/* ══ DOCTOR PROFILE ════════════════════════════════════ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Left — portrait + roles */}
            <div className="lg:col-span-2 animate-[fadeUp_0.7s_cubic-bezier(.16,1,.3,1)_both]">
              {/* Portrait */}
              <div className="relative mb-8">
                <div className="aspect-[3/4] overflow-hidden border border-border">
                  <img
                    src={doctor.image.src}
                    alt={doctor.image.alt}
                    className="w-full h-full object-cover object-top
                               transition-transform duration-700 hover:scale-[1.03]"
                    onError={(e) => {
                      e.target.classList.add("hidden");
                      e.target.nextElementSibling.classList.remove("hidden");
                    }}
                  />
                  <div
                    className="hidden w-full h-full bg-gradient-to-br from-secondary to-primary
                                  flex items-end p-8"
                  >
                    <span className="font-display text-8xl text-white/20">
                      S
                    </span>
                  </div>
                </div>

                {/* Name plate overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0
                                bg-gradient-to-t from-secondary/90 to-transparent p-6"
                >
                  <h2 className="font-display text-[26px] font-normal text-white leading-tight mb-1">
                    {doctor.name}
                  </h2>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-accent font-semibold">
                    {doctor.title} · Aesthetic Practitioner
                  </span>
                </div>

                {/* Gold corner accent */}
                <div
                  className="absolute -top-3 -right-3 w-12 h-12
                                border-t-2 border-r-2 border-accent"
                />
              </div>

              {/* Roles */}
              <div className="space-y-2.5">
                {doctor.roles.map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="font-body text-[12px] text-text-secondary leading-snug">
                      {role}
                    </span>
                  </div>
                ))}
              </div>

              {/* Publication callout */}
              <div className="mt-8 p-5 border border-accent/30 bg-accent/5">
                <p className="font-body text-[8px] tracking-[0.25em] uppercase text-accent font-semibold mb-2">
                  ✦ Published Research
                </p>
                <p className="font-display text-[15px] text-text-primary leading-snug mb-1 italic">
                  "{doctor.publication.title}"
                </p>
                <p className="font-body text-[10px] text-text-muted">
                  {doctor.publication.journal}
                </p>
                <span
                  className="inline-block mt-2 px-2.5 py-1 bg-accent/15 text-accent
                                 font-body text-[8px] tracking-[0.15em] uppercase font-semibold"
                >
                  {doctor.publication.status}
                </span>
              </div>
            </div>

            {/* Right — bio + credentials */}
            <div className="lg:col-span-3 animate-[fadeUp_0.7s_cubic-bezier(.16,1,.3,1)_0.15s_both]">
              <p
                className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-4
                             flex items-center gap-2.5"
              >
                <span className="w-5 h-px bg-accent inline-block" />
                About Dr. Hussaini
              </p>

              <h2
                className="font-display font-normal text-text-primary tracking-tight leading-[1.1] mb-6
                             text-[clamp(28px,3vw,44px)]"
              >
                A Doctor Who Treats <br />
                <span className="italic text-secondary">
                  People, Not Just Skin
                </span>
              </h2>

              {/* Tagline */}
              <blockquote className="border-l-2 border-accent pl-5 mb-8">
                <p className="font-display text-[18px] font-light italic text-secondary leading-relaxed">
                  "{doctor.tagline}"
                </p>
              </blockquote>

              {/* Bio paragraphs */}
              <div className="space-y-4 mb-6">
                {(bioExpanded
                  ? doctor.fullBio
                  : doctor.fullBio.slice(0, 2)
                ).map((para, i) => (
                  <p
                    key={i}
                    className="font-body text-[13px] leading-[1.95] text-text-secondary"
                  >
                    {para}
                  </p>
                ))}
              </div>

              {doctor.fullBio.length > 2 && (
                <button
                  onClick={() => setBioExpanded(!bioExpanded)}
                  className="inline-flex items-center gap-2 font-body text-[10px] font-bold
                             tracking-[0.2em] uppercase text-secondary border-b border-secondary/30
                             pb-0.5 mb-10 hover:border-secondary transition-colors duration-300
                             bg-transparent cursor-pointer"
                >
                  {bioExpanded ? "Read Less" : "Read Full Biography"}
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${bioExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}

              {/* Credentials grid */}
              <div className="border-t border-border pt-8">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-text-muted font-semibold mb-5">
                  Qualifications & Credentials
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {doctor.credentials.map((c, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 border border-border hover:border-accent/40
                                 hover:bg-surface transition-all duration-300 group"
                    >
                      <CredentialIcon type={c.icon} />
                      <div>
                        <p
                          className="font-body text-[12px] font-semibold text-text-primary mb-0.5
                                      group-hover:text-secondary transition-colors duration-300"
                        >
                          {c.label}
                        </p>
                        <p className="font-body text-[11px] text-text-muted leading-snug">
                          {c.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAND ════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-secondary via-primary-dark to-primary py-14 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center py-6 px-4
                          ${i < stats.length - 1 ? "border-r border-white/15" : ""}`}
            >
              <div className="font-display text-[40px] lg:text-[52px] font-light text-accent leading-none mb-2">
                {s.number}
              </div>
              <div className="font-body text-[9px] tracking-[0.22em] uppercase text-white/60 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ AREAS OF EXPERTISE ════════════════════════════════ */}
      <section className="bg-surface py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — header */}
            <div>
              <p
                className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-4
                             flex items-center gap-2.5"
              >
                <span className="w-5 h-px bg-accent inline-block" />
                Clinical Expertise
              </p>
              <h2
                className="font-display font-normal text-text-primary tracking-tight leading-[1.1] mb-6
                             text-[clamp(28px,3vw,46px)]"
              >
                Areas of Expertise <br />
                <span className="italic text-secondary">at Radina Clinic</span>
              </h2>
              <p className="font-body text-[13px] leading-[1.95] text-text-secondary mb-8">
                Each treatment is delivered with the precision of a medically
                trained doctor, guided by evidence-based protocols and
                individualised assessment.
              </p>
              <Link
                to="/conditions"
                className="inline-flex items-center gap-2.5 font-body text-[10px] font-bold
                           tracking-[0.2em] uppercase text-secondary border-b border-secondary/30
                           pb-0.5 hover:border-secondary transition-colors duration-300"
              >
                View Conditions We Treat
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Right — expertise list */}
            <div className="flex flex-col gap-0">
              {doctor.expertise.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 py-4
                               ${i < doctor.expertise.length - 1 ? "border-b border-border" : ""}
                               group hover:bg-white transition-colors duration-300 px-4 -mx-4`}
                >
                  <div
                    className="w-2 h-2 rounded-full bg-gradient-to-br from-secondary to-primary
                                  shrink-0 group-hover:scale-125 transition-transform duration-300"
                  />
                  <span
                    className="font-body text-[13px] text-text-secondary group-hover:text-text-primary
                                   transition-colors duration-300"
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ PHILOSOPHY ════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
              The Radina Difference
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight leading-[1.05]
                           text-[clamp(30px,3.5vw,50px)]"
            >
              Our Clinical Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophy.map((p, i) => (
              <div
                key={i}
                className="group p-7 border border-border hover:border-secondary/40
                           hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(67,5,104,0.1)]
                           transition-all duration-400 relative overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5
                                bg-gradient-to-r from-secondary to-primary
                                scale-x-0 group-hover:scale-x-100
                                transition-transform duration-400 origin-left"
                />
                {/* Number */}
                <div
                  className="font-display text-[52px] font-light text-border leading-none mb-4
                                group-hover:text-primary/10 transition-colors duration-400
                                select-none"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="font-display text-[20px] font-normal text-text-primary mb-3 leading-snug
                               group-hover:text-secondary transition-colors duration-300"
                >
                  {p.title}
                </h3>
                <p className="font-body text-[12px] leading-[1.85] text-text-muted">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-secondary via-primary-dark to-primary py-24 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/8" />
          <div className="absolute -bottom-24 -left-14 w-72 h-72 rounded-full border border-white/6" />
        </div>

        <div
          className="relative z-10 max-w-[1200px] mx-auto
                        grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-7 h-px bg-accent inline-block" />
              <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
                Begin Your Journey
              </span>
            </div>
            <h2
              className="font-display font-light text-white tracking-tight leading-[1.05] mb-5
                           text-[clamp(32px,4vw,58px)]"
            >
              {cta.title}
            </h2>
            <p className="font-body text-[14px] leading-[1.9] text-white/70 max-w-[480px]">
              {cta.description}
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Link
              to={cta.buttonLink}
              className="inline-block px-10 py-4 bg-white text-secondary
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:bg-accent hover:text-white
                         text-center"
            >
              {cta.buttonText}
            </Link>
            <Link
              to="/conditions"
              className="inline-block px-10 py-4 border border-white/35 text-white
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:border-white/80
                         text-center"
            >
              View Treatments
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
