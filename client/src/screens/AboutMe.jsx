import Me from "../assets/Me.jpg";
import "../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <img src={Me} alt="headshot" className="photo" />
      <div className="about-me-info">
        <h3 className="about-me-text">
          I am a charismatic person, always in the pursuit of knowledge. I spent
          5 years working as an electrical engineer and was hungry for something
          more challenging. Life has taken me in many interesting turns, but I
          am never afraid of the unknown. Now I'm fully dedicating myself to
          pursuing a software engineering role.
        </h3>
        <button className="about-me-button">Resume</button>
        <h3 className="about-me-text">Here are the tecnologies I'm familiar with:</h3>
        <div className="about-me-logos-container">
          <div className="about-me-logos">
            <i class="devicon-react-original-wordmark colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-css3-plain colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-html5-plain colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-javascript-plain colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-java-plain colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-nodejs-plain-wordmark colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-npm-original-wordmark colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-mysql-plain-wordmark colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-postgresql-plain-wordmark colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-ruby-plain-wordmark colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-rails-plain-wordmark colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-cplusplus-plain colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-csharp-plain colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-git-plain colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-github-original colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-heroku-original-wordmark colored"></i>
          </div>
          <div className="about-me-logos">
            <i class="devicon-mongodb-plain colored"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
