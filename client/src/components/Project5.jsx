import DoItRight from "../assets/Do_It_Right.jpg";
import webLogo from "../assets/icons8-website-64.png";

export default function Project3() {
  return (
    <div className="project-container">
      <div className="project-info-container">
        <div className="name-image-container">
          <h3 className="project-name">Do It Right</h3>
          <img src={DoItRight} alt="project" className="project-image" />
        </div>
        <p className="project-description">
          Do It Right is a chrome extension built for a Hackaton competion.
          The app gives you the true information of a restaurant while on
          websites like doordash to order from the small business directly.
          It was created with the help of UX designers, Data engineers and
          other software engineers.
        </p>
      </div>
      <div className="project-links-containers">
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://chrome.google.com/webstore/detail/do-it-right/fologgfgadjcdjemgkohffpbbcegmipb"
        >
          <p>To live site</p>
          <img src={webLogo} alt="live-site" className="project-logo" />{" "}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://github.com/Rest4-Hackathon/Small-Biz-Rest"
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
