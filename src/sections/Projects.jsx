import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Where Did I Keep It? – Offline Android App",
    description: "A privacy-focused, offline-first Android application built with Jetpack Compose, Kotlin, and Room Database to help users store, categorize, and locate everyday belongings using custom hierarchical locations, photos, and advanced search.",
    tech: ["Kotlin", "Android SDK", "Jetpack Compose", "Room DB", "MVVM", "Coroutines & Flow", "Material 3"],
    github: "https://github.com/KoletiSankeerthana/Find_Item",
    live: null,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Enterprise Compliance & Audit Intelligence Platform",
    description: "Developed an AI-powered enterprise compliance platform using Retrieval-Augmented Generation (RAG), LangGraph multi-agent orchestration, and MCP-based knowledge synchronization to automate compliance analysis, risk assessment, semantic search, and audit report generation.",
    tech: ["Python", "FastAPI", "React", "LangGraph", "LangChain", "Gemini 2.5 Flash", "Qdrant Cloud", "Supabase", "JWT", "MCP", "RAG"],
    github: "https://github.com/KoletiSankeerthana",
    live: null,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "SecureFlow AI – DevSecOps & Security Intelligence",
    description: "An AI-augmented security intelligence system designed for automated code vulnerability analysis, DevSecOps workflow security, and real-time threat detection using intelligent agentic LLM reasoning.",
    tech: ["Python", "LLMs", "DevSecOps", "Security Analysis", "React", "FastAPI", "AI Agents"],
    github: "https://github.com/shrinithisk/secureflow-ai",
    live: null,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Full-Stack MERN E-Commerce Platform",
    description: "A full-stack e-commerce web application built using the MERN stack, featuring authentication, role-based administration, product management, cart and checkout functionality, payment integration, order management, search, filtering, and responsive UI.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
    github: "https://github.com/KoletiSankeerthana/E_Commerce",
    live: "https://e-commerce-twt9.vercel.app/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Indian Constitution Chatbot – RAG AI Assistant",
    description: "An AI-powered chatbot that answers questions about the Constitution of India using Retrieval-Augmented Generation (RAG). The system retrieves relevant constitutional content from a PDF and uses a Large Language Model to generate context-aware answers.",
    tech: ["Python", "LangChain", "Groq API", "HuggingFace Embeddings", "ChromaDB"],
    github: "https://github.com/KoletiSankeerthana/Constitution_Chatbot",
    live: null,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Personal Expense Tracker Web App",
    description: "A web-based personal finance application built with Python, Streamlit, and SQLite that allows users to manage daily expenses, set budgets, and analyze spending patterns through summaries and category-based insights.",
    tech: ["Python", "Streamlit", "SQLite", "Pandas", "Plotly"],
    github: "https://github.com/KoletiSankeerthana/Expense_Tracker",
    live: "https://expensetracker-g7zeguupnkodzsm9fhuyge.streamlit.app/",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Speaker Identification using MFCC",
    description: "A speaker identification system that uses speech signal processing and machine learning techniques to extract Mel-Frequency Cepstral Coefficients (MFCCs) from speech recordings and identify speakers using machine-learning classifiers.",
    tech: ["Python", "Librosa", "Scikit-learn", "SVM / KNN / Random Forest", "Audio Signal Processing"],
    github: "https://github.com/KoletiSankeerthana/MFCC_Speaker_Recognition",
    live: null,
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Emotion & Hate Speech Detection Web App",
    description: "Designed a transformer-based NLP web application to detect emotions, analyze sentiment, and identify hate speech from user text input.",
    tech: ["Python", "Hugging Face Transformers", "PyTorch", "Streamlit", "Plotly", "Pandas"],
    github: "https://github.com/KoletiSankeerthana",
    live: null,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-slate-200 dark:border-white/10"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4 mt-auto">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary hover:text-white transition-colors"
                    >
                      <FiGithub className="text-xl" />
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="View Live Application"
                      className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-secondary hover:text-white transition-colors"
                    >
                      <FiExternalLink className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
