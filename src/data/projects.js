import siMagang from "../assets/projects/simagang.png";
import webMasjid from "../assets/projects/masjid.png";

export const projects = [
  {
    id: 1,
    title: "SI-MAGANG BNNP DIY",
    description: "Sistem Absensi Mahasiswa Magang berbasis web menggunakan PHP, MySQL, Bootstrap, GPS, dan Camera Selfie.",
    image: siMagang,
    technologies: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    github: "https://github.com/Fahrizal-1/absensi-magang-bnnp",
    demo: "#",
  },

  {
    id: 2,

    title: "Website Profile Masjid Al-Mustaqim Mantrijeron",

    description: "Website profile Masjid Al - Mustaqim Mantrijeron berbasis Laravel 12. yang dilengkapi fitur CRUD,CMS, dan laporan keuangan secara publik",

    technologies: ["PHP", "Laragon", "Laravel 12"],

    image: webMasjid,

    github: "#",

    demo: "#",
  },
];
