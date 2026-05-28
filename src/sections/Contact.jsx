import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-6xl">
          
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-5 flex flex-col space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="w-12 h-12 shrink-0 glass text-primary rounded-full flex items-center justify-center text-xl shadow-sm">
                <FiMail />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Email</h4>
                <a href="mailto:sankeerthanakoleti@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                  sankeerthanakoleti@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="w-12 h-12 shrink-0 glass text-primary rounded-full flex items-center justify-center text-xl shadow-sm">
                <FiMapPin />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">Location</h4>
                <p className="text-slate-600 dark:text-slate-400">Chennai, India</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex space-x-4">
              <a href="https://github.com/KoletiSankeerthana" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white rounded-full flex items-center justify-center text-xl transition-all shadow-sm">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/sankeerthana-koleti" target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass text-slate-600 dark:text-slate-300 hover:bg-secondary hover:text-white rounded-full flex items-center justify-center text-xl transition-all shadow-sm">
                <FiLinkedin />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white" placeholder="Project Inquiry" />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none dark:text-white" placeholder="Hello Sankeerthana..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg">
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
