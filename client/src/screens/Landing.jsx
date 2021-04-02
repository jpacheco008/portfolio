import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-container">
      <h1 className="landing-name">Julio Pacheco</h1>
      <span></span>
      <h5 className="landing-title">Software Engineer/Electrical Engineer</h5>
      <Link to="about-me" className="landing-button-link">
        <button className="landing-button">
          <span>GET TO KNOW ME</span>
        </button>
      </Link>
    </div>
  );
}
