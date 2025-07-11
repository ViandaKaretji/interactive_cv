const educationHistory = [ 
    { id: 1, period: "2023 - Sekarang", institution: "Universitas Amikom Yogyakkarta", major: "S1 - Teknik Informatika" },
    { id: 2, period: "2019 - 2022", institution: "SMA Negeri 1 Candiroto", major: "MIPA" }, ];
const skills = [ 
    { name: "Vue.js", level: "Menengah" },
    { name: "JavaScript", level: "Menengah" },
    { name: "Tailwind CSS", level: "Menengah" },
    { name: "Node.js", level: "Menengah" },
    { name: "Express.js", level: "Menengah" },
    { name: "MySQL", level: "Menengah" },
    { name: "Git & GitHub", level: "Menengah" },
    { name: "HTML5 & CSS3", level: "Menengah" }, 
];
const projects = [ 
    { title: "Sistem Carwash", image: '/images/PL.png', description: "Platform menghitung pendapatan Carwash", tech: ["C#"], link: "#" },
    { title: "Technologia", image: "/images/Technologia.png", description: "Web Rekomendasi Laptop", tech: ["Vue", "CI3"], link: "https://github.com/ddaannuu/Project-Website-Laptop" },
 ];
module.exports = { educationHistory, skills, projects };