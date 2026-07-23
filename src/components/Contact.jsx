import "../styles/Contact.css";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_r6iw92m", "template_oxolcml", form.current, "yHs3KpiyYBD4IfE5G").then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Pesan berhasil dikirim.",
          confirmButtonColor: "#2563eb",
        });

        form.current.reset();
      },
      () => {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Pesan gagal dikirim.",
          confirmButtonColor: "#2563eb",
        });
      },
    );
  };
  return (
    <motion.section id="contact" className="contact" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      {/* ===== Section Title ===== */}
      <div className="section-title">
        <h2>Hubungi Saya</h2>

        <p>Saya terbuka untuk peluang magang, freelance, dan kolaborasi dalam pengembangan solusi digital, dengan fokus pada Web Development, Cyber Security, Digital Forensics, dan OSINT.</p>
      </div>

      {/* ===== Contact Wrapper ===== */}
      <div className="contact-wrapper">
        {/* ===== Contact Information ===== */}
        <div className="contact-info">
          <span className="contact-badge">🟢 Available for Internship</span>

          <h3>Let's Work Together</h3>

          <div className="contact-list">
            <div className="contact-item">
              <FaEnvelope />
              <span>muhammadfahriezalr@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaWhatsapp />
              <span>+62 895 612 492 478</span>
            </div>

            <div className="contact-item">
              <FaGithub />
              <span>github.com/Fahrizal-1</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>Yogyakarta, Indonesia</span>
            </div>
          </div>

          <a href="https://wa.me/62895612492478" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <FaWhatsapp />
            Chat via WhatsApp
          </a>
        </div>

        {/* ===== Contact Form ===== */}
        <div className="contact-form">
          <h3>Kirim Pesan</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Nama Lengkap" required />

            <input type="email" name="user_email" placeholder="Alamat Email" required />

            <input type="text" name="subject" placeholder="Subject" required />

            <textarea name="message" rows="6" placeholder="Tulis pesan Anda..." required></textarea>

            <button type="submit">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
