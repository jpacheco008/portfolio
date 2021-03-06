import JuliosKitchen from "../assets/Julios-Kitchen.jpg";
import webLogo from "../assets/icons8-website-64.png";

export default function Project1() {
  return (
    <div className="project-container">
      <div className="project-info-container">
        <div className="name-image-container">
          <h3 className="project-name">Julio's Kitchen</h3>
          <img src={JuliosKitchen} alt="project" className="project-image" />
        </div>
        <p className="project-description">
          This React application allows the user to keep track of all the orders
          being placed by other users. The application uses HTML, CSS,
          Javascript, and Airtable for API calls.
        </p>
      </div>
      <div className="project-links-containers">
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://pensive-mayer-03c92a.netlify.app"
        >
          <p>To live site</p>
          <img src={webLogo} alt="live-site" className="project-logo" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://github.com/jpacheco008/julios-kitchen"
        >
          <p>To Github Repo</p>
          <img
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
            alt="github"
            className="project-logo"
          />
        </a>
      </div>
    </div>
  );
}
