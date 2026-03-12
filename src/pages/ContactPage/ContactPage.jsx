// src/pages/ContactPage/ContactPage.jsx — Tailwind v4
import { useState } from "react";
import { Link } from "react-router-dom";
import contactData from "../../data/contactData";

const {
  hero,
  contactInfo,
  socialMedia,
  formFields,
  quickActions,
  faqs,
  formSuccess,
} = contactData;

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

const iconMap = { phone: PhoneIcon, whatsapp: WhatsAppIcon, email: EmailIcon };

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

// ─── Main Page ────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({});
    }, 4000);
  };

  return (
    <main id="main-content" className="bg-white font-body overflow-x-hidden">
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-[65vh] flex items-end">
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
            className="font-display font-light text-white tracking-tight leading-[0.95] mb-5
                         text-[clamp(42px,7vw,86px)] max-w-[680px]"
          >
            {hero.title}
          </h1>
          <p className="font-body text-[15px] leading-[1.9] text-white/75 max-w-[480px]">
            {hero.description}
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-28
                        bg-gradient-to-b from-transparent to-white z-10"
        />
      </section>

      {/* ══ QUICK ACTIONS ═════════════════════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quickActions.map((action, i) => {
              const Icon = iconMap[action.icon] || PhoneIcon;
              const isExternal = action.action.startsWith("http");
              return (
                <a
                  key={action.id}
                  href={action.action}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 p-6 border border-border
                             hover:border-secondary hover:shadow-[0_16px_40px_rgba(67,5,104,0.12)]
                             hover:-translate-y-1 transition-all duration-400 relative overflow-hidden"
                  style={{
                    animation: `fadeUp 0.6s cubic-bezier(.16,1,.3,1) ${i * 0.12}s both`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5
                                  bg-gradient-to-r from-secondary to-primary
                                  scale-x-0 group-hover:scale-x-100
                                  transition-transform duration-400 origin-left"
                  />
                  <div
                    className="w-14 h-14 rounded-full bg-secondary/8 flex items-center justify-center
                                  shrink-0 group-hover:bg-gradient-to-br group-hover:from-secondary
                                  group-hover:to-primary transition-all duration-400"
                  >
                    <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-400" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-display text-[19px] font-normal text-text-primary mb-0.5
                                   group-hover:text-secondary transition-colors duration-300"
                    >
                      {action.title}
                    </h3>
                    <p className="font-body text-[11px] text-text-muted mb-2">
                      {action.description}
                    </p>
                    <span
                      className="font-body text-[10px] font-bold tracking-[0.18em] uppercase
                                     text-accent group-hover:text-secondary transition-colors duration-300"
                    >
                      {action.buttonText} →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ FORM + INFO ═══════════════════════════════════════ */}
      <section className="bg-surface py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ── FORM ── */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-border p-8 lg:p-10">
                <p
                  className="font-body text-[9px] tracking-[0.35em] uppercase text-accent font-semibold mb-3
                               flex items-center gap-2.5"
                >
                  <span className="w-5 h-px bg-accent inline-block" />
                  Free Consultation
                </p>
                <h2
                  className="font-display font-normal text-text-primary tracking-tight
                               leading-[1.1] text-[clamp(26px,3vw,40px)] mb-8"
                >
                  Request an Appointment
                </h2>

                {submitted ? (
                  /* Success */
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary
                                    flex items-center justify-center mb-5"
                    >
                      <svg
                        className="w-8 h-8 text-white"
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
                    </div>
                    <h3 className="font-display text-[28px] font-normal text-text-primary mb-3">
                      {formSuccess.title}
                    </h3>
                    <p className="font-body text-[13px] leading-[1.9] text-text-muted max-w-[340px]">
                      {formSuccess.message}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name */}
                    <div>
                      <label
                        className="block font-body text-[11px] font-semibold tracking-[0.1em]
                                        uppercase text-text-primary mb-2"
                      >
                        {formFields.name.label}
                        {formFields.name.required && (
                          <span className="text-accent ml-1">*</span>
                        )}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder={formFields.name.placeholder}
                        onChange={handleChange}
                        className={fieldCls}
                      />
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block font-body text-[11px] font-semibold tracking-[0.1em]
                                          uppercase text-text-primary mb-2"
                        >
                          {formFields.email.label}
                          {formFields.email.required && (
                            <span className="text-accent ml-1">*</span>
                          )}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder={formFields.email.placeholder}
                          onChange={handleChange}
                          className={fieldCls}
                        />
                      </div>
                      <div>
                        <label
                          className="block font-body text-[11px] font-semibold tracking-[0.1em]
                                          uppercase text-text-primary mb-2"
                        >
                          {formFields.phone.label}
                          {formFields.phone.required && (
                            <span className="text-accent ml-1">*</span>
                          )}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder={formFields.phone.placeholder}
                          onChange={handleChange}
                          className={fieldCls}
                        />
                      </div>
                    </div>

                    {/* Location + Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block font-body text-[11px] font-semibold tracking-[0.1em]
                                          uppercase text-text-primary mb-2"
                        >
                          {formFields.location.label}
                        </label>
                        <select
                          name="location"
                          onChange={handleChange}
                          className={fieldCls}
                        >
                          <option value="">
                            {formFields.location.placeholder}
                          </option>
                          {formFields.location.options.map((o, i) => (
                            <option key={i} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label
                          className="block font-body text-[11px] font-semibold tracking-[0.1em]
                                          uppercase text-text-primary mb-2"
                        >
                          {formFields.service.label}
                        </label>
                        <select
                          name="service"
                          onChange={handleChange}
                          className={fieldCls}
                        >
                          <option value="">
                            {formFields.service.placeholder}
                          </option>
                          {formFields.service.options.map((o, i) => (
                            <option key={i} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block font-body text-[11px] font-semibold tracking-[0.1em]
                                          uppercase text-text-primary mb-2"
                        >
                          {formFields.preferredDate.label}
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          onChange={handleChange}
                          className={fieldCls}
                        />
                      </div>
                      <div>
                        <label
                          className="block font-body text-[11px] font-semibold tracking-[0.1em]
                                          uppercase text-text-primary mb-2"
                        >
                          {formFields.preferredTime.label}
                        </label>
                        <select
                          name="preferredTime"
                          onChange={handleChange}
                          className={fieldCls}
                        >
                          <option value="">
                            {formFields.preferredTime.placeholder}
                          </option>
                          {formFields.preferredTime.options.map((o, i) => (
                            <option key={i} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="block font-body text-[11px] font-semibold tracking-[0.1em]
                                        uppercase text-text-primary mb-2"
                      >
                        {formFields.message.label}
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder={formFields.message.placeholder}
                        onChange={handleChange}
                        className={`${fieldCls} resize-none`}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-secondary to-primary text-white
                                 font-body text-[10px] font-bold tracking-[0.25em] uppercase
                                 transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5
                                 cursor-pointer mt-2"
                    >
                      Submit Request
                    </button>

                    <p className="font-body text-[10px] text-text-muted text-center italic">
                      ✦ We'll respond within 24 hours to confirm your
                      appointment.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* ── INFO SIDEBAR ── */}
            <div className="flex flex-col gap-5">
              {/* Contact details */}
              <div className="bg-white border border-border p-7">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-accent font-semibold mb-5">
                  Contact Information
                </p>

                <div className="flex flex-col gap-5">
                  {/* Phone */}
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-secondary/8 flex items-center justify-center shrink-0">
                      <PhoneIcon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-body text-[9px] tracking-[0.15em] uppercase text-text-muted mb-1">
                        Phone
                      </p>
                      <a
                        href={contactInfo.phone.link}
                        className="font-body text-[13px] font-semibold text-text-primary hover:text-secondary
                                   transition-colors duration-300 block"
                      >
                        {contactInfo.phone.display}
                      </a>
                      {contactInfo.additionalPhones.map((p, i) => (
                        <a
                          key={i}
                          href={p.link}
                          className="font-body text-[12px] text-text-muted hover:text-secondary
                                     transition-colors duration-300 block mt-1"
                        >
                          {p.display}
                          <span className="text-[10px] ml-1">({p.label})</span>
                        </a>
                      ))}
                      <p className="font-body text-[10px] text-text-muted mt-1">
                        {contactInfo.phone.available}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  {/* WhatsApp */}
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-secondary/8 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-body text-[9px] tracking-[0.15em] uppercase text-text-muted mb-1">
                        WhatsApp
                      </p>
                      <a
                        href={contactInfo.whatsapp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-[13px] font-semibold text-text-primary hover:text-secondary
                                   transition-colors duration-300"
                      >
                        {contactInfo.whatsapp.display}
                      </a>
                      <p className="font-body text-[10px] text-text-muted mt-1">
                        {contactInfo.whatsapp.available}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Email */}
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-secondary/8 flex items-center justify-center shrink-0">
                      <EmailIcon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-body text-[9px] tracking-[0.15em] uppercase text-text-muted mb-1">
                        Email
                      </p>
                      <a
                        href={contactInfo.email.link}
                        className="font-body text-[13px] font-semibold text-text-primary hover:text-secondary
                                   transition-colors duration-300 break-all"
                      >
                        {contactInfo.email.display}
                      </a>
                      <p className="font-body text-[10px] text-text-muted mt-1">
                        Response {contactInfo.email.response}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-border" />

                  {/* Location */}
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-secondary/8 flex items-center justify-center shrink-0">
                      <LocationIcon className="w-4 h-4 text-secondary" />
                    </div>
                    <div>
                      <p className="font-body text-[9px] tracking-[0.15em] uppercase text-text-muted mb-1">
                        Location
                      </p>
                      <p className="font-body text-[13px] font-semibold text-text-primary">
                        {contactInfo.address.fullAddress}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white border border-border p-7">
                <div className="flex items-center gap-3 mb-5">
                  <ClockIcon className="w-4 h-4 text-accent" />
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-accent font-semibold">
                    Opening Hours
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    { day: "Mon — Fri", hours: "09:00 – 18:00", open: true },
                    { day: "Saturday", hours: "10:00 – 16:00", open: true },
                    { day: "Sunday", hours: "Closed", open: false },
                  ].map((row) => (
                    <div
                      key={row.day}
                      className="flex justify-between items-center py-2.5 border-b border-border last:border-0"
                    >
                      <span className="font-body text-[12px] text-text-muted">
                        {row.day}
                      </span>
                      <span
                        className={`font-body text-[12px] font-semibold
                                        ${row.open ? "text-text-primary" : "text-accent"}`}
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-white border border-border p-7">
                <p className="font-body text-[9px] tracking-[0.3em] uppercase text-accent font-semibold mb-5">
                  Follow Us
                </p>
                <div className="flex flex-col gap-3">
                  {socialMedia.map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group
                                 py-2.5 border-b border-border last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-full bg-secondary/8 flex items-center justify-center
                                        group-hover:bg-secondary transition-colors duration-300"
                        >
                          <span
                            className="font-body text-[9px] font-bold text-secondary
                                           group-hover:text-white transition-colors duration-300"
                          >
                            {s.platform[0]}
                          </span>
                        </div>
                        <span
                          className="font-body text-[12px] text-text-secondary group-hover:text-secondary
                                         transition-colors duration-300"
                        >
                          {s.platform}
                        </span>
                      </div>
                      <span
                        className="font-body text-[10px] text-text-muted group-hover:text-accent
                                       transition-colors duration-300"
                      >
                        {s.handle}
                      </span>
                    </a>
                  ))}
                </div>
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
            <a
              href={contactInfo.phone.link}
              className="inline-block px-10 py-4 border border-white/35 text-white
                         font-body text-[10px] font-bold tracking-[0.25em] uppercase
                         transition-all duration-300 hover:border-white/80"
            >
              Call {contactInfo.phone.display}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
