import JuliosKitchen from "../assets/Julios-Kitchen.png";
import webLogo from "../assets/icons8-website-64.png"
import "../styles/Projects.css";

export default function Project1() {
  return (
    <div className="project-container">
      <div className="project-info-container">
      <div className="name-image-container">
        <h3 className="project-name">Julio's Kitchen</h3>
        <img src={JuliosKitchen} alt="project" className="project-image" />
      </div>
        <p className="project-description">
          This React application is for a user to keep track of all the orders being
          placed by other users. The application uses HTML, CSS, Javascript, and Airtable
          for API calls.
        </p>
          </div>
        <div className="project-links-containers">
          <a
            target="_blank"
            rel="noreferrer"
            className="project-link"
            href="https://pensive-mayer-03c92a.netlify.app"
          >
            <img
              src={webLogo}
              alt="live-site"
              className="project-logo"
            />
            <p>To live site:</p>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="project-link"
            href="https://github.com/jpacheco008/julios-kitchen"
          >
            <img
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              alt="github"
              className="project-logo"
            />
            <p>To Github Repo:</p>
          </a>
      </div>
    </div>
  );
}
