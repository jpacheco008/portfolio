import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import Project4 from "../components/Project4";

export default function Portfolio() {
  return (
    <div className="projects-container">
      <Project4 />
      <Project3 />
      <Project2 />
      <Project1 />
    </div>
  );
}
