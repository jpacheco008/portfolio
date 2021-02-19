import Me from "../assets/Me.jpg";
import "../styles/AboutMe.css";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <img src={Me} alt="headshot" className="photo" />
      <div className="about-me-info">
        <h3 className="about-me-text">
          After five years working as an electrical engineer, I was ready for something more
          challenging. Now I am pursuing a software engineering role.
          <br />
          <br/>
          Life has taken me down many interesting turns, but I am never afraid of the unknown.
          I enjoy the pursuit of knowledge, and accomplishing new and exciting projects.
        </h3>
        <a
          className='about-me-button-link'
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1aL-2t5Qmwdyp1X9GTTzLwgrqVa4oqabH/view?usp=sharing"
        >
        <button className="about-me-button">Resume</button>
        </a>
        <h3 className="about-me-text">
          Here are the technologies Ihave worked with:
        </h3>
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
