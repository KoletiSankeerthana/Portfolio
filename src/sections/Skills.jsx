import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'C', 'R', 'Julia', 'SQL'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'AI & Machine Learning',
    skills: ['RAG', 'MCP (Model Context Protocol)', 'LangGraph', 'LangChain', 'Gemini 2.5 Flash', 'PyTorch', 'Scikit-learn', 'TensorFlow', 'HuggingFace', 'Groq API', 'NumPy', 'Pandas'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
    color: 'from-orange-400 to-red-500'
  },
  {
    title: 'Databases & Cloud',
    skills: ['Qdrant Cloud', 'Supabase', 'ChromaDB', 'MongoDB', 'SQLite', 'AWS (EC2, S3, IAM)', 'Linux'],
    color: 'from-green-400 to-emerald-600'
  },
  {
    title: 'MLOps & Deployment',
    skills: ['Docker', 'DVC', 'Streamlit', 'Vercel', 'Render', 'Git', 'GitHub'],
    color: 'from-indigo-400 to-blue-600'
  },
  {
    title: 'Tools & Soft Skills',
    skills: ['Excel', 'Leadership', 'Problem Solving', 'Team Collaboration', 'Communication'],
    color: 'from-yellow-400 to-orange-500'
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color} opacity-70 group-hover:opacity-100 transition-opacity`}></div>
              
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 text-sm font-medium rounded-full bg-slate-200/50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
