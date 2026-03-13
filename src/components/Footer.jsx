// src/components/layout/Footer.jsx
// ========================================
// SITE FOOTER
// Imports ONLY from siteConfig — never from navbarData
// ========================================
import { Link, useNavigate } from "react-router-dom";
import { clinic, phones, whatsapp, social, hours } from "../data/siteConfig";
import { navigationItems } from "../data/navbarData";

// ─── Social Icons ─────────────────────────────────────────────
const SocialIcon = ({ platform }) => {
  const icons = {
    instagram: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    tiktok: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  };
  return icons[platform] || null;
};

// ─── Footer ───────────────────────────────────────────────────
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const footerNav = navigationItems.filter((item) => item.type === "link");

  function handleClick(path) {
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate(path);
  }

  const services = [
    { label: "Botox & Anti-Wrinkle", path: "/treatments" },
    { label: "Dermal Fillers", path: "/treatments" },
    { label: "Skin Boosters", path: "/treatments" },
    { label: "Mesotherapy", path: "/treatments" },
    { label: "Non-Surgical Rhinoplasty", path: "/treatments" },
    { label: "Treatment Packages", path: "/packages" },
  ];

  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden font-body">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px
                      bg-gradient-to-r from-transparent via-secondary to-transparent opacity-40"
      />

      {/* ── Main content ─────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* ── Brand ── */}
          <div className="lg:col-span-1">
            <button
              onClick={() => handleClick("/")}
              className="block mb-5 bg-transparent border-none cursor-pointer p-0"
            >
              <img
                src="/images/logo.png"
                alt={clinic.name}
                className="h-12 w-auto"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextElementSibling.style.display = "flex";
                }}
              />
              <div
                style={{ display: "none" }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-primary
                           items-center justify-center"
              >
                <span className="font-display text-xl text-white font-light">
                  R
                </span>
              </div>
            </button>

            <p className="font-body text-[13px] leading-[1.85] text-white/70 mb-1">
              {clinic.name}
            </p>
            <p className="font-body text-[11px] text-white/40 italic mb-5">
              {clinic.tagline}
            </p>
            <p className="font-body text-[12px] leading-[1.85] text-white/55 mb-7">
              Advanced aesthetic medicine in London & Leeds, guided by medical
              excellence and a commitment to natural results.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 flex-wrap">
              {social.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-9 h-9 rounded-full bg-white/8 border border-white/10
                             flex items-center justify-center
                             hover:bg-gradient-to-br hover:from-secondary hover:to-primary
                             hover:border-transparent hover:scale-110
                             transition-all duration-300"
                >
                  <SocialIcon platform={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3
              className="font-display text-[16px] font-normal text-white mb-6
                           flex items-center gap-3"
            >
              <span className="w-4 h-px bg-accent inline-block" />
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleClick(item.path)}
                    className="group flex items-center gap-2 font-body text-[13px]
                               text-white/60 hover:text-white transition-all duration-300
                               bg-transparent border-none cursor-pointer"
                  >
                    <span
                      className="w-0 h-px bg-accent group-hover:w-3
                                     transition-all duration-300 inline-block"
                    />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Treatments ── */}
          <div>
            <h3
              className="font-display text-[16px] font-normal text-white mb-6
                           flex items-center gap-3"
            >
              <span className="w-4 h-px bg-accent inline-block" />
              Our Treatments
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleClick(item.path)}
                    className="group flex items-center gap-2 font-body text-[13px]
                               text-white/60 hover:text-white transition-all duration-300
                               bg-transparent border-none cursor-pointer"
                  >
                    <span
                      className="w-0 h-px bg-accent group-hover:w-3
                                     transition-all duration-300 inline-block"
                    />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ── */}
          <div>
            <h3
              className="font-display text-[16px] font-normal text-white mb-6
                           flex items-center gap-3"
            >
              <span className="w-4 h-px bg-accent inline-block" />
              Get In Touch
            </h3>

            <ul className="flex flex-col gap-4">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-[0.18em] uppercase text-white/35 mb-1">
                    Phone
                  </p>
                  <a
                    href={phones.primary.link}
                    className="font-body text-[13px] text-white/80 hover:text-white transition-colors duration-300 block"
                  >
                    {phones.primary.display}
                  </a>
                  <a
                    href={phones.alternative.link}
                    className="font-body text-[11px] text-white/45 hover:text-white/70 transition-colors duration-300 block mt-0.5"
                  >
                    {phones.alternative.display}
                  </a>
                </div>
              </li>

              {/* WhatsApp */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <SocialIcon platform="whatsapp" />
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-[0.18em] uppercase text-white/35 mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={whatsapp.messageLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[13px] text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {whatsapp.display}
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-[0.18em] uppercase text-white/35 mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="font-body text-[13px] text-white/80 hover:text-white transition-colors duration-300 break-all"
                  >
                    {clinic.email}
                  </a>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.75}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-[9px] tracking-[0.18em] uppercase text-white/35 mb-1">
                    Location
                  </p>
                  <p className="font-body text-[13px] text-white/80">
                    {clinic.location}
                  </p>
                </div>
              </li>

              {/* Hours */}
              <li className="pt-3 border-t border-white/10">
                <p className="font-body text-[9px] tracking-[0.18em] uppercase text-white/35 mb-2.5">
                  Hours
                </p>
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between items-center mb-1.5"
                  >
                    <span className="font-body text-[11px] text-white/45">
                      {h.day}
                    </span>
                    <span
                      className={`font-body text-[11px] font-medium
                                      ${h.open ? "text-white/70" : "text-accent"}`}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────── */}
      <div className="border-t border-white/10">
        <div
          className="max-w-[1200px] mx-auto px-6 lg:px-12 py-5
                        flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <p className="font-body text-[11px] text-white/40">
            © {currentYear} {clinic.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-body text-[11px] text-white/30">
              Privacy Policy
            </span>
            <span className="font-body text-[11px] text-white/30">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
