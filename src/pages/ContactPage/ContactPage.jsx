// src/pages/ContactPage/ContactPage.jsx
// ========================================
// CONTACT PAGE - UPDATED
// ========================================

import { useState } from "react";
import { Section, Container, SectionHeader, Button } from "../../components/ui";
import contactData from "../../data/contactData";

const ContactPage = () => {
  const { hero, contactInfo, socialMedia, formFields, quickActions, faqs } =
    contactData;
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({});
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main id="main-content" className="relative bg-background">
      {/* ====================
          1. HERO SECTION
      ==================== */}
      <Section
        background="transparent"
        padding="large"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          {hero.image.src && !hero.image.placeholder?.show ? (
            <>
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
            </>
          ) : (
            <div
              className={`absolute inset-0 bg-gradient-to-br ${hero.image.placeholder.gradient}`}
            />
          )}
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center py-12 lg:py-20">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white tracking-[0.3em] uppercase text-xs font-medium mb-6 rounded-full border border-white/30">
              {hero.badge}
            </span>
            <h1 className="backdrop-blur-xl bg-white/30 p-7 rounded-xl text-4xl">
              {hero.title}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
      </Section>

      {/* ====================
          2. QUICK ACTIONS
      ==================== */}
      <Section background="white" padding="small">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, i) => (
              <a
                key={action.id}
                href={action.action}
                target={action.action.startsWith("http") ? "_blank" : undefined}
                rel={
                  action.action.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="card card-hover text-center group"
                style={{
                  animation: "slideUp 0.5s ease-out backwards",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <svg
                    className="w-7 h-7 text-primary group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-text-primary mb-2">
                  {action.title}
                </h3>
                <p className="text-sm text-text-muted mb-4">
                  {action.description}
                </p>
                <span className="text-sm text-primary font-medium group-hover:underline">
                  {action.buttonText} →
                </span>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      {/* ====================
          3. CONTACT FORM & INFO
      ==================== */}
      <Section background="surface" padding="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* CONTACT FORM - 2 columns */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="heading-md mb-6">Request Consultation</h2>

                {submitted ? (
                  // Success Message
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-text-primary mb-2">
                      Thank You!
                    </h3>
                    <p className="text-text-secondary">
                      We'll contact you within 24 hours to confirm your
                      appointment.
                    </p>
                  </div>
                ) : (
                  // Form
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        {formFields.name.label}{" "}
                        {formFields.name.required && (
                          <span className="text-primary">*</span>
                        )}
                      </label>
                      <input
                        type={formFields.name.type}
                        name="name"
                        required={formFields.name.required}
                        placeholder={formFields.name.placeholder}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {formFields.email.label}{" "}
                          {formFields.email.required && (
                            <span className="text-primary">*</span>
                          )}
                        </label>
                        <input
                          type={formFields.email.type}
                          name="email"
                          required={formFields.email.required}
                          placeholder={formFields.email.placeholder}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {formFields.phone.label}{" "}
                          {formFields.phone.required && (
                            <span className="text-primary">*</span>
                          )}
                        </label>
                        <input
                          type={formFields.phone.type}
                          name="phone"
                          required={formFields.phone.required}
                          placeholder={formFields.phone.placeholder}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Location & Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {formFields.location.label}
                        </label>
                        <select
                          name="location"
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">
                            {formFields.location.placeholder}
                          </option>
                          {formFields.location.options.map((option, i) => (
                            <option key={i} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {formFields.service.label}
                        </label>
                        <select
                          name="service"
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">
                            {formFields.service.placeholder}
                          </option>
                          {formFields.service.options.map((option, i) => (
                            <option key={i} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {formFields.preferredDate.label}
                        </label>
                        <input
                          type={formFields.preferredDate.type}
                          name="preferredDate"
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-2">
                          {formFields.preferredTime.label}
                        </label>
                        <select
                          name="preferredTime"
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        >
                          <option value="">
                            {formFields.preferredTime.placeholder}
                          </option>
                          {formFields.preferredTime.options.map((option, i) => (
                            <option key={i} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        {formFields.message.label}
                      </label>
                      <textarea
                        name="message"
                        rows={formFields.message.rows}
                        placeholder={formFields.message.placeholder}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      className="w-full justify-center"
                    >
                      Submit Request
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* CONTACT INFO - 1 column */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="card space-y-6">
                <h3 className="font-display text-xl text-text-primary">
                  Contact Information
                </h3>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-text-muted mb-1">Phone</div>
                    <a
                      href={contactInfo.phone.link}
                      className="text-sm text-text-primary hover:text-primary font-medium block"
                    >
                      {contactInfo.phone.display}
                    </a>
                    <div className="text-xs text-text-muted mt-1">
                      {contactInfo.phone.available}
                    </div>

                    {/* Additional phones */}
                    {contactInfo.additionalPhones.map((phone, i) => (
                      <a
                        key={i}
                        href={phone.link}
                        className="text-sm text-text-secondary hover:text-primary block mt-2"
                      >
                        {phone.display}{" "}
                        <span className="text-xs text-text-muted">
                          ({phone.label})
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-text-muted mb-1">WhatsApp</div>
                    <a
                      href={contactInfo.whatsapp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-primary hover:text-primary font-medium"
                    >
                      {contactInfo.whatsapp.display}
                    </a>
                    <div className="text-xs text-text-muted mt-1">
                      {contactInfo.whatsapp.available}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-text-muted mb-1">Email</div>
                    <a
                      href={contactInfo.email.link}
                      className="text-sm text-text-primary hover:text-primary font-medium break-all"
                    >
                      {contactInfo.email.display}
                    </a>
                    <div className="text-xs text-text-muted mt-1">
                      {contactInfo.email.response}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-text-muted mb-1">Location</div>
                    <p className="text-sm text-text-primary">
                      {contactInfo.address.fullAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card">
                <h3 className="font-display text-lg text-text-primary mb-4">
                  Opening Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Mon - Fri</span>
                    <span className="text-text-primary font-medium">
                      09:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Saturday</span>
                    <span className="text-text-primary font-medium">
                      10:00 - 16:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Sunday</span>
                    <span className="text-primary font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card">
                <h3 className="font-display text-lg text-text-primary mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {socialMedia.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white text-primary transition-all"
                      aria-label={social.platform}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ====================
          4. FAQ
      ==================== */}
      <Section background="white" padding="default">
        <Container>
          <SectionHeader
            title="Frequently Asked Questions"
            description="Quick answers to common questions."
            align="center"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.id}
                className="card"
                style={{
                  animation: "slideUp 0.5s ease-out backwards",
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <h3 className="font-display text-lg text-text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default ContactPage;
