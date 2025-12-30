import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Riddhi Raj Ghosh",
  initials: "RRG",
  location: "India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  about:
    "Engineer 💻 ● Developer 🧑🏻‍💻 ● Space Enthusiast 🪐 ● Trying to create things which create value for people ",
  summary:
    "CS AI/ML engineering graduate (Class of 2025) at IEM, Newtown [prev. UEM, Kolkata] with an insatiable curiosity for emerging tech & their impact on our world. My passion for these subjects extends to various domains, with a particular fascination for Machine Learning & Space Exploration. I eagerly seek opportunities to engage in meaningful discussions & aspire to contribute to development & research endeavors in these fields. Open to collaborations & new opportunities!",

  avatarUrl: "https://i.postimg.cc/qM879K42/rrg.jpg",
  personalWebsiteUrl: "https://riddhiraj.in/",
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
      school: "University of Engineering & Management, Kolkata",
      degree: "B.Tech. → Computer Science Engineering specializing in Artificial Intelligence & Machine Learning",
      start: "2021",
      end: "2025",
    },
    {
      school: "The Modern Academy, Kolkata",
      degree: "Higher Secondary Education (10+2) → specializing in Science with Computer Science & Mathematics as major subjects",
      start: "2008",
      end: "2021",
    },
    
  ],
  work: [
    {
      company: "PCBL (TN) Ltd.",
      link: "",
      badges: ["Full-time", "On-site"],
      title: "Graduate Engineer Trainee - Smart Factory",
      // logo: logo,
      start: "Nov 2025",
      end: "Dec 2025",
      description:
        "• Gained hands-on operational exposure to DCS (Distributed Control System), field instrumentation, and OT infrastructure, including server room, network topology and plant-wide automation workflows.\n• Conduct predictive maintenance using Emerson & SKF vibration sensors on motors, fans and rotating equipment, analyzing DE/NDE vibration signatures to assess asset health and prevent downtime.\n• Supported Smart Factory / Industry 4.0 initiatives by understanding data flow from sensors → DCS → OT servers, enabling future projects in digital monitoring and equipment health analytics.\n• Worked across CB and CPP units, learning end-to-end process operations, interlocks, equipment behavior, and safety systems to integrate operational knowledge with upcoming smart-automation solutions.",
    },
    {
      company: "Calcutta Electric Supply Corporation Ltd.",
      link: "",
      badges: ["Intern", "On-site"],
      title: "Java Developer",
      // logo: logo,
      start: "June 2023",
      end: "July 2023",
      description:
        "Engineered a scalable system for Meter Inspection, streamlining data collection & analysis processes. Used Oracle databases to efficiently manage & store critical data, ensuring data integrity & reliability, with Spring Boot to enhance system performance, optimize resource utilization, & simplify application deployment",
    },
    
    {
      company: "ISRO",
      link: "https://www.isro.gov.in",
      badges: ["Remote"],
      title: "Online Training Programme",
      start: "July 2023",
      end: "August 2023",
      description: "Explored the significance and history of space research and exploration, & ISRO's role in it; astrophysical principles,including celestial phenomena, cosmic structures, & the behavior of matter & energy in the universe & delved into astrochemistry, exploring the chemical composition of cosmic objects.",
    },
  ],
  skills: [
    "HTML","CSS","JavaScript","C","Python","Java",
    "Latex","Markdown","Blender","Git",
    "HF Transformers","Numpy","Panda","Tensorflow", "Keras", "PyTorch", "OpenCV","OpenAI Gynasium","Streamlit","Groq","Matplotlib","Graphviz","Linux",
    "Bootstrap","Tailwind CSS","Sass","Springboot","Flask","React","Next.js","TypeScript","Vite",
    "MySql","Oracle","Node.js","Conda",
    
  ],
  projects: [
    {
      title: "Lunar Lander with NEAT",
      techStack: ["Python","miniconda","NEAT","OpenAI Gymnasium","Matplotlib","Graphviz","Reinforcement Learning"],
      description: "Neuroevolution algorithm (NEAT) to solve the Lunar Lander problem in OpenAI's Gymnasium environment, essentially using Reinforcement Learning to train a neural network to land a spacecraft on the moon",
      // logo:
      link: {
        label: "LunarLander",
        href: "https://github.com/RiddhiRaj/lunar-lander",
      },
    },
    {
      title: "Flight Delay Prediction using Spatio-Temporal Graph Attention Network",
      techStack: ["Research Paper","Python","PyTorch","Google Colab","LSTM", "1D Conv","Graph Attention Networks"],
      description: "Research Paper: Novel deep learning architecture, ST-GAT, to enhance the accuracy of flight delay prediction by modeling both temporal trends and spatial dependencies between airports",
      // logo:
      link: {
        label: "ST-GAT",
        href: "",
      },
    },
    {
      title: "Adventure Atlas",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Simplex Noise", "Fractal Brownian Motion"],
      description: "A fantasy map generator that uses Simplex Noise algorithms and Fractal Brownian Motion to procedurally generate terrain maps with customizable themes, elevation, & moisture systems. Real-time canvas rendering, multiple biome themes (Classic, Volcanic, Arctic, Desert Oasis, Mystical), and export capabilities in PNG/SVG formats.",
      // logo:
      link: {
        label: "AdventureAtlas",
        href: "https://mapgen.riddhiraj.in/",
      },
    },
    {
      title: "Mars Calendar",
      techStack: ["Three JS","React","Vite","JavaScript", "CSS"],
      description: "A calendar web-app for Mars' showing events (like time, sol dates, etc.). Based on the Darian calender (24 months named after Sanskrit and Latin zodiac signs) and Mars Sol Date epoch proposed by NASA's Michael Allison.",
      // logo:
      link: {
        label: "MarsCalendar",
        href: "https://marscalendar.vercel.app/",
      },
    },
    {
      title: "Kanji Generator with Stable Diffusion",
      techStack: ["Python","HF Transformers","Diffusers","LoRA"],
      description: "Fine-tuned Stable Diffusion v1.4 using LoRA for generating Kanji (a system of Japanese writing using Chinese characters) characters based on English definitions",
      // logo:
      link: {
        label: "KanjiGenerator",
        href: "https://github.com/RiddhiRaj/kanji-generator",
      },
    },
    {
      title: "Multi-Agent Debate using TinyLlama",
      techStack: ["LLMs","TinyLlama 1.1B","PyTorch","Python","Transformers", "GSM8K", "Matplotlib"],
      description: "Multi-agent debate system using TinyLlama-1.1B-Chat and the GSM8K dataset done in Jupyter Notebook",
      // logo:
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Char-Level Language Model w/ RoPE",
      techStack: ["Python","PyTorch","Transformers","NanoGPT","RoPE","enwik8"],  
      description: "Enhanced a GPT-style transformer with Rotary Position Embeddings for character-level language modeling, trained on the enwik8 dataset and compared against a baseline",
      // logo:
      link: {
        label: "RotaryCharTransformer",
        href: "https://github.com/RiddhiRaj/RotaryCharTransformer",
      },
    },
    {
      title: "Personal Portfolio",
      techStack: ["React","Sanity","Vite","Sass","Netlify"],
      description: "My peronsal portfolio website built with React and Sanity",
      // logo:
      link: {
        label: "riddhiraj.netlify.app",
        href: "https://riddhiraj.netlify.app/",
      },
    },
    {
      title: "GroqChat with Llama3-8B",
      techStack: ["RAG", "ML", "Python", "Llama3-8B", "Groq", "Streamlit", "Langchain", "Huggingface Transformers","FAISS"],
      description:
        "Streamlit-based RAG system as a document assistant, with Groq API’s Llama3-8B, HuggingFace’s sentence-transformers for embedding, & LangChain with FAISS for efficient vector retrieval.",
      link: {
        label: "github.com",
        href: "https://github.com/RiddhiRaj/groq-rag",
      },
    },
    {
      title: "Finetuned Llama2 using LoRA and QLoRA",
      techStack: ["ML", "Python", "Llama2-7B", "LoRA", "QLoRA", "Google Colab", "Supervised Fine Tuning", "Transformer Reinforcement Learning"],
      description:
        "Streamlit-based AI Assistant using Google Gemini and Stable Diffusion XL from OctoAI for chatbot interaction, image captioning, and text-to-image generation",
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "AI Irrigation System",
      techStack: ["Python", "Flask", "Tailwind CSS", "JS", "pandas", "scikit-learn"],
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
      techStack: ["ML", "Python", "Google Gemini", "SDXL", "Streamlit", "OctoAI"],
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
      techStack: ["HTML", "CSS", "JS", "Github Pages"],
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
      techStack: ["HTML","CSS",],
      description:
        "A fun little cat website",
      link: {
        label: "riddhiraj.github.io",
        href: "https://riddhiraj.github.io/cats.html",
      },
    },
    {
      title: "Krypt",
      techStack: ["Solidity", "Smart Contracts", "Blockchain", "React", "Tailwind CSS", "Metamask"],
      description:
        "A website to upload files, share securely across the world using blockchain technology",
      link: {
        label: "rrg-krypt.netlify.app",
        href: "https://rrg-krypt.netlify.app/",
      },
    },
    {
      title: "Startup Name Generator",
      techStack: ["Flutter", "Dart"],
      description:
        "A website to generate startup names done by combining two words together",
      link: {
        label: "rrg-namegen.netlify.app",
        href: "https://rrg-namegen.netlify.app/",
      },
    },
  ],
} as const;
