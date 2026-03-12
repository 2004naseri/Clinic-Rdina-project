// src/pages/TreatmentDetailPage/TreatmentDetailPage.jsx
// ═══════════════════════════════════════════════════════
// TREATMENT DETAIL  —  Radina Aesthetic Brand
// Palette: white bg · secondary (#430568) · primary (#b17bbc) · accent (#d4a574)
// Fonts: font-display (Cormorant Garamond) · font-body (Montserrat)
// Design: Editorial luxury — no alternating image/text blocks
// Sections: Hero → Overview → Benefits → Gallery (film strip) →
//           Sub-treatments (menu) → Timeline → FAQ → CTA
// ═══════════════════════════════════════════════════════

import { useState, useRef, useEffect } from "react";
import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
import { getTreatmentById } from "../../data/treatmentsData";
import { whatsapp, phones } from "../../data/siteConfig";

// ─── Lightbox ──────────────────────────────────────────
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setIdx((i) => Math.min(i + 1, images.length - 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[500] bg-secondary/95 backdrop-blur-sm
                 flex flex-col items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white/50 hover:text-white
                   transition-colors text-4xl font-light leading-none
                   bg-transparent border-none cursor-pointer z-10"
      >
        ×
      </button>

      <div
        className="absolute top-7 left-10 font-body text-[9px]
                      tracking-[0.4em] uppercase text-white/30"
      >
        {String(idx + 1).padStart(2, "0")} /{" "}
        {String(images.length).padStart(2, "0")}
      </div>

      <div
        className="w-full max-w-5xl px-16"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[idx].src}
          alt={images[idx].alt}
          className="w-full max-h-[75vh] object-contain"
        />
        {images[idx].label && (
          <p
            className="font-body text-[10px] tracking-[0.3em] uppercase
                         text-white/40 text-center mt-5"
          >
            {images[idx].label}
          </p>
        )}
      </div>

      {idx > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIdx((i) => i - 1);
          }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11
                     border border-white/20 text-white/50 hover:border-white/60
                     hover:text-white transition-all flex items-center justify-center
                     bg-transparent cursor-pointer text-2xl"
        >
          ‹
        </button>
      )}
      {idx < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIdx((i) => i + 1);
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11
                     border border-white/20 text-white/50 hover:border-white/60
                     hover:text-white transition-all flex items-center justify-center
                     bg-transparent cursor-pointer text-2xl"
        >
          ›
        </button>
      )}
    </div>
  );
}

