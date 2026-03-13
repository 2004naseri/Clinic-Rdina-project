// ConditionDetailPage.jsx — Tailwind v4 version
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getConditionById } from "../../data/conditionsData";

// ─── FAQ Item ─────────────────────────────────────────────────
function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-border"
      style={{
        animation: `fadeUp 0.5s cubic-bezier(.16,1,.3,1) ${index * 0.08}s both`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-5 gap-4 text-left
                   bg-transparent border-none cursor-pointer"
      >
        <span
          className={`font-display text-[20px] font-normal leading-snug transition-colors duration-300
                          ${open ? "text-secondary" : "text-text-primary"}`}
        >
          {faq.q}
        </span>
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0
                         transition-all duration-300
                         ${open ? "bg-secondary border-secondary" : "bg-white border-border"}`}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
            fill="none"
            stroke={open ? "white" : "#737373"}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v14M5 12h14"
            />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-[450ms] ease-out
                       ${open ? "max-h-52" : "max-h-0"}`}
      >
        <p className="font-body text-[13px] leading-[1.9] text-text-muted pb-5">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

// ─── Treatment Card ───────────────────────────────────────────
function TreatmentCard({ t, index }) {
  return (
    <div
      className="group relative overflow-hidden p-7 border border-border bg-white
                 transition-all duration-400 ease-out
                 hover:border-secondary hover:bg-surface hover:-translate-y-1
                 hover:shadow-[0_20px_40px_rgba(67,5,104,0.12)]"
      style={{
        animation: `fadeUp 0.55s cubic-bezier(.16,1,.3,1) ${index * 0.1}s both`,
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5
                      bg-gradient-to-r from-secondary to-primary
                      scale-x-0 group-hover:scale-x-100
                      transition-transform duration-400 origin-left"
      />

      <h4 className="font-display text-[22px] font-normal text-text-primary mb-2 leading-snug">
        {t.name}
      </h4>
      <p className="font-body text-[12px] leading-[1.8] text-text-muted mb-5">
        {t.description}
      </p>

      <div className="flex gap-5 items-center">
        <div>
          <div className="font-body text-[8px] tracking-[0.18em] uppercase text-accent font-semibold mb-0.5">
            Duration
          </div>
          <div className="font-display text-[18px] text-text-primary">
            {t.duration}
          </div>
        </div>
        <div className="w-px h-8 bg-border" />
        <div>
          <div className="font-body text-[8px] tracking-[0.18em] uppercase text-accent font-semibold mb-0.5">
            Sessions
          </div>
          <div className="font-display text-[18px] text-text-primary">
            {t.sessions}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Detail Page ─────────────────────────────────────────
export default function ConditionDetailPage() {
  const { conditionId } = useParams();
  const condition = getConditionById(conditionId);
  if (!condition)
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 p-12">
        <p className="font-display text-[32px] text-text-primary">
          Condition not found.
        </p>
        <Link
          to="/conditions"
          className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-secondary
                   border-b border-secondary pb-0.5"
        >
          ← Back to All Conditions
        </Link>
      </div>
    );

  const heroSrc = condition.heroImage?.src || condition.image.src;

  return (
    <main id="main-content" className="bg-white font-body overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-end">
        {/* BG */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroSrc}
            alt={condition.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.classList.add("hidden");
              e.target.nextElementSibling.classList.remove("hidden");
            }}
          />
          <div className="hidden absolute inset-0 bg-gradient-to-br from-secondary to-primary" />
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-[rgba(26,4,50,0.95)] via-secondary/50 to-black/15"
          />
        </div>

        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0 z-20">
          <div className="max-w-[1200px] mx-auto px-12 flex items-center gap-3">
            <Link
              to="/conditions"
              className="font-body text-[10px] tracking-[0.18em] uppercase text-white/55 font-medium
                         flex items-center gap-1.5 hover:text-accent transition-colors duration-300"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Conditions
            </Link>
            <span className="text-white/30 text-xs">/</span>
            <span className="font-body text-[10px] tracking-[0.18em] uppercase text-white/80">
              {condition.name}
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          className="relative z-10 w-full max-w-[1200px] mx-auto px-12 pb-16 pt-32
                        animate-[fadeIn_1s_ease_both]"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              {condition.category}
            </span>
          </div>

          <h1
            className="font-display font-light text-white tracking-tight leading-[0.95] mb-5
                         text-[clamp(44px,7vw,88px)] max-w-[720px]"
          >
            {condition.name}
          </h1>

          <p
            className="font-display text-[clamp(18px,2vw,24px)] font-light italic text-white/70
                        mb-9 max-w-[580px]"
          >
            {condition.tagline}
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap">
            {condition.stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col gap-0.5 px-7 py-4
                            bg-white/8 backdrop-blur-md
                            border border-white/15
                            ${i < condition.stats.length - 1 ? "border-r-0" : ""}`}
              >
                <div className="font-display text-[30px] font-normal text-accent leading-none">
                  {s.value}
                </div>
                <div className="font-body text-[8px] tracking-[0.2em] uppercase text-white/55">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white z-10" />
      </section>

      {/* ══ OVERVIEW ══════════════════════════════════════════ */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Description */}
          <div className="animate-[fadeUp_0.7s_cubic-bezier(.16,1,.3,1)_both]">
            <p
              className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-4
                           flex items-center gap-2.5"
            >
              <span className="w-5 h-px bg-accent inline-block" />
              About This Condition
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight leading-[1.15] mb-6
                           text-[clamp(28px,3vw,42px)]"
            >
              Understanding {condition.name}
            </h2>
            <p className="font-body text-[13px] leading-[1.95] text-text-secondary mb-8">
              {condition.longDescription}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4
                         bg-gradient-to-r from-secondary to-primary text-white
                         font-body text-[10px] font-bold tracking-[0.22em] uppercase
                         transition-all duration-300 hover:opacity-85 hover:-translate-y-0.5"
            >
              Book Consultation
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

          {/* Symptoms panel */}
          <div className="animate-[fadeUp_0.7s_cubic-bezier(.16,1,.3,1)_0.15s_both]">
            <div className="bg-surface border border-border p-10">
              <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-5">
                Common Symptoms
              </p>
              <div className="flex flex-col">
                {condition.symptoms.map((s, i) => (
                  <div
                    key={s.label}
                    className={`flex items-center gap-4 py-3.5
                                ${i < condition.symptoms.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-secondary to-primary shrink-0" />
                    <span className="font-body text-[13px] text-text-secondary">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-7 pt-6 border-t border-border flex justify-between items-center">
                <span className="font-body text-[9px] tracking-[0.18em] uppercase text-text-muted font-semibold">
                  Severity Range
                </span>
                <span className="font-display text-[18px] text-secondary">
                  {condition.severity}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TREATMENTS ════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-12">
          <div className="text-center mb-16">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
              How We Help
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight leading-[1.05] mb-3.5
                           text-[clamp(30px,3.5vw,50px)]"
            >
              Recommended Treatments
            </h2>
            <p className="font-body text-[13px] leading-[1.85] text-text-muted max-w-[440px] mx-auto">
              Each treatment is tailored to your specific skin needs and
              condition severity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {condition.relatedTreatments.map((t, i) => (
              <TreatmentCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════ */}
      {condition.faqs?.length > 0 && (
        <section className="bg-surface py-24">
          <div className="max-w-[800px] mx-auto px-12">
            <div className="text-center mb-14">
              <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
                Have Questions?
              </p>
              <h2
                className="font-display font-normal text-text-primary tracking-tight leading-[1.05]
                             text-[clamp(30px,3.5vw,50px)]"
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div>
              {condition.faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ BOOKING CTA ═══════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-secondary via-primary-dark to-primary py-24 px-12">
        {/* Decorative circles — scoped overflow so they never touch the footer */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/8" />
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full border border-white/5" />
          <div className="absolute -bottom-24 -left-14 w-72 h-72 rounded-full border border-white/6" />
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-7 animate-[float_5s_ease-in-out_infinite]">
            <span className="w-7 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              Your Journey Starts Here
            </span>
            <span className="w-7 h-px bg-accent inline-block" />
          </div>

          <h2
            className="font-display font-light text-white tracking-tight leading-[1.05] mb-5
                         text-[clamp(36px,5vw,68px)]"
          >
            Ready to Transform Your Skin?
          </h2>

          <p className="font-body text-[14px] leading-[1.9] text-white/72 max-w-[520px] mx-auto mb-12">
            Book your complimentary consultation and let our experts design a
            personalised treatment plan for {condition.name.toLowerCase()}.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="inline-block px-11 py-4 bg-white text-secondary
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:bg-accent hover:text-white"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/conditions"
              className="inline-block px-11 py-4 border border-white/35 text-white
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:border-white/80"
            >
              ← All Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
