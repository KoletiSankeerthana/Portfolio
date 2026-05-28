import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';

const Resume = () => {
  return (
    <section id="resume" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Resume</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-3xl glass p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl text-center"
        >
          <div className="w-20 h-20 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
            <FiFileText />
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">
            Want to know more about my experience?
          </h3>
          
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
            Download my resume to get the full details about my academic background, technical skills, projects, and leadership roles.
          </p>
          
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            <FiDownload className="mr-3 text-xl" />
            Download Resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
