import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { skills } from "../data/skills";
import "../styles/Skills.css";
import { FaShieldAlt, FaSearch, FaGlobe, FaReact, FaPhp, FaDatabase } from "react-icons/fa";
import { fadeUp } from "../animations/fadeUp";
import { BsPcDisplay } from "react-icons/bs";

const iconMap = {
  "Cyber Security": <FaShieldAlt />,
  "Digital Forensics": <FaSearch />,
  OSINT: <FaGlobe />,
  "IT Support": <BsPcDisplay />,
};

function Skills() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <motion.section id="skills" className="about" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="section-title">
        <span>Keahlian</span>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <motion.div
            className="skill-card"
            whileHover={{
              scale: 1.05,
              y: -10,
              rotate: 1,
            }}
            key={skill.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: skill.id * 0.1,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              className="skill-icon"
              whileHover={{
                scale: 1.3,
                rotate: 10,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              {iconMap[skill.title]}
            </motion.div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: animate ? `${skill.level}%` : "0%",
                }}
              ></div>
            </div>

            <span>{skill.level}%</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
