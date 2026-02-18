import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-gallery-dark" aria-label="Contact us">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="text-white">
            <span className="inline-block font-montserrat text-xs font-semibold tracking-[0.3em] uppercase text-gallery-gold mb-3">
              Get in Touch
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Let's Start a
              <span className="text-gallery-accent"> Conversation</span>
            </h2>
            <p className="font-montserrat text-white/60 leading-relaxed mb-10">
              Whether you're interested in acquiring a piece, arranging a private viewing,
              or collaborating with us, we'd love to hear from you.
            </p>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <svg className="w-5 h-5 text-gallery-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-poppins text-sm font-semibold mb-1">Visit Us</h4>
                  <p className="font-montserrat text-sm text-white/50">
                    123 Gallery Avenue, Art District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <svg className="w-5 h-5 text-gallery-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-poppins text-sm font-semibold mb-1">Email Us</h4>
                  <p className="font-montserrat text-sm text-white/50">
                    hello@artivio.gallery<br />
                    press@artivio.gallery
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5">
                  <svg className="w-5 h-5 text-gallery-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-poppins text-sm font-semibold mb-1">Gallery Hours</h4>
                  <p className="font-montserrat text-sm text-white/50">
                    Tue – Sat: 10:00 AM – 6:00 PM<br />
                    Sun: 12:00 PM – 5:00 PM<br />
                    Monday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-poppins text-2xl font-bold text-gallery-dark mb-2">
                  Message Sent!
                </h3>
                <p className="font-montserrat text-gallery-muted mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-gallery-accent text-white font-montserrat text-sm font-semibold rounded-full hover:bg-gallery-dark transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-poppins text-xl font-bold text-gallery-dark mb-6">
                  Send us a Message
                </h3>

                {/* Name */}
                <div className="mb-5">
                  <label
                    htmlFor="contact-name"
                    className="block font-montserrat text-xs font-semibold tracking-wider uppercase text-gallery-muted mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl border font-montserrat text-sm text-gallery-dark placeholder-gray-300 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-300 focus:ring-red-200"
                        : "border-gray-200 focus:ring-gallery-accent/20 focus:border-gallery-accent"
                    }`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 font-montserrat text-xs text-red-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label
                    htmlFor="contact-email"
                    className="block font-montserrat text-xs font-semibold tracking-wider uppercase text-gallery-muted mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl border font-montserrat text-sm text-gallery-dark placeholder-gray-300 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-300 focus:ring-red-200"
                        : "border-gray-200 focus:ring-gallery-accent/20 focus:border-gallery-accent"
                    }`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 font-montserrat text-xs text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label
                    htmlFor="contact-subject"
                    className="block font-montserrat text-xs font-semibold tracking-wider uppercase text-gallery-muted mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border font-montserrat text-sm text-gallery-dark focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? "border-red-300 focus:ring-red-200"
                        : "border-gray-200 focus:ring-gallery-accent/20 focus:border-gallery-accent"
                    } ${!formData.subject ? "text-gray-300" : ""}`}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  >
                    <option value="">Select a subject</option>
                    <option value="inquiry">Artwork Inquiry</option>
                    <option value="visit">Schedule a Visit</option>
                    <option value="commission">Commission Request</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 font-montserrat text-xs text-red-500" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    htmlFor="contact-message"
                    className="block font-montserrat text-xs font-semibold tracking-wider uppercase text-gallery-muted mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className={`w-full px-4 py-3 rounded-xl border font-montserrat text-sm text-gallery-dark placeholder-gray-300 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? "border-red-300 focus:ring-red-200"
                        : "border-gray-200 focus:ring-gallery-accent/20 focus:border-gallery-accent"
                    }`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 font-montserrat text-xs text-red-500" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gallery-accent text-white font-poppins font-semibold tracking-wider uppercase rounded-xl hover:bg-gallery-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
