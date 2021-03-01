import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing-container">
      <h1 className="landing-name">Julio Pacheco</h1>
      <h5 className="landing-title">Software Engineer/Electrical Engineer</h5>
      <Link to="about-me" className="landing-button-link">
        <button className="landing-button">GET TO KNOW ME</button>
      </Link>
    </div>
  );
}
