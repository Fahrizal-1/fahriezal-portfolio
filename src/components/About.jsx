import "../styles/About.css";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

function About() {
  return (
    <motion.section id="about" className="about" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="about-container">
        <div className="section-title">
          <span>Tentang Saya</span>
          <h2>Mengenal Saya Lebih Dekat</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Saya adalah mahasiswa Informatika semester akhir di
              <strong> Universitas PGRI Yogyakarta </strong>
              yang memiliki ketertarikan besar pada
              <strong> Cyber Security</strong>,<strong> Digital Forensics</strong>, dan
              <strong> Open Source Intelligence (OSINT)</strong>.
            </p>

            <p>Saat ini saya terus mengembangkan kemampuan dalam keamanan siber, analisis forensik digital, serta pengembangan website menggunakan React sebagai sarana belajar membangun aplikasi modern dan responsif.</p>
          </div>

          <div className="about-info">
            <div className="info-card">
              <h3>🎓 Pendidikan</h3>
              <p>S1 Informatika - Universitas PGRI Yogyakarta</p>
            </div>

            <div className="info-card">
              <h3>📍 Domisili</h3>
              <p>Yogyakarta, Indonesia</p>
            </div>

            <div className="info-card">
              <h3>🎯 Fokus Keahlian</h3>
              <p>Cyber Security</p>
            </div>

            <div className="info-card">
              <h3>📚 Status</h3>
              <p>Mahasiswa Semester Akhir</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
