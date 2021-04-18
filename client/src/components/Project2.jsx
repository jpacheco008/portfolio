import CoolRidings from "../assets/Cool-Ridings.jpg";

export default function Project2() {
  return (
    <div className="project-container">
      <div className="project-info-container">
        <div className="name-image-container">
          <h3 className="project-name">Cool Ridings</h3>
          <img src={CoolRidings} alt="project" className="project-image" />
        </div>
        <p className="project-description">
          This full stack app is a bike shop with front end and back end CRUD
          with authentification. Users with admin privileges will be able to
          add/delete items and edit items information. This app was created in
          colaboration with two other developers. The application uses CSS,
          Javascript, and React.
        </p>
      </div>
      <div className="project-links-containers">
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://sleepy-lewin-9c4a68.netlify.app"
        >
          <p>To live site</p>
          <i class="fas fa-globe fa-2x"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://github.com/jpacheco008/Cool-Ridings"
        >
          <p>To Github Repo</p>
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
