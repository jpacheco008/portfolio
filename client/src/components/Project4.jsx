import FirstClass from "../assets/NCFirstClass_Logo-Variations-01.png";


export default function Project3() {
  return (
    <div className="project-container">
      <div className="project-info-container">
        <div className="name-image-container">
          <h3 className="project-name">First Class NC</h3>
          <img src={FirstClass} alt="project" className="project-image" />
        </div>
        <p className="project-description">
          First Class NC  is a freelance web store under construction. This store will
          have it's own database, user and admin authorization, order tracking and payment
          processing. This application uses Bootstrap, Javascript, React, Redux, Python, and
          Django REST API framework.
        </p>
      </div>
      <div className="project-links-containers">
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://ncfirstclass.herokuapp.com"
        >
          <p>To live site</p>
          <i class="fas fa-globe fa-2x"></i>
        </a>
        {/* <a
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
        </a> */}
      </div>
    </div>
  );
}
