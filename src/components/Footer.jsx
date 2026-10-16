
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import companyLogo from "../assets/local/company-logo.jpg";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={companyLogo} alt="Sdwabazikode logo" />
            <span>
              SDWABAZIKODE
              <small>TRANSPORTATION & SECURITY SOLUTIONS</small>
            </span>
          </Link>

          <p>
            Transport and security solutions focused on client requirements,
            professional service, and responsible planning.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/transportation">Transportation</Link>
          <Link to="/security">Security Services</Link>
          <Link to="/tenders">Tenders</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Contact Details</h3>
          <a href="tel:+27615128410">
            <Phone size={16} /> 061 512 8410
          </a>
          <a href="mailto:sdwabazikode@gmail.com">
            <Mail size={16} /> sdwabazikode@gmail.com
          </a>
          <p>
            <MapPin size={16} />
            35 Sereme Street, Aerorand, Middelburg, Mpumalanga 1055
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} Sdwabazikode Transportation & Security
            Solutions. All rights reserved.
          </p>
          <Link to="/contact">Contact our team</Link>
        </div>
      </div>
    </footer>
  );
}
