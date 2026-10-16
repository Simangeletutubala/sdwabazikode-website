import { Link } from "react-router-dom";
import {
  ArrowRight,
  BusFront,
  CarFront,
  ShieldCheck,
  Users,
  CheckCircle2,
  Target,
  Eye,
  Handshake,
} from "lucide-react";
import heroImage from "../assets/local/transport-van.jpg";
import aboutImage from "../assets/local/team-photo.jpg";
import shuttleCoachHire from "../assets/local/shuttle-coach-hire.jpeg";
import transportVanSide from "../assets/local/transport-van-side.jpeg";

const services = [
  {
    icon: BusFront,
    title: "Shuttle & Coach Hire",
    description:
      "Transportation solutions for passenger journeys, group travel and coach hire requirements.",
    image: shuttleCoachHire,
    imagePosition: "center center",
    link: "/transportation",
  },
  {
    icon: Users,
    title: "Staff Transport",
    description:
      "Transport services designed around workplace and staff transportation requirements.",
    image: aboutImage,
    imagePosition: "center top",
    link: "/transportation",
  },
  {
    icon: CarFront,
    title: "Car Rental & Chauffeur",
    description:
      "Car rental and chauffeur-drive services for business and individual travel needs.",
    image: transportVanSide,
    imagePosition: "center 45%",
    link: "/transportation",
  },
  {
    icon: ShieldCheck,
    title: "Security & VIP Protection",
    description:
      "Security planning and support, including VIP protection through appropriately registered and graded personnel.",
    link: "/security",
  },
];

const values = [
  "Solutions orientation",
  "Quality and dependability",
  "Client relationships",
  "Value addition",
  "Commitment",
  "Ethical conduct",
];

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay" />

        <div className="container hero-content">
          <span className="eyebrow eyebrow-light">
            TRANSPORTATION • SECURITY • SERVICE EXCELLENCE
          </span>

          <h1>
            Moving People.
            <br />
            <span>Protecting What Matters.</span>
          </h1>

          <p className="hero-description">
            Professional transportation and security solutions
            built around reliability, accountability and your needs.
          </p>

          <div className="hero-actions">
            <Link to="/transportation" className="button button-gold">
              Explore Our Services <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="button button-outline">
              Contact Our Team
            </Link>
          </div>

          <div className="hero-location">
            <span className="location-dot" />
            Based in Middelburg, Mpumalanga, South Africa
          </div>
        </div>

        <div className="hero-bottom-line" />
      </section>

      {/* Introductory trust strip */}
      <section className="trust-strip">
        <div className="container trust-grid">
          <div className="trust-item">
            <CheckCircle2 />
            <span>Quality & Dependability</span>
          </div>
          <div className="trust-item">
            <Handshake />
            <span>Client-Focused Service</span>
          </div>
          <div className="trust-item">
            <ShieldCheck />
            <span>Professional Responsibility</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE DO</span>
            <h2>Solutions for Your Transport & Security Needs</h2>
            <p>
              We provide transportation and security services intended
              to respond to client requirements with professionalism,
              efficiency and accountability.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.title}>
                  {service.image ? (
                    <img
                      className="service-card-image"
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      style={{ objectPosition: service.imagePosition }}
                    />
                  ) : null}

                  <div className="service-icon">
                    <Icon size={29} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <Link to={service.link} className="text-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-visual">
            <img
              src={aboutImage}
              alt="Sdwabazikode team and transport services"
              loading="lazy"
            />

            <div className="about-image-caption">
              <span className="caption-number">2017</span>
              <span>Company established</span>
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow">ABOUT SDWABAZIKODE</span>
            <h2>A Commitment to Reliable Service</h2>

            <p>
              Established in 2017, Sdwabazikode Transportation &
              Security Solutions is a South African company providing
              transportation and security services.
            </p>

            <p>
              Our approach is guided by client needs, service quality,
              ethical conduct and a commitment to continuous improvement.
              We aim to build lasting relationships through dependable
              and accountable service delivery.
            </p>

            <ul className="check-list">
              <li>
                <CheckCircle2 />
                Client-focused solutions
              </li>
              <li>
                <CheckCircle2 />
                Quality and dependability
              </li>
              <li>
                <CheckCircle2 />
                Integrity and accountability
              </li>
            </ul>

            <Link to="/about" className="button button-navy">
              Discover Our Company <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="section purpose-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow eyebrow-light">OUR PURPOSE</span>
            <h2>Guided by Purpose. Driven by Service.</h2>
          </div>

          <div className="purpose-grid">
            <article className="purpose-card">
              <div className="purpose-icon">
                <Target size={28} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide professional transportation and security
                services that respond to client and community needs,
                while supporting sustainable employment, youth
                development, efficiency, accountability and integrity.
              </p>
            </article>

            <article className="purpose-card">
              <div className="purpose-icon">
                <Eye size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To be a reputable and trusted transportation and
                security provider, recognised for service excellence,
                reliability, client satisfaction, continuous improvement
                and timely delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section values-section">
        <div className="container values-layout">
          <div>
            <span className="eyebrow">WHAT GUIDES US</span>
            <h2>Our Core Values</h2>
            <p>
              Our values shape how we approach our work, engage with
              clients and pursue dependable service delivery.
            </p>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <div className="value-item" key={value}>
                <CheckCircle2 size={19} />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement CTA */}
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow eyebrow-light">
              BUSINESS & PROCUREMENT ENQUIRIES
            </span>
            <h2>Looking for a Transportation or Security Partner?</h2>
            <p>
              Contact our team to discuss your requirements,
              procurement enquiries or potential business opportunities.
            </p>
          </div>

          <Link to="/contact" className="button button-gold">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}