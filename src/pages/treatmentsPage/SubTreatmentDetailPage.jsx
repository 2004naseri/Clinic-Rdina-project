// src/pages/TreatmentDetailPage/SubTreatmentDetailPage.jsx
// ═══════════════════════════════════════════════════════
// SUB-TREATMENT DETAIL  —  Route: /treatments/:treatmentId/:subId
// Radina brand colours. Same editorial luxury style.
// Extras: breadcrumb trail · back to parent · siblings strip
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
                  "linear-gradient(135deg,#b17bbc22,#43056822)";
              }}
            />
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
            className={`font-display text-[18px] font-normal leading-snug
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
export default function SubTreatmentDetailPage() {
  const { treatmentId, subTreatmentId } = useParams();
  const subId = subTreatmentId; // matches router param name
  const navigate = useNavigate();

  const parent = getTreatmentById(treatmentId);
  const sub = parent?.subTreatments?.find((s) => s.id === subId);

  if (!parent || !sub) return <Navigate to="/treatments" replace />;

  const gallery = sub.beforeAfterGallery || [];
  const faqs = sub.faqs || [];
  const benefits = sub.benefits || [];
  const timeline = sub.resultsTimeline || {};
  const siblings = (parent.subTreatments || []).filter((s) => s.id !== subId);

  return (
    <div className="bg-background overflow-x-hidden">
      {/* ═══ HERO ══════════════════════════════════════════ */}
      <section className="relative h-[82vh] min-h-[540px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          {sub.image?.src && (
            <img
              src={sub.image.src}
              alt={sub.image?.alt}
              className="w-full h-full object-cover"
              onError={(e) => e.target.classList.add("hidden")}
            />
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t
                          from-secondary/95 via-secondary/50 to-secondary/15"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r
                          from-secondary/65 via-transparent to-transparent"
          />
        </div>

        {/* Breadcrumb trail */}
        <div
          className="absolute top-8 left-6 lg:left-12 z-20
                        flex items-center gap-1.5 flex-wrap"
        >
          <button
            onClick={() => navigate("/treatments")}
            className="font-body text-[8px] tracking-[0.28em] uppercase text-white/40
                       hover:text-white/70 transition-colors duration-300
                       bg-transparent border-none cursor-pointer"
          >
            Treatments
          </button>
          <span className="text-white/20 text-[11px]">/</span>
          <button
            onClick={() => navigate(`/treatments/${treatmentId}`)}
            className="font-body text-[8px] tracking-[0.28em] uppercase text-white/40
                       hover:text-white/70 transition-colors duration-300
                       bg-transparent border-none cursor-pointer"
          >
            {parent.name}
          </button>
          <span className="text-white/20 text-[11px]">/</span>
          <span className="font-body text-[8px] tracking-[0.28em] uppercase text-white/75">
            {sub.name}
          </span>
        </div>

        {/* Vertical category strip */}
        <div
          className="absolute right-10 top-1/3 z-10 hidden lg:flex
                        flex-col items-center gap-3"
        >
          <div className="w-px h-14 bg-white/15" />
          <span
            className="font-body text-[7px] tracking-[0.5em] uppercase text-white/25
                           [writing-mode:vertical-rl] max-w-[120px] truncate"
          >
            {parent.name}
          </span>
          <div className="w-px h-14 bg-white/15" />
        </div>

        <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12 pb-16 w-full">
          {/* Parent tag */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-accent" />
            <span
              className="font-body text-[8px] tracking-[0.45em] uppercase
                             text-accent font-semibold"
            >
              {parent.name}
            </span>
          </div>

          <h1
            className="font-display font-light text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(46px, 8vw, 118px)" }}
          >
            {sub.name}
          </h1>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28
                        bg-gradient-to-t from-background to-transparent z-10"
        />
      </section>

      {/* ═══ METADATA STRIP ════════════════════════════════ */}
      <section className="bg-background relative z-20 pt-8">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap border-y border-border">
            {[
              { label: "Duration", value: sub.duration },
              { label: "Starting From", value: sub.price },
              { label: "Initial Results", value: timeline.initial },
              { label: "Full Results", value: timeline.full },
              { label: "Lasts", value: timeline.duration },
            ]
              .filter((m) => m.value)
              .map((m, i, arr) => (
                <div
                  key={i}
                  className={`flex-1 min-w-[120px] py-5 px-5
                             ${i < arr.length - 1 ? "border-r border-border" : ""}`}
                >
                  <p
                    className="font-body text-[8px] tracking-[0.3em] uppercase
                               text-text-muted mb-1.5"
                  >
                    {m.label}
                  </p>
                  <p className="font-display text-[18px] font-normal text-secondary">
                    {m.value}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ═══ OVERVIEW ══════════════════════════════════════ */}
      <section className="py-24 lg:py-28 bg-background">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <span className="w-7 h-px bg-accent" />
            <span
              className="font-body text-[8px] tracking-[0.4em] uppercase
                             text-accent font-semibold"
            >
              Overview
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-16 items-start">
            <p
              className="font-display font-light text-text-primary leading-[1.5]"
              style={{ fontSize: "clamp(19px, 2.4vw, 33px)" }}
            >
              {sub.longDescription}
            </p>

            <div className="lg:pt-2 flex flex-col gap-4">
              <p className="font-body text-[12px] leading-[1.95] text-text-muted">
                {sub.shortDescription}
              </p>

              {/* Back to parent */}
              <button
                onClick={() => navigate(`/treatments/${treatmentId}`)}
                className="inline-flex items-center gap-2 font-body text-[9px]
                           tracking-[0.25em] uppercase text-secondary/60
                           hover:text-secondary transition-colors duration-300
                           bg-transparent border-none cursor-pointer"
              >
                <svg
                  className="w-3 h-3"
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
                All {parent.name}
              </button>

              <Link
                to="/contact"
                className="btn-primary text-center text-[9px] tracking-[0.3em]"
              >
                Book This Treatment
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
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS ══════════════════════════════════════ */}
      {benefits.length > 0 && (
        <section className="py-20 lg:py-24 bg-surface">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-14">
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
                <span
                  className="absolute right-4 font-display font-light leading-none
                                  text-secondary/[0.05] select-none pointer-events-none
                                  group-hover:text-secondary/[0.09]
                                  transition-colors duration-500"
                  style={{ fontSize: "clamp(48px, 6.5vw, 84px)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-body text-[9px] text-accent font-semibold
                                  tabular-nums w-10 shrink-0"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0 mr-6
                                  group-hover:bg-accent transition-colors duration-300"
                />
                <p
                  className="font-display font-normal text-text-secondary
                               group-hover:text-text-primary transition-colors duration-400"
                  style={{ fontSize: "clamp(13px, 1.5vw, 19px)" }}
                >
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══ GALLERY ═══════════════════════════════════════ */}
      {gallery.length > 0 && (
        <section className="py-20 lg:py-24 bg-background overflow-hidden">
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
                  style={{ fontSize: "clamp(26px, 3.5vw, 50px)" }}
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
          <div className="pl-6 lg:pl-12">
            <FilmStripGallery images={gallery} />
          </div>
        </section>
      )}

      {/* ═══ TIMELINE ══════════════════════════════════════ */}
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
                    className={`px-7 py-9 text-center
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
                      style={{ fontSize: "clamp(13px, 1.7vw, 20px)" }}
                    >
                      {stat.value}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ FAQ ══════════════════════════════════════════ */}
      {faqs.length > 0 && (
        <section className="py-20 lg:py-24 bg-background">
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
              style={{ fontSize: "clamp(26px, 3vw, 46px)" }}
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

      {/* ═══ SIBLINGS — other subs in same parent ══════════ */}
      {siblings.length > 0 && (
        <section className="py-16 lg:py-20 bg-surface">
          <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-10">
              <span className="w-7 h-px bg-accent" />
              <span
                className="font-body text-[8px] tracking-[0.4em] uppercase
                               text-accent font-semibold"
              >
                Also in {parent.name}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {siblings.map((s) => (
              <Link
                key={s.id}
                to={`/treatments/${treatmentId}/${s.id}`}
                className="group flex items-center justify-between py-5 border-b border-border
                           hover:bg-white transition-all duration-300 px-4 -mx-4"
              >
                <div>
                  <h3
                    className="font-display font-normal text-text-primary
                                  group-hover:text-secondary transition-colors duration-300
                                  leading-snug"
                    style={{ fontSize: "clamp(14px, 1.6vw, 20px)" }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="font-body text-[10px] text-text-muted mt-0.5 hidden md:block
                                 group-hover:text-text-secondary transition-colors duration-300"
                  >
                    {s.shortDescription}
                  </p>
                </div>
                <div className="flex items-center gap-5 shrink-0 ml-6">
                  <span
                    className="font-display text-[15px] text-secondary/70
                                   group-hover:text-secondary transition-colors hidden md:block"
                  >
                    {s.price}
                  </span>
                  <div
                    className="w-8 h-8 border border-border flex items-center justify-center
                                   group-hover:border-secondary group-hover:bg-secondary
                                   transition-all duration-300"
                  >
                    <svg
                      className="w-3 h-3 text-text-muted group-hover:text-white
                                    transition-colors duration-300"
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

      {/* ═══ CTA ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br
                        from-secondary via-secondary-dark to-primary-dark"
        />
        <div
          className="absolute -top-32 -right-32 w-[450px] h-[450px]
                        rounded-full border border-white/5 pointer-events-none"
        />
        <div
          className="absolute -bottom-40 -left-20 w-[380px] h-[380px]
                        rounded-full border border-white/4 pointer-events-none"
        />
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2
                        font-display font-light text-white/[0.035] leading-none
                        select-none pointer-events-none hidden xl:block"
          style={{ fontSize: "340px" }}
        >
          {sub.name.charAt(0)}
        </div>
        <div
          className="absolute top-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        />

        <div
          className="relative z-10 max-w-[840px] mx-auto px-6 lg:px-12
                        py-24 lg:py-32 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-9">
            <span className="w-10 h-px bg-accent/38" />
            <span
              className="font-body text-[7px] tracking-[0.55em] uppercase
                             text-accent/65 font-semibold"
            >
              Book Now
            </span>
            <span className="w-10 h-px bg-accent/38" />
          </div>

          <h2
            className="font-display font-light text-white leading-[1.0] mb-5"
            style={{ fontSize: "clamp(32px, 6vw, 78px)" }}
          >
            Ready for
            <br />
            <em className="not-italic text-accent">{sub.name}?</em>
          </h2>

          <p
            className="font-body text-[13px] leading-[2] text-white/50
                         max-w-[400px] mx-auto mb-10"
          >
            Free consultation with Dr. Shakiba Hussaini — personalised
            assessment, honest advice, no obligation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
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
                         hover:border-accent hover:text-accent transition-all duration-300"
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
                         hover:border-accent hover:text-accent transition-all duration-300"
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

        <div
          className="absolute bottom-0 left-0 right-0 h-px
                        bg-gradient-to-r from-transparent via-accent/38 to-transparent"
        />
      </section>
    </div>
  );
}
