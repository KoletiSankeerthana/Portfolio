import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Full-Stack MERN E-Commerce Platform",
    description: "Built a production-ready full-stack E-Commerce platform with JWT authentication, role-based Admin Dashboard, cart, checkout, payment integration, search, filtering, and order tracking.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Render", "Vercel"],
    github: "https://github.com/KoletiSankeerthana",
    live: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Emotion & Hate Speech Detection Web App",
    description: "Designed a transformer-based NLP web application to detect emotions, analyze sentiment, and identify hate speech from user text input.",
    tech: ["Python", "Hugging Face Transformers", "PyTorch", "Streamlit", "Plotly", "NumPy", "Pandas"],
    github: "https://github.com/KoletiSankeerthana",
    live: "#",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Constitution Chatbot – RAG-based AI",
    description: "Developed a Retrieval-Augmented Generation (RAG) system to answer Indian Constitution queries using LLM-powered contextual retrieval with vector storage in ChromaDB.",
    tech: ["Python", "LangChain", "Groq API", "HuggingFace Embeddings", "ChromaDB"],
    github: "https://github.com/KoletiSankeerthana",
    live: "#",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Speaker Identification using MFCC",
    description: "Built a speaker recognition system using MFCC feature extraction and trained SVM, KNN, and Random Forest classifiers with full evaluation metrics.",
    tech: ["Python", "Librosa", "Scikit-learn", "Audio Signal Processing"],
    github: "https://github.com/KoletiSankeerthana",
    live: "#",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-primary hover:text-white transition-colors"
                  >
                    <FiGithub className="text-xl" />
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-3 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-secondary hover:text-white transition-colors"
                  >
                    <FiExternalLink className="text-xl" />
                  </a>
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
