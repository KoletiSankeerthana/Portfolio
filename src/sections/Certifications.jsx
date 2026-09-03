import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';

const certifications = [
  {
    title: "AI & Machine Learning",
    issuer: "Edunet Foundation",
    date: "Aug 2025",
    category: "AI / ML",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Jul 2025",
    category: "AI",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    date: "Jul 2025",
    category: "Gen AI",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    date: "Jul 2025",
    category: "AI",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "Ethical Hacking",
    issuer: "NPTEL",
    date: "Nov 2025",
    category: "Security",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "Front-End Software Engineering Job Simulation",
    issuer: "Skyscanner (Forage)",
    date: "Jul 2025",
    category: "Software Engineering",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata Group (Forage)",
    date: "Jun 2025",
    category: "Data Analytics",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    date: "Jun 2025",
    category: "Data Analytics",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "Learn the Python Programming Language",
    issuer: "Udemy",
    date: "Jul 2025",
    category: "Programming",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM",
    date: "Jul 2025",
    category: "Cloud",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "User Centric Human Computer Interaction",
    issuer: "NPTEL",
    date: "2024",
    category: "UI/UX & HCI",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  },
  {
    title: "Affective Computing",
    issuer: "NPTEL",
    date: "2024",
    category: "AI / Computing",
    link: "https://www.linkedin.com/in/koleti-sankeerthana-a093612a4/details/certifications/"
  }
];

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const displayedCerts = showAll ? certifications : certifications.slice(0, 8);

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Licenses &amp; <span className="text-primary">Certifications</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {displayedCerts.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="glass p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center text-2xl mb-5 shadow-sm">
                <FiAward />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold mb-2 text-slate-800 dark:text-white leading-snug flex-grow">
                {cert.title}
              </h3>

              {/* Meta */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <FiCalendar className="shrink-0" />
                  <span>{cert.date}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-white/5">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {cert.issuer}
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View credential for ${cert.title}`}
                    className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline transition-colors opacity-0 group-hover:opacity-100"
                  >
                    View <FiExternalLink />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {certifications.length > 8 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-10 px-6 py-3 glass hover:bg-primary/10 border border-slate-300 dark:border-white/10 rounded-xl font-medium transition-all text-slate-800 dark:text-white shadow-sm"
          >
            {showAll ? "Show Less Certifications" : "View All Certifications (" + certifications.length + ")"}
          </button>
        )}
      </div>
    </section>
  );
};

export default Certifications;
