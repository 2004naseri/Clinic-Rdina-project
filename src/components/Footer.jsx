// src/components/layout/Footer.jsx
// ========================================
// SITE FOOTER
// Uses shared clinic details, navigation and contact destinations.
// ========================================
import { Link, NavLink } from "react-router-dom";
import { clinic, whatsapp, social, hours } from "../data/siteConfig";
import { navigationItems } from "../data/navbarData";
import contactData from "../data/contactData";
import SocialIcon from "./SocialIcon";

// ─── Footer ───────────────────────────────────────────────────
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNav = navigationItems.filter((item) => item.type === "link");

  function scrollToTop(event) {
    if (event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }

  const services = [
    { label: "Botox & Anti-Wrinkle", path: "/treatments/botox" },
    { label: "Dermal Fillers", path: "/treatments/fillers" },
    { label: "Skin Boosters", path: "/treatments/skin-boosters" },
    { label: "Microneedling", path: "/treatments/microneedling" },
    { label: "Mesotherapy", path: "/treatments/mesotherapy" },
    { label: "Non-Surgical Rhinoplasty", path: "/treatments/non-surgical-rhinoplasty" },
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
            <Link
              to="/"
              onClick={scrollToTop}
              aria-label={`${clinic.name} home`}
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
                <span className="font-display text-lg text-white font-light tracking-wide">
                  GS
                </span>
              </div>
            </Link>

            <p className="font-body text-[13px] leading-[1.85] text-white/70 mb-1">
              {clinic.name}
            </p>
            <p className="font-body text-[11px] text-white/40 italic mb-5">
              {clinic.tagline}
            </p>
            <p className="font-body text-[12px] leading-[1.85] text-white/55 mb-7">
              Advanced aesthetic medicine in Leeds, guided by medical
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
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={scrollToTop}
                    className={({ isActive }) => `group flex items-center gap-2 font-body text-[13px]
                               ${isActive ? "text-accent" : "text-white/60 hover:text-white"}
                               transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
                  >
                    <span
                      className="w-0 h-px bg-accent group-hover:w-3 group-aria-[current=page]:w-3
                                     transition-all duration-300 inline-block"
                    />
                    {item.label}
                  </NavLink>
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
              {services.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={scrollToTop}
                    className={({ isActive }) => `group flex items-center gap-2 font-body text-[13px]
                               ${isActive ? "text-accent" : "text-white/60 hover:text-white"}
                               transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
                  >
                    <span
                      className="w-0 h-px bg-accent group-hover:w-3 group-aria-[current=page]:w-3
                                     transition-all duration-300 inline-block"
                    />
                    {item.label}
                  </NavLink>
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
              {/* <li className="flex items-start gap-3">
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
              </li> */}

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
                  <a
                    href={contactData.contactInfo.address.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View our Leeds clinic in Google Maps (opens in a new tab)"
                    className="font-body text-[13px] text-white/80 hover:text-accent underline decoration-white/20 underline-offset-4 hover:decoration-accent transition-colors duration-300"
                  >
                    {clinic.address}
                  </a>
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
          <Link
            to="/contact"
            onClick={scrollToTop}
            className="font-body text-[11px] text-white/70 hover:text-accent transition-colors duration-300"
          >
            Book a consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
