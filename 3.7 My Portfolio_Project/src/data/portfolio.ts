import aiStudy from "@/assets/project-ai-study.jpg";
import chat from "@/assets/project-chat.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import hospital from "@/assets/project-hospital.jpg";
import taskflow from "@/assets/project-taskflow.jpg";
import university from "@/assets/project-university.jpg";
import tClassmate from "@/assets/testimonial-classmate.jpg";
import tClient from "@/assets/testimonial-client.jpg";
import tProfessor from "@/assets/testimonial-professor.jpg";
import tTeammate from "@/assets/testimonial-teammate.jpg";

export const profile = {
  firstName: "Md. Hanjala",
  lastName: "Sumon",
  shortName: "Hanjala Sumon",
  role: "Full Stack",
  university: "Pundra University of Science & Technology",
  email: "hanjalasumon@gmail.com",
  location: "Bogura, Rajshahi, Bangladesh",
  // No CV file yet: the Resume buttons scroll to the contact section until one is added.
  resumeUrl: "#contact",
};

export const navLinks = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const socials = [
  { label: "Linkedin", icon: "ri-linkedin-box-line", href: "https://www.linkedin.com/" },
  { label: "GitHub", icon: "ri-github-line", href: "https://github.com/" },
  { label: "Instagram", icon: "ri-instagram-line", href: "https://www.instagram.com/" },
  { label: "FaceBook", icon: "ri-facebook-line", href: "https://www.facebook.com/" },
];

export const writeMe = [
  { label: "WhatsApp", href: "https://wa.me/" },
  { label: "Messenger", href: "https://m.me/" },
  { label: "Telegram", href: "https://t.me/" },
  { label: "Email", href: `mailto:${"hanjalasumon@gmail.com"}` },
];

export type Project = {
  category: string;
  title: string;
  stack: string;
  image: string;
  href: string;
};

export const projects: Project[] = [
  {
    category: "Web",
    title: "University Management System",
    stack: "MongoDB, Express JS, React JS, Node JS, JWT Auth and Tailwind CSS",
    image: university,
    href: "#",
  },
  {
    category: "Web",
    title: "E-Commerce Platform",
    stack: "Next.js, TypeScript, Node JS, MongoDB, Stripe Payment and Tailwind CSS",
    image: ecommerce,
    href: "#",
  },
  {
    category: "Web",
    title: "Real-time Chat Application",
    stack: "React JS, Socket.io, Node JS, Express JS and MongoDB",
    image: chat,
    href: "#",
  },
  {
    category: "AI",
    title: "AI Study Assistant",
    stack: "React JS, Python, FastAPI, OpenAI API and PostgreSQL",
    image: aiStudy,
    href: "#",
  },
  {
    category: "Web",
    title: "Hospital Management System",
    stack: "PHP, Laravel, MySQL, Blade and Bootstrap",
    image: hospital,
    href: "#",
  },
  {
    category: "Web",
    title: "TaskFlow Kanban Board",
    stack: "React JS, Redux Toolkit, Firebase, Framer Motion and Tailwind CSS",
    image: taskflow,
    href: "#",
  },
];

export type TimelineItem = { title: string; place: string; year: string; description: string };

export const experience: TimelineItem[] = [
  {
    title: "Full Stack Web Developer",
    place: "Freelance",
    year: "2024- Present",
    description:
      "Building complete web applications for clients — from responsive React / Next.js interfaces to secure Node JS & Express APIs, databases, authentication and deployment.",
  },
  {
    title: "MERN Stack Developer",
    place: "Personal & Academic Projects",
    year: "2023- 2024",
    description:
      "Designed and shipped full stack projects such as a university management system and a real-time chat app using MongoDB, Express, React and Node JS.",
  },
];

export const education: TimelineItem[] = [
  {
    title: "B.Sc in CSE",
    place: "Pundra University of Science & Technology",
    year: "2022- Present",
    description:
      "Studying Computer Science & Engineering — data structures, algorithms, databases, operating systems, networking, software engineering and web development.",
  },
  {
    title: "HSC (Science)",
    place: "Higher Secondary Certificate",
    year: "2019- 2021",
    description:
      "Completed Higher Secondary in Science with a strong foundation in mathematics, physics and ICT, which sparked my interest in programming.",
  },
  {
    title: "SSC (Science)",
    place: "Secondary School Certificate",
    year: "2017- 2019",
    description:
      "Completed Secondary School Certificate in Science, building a solid base in mathematics, science and analytical thinking.",
  },
];

export type Service = { title: string; description: string; label: string; skills: string[] };

export const services: Service[] = [
  {
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive and animated user interfaces with React, Next.js and Tailwind CSS.",
    label: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React JS",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
      "Framer Motion",
      "Responsive Design",
    ],
  },
  {
    title: "Backend & Database",
    description:
      "Secure, scalable APIs and databases that power real products — auth, payments and real-time features.",
    label: "Backend",
    skills: [
      "Node JS",
      "Express JS",
      "REST API's",
      "GraphQL",
      "JWT Auth",
      "Socket.io",
      "PHP",
      "Laravel",
      "Python",
      "Mongo DB",
      "My SQL",
      "PostgreSQL",
      "Firebase",
      "SupaBase",
    ],
  },
  {
    title: "CSE Core Knowledge",
    description:
      "Strong computer science fundamentals from my CSE degree that help me write clean, efficient code.",
    label: "Fundamentals",
    skills: [
      "C",
      "C++",
      "Java",
      "Python",
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Problem Solving",
    ],
  },
  {
    title: "Development Tools",
    description:
      "I leverage powerful tools to streamline my workflow, improve productivity and deliver high-quality projects.",
    label: "Tools",
    skills: [
      "VS Code",
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "Linux",
      "Figma",
      "Vercel",
      "Netlify",
      "Chrome DevTools",
      "ChatGPT",
      "Claude",
      "MS Copilot",
    ],
  },
];

export type Testimonial = { name: string; image: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    name: "Course Teacher",
    image: tProfessor,
    quote:
      "Hanjala is a hard-working CSE student. His curiosity and problem-solving skills stand out, and his projects always go beyond the requirements.",
  },
  {
    name: "Classmate",
    image: tClassmate,
    quote:
      "Working with Hanjala on group projects is easy. He explains complex topics simply and builds clean, responsive web apps.",
  },
  {
    name: "Project Teammate",
    image: tTeammate,
    quote:
      "Hanjala handled both frontend and backend for our team project. Clean code, great APIs and always on time.",
  },
  {
    name: "Freelance Client",
    image: tClient,
    quote:
      "Hanjala delivered our full stack website quickly and professionally. Great communication and attention to detail.",
  },
];
