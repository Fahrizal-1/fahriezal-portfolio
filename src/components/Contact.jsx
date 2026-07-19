import "../styles/Contact.css";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm("service_r6iw92m", "template_oxolcml", form.current, "yHs3KpiyYBD4IfE5G")
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Berhasil!",
          text: "Pesan berhasil dikirim.",
          confirmButtonColor: "#2563eb",
          confirmButtonText: "OK",
        });

        form.current.reset();
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Pesan gagal dikirim. Silakan coba lagi.",
          confirmButtonColor: "#dc2626",
          confirmButtonText: "Tutup",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <motion.section id="contact" className="about" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <div className="section-title">
        <h2>Hubungi Saya</h2>

        <p>Saya terbuka untuk kesempatan magang, freelance, maupun diskusi seputar Cyber Security dan Web Development.</p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nama Lengkap" required />

          <input type="email" name="email" placeholder="Email" required />

          <input type="text" name="subject" placeholder="Subject" required />

          <textarea name="message" rows="6" placeholder="Tulis pesan..." required></textarea>

          <button type="submit" className="send-btn">
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>

        {/* Contact Information */}

        <div className="contact-info-wrapper">
          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div className="contact-info">
              <h3>Email</h3>
              <p>muhammadfahriezalr@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaWhatsapp />
            </div>

            <div className="contact-info">
              <h3>WhatsApp</h3>
              <p>+62 895 612 492 478</p>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaGithub />
            </div>

            <div className="contact-info">
              <h3>GitHub</h3>
              <p>github.com/Fahrizal-1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-cta">
        <h2>Mari Berkolaborasi </h2>

        <p>Saya selalu terbuka untuk kesempatan magang, freelance, maupun berdiskusi mengenai Web Development, Cyber Security, Digital Forensics, dan OSINT.</p>

        <a href="https://wa.me/62895612492478" target="_blank" rel="noopener noreferrer" className="cta-button">
          <FaWhatsapp />
          Chat via WhatsApp
        </a>
      </div>
    </motion.section>
  );
}

export default Contact;
