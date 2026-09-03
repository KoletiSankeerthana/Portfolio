import { motion } from 'framer-motion';
import { FiBook, FiAward, FiCalendar, FiStar } from 'react-icons/fi';

const education = [
  {
    degree: "B.Tech in Computing and Data Science",
    institution: "Sai University, Chennai, Tamil Nadu",
    date: "Aug 2023 – May 2027",
    icon: <FiBook />,
    iconBg: "bg-primary/10 text-primary"
  },
  {
    degree: "Intermediate Education",
    institution: "State Board",
    subtitle: "MPC – Mathematics, Physics, Chemistry",
    date: "2021 – 2023",
    score: "98%",
    scoreColor: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400",
    icon: <FiAward />,
    iconBg: "bg-secondary/10 text-secondary"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "SSC State Board",
    date: "2020 – 2021",
    score: "10/10 GPA",
    scoreColor: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400",
    icon: <FiStar />,
    iconBg: "bg-purple-500/10 text-purple-500"
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

        <div className="w-full max-w-4xl space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.01 }}
              className="glass p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-secondary opacity-40 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl"></div>

              {/* Icon */}
              <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${edu.iconBg}`}>
                {edu.icon}
              </div>

              {/* Content */}
              <div className="flex-grow min-w-0">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 leading-snug">
                  {edu.degree}
                </h3>
                {edu.subtitle && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{edu.subtitle}</p>
                )}
                <h4 className="text-base font-medium text-slate-600 dark:text-slate-300 mb-3">
                  {edu.institution}
                </h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium px-3 py-1 rounded-full">
                    <FiCalendar className="shrink-0" />
                    {edu.date}
                  </div>
                  {edu.score && (
                    <div className={`text-sm font-semibold px-3 py-1 rounded-full ${edu.scoreColor}`}>
                      {edu.score}
                    </div>
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

export default Education;
