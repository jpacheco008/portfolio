import { useState } from "react";

export default function ProjectPrivate({ name, photo, overview, liveSite }) {
  const [flip, setFlip] = useState(false);

  const changeCard = () => {
    setFlip(!flip);
  };
  return (
    <div className="project-container">
      <div
        className={`card-inner ${flip ? "flip" : ""}`}
        style={flip ? { transform: "rotateY(180deg)" } : { transform: "none" }}
      >
        <div className="card-front">
          <h3 className="project-name">{name}</h3>
          <img src={photo} alt="project" className="project-image" />
        </div>
        <div className="card-back">{overview}</div>
      </div>
      {flip ? (
        <div className="project-links-containers-back">
          <button onClick={() => changeCard()} className="project-link-back">
            <i className="fas fa-sync-alt fa-2x"></i>
            <p style={{ transform: "rotateY(180deg)" }}>Back</p>
          </button>
        </div>
      ) : (
        <div className="project-links-containers">
          <a
            target="_blank"
            rel="noreferrer"
            className="project-link"
            href={liveSite}
          >
            <p>To live site</p>
            <i className="fas fa-globe fa-2x"></i>
          </a>
          <button onClick={() => changeCard()} className="project-link">
            <p>Overview</p>
            <i className="fas fa-sync-alt fa-2x"></i>
          </button>
        </div>
      )}
    </div>
  );
}
