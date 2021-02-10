import JuliosKitchen from "../assets/Julios-Kitchen.png";
import "../styles/Projects.css";

export default function Project1() {
  return (
    <div className="project-container">
      <div className="name-image-container">
        <h3 className="project-name">Julio's Kitchen</h3>
        <img src={JuliosKitchen} alt="project" className="project-image" />
      </div>
      <div className="project-info-container">
        <p className="project-description">
          This React application is for a user to keep track of all the orders being
          placed by other users. The application uses HTML, CSS, Javascript, and Airtable
          for API calls.
        </p>
        <div className="project-links-containers">
          <a
            target="_blank"
            rel="noreferrer"
            className="project-link"
            href="https://pensive-mayer-03c92a.netlify.app"
          >
            <img
              src="https://www.pngfind.com/pngs/m/32-321388_the-internet-png-logo-internet-png-transparent-png.png"
              alt="live-site"
              className="project-logo"
            />{" "}
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
    </div>
  );
}
