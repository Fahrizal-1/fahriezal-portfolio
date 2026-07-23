import simagang from "../assets/projects/simagang.png";
import masjid from "../assets/projects/masjid.png";

const projects = [
  {
    id: 1,
    title: "SI-Magang BNNP DIY",
    badge: "Featured",
    year: "2026",

    image: simagang,

    description: "Sistem Absensi Mahasiswa Magang berbasis web menggunakan PHP, MySQL, Bootstrap, GPS, dan Camera Selfie.",

    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript", "GPS", "Camera"],

    github: "https://github.com/Fahrizal-1",

    demo: "http://scoop-annuity-rethink.ngrok-free.dev/absensi_magang_bnnp/login.php",
  },

  {
    id: 2,

    title: "Website Profile Masjid Al-Mustaqim Mantrijeron",

    badge: "Latest",

    year: "2026",

    image: masjid,

    description: "Website profile Masjid Al-Mustaqim Mantrijeron berbasis Laravel 12 yang dilengkapi fitur CRUD, CMS, dan laporan keuangan publik.",

    tech: ["Laravel 12", "PHP", "HeidiSQL", "Bootstrap"],

    github: "https://github.com/Fahrizal-1",

    demo: "#",
  },
];

export default projects;
