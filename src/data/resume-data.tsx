// import {
//   AmbitLogo,
//   BarepapersLogo,
//   BimLogo,
//   CDGOLogo,
//   ClevertechLogo,
//   ConsultlyLogo,
//   EvercastLogo,
//   Howdy,
//   JarockiMeLogo,
//   JojoMobileLogo,
//   Minimal,
//   MobileVikingsLogo,
//   MonitoLogo,
//   NSNLogo,
//   ParabolLogo,
//   TastyCloudLogo,
//   YearProgressLogo,
//   myImage,
// } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Riddhi Raj Ghosh",
  initials: "RRG",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about:
    "Engineer 💻| Developer 🧑🏻‍💻| Space Enthusiast 🚀 Trying to create things which create value for people 🪄",
  summary:
    "CS AI & ML engineering student at UEM, Kolkata with an insatiable curiosity for emerging technologies and their impact on our world. My passion for these subjects extends to various domains, with a particular fascination for Machine Learning and Space exploration. I eagerly seek opportunities to engage in meaningful discussions and aspire to contribute to development and research endeavors in these fields. Open to collaborations and new opportunities!",

  avatarUrl: "https://i.postimg.cc/qM879K42/rrg.jpg",
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
    "HTML","CSS","JavaScript","C","Python","Java",
    "Latex","Markdown",
    "Bootstrap","Tailwind CSS","Springboot","Flask",
    "MySql","Oracle","Node.js",
    "HF Transformers","scikit-learn","Numpy","Panda","Tensorflow", "Keras", "PyTorch", "OpenCV","OpenAI Gynasium","Streamlit","Langchain","Groq","Matplotlib","Graphviz"
  ],
  projects: [
    {
      title: "Lunar Lander with NEAT",
      techStack: ["Side Project","Python","miniconda","OpenAI Gymnasium","Matplotlib","Graphviz"],
      description: "Neuroevolution algorithm (NEAT) to solve the Lunar Lander problem in OpenAI's Gymnasium environment",
      // logo:
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Kanji Generator with Stable Diffusion",
      techStack: ["Side Project","Python","HF Transformers","Diffusers","LoRA"],
      description: "Fine-tuned Stable Diffusion v1.4 using LoRA for generating Kanji characters based on English definitions",
      // logo:
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Multi-Agent Debate using TinyLlama",
      techStack: ["Side Project","LLMs","TinyLlama 1.1B","PyTorch","Python","Transformers", "GSM8K", "Matplotlib"],
      description: "Multi-agent debate system using TinyLlama-1.1B-Chat and the GSM8K dataset",
      // logo:
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Character-Level Language Model with RoPE",
      techStack: ["Side Project","Python","PyTorch","Transformers","NanoGPT","RoPE","enwik8"],  
      description: "Enhanced a GPT-style transformer with Rotary Position Embeddings for character-level language modeling, trained on the enwik8 dataset and compared against a baseline",
      // logo:
      link: {
        label: "RotaryCharTransformer",
        href: "https://github.com/RiddhiRaj/RotaryCharTransformer",
      },
    },
    {
      title: "Personal Portfolio",
      techStack: ["Side Project","React","Sanity","Vite","Sass","Netlify"],
      description: "My peronsal portfolio website built with React and Sanity",
      // logo:
      link: {
        label: "riddhiraj.netlify.app",
        href: "https://riddhiraj.netlify.app/",
      },
    },
    {
      title: "GroqChat with Llama3-8B",
      techStack: ["Side Project","RAG", "ML", "Python", "Llama3-8B", "Groq", "Streamlit", "Langchain", "Huggingface Transformers","FAISS"],
      description:
        "Streamlit-based RAG system as a document assistant, with Groq API’s Llama3-8B, HuggingFace’s sentence-transformers for embedding, & LangChain with FAISS for efficient vector retrieval.",
      link: {
        label: "github.com",
        href: "https://github.com/RiddhiRaj/groq-rag",
      },
    },
    {
      title: "Finetuned Llama2 using LoRA and QLoRA",
      techStack: ["Side Project", "ML", "Python", "Llama2-7B", "LoRA", "QLoRA", "Google Colab", "Supervised Fine Tuning", "Transformer Reinforcement Learning"],
      description:
        "Streamlit-based AI Assistant using Google Gemini and Stable Diffusion XL from OctoAI for chatbot interaction, image captioning, and text-to-image generation",
      link: {
        label: "github.com",
        href: "",
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
      title: "AI In Agriculture - A Social Engineering Perspective",
      techStack: ["Research Paper", "Python", "Kaggle", "Neural Networks", "Tensorflow", "scikit-learn", "OpenCV", "Pandas"],
      description:
        "Demonstrates the effectiveness of CNN and VGG16 over other traditional classification techniques.",
      link: {
        label: "ai-irrigation",
        href: "",
      },
    },
    {
      title: "Gemini Chat-n-Vision Assistant",
      techStack: ["Side Project", "ML", "Python", "Google Gemini", "SDXL", "Streamlit", "OctoAI"],
      description:
        "Streamlit-based AI Assistant using Google Gemini and Stable Diffusion XL from OctoAI for chatbot interaction, image captioning, and text-to-image generation",
      link: {
        label: "github.com",
        href: "https://github.com/RiddhiRaj/gemini-sdxl",
      },
    },
    {
      title: "CV Porfolio",
      techStack: ["TypeScript", "React", "Tailwind CSS", "shadcn-ui", "Nextjs"],
      description:
        "This very website that you are looking at right now.👀",

      link: {
        label: "",
        href: "",
      },
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
