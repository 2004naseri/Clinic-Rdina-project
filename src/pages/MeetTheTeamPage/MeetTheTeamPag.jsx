// src/pages/MeetTheTeamPage/MeetTheTeamPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import teamData from "../../data/teamData";

const { hero, members, stats, philosophy, cta } = teamData;
const founder = members[0];

// ── Credential icon SVG paths ──────────────────────────────
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

// ── Team member card ───────────────────────────────────────
function MemberCard({ member, onExpand, isExpanded }) {
  return (
    <div
      className={`group relative flex flex-col bg-white border transition-all duration-500
        ${isExpanded ? "border-secondary/40 shadow-[0_24px_48px_rgba(67,5,104,0.13)]" : "border-border hover:border-secondary/30 hover:shadow-[0_16px_40px_rgba(67,5,104,0.09)]"}
        hover:-translate-y-1`}
    >
      {/* Founder badge */}
      {member.founderBadge && (
        <div className="absolute top-4 left-4 z-20">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1
                         bg-secondary text-white font-body text-[8px]
                         tracking-[0.2em] uppercase font-semibold"
          >
            <span className="text-accent">✦</span>
            {member.founderBadge}
          </span>
        </div>
      )}

      {/* Portrait */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-secondary/10 to-primary/10 shrink-0">
        <img
          src={member.image.src}
          alt={member.image.alt}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        {/* Name plate */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/95 via-secondary/60 to-transparent pt-16 pb-5 px-5">
          <h3 className="font-display text-[22px] font-normal text-white leading-tight mb-0.5">
            {member.name}
          </h3>
          <span className="font-body text-[9px] tracking-[0.2em] uppercase text-accent font-semibold">
            {member.title} · {member.role.split("·")[0].trim()}
          </span>
        </div>
        {/* Gold corner */}
        <div className="absolute -top-3 -right-3 w-10 h-10 border-t-2 border-r-2 border-accent" />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Roles */}
        <div className="space-y-2 mb-5">
          {member.roles.slice(0, 3).map((role, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="w-1 h-1 rounded-full bg-accent shrink-0 mt-1.5" />
              <span className="font-body text-[11px] text-text-secondary leading-snug">
                {role}
              </span>
            </div>
          ))}
        </div>

        {/* Short bio */}
        <p className="font-body text-[12px] leading-[1.85] text-text-muted mb-6 flex-1">
          {member.shortBio}
        </p>

        {/* Expand button */}
        <button
          onClick={() => onExpand(member.id)}
          className="inline-flex items-center justify-between w-full
                     border border-secondary/20 px-4 py-3
                     font-body text-[9px] tracking-[0.2em] uppercase font-bold
                     text-secondary hover:bg-secondary hover:text-white hover:border-secondary
                     transition-all duration-300 cursor-pointer group/btn"
        >
          <span>{isExpanded ? "Close Profile" : "View Full Profile"}</span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300
              ${isExpanded ? "rotate-180" : "group-hover/btn:translate-x-0.5"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isExpanded ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Expanded profile panel (below the grid) ────────────────
function ExpandedProfile({ member, onClose }) {
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <div className="mt-6 border border-secondary/20 bg-surface animate-[fadeUp_0.45s_cubic-bezier(.16,1,.3,1)_both]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12">
        {/* Close bar */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              Full Profile
            </span>
          </div>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 font-body text-[9px] tracking-[0.2em]
                       uppercase text-text-muted hover:text-secondary transition-colors duration-200
                       cursor-pointer bg-transparent border-none"
          >
            Close
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — portrait + publication (founder only) */}
          <div className="lg:col-span-2">
            <div className="relative mb-8">
              <div className="aspect-[3/4] overflow-hidden border border-border">
                <img
                  src={member.image.src}
                  alt={member.image.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  onError={(e) => e.target.style.display = "none"}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-6">
                <h2 className="font-display text-[24px] font-normal text-white leading-tight mb-1">
                  {member.name}
                </h2>
                <span className="font-body text-[9px] tracking-[0.2em] uppercase text-accent font-semibold">
                  {member.title} · {member.role}
                </span>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-accent" />
            </div>

            {/* All roles */}
            <div className="space-y-2.5 mb-8">
              {member.roles.map((role, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="font-body text-[11px] text-text-secondary leading-snug">{role}</span>
                </div>
              ))}
            </div>

            {/* Publication callout — founder only */}
            {member.publication && (
              <div className="p-5 border border-accent/30 bg-accent/5">
                <p className="font-body text-[8px] tracking-[0.25em] uppercase text-accent font-semibold mb-2">
                  ✦ Published Research
                </p>
                <p className="font-display text-[14px] text-text-primary leading-snug mb-1 italic">
                  "{member.publication.title}"
                </p>
                <p className="font-body text-[10px] text-text-muted">{member.publication.journal}</p>
                <span className="inline-block mt-2 px-2.5 py-1 bg-accent/15 text-accent font-body text-[8px] tracking-[0.15em] uppercase font-semibold">
                  {member.publication.status}
                </span>
              </div>
            )}
          </div>

          {/* Right — bio + credentials */}
          <div className="lg:col-span-3">
            {/* Tagline */}
            <blockquote className="border-l-2 border-accent pl-5 mb-8">
              <p className="font-display text-[17px] font-light italic text-secondary leading-relaxed">
                "{member.tagline}"
              </p>
            </blockquote>

            {/* Bio */}
            <div className="space-y-4 mb-6">
              {(bioExpanded ? member.fullBio : member.fullBio.slice(0, 2)).map((para, i) => (
                <p key={i} className="font-body text-[13px] leading-[1.95] text-text-secondary">
                  {para}
                </p>
              ))}
            </div>

            {member.fullBio.length > 2 && (
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}

            {/* Credentials */}
            <div className="border-t border-border pt-8">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-text-muted font-semibold mb-5">
                Qualifications & Credentials
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {member.credentials.map((c, i) => (
                  <div
                    key={i}
                    className="flex gap-3 p-4 border border-border hover:border-accent/40
                               hover:bg-white transition-all duration-300 group"
                  >
                    <CredentialIcon type={c.icon} />
                    <div>
                      <p className="font-body text-[11px] font-semibold text-text-primary mb-0.5 group-hover:text-secondary transition-colors duration-300">
                        {c.label}
                      </p>
                      <p className="font-body text-[10px] text-text-muted leading-snug">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div className="mt-8 border-t border-border pt-8">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-text-muted font-semibold mb-5">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-2.5">
                {member.expertise.map((item, i) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1.5 border border-secondary/20
                               font-body text-[10px] text-secondary bg-secondary/5
                               hover:bg-secondary hover:text-white hover:border-secondary
                               transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────
export default function MeetTheTeamPage() {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const expandedMember = members.find((m) => m.id === expandedId) || null;

  return (
    <main id="main-content" className="bg-white font-body overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={hero.image.src}
            alt={hero.image.alt}
            className="w-full h-full object-cover"
            onError={(e) => e.target.classList.add("hidden")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,4,50,0.96)] via-secondary/55 to-black/20" />
        </div>

        {/* Vertical label */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 z-10 hidden lg:flex items-center gap-3 whitespace-nowrap font-body text-[8px] tracking-[0.45em] uppercase text-white/30">
          <span className="w-8 h-px bg-white/30 inline-block" />
          Radina Aesthetic Clinic
          <span className="w-8 h-px bg-white/30 inline-block" />
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 lg:px-12 pb-16 pt-32 animate-[fadeIn_1s_ease_both]">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-7 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              {hero.badge}
            </span>
          </div>
          <h1 className="font-display font-light text-white tracking-tight leading-[0.95] mb-5 text-[clamp(44px,7vw,90px)] max-w-[700px]">
            {hero.title}
          </h1>
          <p className="font-display text-[clamp(16px,1.8vw,22px)] font-light italic text-white/65 max-w-[560px]">
            "{hero.description}"
          </p>

          {/* Member count pills */}
          <div className="flex flex-wrap items-center gap-3 mt-10">
            {members.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setExpandedId(null);
                  document.getElementById("team-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm
                           font-body text-[9px] tracking-[0.15em] uppercase text-white/70
                           hover:border-accent/60 hover:text-accent transition-all duration-300 cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                {m.name.split(" ")[0]} {m.title && `· ${m.title}`}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-white z-10" />
      </section>

      {/* ══ TEAM GRID ═════════════════════════════════════════ */}
      <section id="team-grid" className="bg-white py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="mb-14">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-4 flex items-center gap-2.5">
              <span className="w-5 h-px bg-accent inline-block" />
              Expert Practitioners
            </p>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <h2 className="font-display font-normal text-text-primary tracking-tight leading-[1.05] text-[clamp(30px,4vw,54px)]">
                The Faces of <span className="italic text-secondary">Radina</span>
              </h2>
              <p className="font-body text-[12px] leading-[1.9] text-text-muted max-w-[380px] lg:text-right">
                A team united by expertise, precision, and a shared commitment to natural, evidence-based aesthetics.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onExpand={handleExpand}
                isExpanded={expandedId === member.id}
              />
            ))}
          </div>

          {/* Expanded profile panel */}
          {expandedMember && (
            <ExpandedProfile
              key={expandedMember.id}
              member={expandedMember}
              onClose={() => setExpandedId(null)}
            />
          )}
        </div>
      </section>

      {/* ══ STATS BAND ════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-secondary via-primary-dark to-primary py-14 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center py-6 px-4 ${i < stats.length - 1 ? "border-r border-white/15" : ""}`}
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

      {/* ══ FOUNDER SPOTLIGHT ════════════════════════════════ */}
      <section className="bg-surface py-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="flex items-center gap-3 mb-14">
            <span className="w-7 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              Founder Profile
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            {/* Left */}
            <div className="lg:col-span-2 animate-[fadeUp_0.7s_cubic-bezier(.16,1,.3,1)_both]">
              <div className="relative mb-8">
                <div className="aspect-[3/4] overflow-hidden border border-border">
                  <img
                    src={founder.image.src}
                    alt={founder.image.alt}
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                    onError={(e) => {
                      e.target.classList.add("hidden");
                      e.target.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-secondary to-primary items-end p-8">
                    <span className="font-display text-8xl text-white/20">S</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-6">
                  <h2 className="font-display text-[26px] font-normal text-white leading-tight mb-1">
                    {founder.name}
                  </h2>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-accent font-semibold">
                    {founder.title} · Aesthetic Practitioner
                  </span>
                </div>

                <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-accent" />
              </div>

              {/* Roles */}
              <div className="space-y-2.5">
                {founder.roles.map((role, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="font-body text-[12px] text-text-secondary leading-snug">{role}</span>
                  </div>
                ))}
              </div>

              {/* Publication */}
              <div className="mt-8 p-5 border border-accent/30 bg-accent/5">
                <p className="font-body text-[8px] tracking-[0.25em] uppercase text-accent font-semibold mb-2">
                  ✦ Published Research
                </p>
                <p className="font-display text-[15px] text-text-primary leading-snug mb-1 italic">
                  "{founder.publication.title}"
                </p>
                <p className="font-body text-[10px] text-text-muted">{founder.publication.journal}</p>
                <span className="inline-block mt-2 px-2.5 py-1 bg-accent/15 text-accent font-body text-[8px] tracking-[0.15em] uppercase font-semibold">
                  {founder.publication.status}
                </span>
              </div>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 animate-[fadeUp_0.7s_cubic-bezier(.16,1,.3,1)_0.15s_both]">
              <h2 className="font-display font-normal text-text-primary tracking-tight leading-[1.1] mb-6 text-[clamp(28px,3vw,44px)]">
                A Doctor Who Treats <br />
                <span className="italic text-secondary">People, Not Just Skin</span>
              </h2>

              <blockquote className="border-l-2 border-accent pl-5 mb-8">
                <p className="font-display text-[18px] font-light italic text-secondary leading-relaxed">
                  "{founder.tagline}"
                </p>
              </blockquote>

              <div className="space-y-4 mb-8">
                {founder.fullBio.slice(0, 3).map((para, i) => (
                  <p key={i} className="font-body text-[13px] leading-[1.95] text-text-secondary">
                    {para}
                  </p>
                ))}
              </div>

              {/* Credentials grid */}
              <div className="border-t border-border pt-8">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-text-muted font-semibold mb-5">
                  Qualifications & Credentials
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {founder.credentials.map((c, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 border border-border hover:border-accent/40 hover:bg-white transition-all duration-300 group"
                    >
                      <CredentialIcon type={c.icon} />
                      <div>
                        <p className="font-body text-[12px] font-semibold text-text-primary mb-0.5 group-hover:text-secondary transition-colors duration-300">
                          {c.label}
                        </p>
                        <p className="font-body text-[11px] text-text-muted leading-snug">{c.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
            <h2 className="font-display font-normal text-text-primary tracking-tight leading-[1.05] text-[clamp(30px,3.5vw,50px)]">
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
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="font-display text-[52px] font-light text-border leading-none mb-4 group-hover:text-primary/10 transition-colors duration-400 select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-[20px] font-normal text-text-primary mb-3 leading-snug group-hover:text-secondary transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="font-body text-[12px] leading-[1.85] text-text-muted">{p.description}</p>
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

        <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-7 h-px bg-accent inline-block" />
              <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
                Begin Your Journey
              </span>
            </div>
            <h2 className="font-display font-light text-white tracking-tight leading-[1.05] mb-5 text-[clamp(32px,4vw,58px)]">
              {cta.title}
            </h2>
            <p className="font-body text-[14px] leading-[1.9] text-white/70 max-w-[480px]">
              {cta.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Link
              to={cta.buttonLink}
              className="btn-primary text-center"
            >
              {cta.buttonText}
            </Link>
            <Link
              to="/treatments"
              className="inline-block px-10 py-4 border border-white/35 text-white
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:border-white/80 hover:bg-white/10
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
