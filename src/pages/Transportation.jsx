
import {
  BusFront,
  Users,
  CarFront,
  UserRoundCheck,
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import transportVan from "../assets/local/transport-van.jpg";
import teamPhoto from "../assets/local/team-photo.jpg";
import shuttleCoachHire from "../assets/local/shuttle-coach-hire.jpeg";
import transportVanFront from "../assets/local/transport-van-front.jpeg";
import transportVanSide from "../assets/local/transport-van-side.jpeg";
import staffGroupOne from "../assets/local/staff-group-01.jpeg";
import staffGroupTwo from "../assets/local/staff-group-02.jpeg";

const services = [
  {
    icon: BusFront,
    title: "Shuttle & Coach Hire",
    description:
      "Transport solutions for group travel, organised trips, and passenger transfers.",
    image: shuttleCoachHire,
    imagePosition: "center center",
    features: [
      "Group transportation",
      "Planned passenger transfers",
      "Travel coordination",
    ],
  },
  {
    icon: Users,
    title: "Staff Transportation",
    description:
      "Transport arrangements designed to help businesses coordinate employee travel.",
    image: staffGroupOne,
    imagePosition: "center center",
    features: [
      "Employee transport planning",
      "Scheduled transport arrangements",
      "Business-focused solutions",
    ],
  },
  {
    icon: CarFront,
    title: "Car Rental",
    description:
      "Vehicle hire solutions to support business, personal, and travel requirements.",
    image: transportVanSide,
    imagePosition: "center center",
    features: [
      "Flexible transport options",
      "Business travel support",
      "Transport tailored to requirements",
    ],
  },
  {
    icon: UserRoundCheck,
    title: "Chauffeur-Driven Services",
    description:
      "Professional driver services for clients who require convenient, coordinated travel.",
    image: staffGroupTwo,
    imagePosition: "center center",
    features: [
      "Pre-arranged journeys",
      "Client-focused service",
      "Convenient travel planning",
    ],
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Reliable Coordination",
    description:
      "We aim to make transport arrangements clear, organised, and convenient.",
  },
  {
    icon: ShieldCheck,
    title: "Safety-Conscious Service",
    description:
      "Safety and responsible planning are important considerations in transport arrangements.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "We work to understand each client's transport needs before arranging a suitable solution.",
  },
];

export default function Transportation() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Transportation
          </p>
          <span className="eyebrow">OUR TRANSPORT SOLUTIONS</span>
          <h1>Transportation Services</h1>
          <p>
            Practical transport solutions for businesses, organisations,
            groups, and individual clients.
          </p>
        </div>
      </section>

      <section className="transport-intro section">
        <div className="container transport-intro-grid">
          <div>
            <span className="eyebrow">MOVING YOU FORWARD</span>
            <h2>Transport solutions built around your needs</h2>
            <p>
              Sdwabazikode Transportation & Security Solutions provides
              transport services designed around client requirements.
              Whether you need to coordinate group travel, employee
              transportation, vehicle hire, or a chauffeur-driven journey,
              our approach starts with understanding your needs.
            </p>
            <p>
              Contact our team to discuss your destination, schedule,
              passenger requirements, and the type of transport you need.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request an Enquiry <ArrowRight size={18} />
            </Link>
          </div>

          <div className="transport-highlight">
            <img
              className="transport-visual"
              src={transportVan}
              alt="Sdwabazikode transport van and staff transport services"
            />
            <div className="highlight-icon">
              <BusFront size={34} />
            </div>
            <h3>Transport for different needs</h3>
            <p>
              From planned group journeys to business transport arrangements,
              explore the service options below.
            </p>
            <ul>
              <li><CheckCircle size={17} /> Group and passenger travel</li>
              <li><CheckCircle size={17} /> Employee transport arrangements</li>
              <li><CheckCircle size={17} /> Vehicle hire enquiries</li>
              <li><CheckCircle size={17} /> Chauffeur-driven travel</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="transport-services section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE OFFER</span>
            <h2>Our transportation services</h2>
            <p>
              Choose a service category to explore how we may assist with
              your transportation requirements.
            </p>
          </div>

          <div className="transport-service-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="transport-service-card" key={service.title}>
                  <img
                    className="transport-service-visual"
                    src={service.image}
                    alt={service.title}
                    style={{ objectPosition: service.imagePosition }}
                  />
                  <div className="service-icon">
                    <Icon size={29} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="service-link">
                    Enquire about this service <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="transport-benefits section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR APPROACH</span>
            <h2>What matters in every journey</h2>
          </div>

          <div className="transport-benefit-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className="transport-benefit" key={benefit.title}>
                  <Icon size={30} />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="transport-cta section">
        <div className="container transport-cta-content">
          <div>
            <span className="eyebrow">LET'S PLAN YOUR JOURNEY</span>
            <h2>Looking for a transport solution?</h2>
            <p>
              Get in touch with us to discuss your requirements and request
              further information.
            </p>
          </div>
          <Link to="/contact" className="btn btn-gold">
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
