import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar } from 'react-icons/fi';

const education = [
  {
    degree: "B.Tech in Computing and Data Science",
    institution: "Sai University, Chennai, Tamil Nadu",
    date: "Aug 2023 – May 2027",
    score: "CGPA: 8.07",
    icon: <FiBook />
  },
  {
    degree: "Intermediate / High School",
    institution: "Prior Education Details",
    date: "Completed before 2023",
    score: "Excellent Record",
    icon: <FiAward />
  }
];

const Education = () => {
  return (
    <section id="education" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Education</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        <div className="w-full max-w-4xl">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl mb-6 flex flex-col md:flex-row gap-6 items-start md:items-center border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-primary to-secondary opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl shadow-sm">
                {edu.icon}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-2">{edu.institution}</h4>
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
                  <div className="flex items-center bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                    <FiCalendar className="mr-2" />
                    {edu.date}
                  </div>
                  <div className="flex items-center bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full">
                    {edu.score}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
