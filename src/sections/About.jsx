import saiUniversityPic from '../assets/sai_university.png';
import { motion } from 'framer-motion';
import { FiBookOpen, FiTarget, FiCode } from 'react-icons/fi';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900/50">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Campus Image Column */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex justify-center">
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl group border border-slate-200 dark:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
              <img 
                src={saiUniversityPic} 
                alt="Sai University Campus" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white font-bold text-xl">Sai University</h3>
                <p className="text-white/80 text-sm">B.Tech 2023–2027</p>
              </div>
            </div>
          </motion.div>

          {/* Text and Cards Column */}
          <motion.div variants={itemVariants} className="lg:col-span-8 flex flex-col space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I’m a <strong>Computing and Data Science</strong> undergraduate at Sai University, passionate about <strong>Artificial Intelligence, Data Science, and Software Development</strong>. I enjoy solving problems, working with data, and building practical applications that address real-world challenges.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              With a foundation in full-stack development and a growing focus on AI and machine learning, I’m continuously learning through hands-on projects and exploring new technologies. I’m always excited to turn ideas into useful solutions and grow as a developer.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="glass p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-2xl mb-4">
                  <FiBookOpen />
                </div>
                <h3 className="font-bold text-lg mb-2">Academics</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">B.Tech in Computing and Data Science at Sai University.</p>
              </div>

              <div className="glass p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center text-2xl mb-4">
                  <FiCode />
                </div>
                <h3 className="font-bold text-lg mb-2">Core Interests</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">AI, Machine Learning, Data Science, Web Development, NLP, and LLMs.</p>
              </div>

              <div className="glass p-6 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center text-2xl mb-4">
                  <FiTarget />
                </div>
                <h3 className="font-bold text-lg mb-2">Career Goals</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">To secure impactful internships and roles where I can build intelligent applications.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
