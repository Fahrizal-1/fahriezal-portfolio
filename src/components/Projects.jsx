import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { projects } from "../data/projects";
import "../styles/Projects.css";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

function Projects() {
  return (
    <motion.section id="projects" className="about" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="section-title">
        <h2>Projects</h2>
        <p>Beberapa project yang pernah saya kerjakan.</p>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span className="tech-badge" key={index}>
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                  <FaGithub />
                  GitHub
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer" className="demo-btn">
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
