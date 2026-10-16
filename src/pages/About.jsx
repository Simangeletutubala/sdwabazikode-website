
import {
  Target,
  Eye,
  Handshake,
  ShieldCheck,
  Award,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const coreValues = [
  {
    icon: Target,
    title: "Solutions Orientation",
    text: "A practical, results-driven approach to understanding and responding to client requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Dependability",
    text: "A commitment to responsible, reliable and professional service delivery.",
  },
  {
    icon: Handshake,
    title: "Client Relationships",
    text: "Clear communication, responsiveness and a focus on successful outcomes.",
  },
  {
    icon: Award,
    title: "Value Addition",
    text: "Delivering practical value through professional conduct and attention to client needs.",
  },
  {
    icon: CheckCircle2,
    title: "Commitment",
    text: "Continuous service improvement, accountability and dedication to performance.",
  },
  {
    icon: HeartHandshake,
    title: "Ethical Conduct",
    text: "Building trust through honesty, respect, integrity and responsible business practices.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span className="eyebrow">GET TO KNOW US</span>
          <h1>About Sdwabazikode</h1>
          <p>
            A South African transportation and security services
            company committed to reliability, professionalism and integrity.
          </p>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container about-grid">
          <div>
            <span className="eyebrow eyebrow-dark">WHO WE ARE</span>
            <h2>Professional Service. Practical Solutions.</h2>
            <p>
              Established in 2017, Sdwabazikode is a South African
              private company providing transportation and security
              solutions to corporate, public-sector and private clients.
            </p>
            <p>
              Our service focus includes shuttle and coach hire,
              staff transport, car rental, chauffeur-drive requirements,
              security planning and VIP protection support.
            </p>
            <p>
              We aim to meet client requirements through dependable
              service, professional communication, risk awareness and
              ethical business conduct.
            </p>
            <Link to="/transportation" className="text-link">
              Explore our services <ArrowRight size={17} />
            </Link>
          </div>

          <div className="company-facts">
            <span className="eyebrow">COMPANY AT A GLANCE</span>
            <h3>Our Business Details</h3>

            <div className="fact-row">
              <span>Entity type</span>
              <strong>Private Company</strong>
            </div>

            <div className="fact-row">
              <span>Established</span>
              <strong>2017</strong>
            </div>

            <div className="fact-row">
              <span>Registration number</span>
              <strong>2017/464581/07</strong>
            </div>

            <div className="fact-row">
              <span>CSD number</span>
              <strong>MAAA1096171</strong>
            </div>

            <div className="fact-row">
              <span>Based in</span>
              <strong>Middelburg, Mpumalanga</strong>
            </div>

            <div className="fact-note">
              <ShieldCheck size={20} />
              <p>
                Company details are presented in accordance with
                the supplied corporate profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="container vision-grid">
          <article className="vision-card">
            <div className="vision-icon"><Eye size={28} /></div>
            <span className="eyebrow">OUR VISION</span>
            <h2>To Be a Trusted Service Provider</h2>
            <p>
              To become a reputable and trusted transportation and
              security services provider recognised for service
              excellence, operational reliability, client satisfaction,
              continuous improvement and timely delivery.
            </p>
          </article>

          <article className="vision-card vision-card-gold">
            <div className="vision-icon"><Target size={28} /></div>
            <span className="eyebrow">OUR MISSION</span>
            <h2>To Deliver with Integrity</h2>
            <p>
              To provide professional transportation and security
              services that respond to client and community needs,
              create sustainable employment opportunities, promote
              youth development and deliver assignments with
              efficiency, accountability and integrity.
            </p>
          </article>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow eyebrow-dark">WHAT GUIDES US</span>
            <h2>Our Core Values</h2>
            <p>
              The principles that shape our relationships, decisions
              and approach to service delivery.
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <article className="value-card" key={value.title}>
                  <div className="service-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="objectives-section">
        <div className="container objectives-grid">
          <div>
            <span className="eyebrow">OUR DIRECTION</span>
            <h2>Building a Sustainable Business</h2>
            <p>
              Our long-term objective is to build a reputable,
              sustainable enterprise that meets client expectations
              and contributes positively to the communities we serve.
            </p>
          </div>

          <ul className="objectives-list">
            <li><CheckCircle2 /> Dependable mobility and protection solutions</li>
            <li><CheckCircle2 /> Responsible and ethical business growth</li>
            <li><CheckCircle2 /> Employment creation and skills development</li>
            <li><CheckCircle2 /> Strong client relationships and service quality</li>
          </ul>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">LET'S CONNECT</span>
            <h2>Let's Discuss Your Requirements</h2>
            <p>Contact our team about your next transportation or security assignment.</p>
          </div>
          <Link to="/contact" className="button button-gold">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
