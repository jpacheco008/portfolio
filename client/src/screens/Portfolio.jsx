import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="projects-container">
      <Project3 />
      <Project2 />
      <Project1 />
    </div>
  );
}
