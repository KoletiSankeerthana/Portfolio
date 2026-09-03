import { motion } from 'framer-motion';
import { FiStar, FiActivity, FiShield, FiCpu } from 'react-icons/fi';

const achievements = [
  {
    title: "Multi-Domain Support Triage Agent",
    description: "Built a Multi-Domain Support Triage Agent as part of HackerRank Orchestrate (May 2026), designed to classify and route user queries across different domains using AI-agent concepts.",
    icon: <FiCpu />,
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/"
  },
  {
    title: "Assistant Head Girl & Head Girl",
    description: "Served for two consecutive years, leading student initiatives and coordinating major school events.",
    icon: <FiStar />
  },
  {
    title: "State-Level Sports Participant",
    description: "Represented and competed in State-Level Chess, Ball-Badminton, and Softball competitions.",
    icon: <FiActivity />
  },
  {
    title: "NCC 'A' Certificate Holder",
    description: "Completed the prestigious National Cadet Corps training, developing discipline, character, and leadership skills.",
    icon: <FiShield />
  }
];

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Leadership & <span className="text-primary">Achievements</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl text-center border border-slate-200 dark:border-white/10 shadow-lg group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-16 h-16 mx-auto bg-gradient-to-tr from-primary to-secondary text-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-md transform group-hover:rotate-6 transition-transform duration-300">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">
                {achievement.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
