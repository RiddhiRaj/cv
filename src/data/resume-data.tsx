import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
  myImage,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Riddhi Raj Ghosh",
  initials: "RRG",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about:
    "Engineer 💻| Developer 🧑🏻‍💻| Space Enthusiast 🚀 Trying to create things which create value for people 🪄",
  summary:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec lacinia tincidunt, nunc nunc ldolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc nec",
  avatarUrl: "myImage",
  personalWebsiteUrl: "https://riddhiraj.netlify.app/",
  contact: {
    email: "rrg.connect@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/RiddhiRaj",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/riddhi-raj-ghosh/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/rrgindeed",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Engineering and Management, Kolkata",
      degree: "B.Tech. in Computer Science and Engineering specializing in Artificial Intelligence and Machine Learning",
      start: "2021",
      end: "2025",
    },
    {
      school: "The Modern Academy, Kolkata",
      degree: "Higher Secondary Education (10+2) specializing in Science with Computer Science and Mathematics as major subjects",
      start: "2008",
      end: "2021",
    },
    
  ],
  work: [
    {
      company: "Calcutta Electric Supply Corporation Ltd.",
      link: "",
      badges: ["Intern"],
      title: "Java Developer",
      // logo: logo,
      start: "June 5, 2023",
      end: "July 1, 2023",
      description:
        "Engineered a scalable system for Meter Inspection, streamlining data collection and analysis processes. Used Oracle databases to efficiently manage and store critical data, ensuring data integrity and reliability, with Spring Boot to enhance system performance, optimize resource utilization, and simplify application deployment",
    },
    
    {
      company: "ISRO",
      link: "https://www.isro.gov.in",
      badges: ["Remote"],
      title: "Online Training Programme",
      start: "July 20, 2023",
      end: "August 7, 2023",
      description: "Explored the significance and history of space research and exploration, & ISRO's role in it; astrophysical principles,including celestial phenomena, cosmic structures, and the behavior of matter and energy in the universe and delved into astrochemistry, exploring the chemical composition of cosmic objects.",
    },
  ],
  skills: [
    "HTML","CSS","JavaScript","C","C++","Java",
    "Latex","Markdown",
    "Bootstrap","Tailwind CSS","Springboot","Flask",
    "MySql","Oracle","Node.js",
    "Python","Scikit learn","Numpy","Panda","Tensorflow", "Keras", "PyTorch", "OpenCV",
  ],
  projects: [
    {
      title: "Personal Portfolio",
      techStack: [
        "Side Project",
        "React",
        "Sanity",
        "Vite",
        "Sass",
        "Netlify",
      ],
      description: "My peronsal portfolio website built with React and Sanity",
      // logo:
      link: {
        label: "riddhiraj.netlify.app",
        href: "https://riddhiraj.netlify.app/",
      },
    },
    {
      title: "AI Irrigation System",
      techStack: ["Side Project", "Python", "Flask", "Tailwind CSS", "JS", "pandas", "scikit-learn"],
      description:
        "Smart Irrigation Predictor system focused on resource management within agricultural environments",
      link: {
        label: "ai-irrigation",
        href: "https://github.com/RiddhiRaj/ai_irrigation_bg",
      },
    },
    {
      title: "Hand Gesture Controlled Mouse",
      techStack: ["Side Project", "Machine Learning", "Python", "OpenCV", "Tensorflow"],
      description:
        "Interactive Human-Computer Interaction (HCI) system that allows users to control their computer's mouse pointer using certain hand gestures",
      // link: {
      //   label: "github.com",
      //   href: "",
      // },
    },
    {
      title: "Habitable Exoplanets",
      techStack: ["NASA Space Apps Challenge 2023", "GenAI", "Canva"],
      description:
        "Made an exoplanet travel bureau, a comprehensive illustrated concept paper, a user-friendly interface (UI/UX) for an e-commerce platform and a video presentation for the same",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Analysis of Various Machine Learning Classifiers",
      techStack: ["Univ. Project", "Python", "ML"],
      description:
        "A paper based on the evaluation of diverse machine learning classifiers",
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Minimal Portfolio",
      techStack: ["Side Project", "HTML", "CSS", "JS", "Github Pages"],
      description: "My first portfolio website built with HTML, CSS, and JS",
      link: {
        label: "riddhiraj.github.io",
        href: "https://riddhiraj.github.io/",
      },
    },
    {
      title: "No-Code Website",
      techStack: ["Super.so","Notion",],
      description:
        "A no-code website to host notes and assignments for my college.",
      link: {
        label: "github.com",
        href: "https://cs-notes.super.site/",
      },
    },
    {
      title: "Meow",
      techStack: [
        "Side Project","HTML","CSS",
      ],
      description:
        "A fun little cat website",
      link: {
        label: "riddhiraj.github.io",
        href: "https://riddhiraj.github.io/cats.html",
      },
    },
    {
      title: "Krypt",
      techStack: ["Side Project", "Solidity", "Smart Contracts", "Blockchain", "React", "Tailwind CSS", "Metamask"],
      description:
        "A website to upload files, share securely across the world using blockchain technology",
      link: {
        label: "rrg-krypt.netlify.app",
        href: "https://rrg-krypt.netlify.app/",
      },
    },
    {
      title: "Startup Name Generator",
      techStack: ["Side Project", "Flutter", "Dart"],
      description:
        "A website to generate startup names done by combining two words together",
      link: {
        label: "rrg-namegen.netlify.app",
        href: "https://rrg-namegen.netlify.app/",
      },
    },
  ],
} as const;
