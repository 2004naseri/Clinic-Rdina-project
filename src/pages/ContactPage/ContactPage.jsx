// src/pages/ContactPage/ContactPage.jsx — Tailwind v4
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import contactData from "../../data/contactData";
import SocialIcon from "../../components/SocialIcon";

const { hero, contactInfo, socialMedia, formFields, quickActions, faqs } =
  contactData;

// ─── Icons ────────────────────────────────────────────────────
function PhoneIcon({ className }) {
  return (
    <svg
      className={className}
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
  );
}
function WhatsAppIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
function EmailIcon({ className }) {
  return (
    <svg
      className={className}
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
  );
}
function LocationIcon({ className }) {
  return (
    <svg
      className={className}
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
  );
}
function ClockIcon({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const iconMap = { phone: PhoneIcon, whatsapp: WhatsAppIcon, email: EmailIcon, location: LocationIcon };

const contactActions = [
  ...quickActions.filter((action) => action.action),
  {
    id: "directions",
    title: "Find Us",
    description: "Visit our clinic in Leeds",
    icon: "location",
    action: contactInfo.address.directionsLink,
    buttonText: "Get Directions",
  },
];

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
          className={`font-display text-[19px] font-normal leading-snug transition-colors duration-300
                          ${open ? "text-secondary" : "text-text-primary"}`}
        >
          {faq.question}
        </span>
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0
                         transition-all duration-300
                         ${open ? "bg-secondary border-secondary" : "bg-white border-border"}`}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
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
        className={`overflow-hidden transition-[max-height] duration-450 ease-out
                       ${open ? "max-h-40" : "max-h-0"}`}
      >
        <p className="font-body text-[13px] leading-[1.9] text-text-muted pb-5">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

// ─── Input / Select shared styles ────────────────────────────
const fieldCls = `w-full px-4 py-3.5 border border-border bg-white
                  font-body text-[13px] text-text-primary
                  placeholder:text-text-muted/60
                  focus:border-secondary focus:outline-none
                  focus:ring-2 focus:ring-secondary/15
                  transition-all duration-300`;

// ─── WhatsApp Message Builder ─────────────────────────────────
// Builds a pre-filled WhatsApp message from form fields and opens it
function buildWhatsAppUrl(data, baseLink) {
  const lines = [
    "Hello, I would like to book a consultation at Aesthetics by GS.",
    data.name ? `*Name:* ${data.name}` : null,
    data.phone ? `*Phone:* ${data.phone}` : null,
    data.service ? `*Treatment:* ${data.service}` : null,
    data.message ? `*Message:* ${data.message}` : null,
  ].filter(Boolean);
  const text = lines.join("\n");
  const number = baseLink.replace("https://wa.me/", "").split("?")[0];
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

// ─── Main Page ────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const url = buildWhatsAppUrl(formData, contactInfo.whatsapp.link);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main id="main-content" className="bg-white font-body overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section
        className="relative min-h-[65vh] flex items-end
                          bg-gradient-to-br from-secondary-dark via-secondary to-primary-dark overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full
                          border border-white/6"
          />
          <div
            className="absolute -top-16 -right-16 w-[300px] h-[300px] rounded-full
                          border border-white/5"
          />
          <div
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full
                          border border-white/4"
          />
          {/* Shimmer bars */}
          <div
            className="absolute top-1/3 right-0 w-1 h-48
                          bg-gradient-to-b from-transparent via-accent/30 to-transparent"
          />
          <div
            className="absolute top-1/2 right-20 w-px h-32
                          bg-gradient-to-b from-transparent via-white/15 to-transparent"
          />
        </div>

        {/* Ghost brand letter */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2
                        font-display text-[280px] font-light leading-none
                        text-white/4 select-none hidden lg:block"
        >
          G
        </div>

        {/* Side label */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 z-10
                        hidden lg:flex items-center gap-3 whitespace-nowrap
                        font-body text-[8px] tracking-[0.45em] uppercase text-white/25"
        >
          <span className="w-8 h-px bg-white/25 inline-block" />
          Aesthetics by GS
          <span className="w-8 h-px bg-white/25 inline-block" />
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
            className="font-display font-light text-white tracking-tight leading-[0.95] mb-5
                         text-[clamp(42px,7vw,86px)] max-w-[680px]"
          >
            {hero.title}
          </h1>
          <p className="font-body text-[15px] leading-[1.9] text-white/70 max-w-[480px]">
            {hero.description}
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28
                        bg-gradient-to-b from-transparent to-white z-10"
        />
      </section>

      {/* ══ QUICK CONTACT ═════════════════════════════════════ */}
      <section aria-label="Ways to contact the clinic" className="bg-white py-10 lg:py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className={`grid grid-cols-1 gap-4 ${contactActions.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            {contactActions.map((action) => {
              const Icon = iconMap[action.icon] || PhoneIcon;
              const isExternal = action.action.startsWith("http");
              const detail = action.id === "whatsapp"
                ? contactInfo.whatsapp.display
                : action.id === "email"
                  ? contactInfo.email.display
                  : action.id === "call" ? contactInfo.phone.display : null;
              const availability = action.id === "whatsapp"
                ? contactInfo.whatsapp.available
                : action.id === "email"
                  ? `Response ${contactInfo.email.response}`
                  : action.id === "call" ? contactInfo.phone.available : null;
              return (
                <a
                  key={action.id}
                  href={action.action}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-4 p-6 border border-border bg-background
                             hover:border-primary hover:shadow-md transition-all duration-300 min-w-0"
                >
                  <span className="w-11 h-11 rounded-full bg-secondary/8 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-secondary" />
                  </span>
                  <div className="flex flex-col flex-1 min-w-0 self-stretch">
                    <h2 className="font-display text-[23px] leading-tight text-secondary mb-2">{action.title}</h2>
                    <p className="font-body text-[11px] leading-relaxed text-text-muted">{action.description}</p>
                    {detail && <p className="font-body text-[12px] font-semibold text-secondary mt-2 break-words">{detail}</p>}
                    {availability && <p className="font-body text-[10px] leading-relaxed text-text-muted mt-1">{availability}</p>}
                    <span className="block font-body text-[9px] font-bold tracking-[0.16em] uppercase text-accent mt-auto pt-4">
                      {action.buttonText} →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
          {contactInfo.additionalPhones.filter((phone) => phone.link && phone.display).map((phone) => (
            <a key={phone.link} href={phone.link} className="inline-block font-body text-[12px] text-secondary mt-4 mr-5">
              {phone.label}: {phone.display}
            </a>
          ))}
        </div>
      </section>

      {/* ══ APPOINTMENT + VISIT ═══════════════════════════════ */}
      <section id="contact-details" className="bg-surface py-12 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div id="appointment-card" className="min-w-0 bg-white border border-border p-6 sm:p-8 lg:p-9">
              <p className="font-body text-[9px] tracking-[0.3em] uppercase text-accent font-semibold mb-3 flex items-center gap-2.5">
                <span className="w-5 h-px bg-accent inline-block" />
                Free Consultation
              </p>
              <h2 className="font-display font-normal text-secondary leading-[1.1] text-[30px] lg:text-[36px] mb-5">
                Request an Appointment
              </h2>

              <div className="flex items-start gap-3 p-4 mb-6 bg-primary-50 border border-border">
                <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                </span>
                <div className="min-w-0">
                  <p className="font-body text-[12px] font-semibold text-secondary mb-1">Book through WhatsApp</p>
                  <p className="font-body text-[12px] leading-[1.75] text-text-muted">
                    Your request opens in WhatsApp, ready to send. Our team will reply to arrange your visit.
                  </p>
                </div>
              </div>

              <form onSubmit={handleWhatsApp} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="min-w-0">
                    <label htmlFor="contact-name" className="block font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-secondary mb-2">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      placeholder="e.g. Sarah Johnson"
                      onChange={handleChange}
                      className={fieldCls}
                    />
                  </div>
                  <div className="min-w-0">
                    <label htmlFor="contact-phone" className="block font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-secondary mb-2">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="07XXX XXXXXX"
                      onChange={handleChange}
                      className={fieldCls}
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <label htmlFor="contact-service" className="block font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-secondary mb-2">
                    Treatment of Interest
                  </label>
                  <select id="contact-service" name="service" onChange={handleChange} className={fieldCls}>
                    <option value="">Select a treatment…</option>
                    {formFields.service.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block font-body text-[10px] font-semibold tracking-[0.1em] uppercase text-secondary mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your concerns or any questions you have…"
                    onChange={handleChange}
                    className={`${fieldCls} resize-y min-h-28`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 flex items-center justify-center gap-3 bg-primary text-white
                             font-body text-[10px] font-bold tracking-[0.2em] uppercase
                             transition-colors duration-300 hover:bg-primary-dark cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Send via WhatsApp
                </button>
                <p className="font-body text-[10px] leading-relaxed text-text-muted text-center">
                  Review your message in WhatsApp, then tap send.
                </p>
              </form>
            </div>

            <div id="clinic-map-card" className="min-w-0 flex flex-col bg-white border border-border overflow-hidden">
              <div className="bg-background p-6 sm:p-8">
                <p className="flex items-center gap-2.5 font-body text-[9px] font-semibold tracking-[0.3em] uppercase text-accent mb-3">
                  <LocationIcon className="w-4 h-4 shrink-0" />
                  Find Us
                </p>
                <h2 className="font-display text-[30px] lg:text-[36px] leading-[1.1] text-secondary mb-4">
                  Visit Our Leeds Clinic
                </h2>
                <a
                  href={contactInfo.address.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View our Leeds clinic address in Google Maps (opens in a new tab)"
                  className="block font-body text-[13px] leading-[1.8] text-secondary
                             underline decoration-border underline-offset-4 hover:decoration-primary"
                >
                  {contactInfo.address.fullAddress}
                </a>
              </div>
              <iframe
                src={contactInfo.address.mapEmbedUrl}
                title={`Clinic location: ${contactInfo.address.fullAddress}`}
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block w-full min-h-[300px] lg:flex-1 lg:min-h-[320px] border-0 bg-background"
              />
              <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-background border-t border-border">
                <p className="font-body text-[11px] leading-relaxed text-text-muted">Plan your journey with Google Maps</p>
                <a
                  href={contactInfo.address.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to our Leeds clinic in Google Maps (opens in a new tab)"
                  className="inline-flex items-center justify-center gap-3 px-5 py-3.5 bg-primary text-white
                             font-body text-[9px] font-bold tracking-[0.16em] uppercase
                             hover:bg-primary-dark transition-colors duration-300
                             focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                >
                  Get directions <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* ══ PRACTICAL INFORMATION ════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8">
            <div id="opening-hours-card" className="min-w-0 bg-white border border-border p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-full bg-secondary/8 flex items-center justify-center">
                  <ClockIcon className="w-4 h-4 text-secondary" />
                </span>
                <h2 className="font-display text-[26px] text-secondary">Opening Hours</h2>
              </div>
              <div>
                {contactInfo.hours.map((row) => (
                  <div key={row.day} className="flex flex-wrap justify-between items-center gap-2 py-3 border-b border-border last:border-0">
                    <span className="font-body text-[12px] text-text-muted">{row.day}</span>
                    <span className={`font-body text-[12px] font-semibold ${row.open ? "text-secondary" : "text-accent"}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div id="social-links-card" className="min-w-0 bg-white border border-border p-6 sm:p-8">
              <h2 className="font-display text-[26px] leading-10 text-secondary mb-5">Stay Connected</h2>
              <div>
                {socialMedia.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.platform}: ${social.handle} (opens in a new tab)`}
                    className="group flex items-center gap-3 py-3 border-b border-border last:border-0
                               focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    <span className="w-10 h-10 rounded-full bg-vanilla text-secondary flex items-center justify-center shrink-0
                                     group-hover:bg-primary group-hover:text-vanilla transition-colors duration-300">
                      <SocialIcon platform={social.icon} className="w-[18px] h-[18px]" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-body text-[12px] font-semibold text-secondary group-hover:text-primary">{social.platform}</span>
                      <span className="block font-body text-[11px] text-text-muted break-words mt-1">{social.handle}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-primary shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <p className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3">
              Quick Answers
            </p>
            <h2
              className="font-display font-normal text-text-primary tracking-tight
                           leading-[1.05] text-[clamp(28px,3.5vw,46px)]"
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.id} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA BAND ═══════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-secondary via-primary-dark to-primary py-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border border-white/8" />
          <div className="absolute -bottom-24 -left-14 w-72 h-72 rounded-full border border-white/6" />
        </div>
        <div className="relative z-10 max-w-[700px] mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-accent inline-block" />
            <span className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold">
              Ready to Start?
            </span>
            <span className="w-7 h-px bg-accent inline-block" />
          </div>
          <h2
            className="font-display font-light text-white tracking-tight leading-[1.05] mb-4
                         text-[clamp(30px,4vw,52px)]"
          >
            Your First Consultation is Free
          </h2>
          <p className="font-body text-[14px] leading-[1.9] text-white/70 mb-10 max-w-[460px] mx-auto">
            Speak directly with Dr. Hussaini. No pressure, no obligation — just
            an honest conversation about your skin and your goals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={contactInfo.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-10 py-4 bg-white text-secondary
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:bg-accent hover:text-white"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us
            </a>
            {contactInfo.phone.link && contactInfo.phone.display && (
              <a
                href={contactInfo.phone.link}
                className="inline-block px-10 py-4 border border-white/35 text-white
                           font-body text-[10px] font-bold tracking-[0.25em] uppercase
                           transition-all duration-300 hover:border-white/80"
              >
                Call {contactInfo.phone.display}
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