// ─── Film Strip Gallery ─────────────────────────────────
// Horizontal drag-scroll. Greyscale → colour on hover. Click → lightbox.
function FilmStripGallery({ images }) {
  const [lightbox, setLightbox] = useState(null);
  const stripRef = useRef(null);
  const dragging = useRef(false);
  if (!images?.length) return null;

  const heights = ["h-64", "h-80", "h-56", "h-72", "h-64", "h-[300px]"];

  const onMouseDown = (e) => {
    const el = stripRef.current;
    dragging.current = false;
    let startX = e.pageX - el.offsetLeft;
    let scrollLeft = el.scrollLeft;
    const onMove = (ev) => {
      dragging.current = true;
      el.scrollLeft = scrollLeft - (ev.pageX - el.offsetLeft - startX);
    };
    const onUp = () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return (
    <>
      <div
        ref={stripRef}
        className="flex gap-3 overflow-x-auto pb-3 cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={onMouseDown}
      >
        <div className="flex-shrink-0 w-6 lg:w-14" />

        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => {
              if (!dragging.current) setLightbox(i);
            }}
            className={`relative flex-shrink-0 w-56 lg:w-64
                        ${heights[i % heights.length]}
                        overflow-hidden cursor-pointer group`}
          >
            {/* Frame number */}
            <div
              className="absolute top-2.5 left-3 z-20 font-body text-[8px]
                            tracking-[0.35em] text-white/50 select-none"
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-all duration-700
                         group-hover:scale-[1.05]"
              onError={(e) => {
                e.target.closest("div").style.background =
                  "linear-gradient(135deg, #b17bbc22, #43056822)";
              }}
            />

            {/* Hover overlay with label */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-400
                            flex items-end p-4"
            >
              {img.label && (
                <p className="font-body text-[9px] tracking-[0.2em] uppercase text-white/80">
                  {img.label}
                </p>
              )}
            </div>

            {/* Expand icon */}
            <div
              className="absolute top-2.5 right-3 w-6 h-6 border border-white/40
                            flex items-center justify-center opacity-0
                            group-hover:opacity-100 transition-opacity duration-300
                            bg-secondary/40 backdrop-blur-sm"
            >
              <svg
                className="w-2.5 h-2.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"
                />
              </svg>
            </div>
          </div>
        ))}

        <div className="flex-shrink-0 w-6 lg:w-14" />
      </div>

      {/* Hint */}
      <div className="flex items-center gap-4 mt-4 px-6 lg:px-14">
        <div className="h-px flex-1 bg-border" />
        <span className="font-body text-[8px] tracking-[0.4em] uppercase text-text-muted">
          drag · click to enlarge
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      {lightbox !== null && (
        <Lightbox
          images={images}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

// ─── FAQ Accordion ──────────────────────────────────────
function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6
                   bg-transparent border-none cursor-pointer text-left"
      >
        <div className="flex items-baseline gap-5">
          <span className="font-body text-[10px] text-accent tabular-nums shrink-0 font-semibold">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`font-display text-[19px] font-normal leading-snug
                             transition-colors duration-300
                             ${open ? "text-secondary" : "text-text-primary"}`}
          >
            {faq.question}
          </span>
        </div>
        <span
          className={`text-text-muted text-xl shrink-0 mt-0.5 leading-none
                          transition-transform duration-300
                          ${open ? "rotate-45 text-secondary" : ""}`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-out
                       ${open ? "max-h-56" : "max-h-0"}`}
      >
        <p className="font-body text-[13px] leading-[1.95] text-text-secondary pb-7 ml-9">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════
export default function TreatmentDetailPage() {
  const { treatmentId } = useParams();
  const navigate = useNavigate();
  const treatment = getTreatmentById(treatmentId);

  if (!treatment) return <Navigate to="/treatments" replace />;

  const subs = treatment.subTreatments || [];
  const gallery = treatment.beforeAfterGallery || [];
  const faqs = treatment.faqs || [];
  const benefits = treatment.benefits || [];
  const timeline = treatment.resultsTimeline || {};

  return (
    <div className="bg-background overflow-x-hidden">
      {/* ══════════════════════════════════════
          HERO  —  Full bleed image, giant title
          Title bleeds from image into the white section
      ══════════════════════════════════════ */}
      <section className="relative h-[88vh] min-h-[580px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          {treatment.image?.src && (
            <img
              src={treatment.image.src}
              alt={treatment.image.alt}
              className="w-full h-full object-cover"
              onError={(e) => e.target.classList.add("hidden")}
            />
          )}
          {/* Brand gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-secondary/95 via-secondary/50 to-secondary/20"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r
                          from-secondary/70 via-transparent to-transparent"
          />
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate("/treatments")}
          className="absolute top-8 left-6 lg:left-12 z-20
                     flex items-center gap-2.5 font-body text-[9px]
                     tracking-[0.35em] uppercase text-white/60
                     hover:text-white transition-colors duration-300
                     bg-transparent border-none cursor-pointer"
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
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All Treatments
        </button>

        {/* Vertical category strip — right side */}
        <div
          className="absolute right-10 top-1/3 z-10 hidden lg:flex
                        flex-col items-center gap-3"
        >
          <div className="w-px h-14 bg-white/15" />
          <span
            className="font-body text-[7px] tracking-[0.5em] uppercase text-white/25
                           [writing-mode:vertical-rl]"
          >
            {treatment.category}
          </span>
          <div className="w-px h-14 bg-white/15" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12 pb-16 w-full">
          {treatment.badge && (
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-accent" />
              <span className="font-body text-[8px] tracking-[0.45em] uppercase text-accent font-semibold">
                {treatment.badge}
              </span>
            </div>
          )}

          {/* Giant name — sits over the gradient fade */}
          <h1
            className="font-display font-light text-white leading-[0.92]
                       tracking-tight"
            style={{ fontSize: "clamp(52px, 9vw, 130px)" }}
          >
            {treatment.name}
          </h1>
        </div>

        {/* Fade to white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-28
                        bg-gradient-to-t from-background to-transparent z-10"
        />
      </section>

      {/* ══════════════════════════════════════
          METADATA STRIP
      ══════════════════════════════════════ */}
      <section className="bg-background relative z-20 pt-8">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap border-y border-border">
            {[
              { label: "Duration", value: treatment.duration },
              { label: "Starting From", value: treatment.price },
              { label: "Initial Results", value: timeline.initial },
              { label: "Full Results", value: timeline.full },
              { label: "Lasts", value: timeline.duration },
            ]
              .filter((m) => m.value)
              .map((m, i, arr) => (
                <div
                  key={i}
                  className={`flex-1 min-w-[130px] py-5 px-6
                             ${i < arr.length - 1 ? "border-r border-border" : ""}`}
                >
                  <p
                    className="font-body text-[8px] tracking-[0.3em] uppercase
                               text-text-muted mb-1.5"
                  >
                    {m.label}
                  </p>
                  <p className="font-display text-[19px] font-normal text-secondary">
                    {m.value}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          OVERVIEW  —  Large pull-quote + CTA sidebar
      ══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-14">
            <span className="w-7 h-px bg-accent" />
            <span
              className="font-body text-[8px] tracking-[0.4em] uppercase
                             text-accent font-semibold"
            >
              Overview
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16 items-start">
            {/* Pull-quote — large display type */}
            <p
              className="font-display font-light text-text-primary leading-[1.5]"
              style={{ fontSize: "clamp(20px, 2.6vw, 36px)" }}
            >
              {treatment.longDescription}
            </p>

            {/* Sidebar */}
            <div className="lg:pt-2 flex flex-col gap-5">
              <p className="font-body text-[12px] leading-[1.95] text-text-muted">
                {treatment.shortDescription}
              </p>
              <Link
                to="/contact"
                className="btn-primary text-center text-[9px] tracking-[0.3em]"
              >
                Book Free Consultation
              </Link>
              <a
                href={whatsapp.messageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center text-[9px] tracking-[0.3em]
                           flex items-center justify-center gap-2"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BENEFITS  —  Monumental numbered rows
          Ghost numeral watermark behind each row
      ══════════════════════════════════════ */}
      {benefits.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-16">
              <span className="w-7 h-px bg-accent" />
              <span
                className="font-body text-[8px] tracking-[0.4em] uppercase
                               text-accent font-semibold"
              >
                Benefits
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="relative flex items-center border-b border-border
                           py-6 group hover:bg-white transition-colors duration-300
                           px-4 -mx-4"
              >
                {/* Ghost watermark */}
                <span
                  className="absolute right-4 font-display font-light leading-none
                              text-secondary/[0.05] select-none pointer-events-none
                              group-hover:text-secondary/[0.09]
                              transition-colors duration-500"
                  style={{ fontSize: "clamp(52px, 7vw, 88px)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Small number */}
                <span
                  className="font-body text-[9px] text-accent font-semibold
                                  tabular-nums w-10 shrink-0"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Dot */}
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0 mr-6
                                  group-hover:bg-accent transition-colors duration-300"
                />

                {/* Benefit text */}
                <p
                  className="font-display font-normal text-text-secondary
                              group-hover:text-text-primary transition-colors duration-400"
                  style={{ fontSize: "clamp(14px, 1.6vw, 20px)" }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          GALLERY  —  Cinematic film strip
          Drag to scroll, greyscale → colour on hover
      ══════════════════════════════════════ */}
      {gallery.length > 0 && (
        <section className="py-20 lg:py-28 bg-background overflow-hidden">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12 mb-10">
            <div className="flex items-end justify-between">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="w-7 h-px bg-accent" />
                  <span
                    className="font-body text-[8px] tracking-[0.4em] uppercase
                                   text-accent font-semibold"
                  >
                    Results Gallery
                  </span>
                </div>
                <h2
                  className="font-display font-light text-secondary leading-tight"
                  style={{ fontSize: "clamp(28px, 4vw, 56px)" }}
                >
                  Real Results
                </h2>
              </div>
              <span
                className="font-body text-[10px] text-text-muted hidden lg:block
                               tracking-[0.2em] uppercase"
              >
                {gallery.length} images
              </span>
            </div>
          </div>

          {/* Strip stretches past container */}
          <div className="pl-6 lg:pl-12">
            <FilmStripGallery images={gallery} />
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          SUB-TREATMENTS  —  Luxury menu list
      ══════════════════════════════════════ */}
      {subs.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-7 h-px bg-accent" />
              <span
                className="font-body text-[8px] tracking-[0.4em] uppercase
                               text-accent font-semibold"
              >
                Specialised Treatments
              </span>
            </div>
            <p className="font-body text-[11px] text-text-muted mb-16 ml-11 tracking-wide">
              Select a treatment below to explore in full detail
            </p>

            {subs.map((sub, i) => (
              <Link
                key={sub.id}
                to={`/treatments/${treatmentId}/${sub.id}`}
                className="group flex items-stretch border-b border-border
                           hover:bg-white transition-all duration-300
                           px-4 -mx-4"
              >
                {/* Index */}
                <div className="py-7 pr-7 shrink-0 flex items-start pt-7">
                  <span
                    className="font-body text-[9px] text-text-muted/50 tabular-nums
                                   group-hover:text-accent font-semibold
                                   transition-colors duration-300"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Name + description */}
                <div className="py-7 flex-1 min-w-0">
                  <h3
                    className="font-display font-normal text-text-primary
                                group-hover:text-secondary transition-colors duration-300
                                leading-snug mb-1.5"
                    style={{ fontSize: "clamp(17px, 2vw, 26px)" }}
                  >
                    {sub.name}
                  </h3>
                  <p
                    className="font-body text-[11px] text-text-muted leading-relaxed
                                 hidden md:block group-hover:text-text-secondary
                                 transition-colors duration-300 max-w-xl"
                  >
                    {sub.shortDescription}
                  </p>
                </div>

                {/* Price + Duration + Arrow */}
                <div className="py-7 pl-7 flex items-center gap-7 shrink-0">
                  <div className="text-right hidden lg:block">
                    <p
                      className="font-body text-[7px] tracking-[0.3em] uppercase
                                   text-text-muted mb-1"
                    >
                      From
                    </p>
                    <p
                      className="font-display text-[16px] text-secondary
                                   group-hover:text-primary
                                   transition-colors duration-300"
                    >
                      {sub.price}
                    </p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p
                      className="font-body text-[7px] tracking-[0.3em] uppercase
                                   text-text-muted mb-1"
                    >
                      Time
                    </p>
                    <p className="font-body text-[11px] text-text-secondary">
                      {sub.duration}
                    </p>
                  </div>

                  {/* Arrow box */}
                  <div
                    className="w-9 h-9 border border-border flex items-center justify-center
                                   group-hover:border-secondary group-hover:bg-secondary
                                   transition-all duration-300"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-text-muted group-hover:text-white
                                  transition-colors duration-300
                                  group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          TIMELINE  —  Bordered stat blocks
      ══════════════════════════════════════ */}
      {(timeline.initial || timeline.full || timeline.duration) && (
        <section className="bg-background">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 border border-border">
              {[
                { label: "Initial Results", value: timeline.initial },
                { label: "Full Results", value: timeline.full },
                { label: "Duration", value: timeline.duration },
                {
                  label: "Sessions",
                  value: timeline.sessions || "Personalised",
                },
              ]
                .filter((s) => s.value)
                .map((stat, i, arr) => (
                  <div
                    key={i}
                    className={`px-8 py-10 text-center
                               ${i < arr.length - 1 ? "border-r border-border" : ""}`}
                  >
                    <p
                      className="font-body text-[7px] tracking-[0.4em] uppercase
                                 text-text-muted mb-3"
                    >
                      {stat.label}
                    </p>
                    <p
                      className="font-display font-light text-secondary leading-none"
                      style={{ fontSize: "clamp(14px, 1.8vw, 22px)" }}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          FAQ  —  Clean accordion
      ══════════════════════════════════════ */}
      {faqs.length > 0 && (
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-7 h-px bg-accent" />
              <span
                className="font-body text-[8px] tracking-[0.4em] uppercase
                               text-accent font-semibold"
              >
                Questions
              </span>
            </div>
            <h2
              className="font-display font-light text-secondary leading-tight mb-12"
              style={{ fontSize: "clamp(28px, 3.5vw, 50px)" }}
            >
              Common Questions
            </h2>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
            <div className="border-t border-border" />
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════
          CTA  —  Brand gradient, warm gold accents
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Deep brand gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-br
                        from-secondary via-secondary-dark to-primary-dark"
        />

        {/* Decorative circles */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px]
                        rounded-full border border-white/5 pointer-events-none"
        />
        <div
          className="absolute -bottom-40 -left-20 w-[400px] h-[400px]
                        rounded-full border border-white/4 pointer-events-none"
        />

        {/* Ghost letter */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2
                     font-display font-light text-white/[0.04] leading-none
                     select-none pointer-events-none hidden xl:block"
          style={{ fontSize: "360px" }}
        >
          {treatment.name.charAt(0)}
        </div>

        {/* Gold shimmer bar at top */}
        <div
          className="absolute top-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />

        <div
          className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12
                        py-28 lg:py-36 text-center"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <span className="w-10 h-px bg-accent/40" />
            <span
              className="font-body text-[7px] tracking-[0.55em] uppercase
                             text-accent/70 font-semibold"
            >
              Begin Your Journey
            </span>
            <span className="w-10 h-px bg-accent/40" />
          </div>

          {/* Headline */}
          <h2
            className="font-display font-light text-white leading-[1.0] mb-6"
            style={{ fontSize: "clamp(36px, 6.5vw, 84px)" }}
          >
            Book Your
            <br />
            <em className="not-italic text-accent">{treatment.name}</em>
          </h2>

          <p
            className="font-body text-[13px] leading-[2] text-white/50
                         max-w-[420px] mx-auto mb-12"
          >
            Free consultation with Dr. Shakiba Hussaini. No obligation — just an
            honest, expert assessment of what's right for you.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-accent text-secondary
                         font-body text-[9px] font-bold tracking-[0.35em] uppercase
                         hover:bg-white transition-colors duration-300"
            >
              Book Free Consultation
            </Link>
            <a
              href={whatsapp.messageLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4
                         border border-white/20 text-white/70
                         font-body text-[9px] font-bold tracking-[0.25em] uppercase
                         hover:border-accent hover:text-accent
                         transition-all duration-300"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${phones.primary}`}
              className="inline-flex items-center gap-3 px-10 py-4
                         border border-white/20 text-white/70
                         font-body text-[9px] font-bold tracking-[0.25em] uppercase
                         hover:border-accent hover:text-accent
                         transition-all duration-300"
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
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call Us
            </a>
          </div>

          <p className="font-body text-[9px] text-white/25 tracking-[0.2em]">
            ✦ &nbsp;Complimentary skin analysis with every first appointment
          </p>
        </div>

        {/* Gold shimmer bar at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
      </section>
    </div>
  );
}
