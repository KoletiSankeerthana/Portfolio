import { motion } from 'framer-motion';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certifications = [
  {
    title: "Ethical Hacking",
    issuer: "NPTEL",
    category: "Security"
  },
  {
    title: "Python Programming Language",
    issuer: "Udemy",
    category: "Programming"
  },
  {
    title: "User Centric Human Computer Interaction",
    issuer: "NPTEL",
    category: "UI/UX & HCI"
  },
  {
    title: "Affective Computing",
    issuer: "NPTEL",
    category: "AI / Computing"
  }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Licenses & <span className="text-primary">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center text-2xl mb-6 shadow-sm">
                <FiAward />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white leading-tight">
                {cert.title}
              </h3>
              
              <div className="mt-auto pt-4 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">Issuer</span>
                  <span className="text-md font-medium text-slate-700 dark:text-slate-200">{cert.issuer}</span>
                </div>
                
                <button className="text-slate-400 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                  <FiExternalLink className="text-xl" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
