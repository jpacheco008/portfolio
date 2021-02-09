import CoolRidings from "../assets/Cool-Ridings.png";
import "../styles/Projects.css";

export default function Project2() {
  return (
    <div className="project-container">
      <div className="name-image-container">
        <h3 className="project-name">Cool Ridings</h3>
        <img src={CoolRidings} alt="project" className="project-image" />
      </div>
      <div className="project-info-container">
        <p className="project-description">
          This full stack app is a bike shop with full front end and back end
          CRUD with authentification. Users with admin privileges will be able
          to add/delete items and edit items information .
        </p>
        <div className="project-links-containers">
          <a
            target="_blank"
            rel="noreferrer"
            className="project-link"
            href="https://sleepy-lewin-9c4a68.netlify.app"
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
            href="https://github.com/jpacheco008/Cool-Ridings"
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