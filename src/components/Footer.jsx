import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>Fahriezal</h2>

        <p className="footer-description">Cyber Security Enthusiast | Digital Forensics Learner | OSINT Enthusiast</p>

        <div className="footer-social">
          <a href="https://github.com/Fahrizal-1" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://wa.me/62895612492478" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>

          <a href="mailto:muhammadfahriezalr@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Fahriezal. All Rights Reserved.</p>

          <p>Designed and Developed by Fahriezal using ❤️ in Yogyakarta City </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
