
import {
  ShieldCheck,
  ClipboardCheck,
  Users,
  Eye,
  CheckCircle,
  ArrowRight,
  LockKeyhole,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import teamPhoto from "../assets/local/team-photo.jpg";

const securityServices = [
  {
    icon: ShieldCheck,
    title: "Security Solutions",
    description:
      "Discuss security requirements for your business, organisation, or event so that suitable services can be considered.",
    features: [
      "Security requirements assessment",
      "Service planning discussions",
      "Solutions tailored to client needs",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Security Planning",
    description:
      "Structured planning to help identify security concerns and consider appropriate measures for a particular environment.",
    features: [
      "Identification of potential risks",
      "Planning and coordination",
      "Practical security considerations",
    ],
  },
  {
    icon: Building2,
    title: "Business Security Support",
    description:
      "Security-related enquiries for businesses and organisations seeking to understand their operational requirements.",
    features: [
      "Business-specific discussions",
      "Operational requirements",
      "Client-focused planning",
    ],
  },
  {
    icon: Users,
    title: "VIP Protection Enquiries",
    description:
      "Enquire about personal protection requirements and the arrangements that may be suitable for your circumstances.",
    features: [
      "Confidential initial enquiries",
      "Requirements-based discussions",
      "Individual needs considered",
    ],
  },
];

const principles = [
  {
    icon: Eye,
    title: "Awareness",
    description:
      "Understand the environment and the requirements before considering a security approach.",
  },
  {
    icon: LockKeyhole,
    title: "Responsibility",
    description:
      "Give appropriate attention to safety, confidentiality, and responsible service delivery.",
  },
  {
    icon: ClipboardCheck,
    title: "Planning",
    description:
      "Consider the client's needs, operational context, and appropriate next steps.",
  },
];

export default function Security() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <p className="breadcrumb">
            <Link to="/">Home</Link> / Security Services
          </p>
          <span className="eyebrow">SECURITY SOLUTIONS</span>
          <h1>Security Services</h1>
          <p>
            Security-focused planning and service enquiries for businesses,
            organisations, and individuals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container security-intro-grid">
          <div>
            <span className="eyebrow">SAFETY STARTS WITH PLANNING</span>
            <h2>A considered approach to security</h2>
            <p>
              Every environment has different requirements. Understanding
              those needs is an important starting point when considering
              appropriate security arrangements.
            </p>
            <p>
              Sdwabazikode Transportation & Security Solutions invites
              prospective clients to discuss their security requirements
              so that the available services and appropriate next steps
              can be clarified.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Discuss Your Requirements <ArrowRight size={18} />
            </Link>
          </div>

          <div className="security-feature-panel">
            <img
              className="security-visual"
              src={teamPhoto}
              alt="Sdwabazikode team and security personnel"
            />
            <ShieldCheck size={54} className="security-main-icon" />
            <span className="eyebrow">OUR APPROACH</span>
            <h3>Understand. Plan. Coordinate.</h3>
            <p>
              Start with the requirements, consider the context, and discuss
              suitable arrangements with the company.
            </p>
            <div className="security-panel-divider" />
            <p className="security-panel-note">
              Service availability, scope, and applicable requirements should
              be confirmed directly with the company.
            </p>
          </div>
        </div>
      </section>

      <section className="security-services-section section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">HOW WE CAN ASSIST</span>
            <h2>Explore our security services</h2>
            <p>
              Contact the company to confirm which services are available
              for your particular requirements.
            </p>
          </div>

          <div className="security-service-grid">
            {securityServices.map((service) => {
              const Icon = service.icon;

              return (
                <article className="security-service-card" key={service.title}>
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
                    Make an Enquiry <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR PRINCIPLES</span>
            <h2>Key considerations</h2>
          </div>

          <div className="security-principles-grid">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article className="security-principle" key={principle.title}>
                  <Icon size={32} />
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="security-cta section">
        <div className="container security-cta-content">
          <div>
            <span className="eyebrow">CONTACT OUR TEAM</span>
            <h2>Let's discuss your security requirements.</h2>
            <p>
              Get in touch to discuss your needs and confirm the services
              and arrangements available.
            </p>
          </div>
          <Link to="/contact" className="btn btn-gold">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
