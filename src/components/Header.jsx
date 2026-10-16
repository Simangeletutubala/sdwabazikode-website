
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import companyLogo from "../assets/local/company-logo.jpg";

const navigationLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Transportation", path: "/transportation" },
  { name: "Security", path: "/security" },
  { name: "Tenders", path: "/tenders" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Company Logo and Name */}
        <Link
          to="/"
          className="brand"
          aria-label="Sdwabazikode home"
          onClick={closeMenu}
        >
          <span className="brand-icon">
            <img src={companyLogo} alt="Sdwabazikode logo" />
          </span>

          <span className="brand-text">
            <span className="brand-name">SDWABAZIKODE</span>
            <span className="brand-tagline">
              TRANSPORTATION & SECURITY SOLUTIONS
            </span>
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

        {/* Main Navigation */}
        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? "navigation-open" : ""}`}
          aria-label="Main navigation"
        >
          <div className="nav-links">
            {navigationLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={closeMenu}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <a
            href="tel:+27615128410"
            className="header-contact-button"
            onClick={closeMenu}
          >
            <Phone size={16} />
            <span>Call Us</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
