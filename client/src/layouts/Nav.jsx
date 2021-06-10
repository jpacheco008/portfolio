import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";

export default function Nav() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="nav-container">
      <Link to="/">
        <img className="logo" src={logo} alt="Initials" />
      </Link>
      <div onClick={() => setMenuActive(!menuActive)} className="menu-btn">
        <span className={`menu-btn-burger ${menuActive ? "open" : ""}`}></span>
      </div>
      <nav className={`nav ${menuActive ? "open" : ""}`}>
        <ul className={`menu-nav ${menuActive ? "open" : ""}`}>
          <li className={`menu-nav-item ${menuActive ? "open" : ""}`}>
            <Link
              className="menu-nav-link"
              to="/"
              onClick={() => setMenuActive(!menuActive)}
            >
              HOME
            </Link>
          </li>
          <li className={`menu-nav-item ${menuActive ? "open" : ""}`}>
            <Link
              className="menu-nav-link"
              to="/portfolio"
              onClick={() => setMenuActive(!menuActive)}
            >
              PORTFOLIO
            </Link>
          </li>
          <li className={`menu-nav-item ${menuActive ? "open" : ""}`}>
            <Link
              className="menu-nav-link"
              to="/contact"
              onClick={() => setMenuActive(!menuActive)}
            >
              CONTACT
            </Link>
          </li>
          <div className="contact-links">
            <li className={`menu-nav-item ${menuActive ? "open" : ""}`}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/julio-pacheco-008/"
                className="contact-icons"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
            <li className={`menu-nav-item ${menuActive ? "open" : ""}`}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/jpacheco008"
                className="contact-icons"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
            </li>
            <li className={`menu-nav-item ${menuActive ? "open" : ""}`}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://calendly.com/jpacheco0825"
                className="contact-icons"
              >
                <i className="fas fa-calendar-alt fa-2x"></i>
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
