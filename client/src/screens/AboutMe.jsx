import Me from "../assets/Me.jpg";

export default function AboutMe() {
  return (
    <div className="about-me-container">
      <img src={Me} alt="headshot" className="photo" />
      <div className="about-me-info">
        <h3 className="about-me-text">
          After five years working as an electrical engineer, I was ready for
          something more challenging. Now I am pursuing a software engineering
          role.
          <br />
          <br />
          Life has taken me down many interesting turns, but I am never afraid
          of the unknown. I enjoy the pursuit of knowledge, and accomplishing
          new and exciting projects.
        </h3>
        <br />
        <a
          className="about-me-button-link"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1aL-2t5Qmwdyp1X9GTTzLwgrqVa4oqabH/view?usp=sharing"
          >
          <button className="about-me-button">
            <span>Resume</span>
          </button>
        </a>
          <br/>
        <h3 className="about-me-text">
          Here are the technologies I have worked with:
        </h3>
        <div className="about-me-logos-container">
          <div className="about-me-logos">
            <i className="devicon-csharp-plain"></i>
            <i className="devicon-css3-plain"></i>
            <i className="devicon-git-plain"></i>
            <i className="devicon-github-original"></i>
            <i className="devicon-heroku-original"></i>
            <i className="devicon-html5-plain"></i>
            <i className="devicon-java-plain"></i>
            <i className="devicon-javascript-plain"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
            <i className="devicon-mysql-plain-wordmark"></i>
            <i className="devicon-nodejs-plain-wordmark"></i>
            <i className="devicon-npm-original-wordmark"></i>
            <i className="devicon-postgresql-plain-wordmark"></i>
            <i className="devicon-rails-plain-wordmark"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-ruby-plain"></i>
            <i className="devicon-xd-line"></i>
            <i className="devicon-sass-original"></i>
            <i className="devicon-bootstrap-plain-wordmark"></i>
            <i className="devicon-django-plain"></i>
            <i className="devicon-python-plain-wordmark"></i>
            <i className="devicon-redux-original"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
