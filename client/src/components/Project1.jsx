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
          This application is for the user to keep track of all the orders being
          placed. Costumers will place their orders from a menu rendered from a
          database and after making their selections the order will be added to
          a second database. The second recive the name of the item and a unique
          number provided by a counter at submission.
        </p>
        <div className="project-links-containers">
          <a
            target="_blank"
            rel="noreferrer"
            className="project-link"
            href="https://pensive-mayer-03c92a.netlify.app"
          >
            <img
              src="https://www.logolynx.com/images/logolynx/38/385bb555429c7c2ba2d90bbac5c78113.png"
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
