import JuliosKitchen from "../assets/Julios-Kitchen.jpg";

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
          Javascript,Airtable and REST API.
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
          <i class="fas fa-globe fa-2x"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="project-link"
          href="https://github.com/jpacheco008/julios-kitchen"
        >
          <p>To Github Repo</p>
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
}
