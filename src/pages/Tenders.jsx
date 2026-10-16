
import {
  FileText,
  Search,
  Send,
  CalendarDays,
  Building2,
  Mail,
  ArrowRight,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";

const tenderCategories = [
  {
    title: "Transportation Tenders",
    description:
      "Opportunities relating to passenger transport, shuttle services, staff transportation, and vehicle hire.",
  },
  {
    title: "Security Services Tenders",
    description:
      "Opportunities relating to security services and related requirements, subject to the company's confirmed service scope and authorisations.",
  },
  {
    title: "Private Sector Opportunities",
    description:
      "Requests for quotations, supplier enquiries, and service opportunities from private companies and organisations.",
  },
];

export default function Tenders() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Tenders
          </p>
          <span className="eyebrow">BUSINESS OPPORTUNITIES</span>
          <h1>Tenders & Procurement</h1>
          <p>
            Explore procurement-related information and contact us about
            transportation and security service opportunities.
          </p>
        </div>
      </section>

      <section className="section tenders-intro">
        <div className="container tenders-intro-grid">
          <div>
            <span className="eyebrow">WORK WITH US</span>
            <h2>Building opportunities through service and partnership</h2>
            <p>
              Sdwabazikode Transportation & Security Solutions welcomes
              enquiries from public-sector institutions, private businesses,
              and organisations seeking relevant service providers.
            </p>
            <p>
              Contact us with tender invitations, requests for quotations,
              supplier enquiries, or other business opportunities relevant
              to our confirmed services.
            </p>
            <a
              className="btn btn-primary"
              href="mailto:sdwabazikode@gmail.com?subject=Tender%20or%20Procurement%20Enquiry"
            >
              Submit an Enquiry <Send size={18} />
            </a>
          </div>

          <div className="tenders-highlight">
            <div className="tenders-highlight-icon">
              <ClipboardList size={34} />
            </div>
            <h3>Looking for tender information?</h3>
            <p>
              Contact the company to request its current capability
              information and discuss opportunities that match its services.
            </p>
            <a href="mailto:sdwabazikode@gmail.com">
              Email our team <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="section tender-categories-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">AREAS OF INTEREST</span>
            <h2>Procurement opportunities</h2>
            <p>
              These are categories of potential opportunities, not
              advertisements for currently open tenders.
            </p>
          </div>

          <div className="tender-category-grid">
            {tenderCategories.map((category) => (
              <article className="tender-category-card" key={category.title}>
                <div className="service-icon">
                  <FileText size={28} />
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <Link to="/contact" className="service-link">
                  Contact the Company <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tender-process-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">HOW TO ENGAGE</span>
            <h2>Enquiry process</h2>
          </div>

          <div className="tender-process-grid">
            <article>
              <span className="process-number">01</span>
              <h3>Identify an opportunity</h3>
              <p>
                Find a tender or procurement opportunity that matches the
                company's services and capabilities.
              </p>
            </article>

            <article>
              <span className="process-number">02</span>
              <h3>Contact the company</h3>
              <p>
                Send the opportunity details, closing date, reference number,
                and required services for consideration.
              </p>
            </article>

            <article>
              <span className="process-number">03</span>
              <h3>Confirm requirements</h3>
              <p>
                Confirm eligibility, supporting documentation, service
                availability, and submission arrangements before proceeding.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="tenders-cta section">
        <div className="container tenders-cta-inner">
          <div>
            <span className="eyebrow">PROCUREMENT ENQUIRIES</span>
            <h2>Have a tender or quotation opportunity?</h2>
            <p>
              Email the company with the opportunity details and relevant
              deadlines.
            </p>
          </div>
          <a
            className="btn btn-gold"
            href="mailto:sdwabazikode@gmail.com?subject=Tender%20Opportunity"
          >
            <Mail size={18} /> Email Us
          </a>
        </div>
      </section>
    </>
  );
}
