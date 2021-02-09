import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div className="nav-container">
      <Link to='/'>
        <img className='logo' src={logo} alt="Initials"/>
      </Link>
      <div className='links-container'>
      <Link className='nav-links' to='/about-me'>
        ABOUT ME
      </Link>
      <Link className='nav-links' to='/portfolio'>
        PORTFOLIO
      </Link>
      <Link className='nav-links' to='/contact'>
        CONTACT
      </Link>
      </div>
    </div>
  )
}