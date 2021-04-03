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
              to="/about-me"
              onClick={() => setMenuActive(!menuActive)}
            >
              ABOUT ME
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
        </ul>
      </nav>
    </div>
  );
}
