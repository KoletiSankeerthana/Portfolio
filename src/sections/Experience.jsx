import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    role: "AI Intern",
    company: "Altrosyn",
    date: "Jun 2026 – Jul 2026",
    location: "Remote",
    description: [
      "Developed an AI-powered Enterprise Compliance & Audit Intelligence Platform using RAG, LangGraph, and Gemini 2.5 Flash.",
      "Implemented multi-agent workflows for compliance analysis, risk assessment, and automated audit report generation.",
      "Integrated MCP-based Google Drive and Notion synchronization with Qdrant Cloud for semantic document retrieval.",
      "Integrated AI services into a React, FastAPI, and Supabase application with JWT-based authentication."
    ]
  },
  {
    role: "AI/ML Intern",
    company: "AICTE (Live Demo)",
    date: "May 2025 – Aug 2025",
    location: "Remote",
    description: [
      "Built and optimized regression models using Python libraries including pandas, numpy, and scikit-learn to predict employee salaries.",
      "Performed data preprocessing, feature engineering, and model evaluation to enhance prediction accuracy.",
      "Gained practical exposure to real-world HR analytics applications by analyzing workforce data and deriving insights.",
      "Documented model performance metrics and collaborated in refining prediction strategies to improve reliability."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-16"></div>

        <div className="w-full max-w-4xl relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`relative flex flex-col md:flex-row items-center justify-between mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-slate-900 z-10 shadow-md"></div>
              
              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
              
              {/* Content Card */}
              <div className="w-full pl-8 md:pl-0 md:w-5/12">
                <div className="glass p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-white/10 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center text-primary mb-2">
                    <FiBriefcase className="mr-2" />
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <div className="flex items-center">
                      <FiCalendar className="mr-1" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FiMapPin className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-outside ml-5 text-slate-600 dark:text-slate-300 space-y-2 text-sm">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
