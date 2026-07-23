import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import projects from "../data/projects";
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

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />

              <span className="featured-badge">Featured</span>
            </div>

            <div className="project-body">
              <div className="project-top">
                <span className="project-year">{project.year}</span>

                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noreferrer" className="github-btn">
                  GitHub
                </a>

                <a href={project.demo} target="_blank" rel="noreferrer" className="demo-btn">
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
