import CaffeineExplorer from "../assets/Caffeine-Explorer.png";
import "../styles/Projects.css";

export default function Project3() {
  return (
    <div className="project-container">
      <div className="name-image-container">
        <h3 className="project-name">Caffeine Explorer</h3>
        <img src={CaffeineExplorer} alt="project" className="project-image" />
      </div>
      <div className="project-info-container">
        <p className="project-description">
          CAFFEINE EXPLORER is an app that allows the user to browse thru a
          selection of fictional coffees generated with Fakker. The user will be
          able to make an account and have more functionality avialable (leave a
          comment on a coffee). The application uses CSS, Javascript, React, Ruby,
          and Ruby on Rails.
        </p>
        <div className="project-links-containers">
          <a
            target="_blank"
            rel="noreferrer"
            className="project-link"
            href="https://modest-tesla-2c628d.netlify.app"
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
            href="https://github.com/jpacheco008/caffeine_explorer"
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
