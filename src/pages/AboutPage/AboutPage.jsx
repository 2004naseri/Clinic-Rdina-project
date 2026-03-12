// src/pages/AboutPage/AboutPage.jsx — Tailwind v4
import { Link } from "react-router-dom";
import { aboutData } from "../../data/aboutData";

const {
  hero,
  intro,
  philosophy,
  credentials,
  facility,
  statistics,
  doctor,
  cta,
} = aboutData;

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-white font-body overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className="w-full h-full object-cover"
            onError={(e) => e.target.classList.add("hidden")}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-[rgba(26,4,50,0.96)] via-secondary/50 to-black/20"
          />
        </div>

        {/* Side label */}
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
          className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12
                        pb-16 pt-32 animate-[fadeIn_1s_ease_both]"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              {hero.badge}
            </span>
          </div>
          <h1
            className="font-display font-light text-white tracking-tight leading-[0.95] mb-6
                         text-[clamp(44px,7vw,90px)] max-w-[740px]"
          >
            {hero.title}
          </h1>
          <p className="font-body text-[15px] leading-[1.9] text-white/75 max-w-[520px] mb-10">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-gradient-to-r from-secondary to-primary
                         text-white font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:opacity-85 hover:-translate-y-0.5"
            >
              Book Consultation
            </Link>
            <Link
              to="/treatments"
              className="inline-block px-10 py-4 border border-white/40 text-white
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:border-white/80"
            >
              Explore Treatments
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28
                        bg-gradient-to-b from-transparent to-white z-10"
        />
      </section>

      {/* ══ INTRO STATEMENT ═══════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[820px] mx-auto px-6 lg:px-12 text-center">
          {/* Ornament */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-accent inline-block" />
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-accent inline-block" />
          </div>

          <blockquote
            className="font-display text-[clamp(20px,2.5vw,30px)] font-light
                                  text-text-primary leading-[1.65] mb-10"
          >
            "{intro.statement}"
          </blockquote>

          <div className="border-t border-border pt-8">
            <p className="font-body text-[13px] font-semibold text-text-primary mb-1">
              {intro.signature.name}
            </p>
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-accent font-semibold">
              {intro.signature.title}
            </p>
          </div>
        </div>
      </section>

      {/* ══ STATISTICS BAND ═══════════════════════════════════ */}
      <div className="bg-gradient-to-r from-secondary via-primary-dark to-primary py-14 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-0">
          {statistics.map((s, i) => (
            <div
              key={i}
              className={`text-center py-6 px-4
                          ${i < statistics.length - 1 ? "border-r border-white/15" : ""}`}
            >
              <div
                className="font-display text-[40px] lg:text-[52px] font-light
                              text-accent leading-none mb-2"
              >
                {s.metric}
              </div>
              <div
                className="font-body text-[9px] tracking-[0.22em] uppercase
                              text-white/60 font-medium"
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PHILOSOPHY ════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
              Our Philosophy
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight
                           leading-[1.05] text-[clamp(30px,3.5vw,50px)]"
            >
              {philosophy.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophy.principles.map((p, i) => (
              <div
                key={p.id}
                className="group relative p-8 border border-border overflow-hidden
                           hover:border-secondary/40 hover:-translate-y-1
                           hover:shadow-[0_20px_40px_rgba(67,5,104,0.1)]
                           transition-all duration-400"
                style={{
                  animation: `fadeUp 0.6s cubic-bezier(.16,1,.3,1) ${i * 0.12}s both`,
                }}
              >
                {/* Hover top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5
                                bg-gradient-to-r from-secondary to-primary
                                scale-x-0 group-hover:scale-x-100
                                transition-transform duration-400 origin-left"
                />
                {/* Number watermark */}
                <div
                  className="font-display text-[64px] font-light text-border
                                leading-none mb-3 select-none
                                group-hover:text-primary/8 transition-colors duration-400"
                >
                  {p.number}
                </div>
                <h3
                  className="font-display text-[22px] font-normal text-text-primary mb-3
                               group-hover:text-secondary transition-colors duration-300"
                >
                  {p.title}
                </h3>
                <p className="font-body text-[13px] leading-[1.9] text-text-muted">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FACILITY ══════════════════════════════════════════ */}
      <section className="bg-surface py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
              Our Clinic
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight
                           leading-[1.05] text-[clamp(30px,3.5vw,50px)] mb-4"
            >
              {facility.title}
            </h2>
            <p className="font-body text-[13px] leading-[1.85] text-text-muted max-w-[480px] mx-auto">
              {facility.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facility.features.map((f, i) => (
              <div
                key={f.id}
                className="group overflow-hidden border border-border
                           hover:shadow-[0_20px_40px_rgba(67,5,104,0.1)]
                           hover:-translate-y-1.5 transition-all duration-400"
                style={{
                  animation: `fadeUp 0.6s cubic-bezier(.16,1,.3,1) ${i * 0.12}s both`,
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={f.image.src}
                    alt={f.image.alt}
                    className="w-full h-full object-cover transition-transform duration-700
                               group-hover:scale-[1.06]"
                    onError={(e) => {
                      e.target.classList.add("hidden");
                      e.target.nextElementSibling.classList.remove("hidden");
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3
                    className="font-display text-[20px] font-normal text-text-primary mb-2
                                 group-hover:text-secondary transition-colors duration-300"
                  >
                    {f.title}
                  </h3>
                  <p className="font-body text-[12px] leading-[1.8] text-text-muted">
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CREDENTIALS ═══════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
              Accreditations
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight
                           leading-[1.05] text-[clamp(30px,3.5vw,50px)]"
            >
              {credentials.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.categories.map((cat, i) => (
              <div
                key={cat.id}
                className="p-8 border border-border hover:border-secondary/40
                           hover:shadow-[0_12px_32px_rgba(67,5,104,0.08)]
                           transition-all duration-400 group"
                style={{
                  animation: `fadeUp 0.6s cubic-bezier(.16,1,.3,1) ${i * 0.12}s both`,
                }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-border">
                  <div className="w-1 h-10 bg-gradient-to-b from-secondary to-primary rounded-full" />
                  <h3
                    className="font-body text-[10px] tracking-[0.2em] uppercase
                                 text-secondary font-bold"
                  >
                    {cat.category}
                  </h3>
                </div>
                <ul className="flex flex-col gap-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-accent shrink-0 mt-0.5"
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
                      <span className="font-body text-[12px] leading-[1.75] text-text-secondary">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DOCTOR SPOTLIGHT ══════════════════════════════════ */}
      <section className="bg-surface py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border overflow-hidden">
            {/* Image */}
            <div className="relative min-h-[420px]">
              <img
                src={doctor.image.src}
                alt={doctor.image.alt}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  e.target.classList.add("hidden");
                  e.target.nextElementSibling.classList.remove("hidden");
                }}
              />
              <div className="hidden absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
              <div
                className="absolute inset-0 bg-gradient-to-t from-secondary/75 to-transparent
                              flex items-end p-10"
              >
                <div>
                  <p className="font-display text-[28px] font-light text-white leading-snug mb-1">
                    {doctor.name}
                  </p>
                  <p className="font-body text-[9px] tracking-[0.2em] uppercase text-accent font-semibold">
                    {doctor.credentials} · {doctor.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white p-10 lg:p-14 flex flex-col justify-center">
              <p
                className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-4
                             flex items-center gap-2.5"
              >
                <span className="w-5 h-px bg-accent inline-block" />
                Meet The Doctor
              </p>
              <h2
                className="font-display font-normal text-text-primary tracking-tight
                             leading-[1.1] text-[clamp(26px,3vw,40px)] mb-4"
              >
                The Person Behind <br />
                <span className="italic text-secondary">Every Treatment</span>
              </h2>
              <p className="font-body text-[13px] leading-[1.95] text-text-secondary mb-4">
                Dr. Shakiba Hussaini is a medical doctor, aesthetic
                practitioner, and published medical researcher. Her approach
                combines the precision of a clinician with the sensitivity of
                someone who truly listens.
              </p>
              <p className="font-body text-[13px] leading-[1.95] text-text-secondary mb-8">
                At Radina, every consultation is personal — a thorough
                assessment of your skin, your concerns, and your goals. No
                pressure, no unnecessary treatments, and always an honest
                recommendation.
              </p>
              <p className="font-body text-[11px] leading-[1.8] text-text-muted mb-8 italic">
                {doctor.specialization}
              </p>
              <Link
                to={doctor.link}
                className="self-start inline-flex items-center gap-2.5
                           font-body text-[10px] font-bold tracking-[0.2em] uppercase text-secondary
                           border-b border-secondary/30 pb-0.5
                           hover:border-secondary transition-colors duration-300"
              >
                Read Full Profile
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
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-secondary via-primary-dark to-primary py-24 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/8" />
          <div className="absolute -bottom-24 -left-14 w-72 h-72 rounded-full border border-white/6" />
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-7">
            <span className="w-7 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              Start Your Journey
            </span>
            <span className="w-7 h-px bg-accent inline-block" />
          </div>

          <h2
            className="font-display font-light text-white tracking-tight leading-[1.05] mb-5
                         text-[clamp(34px,5vw,64px)]"
          >
            {cta.title}
          </h2>
          <p className="font-body text-[14px] leading-[1.9] text-white/72 max-w-[520px] mx-auto mb-10">
            {cta.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link
              to={cta.primaryButton.link}
              className="inline-block px-12 py-4 bg-white text-secondary
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:bg-accent hover:text-white"
            >
              {cta.primaryButton.text}
            </Link>
            <Link
              to={cta.secondaryButton.link}
              className="inline-block px-12 py-4 border border-white/35 text-white
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:border-white/80"
            >
              {cta.secondaryButton.text}
            </Link>
          </div>

          <p className="font-body text-[11px] text-white/50 italic">
            ✦ {cta.note}
          </p>
        </div>
      </section>
    </main>
  );
}
