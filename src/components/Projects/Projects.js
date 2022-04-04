import IMG1 from "../../assets/images/colorkeep.png";
import IMG2 from "../../assets/images/brainflix.png";
import "../Projects/Projects.scss";

export const projects = [
  {
    title: "Color Keep",
    description:
      "Designed for any Hair Stylist to use, this app helps to track clientele and save information from each visit to the salon.",
    image: IMG1,
  },

  {
    title: "Brainflix",
    description: "A Youtube mock.",
    image: IMG2,
  },
];

function Projects() {
  return (
    <section id="projects">
      <h3 className="projects__title">Projects</h3>
      <hr className="projects__div" />
      {projects.map((project, i) => (
        <div key={i} className="projects__card">
          <h3 className="projects__name">{project.title}</h3>
          <p className="projects__txt">{project.description}</p>
          <img src={project.image} className="projects__img" alt="project" />
        </div>
      ))}
    </section>
  );
}

export default Projects;
