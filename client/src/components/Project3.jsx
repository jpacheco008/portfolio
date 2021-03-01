import CaffeineExplorer from "../assets/Caffeine-Explorer.jpg";
import webLogo from "../assets/icons8-website-64.png";

export default function Project3() {
  return (
    <div className="project-container">
      <div className="project-info-container">
        <div className="name-image-container">
          <h3 className="project-name">Caffeine Explorer</h3>
          <img src={CaffeineExplorer} alt="project" className="project-image" />
        </div>
        <p className="project-description">
          CAFFEINE EXPLORER is an app that allows the user to browse through a
          selection of fictional coffees generated with Fakker. The user will be
          able to make an account, and have more functionality available (leave
          a comment on a coffee). This application uses CSS, Javascript, React,
          Ruby, and Ruby on Rails.
        </p>
      </div>
      <div className="project-links-containers">
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://modest-tesla-2c628d.netlify.app"
        >
          <p>To live site</p>
          <img src={webLogo} alt="live-site" className="project-logo" />{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://github.com/jpacheco008/caffeine_explorer"
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
