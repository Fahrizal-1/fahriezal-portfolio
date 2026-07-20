import "../styles/Navbar.css";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo">Fahriezal</div>

        <div className="nav-right">
          <nav>
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
              <li>
                <a href="#hero" className={activeSection === "hero" ? "active" : ""}>
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className={activeSection === "about" ? "active" : ""}>
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className={activeSection === "skills" ? "active" : ""}>
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
                  Projects
                </a>
              </li>

              <li>
                <a href="#experience" className={activeSection === "experience" ? "active" : ""}>
                  Experience
                </a>
              </li>

              <li>
                <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <button className="theme-toggle" onClick={() => setDarkMode((prev) => !prev)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
