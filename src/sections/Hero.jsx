import profilePic from '../assets/profile.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';
import { FaPython, FaReact, FaBrain, FaDatabase } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden section-padding pt-32">
      
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full z-10">
        
        {/* Text Content */}
        <motion.div 
          className="w-full lg:w-3/5 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6 shadow-sm">
            Open to Internships & Collaborations
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I'm <br className="lg:hidden" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Sankeerthana Koleti</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
            B.Tech Student · Computing & Data Science · AI Enthusiast
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-10 text-base leading-relaxed">
            I’m a Computing and Data Science undergraduate passionate about Artificial Intelligence, Machine Learning, Data Science, and software development. I enjoy working with NLP, LLMs, and AI-driven applications while also building full-stack solutions to bring ideas into practice. Currently seeking internship opportunities where I can apply my skills, build meaningful solutions, and continue learning.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer bg-primary hover:bg-blue-600 text-white px-7 py-3 rounded-xl font-medium transition-all shadow-lg shadow-primary/30 flex items-center group">
              View Projects
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* FIX 1: Direct download of resume PDF */}
            <a
              href="/resume.pdf"
              download="Sankeerthana_Koleti_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer glass hover:bg-primary/10 border border-slate-300 dark:border-white/10 px-7 py-3 rounded-xl font-medium transition-all flex items-center text-slate-800 dark:text-white group"
            >
              Download Resume
              <FiDownload className="ml-2 group-hover:scale-110 transition-transform" />
            </a>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer glass hover:bg-secondary/10 border border-slate-300 dark:border-white/10 px-7 py-3 rounded-xl font-medium transition-all flex items-center text-slate-800 dark:text-white">
              Contact Me
              <FiMail className="ml-2" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Illustration / Image Area */}
        <motion.div 
          className="w-full lg:w-2/5 mt-16 lg:mt-0 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 animate-pulse"></div>
            
            <img 
              src={profilePic} 
              alt="Sankeerthana Koleti" 
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl z-10 relative"
            />
            
            {/* Floating Icons */}
            <motion.div variants={floatingVariants} animate="animate" className="absolute -top-4 -left-4 glass p-4 rounded-2xl shadow-lg z-20 text-blue-500 text-3xl">
              <FaReact />
            </motion.div>
            <motion.div variants={floatingVariants} animate="animate" style={{animationDelay: '1s'}} className="absolute top-1/4 -right-8 glass p-4 rounded-2xl shadow-lg z-20 text-yellow-500 text-3xl">
              <FaPython />
            </motion.div>
            <motion.div variants={floatingVariants} animate="animate" style={{animationDelay: '2s'}} className="absolute bottom-10 -left-6 glass p-4 rounded-2xl shadow-lg z-20 text-purple-500 text-3xl">
              <FaBrain />
            </motion.div>
            <motion.div variants={floatingVariants} animate="animate" style={{animationDelay: '3s'}} className="absolute -bottom-4 right-10 glass p-4 rounded-2xl shadow-lg z-20 text-blue-400 text-3xl">
              <FaDatabase />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
