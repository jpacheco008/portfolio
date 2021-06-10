import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function SideNav() {
  return (
    <div className="sidenav-container">
      <img className="sidenav-logo" src={logo} alt="Initials" />
      <Link className="sidenav-link" to="/">
        HOME
      </Link>
      <Link className="sidenav-link" to="/portfolio">
        PORTFOLIO
      </Link>
      <Link className="sidenav-link" to="/contact">
        CONTACT ME
      </Link>

      <ul className="sidenav-icons-container">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/julio-pacheco-008/"
            className="sidenav-icons"
          >
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jpacheco008"
            className="sidenav-icons"
          >
            <i className="fab fa-github fa-lg"></i>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://calendly.com/jpacheco0825"
            className="sidenav-icons"
          >
            <i className="fas fa-calendar-alt fa-lg"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
