import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import profileImage from "../assets/images/profile.png";
import "../styles/Hero.css";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

function Hero() {
  const professions = ["Cyber Security Enthusiast", "Digital Forensics Learner", "OSINT Enthusiast", "Web Developer"];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % professions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.section className="hero" id="hero" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="hero-container">
        {/* Kiri */}
        <div className="hero-content">
          <span className="hero-badge"> Halo, Selamat Datang</span>

          <h1>
            Saya <span>Fahriezal</span>
          </h1>

          <h2 className="typing-text">
            <TypeAnimation sequence={["Cyber Security Enthusiast", 2000, "Digital Forensics Learner", 2000, "OSINT Enthusiast", 2000, "Web Developer", 2000]} wrapper="span" speed={50} repeat={Infinity} />
          </h2>

          <p>
            Saya adalah mahasiswa Informatika yang memiliki ketertarikan pada Cyber Security, Digital Forensics, dan Open Source Intelligence (OSINT). Saat ini saya mempelajari React untuk membangun aplikasi web modern sekaligus memperkuat
            kemampuan dalam pengembangan teknologi.
          </p>

          <div className="hero-buttons">
            <a href="/cv/Fahriezal_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Download CV
            </a>

            <a href="#contact" className="btn-secondary">
              Hubungi Saya
            </a>
          </div>

          <div className="hero-social">
            <a href="https://instagram.com/fahr.izal" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="mailto:muhammadfahriezalr@email.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Kanan */}
        <div className="hero-image">
          <div className="profile-wrapper">
            <img src={profileImage} alt="Fahriezal" className="profile-image" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
