import { experiences } from "../data/experience";
import "../styles/Experience.css";
import { FaLaptopCode } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

const getIcon = (icon) => {
  switch (icon) {
    case "laptop":
      return <FaLaptopCode />;

    case "security":
      return <MdSecurity />;

    case "building":
      return <BsBuilding />;

    default:
      return null;
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Experience() {
  return (
    <motion.section id="experience" className="about" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="section-title">
        <h2>Experience</h2>

        <p>Perjalanan saya di dunia teknologi.</p>
      </div>

      <motion.div className="experience-list">
        {experiences.map((experience) => (
          <div className="experience-item" key={experience.id}>
            <div className="timeline-dot"></div>

            <div className="experience-card">
              <div className="experience-year">{experience.year}</div>

              <div className="experience-icon">{getIcon(experience.icon)}</div>

              <h3>{experience.company}</h3>

              <h4>{experience.position}</h4>

              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Experience;
