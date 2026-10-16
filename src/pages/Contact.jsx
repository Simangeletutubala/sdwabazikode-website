
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const COMPANY_EMAIL = "sdwabazikode@gmail.com";
const COMPANY_PHONE = "061 512 8410";
const WHATSAPP_NUMBER = "27615128410";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your enquiry right now.");
      }

      setSuccess("Your enquiry has been sent successfully.");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (submitError) {
      setError(submitError.message || "Something went wrong while sending your enquiry.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const whatsappMessage = encodeURIComponent(
    "Hello Sdwabazikode Transportation & Security Solutions. I would like to enquire about your services."
  );

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Contact
          </p>
          <span className="eyebrow">GET IN TOUCH</span>
          <h1>Contact Us</h1>
          <p>
            Have a question or need a quotation? Contact our team to discuss
            your requirements.
          </p>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WE'RE HERE TO HELP</span>
            <h2>Let's start a conversation</h2>
            <p>
              Tell us what you need, and we can discuss the next steps with you.
            </p>
          </div>

          <div className="contact-layout">
            <div className="contact-information">
              <h2>Contact Information</h2>
              <p className="contact-info-intro">
                Reach out using the details below or send us an enquiry.
              </p>

              <a className="contact-detail" href="tel:+27615128410">
                <span className="contact-detail-icon">
                  <Phone size={22} />
                </span>
                <span>
                  <strong>Telephone</strong>
                  <span>{COMPANY_PHONE}</span>
                </span>
              </a>

              <a
                className="contact-detail"
                href={`mailto:${COMPANY_EMAIL}`}
              >
                <span className="contact-detail-icon">
                  <Mail size={22} />
                </span>
                <span>
                  <strong>Email</strong>
                  <span>{COMPANY_EMAIL}</span>
                </span>
              </a>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <MapPin size={22} />
                </span>
                <span>
                  <strong>Business Address</strong>
                  <span>
                    35 Sereme Street, Aerorand, Middelburg, Mpumalanga 1055
                  </span>
                </span>
              </div>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <Clock size={22} />
                </span>
                <span>
                  <strong>Business Hours</strong>
                  <span>Please contact us to confirm availability.</span>
                </span>
              </div>

              <a
                className="contact-whatsapp"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={20} />
                Contact us on WhatsApp
              </a>

              <p className="contact-small-note">
                For urgent requirements, please call to discuss availability.
              </p>
            </div>

            <div className="contact-form-panel">
              <h2>Send an Enquiry</h2>
              <p>Complete the form below to prepare your email enquiry.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full name *</label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Your contact number"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="service">Service required *</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Shuttle and coach hire">
                        Shuttle & Coach Hire
                      </option>
                      <option value="Staff transportation">
                        Staff Transportation
                      </option>
                      <option value="Car rental">Car Rental</option>
                      <option value="Chauffeur-driven services">
                        Chauffeur-Driven Services
                      </option>
                      <option value="Security services">
                        Security Services
                      </option>
                      <option value="Other enquiry">Other Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Your message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    required
                  />
                </div>

                {error && <p className="contact-error">{error}</p>}
                {success && <p className="contact-success">{success}</p>}

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Enquiry"} <Send size={18} />
                </button>

                <p className="form-disclaimer">
                  Your enquiry is sent directly via the configured SMTP mail server.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-bottom section">
        <div className="container contact-bottom-inner">
          <CheckCircle size={30} />
          <div>
            <h2>Need help choosing a service?</h2>
            <p>
              Visit our service pages to learn more, then contact us with
              your requirements.
            </p>
          </div>
          <div className="contact-bottom-links">
            <Link to="/transportation">Transportation</Link>
            <Link to="/security">Security Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
