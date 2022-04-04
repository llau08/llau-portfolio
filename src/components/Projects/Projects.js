import { projects } from "../../data";
import "../Projects/Projects.scss";

function Projects() {
  return (
    <section id="projects">
      <h3 className="projects__title">Projects</h3>
      {projects.map((project) => (
        <>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </>
      ))}
    </section>
  );
}

export default Projects;
