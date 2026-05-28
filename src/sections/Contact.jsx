import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) newErrors.subject = 'Please enter a subject.';
    if (!form.message.trim()) newErrors.message = 'Please write your message.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border transition-all outline-none dark:text-white placeholder-slate-400 dark:placeholder-slate-500 ${
      errors[field]
        ? 'border-red-400 focus:ring-2 focus:ring-red-400/50'
        : 'border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary/40 focus:border-primary'
    }`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900/50 relative">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-12"></div>

        {/* Success Toast */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl shadow-green-500/30"
            >
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <FiCheck className="text-lg" />
              </div>
              <div>
                <p className="font-bold text-sm">Message Sent!</p>
                <p className="text-xs text-white/80">I'll get back to you soon.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Let's Connect</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                I'm always open to discussing internship opportunities, interesting projects, or just a friendly chat about tech. Drop me a message and I'll respond as soon as I can.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="w-11 h-11 shrink-0 glass text-primary rounded-xl flex items-center justify-center text-lg shadow-sm">
                <FiMail />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-0.5">Email</h4>
                <a
                  href="mailto:sankeerthanakoleti@gmail.com"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors break-all"
                >
                  sankeerthanakoleti@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="w-11 h-11 shrink-0 glass text-primary rounded-xl flex items-center justify-center text-lg shadow-sm">
                <FiPhone />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-0.5">Phone</h4>
                <a
                  href="tel:+919182932559"
                  className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                >
                  +91 91829 32559
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-start space-x-4">
              <div className="w-11 h-11 shrink-0 glass text-primary rounded-xl flex items-center justify-center text-lg shadow-sm">
                <FiMapPin />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-0.5">Location</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Chennai, Tamil Nadu, India</p>
              </div>
            </motion.div>

            {/* FIX 4: Correct external social links — no React Router */}
            <motion.div variants={itemVariants} className="pt-2 flex space-x-3">
              <a
                href="https://github.com/KoletiSankeerthana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 glass text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white rounded-xl flex items-center justify-center text-lg transition-all shadow-sm"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/koleti-sankeerthana-a093612a4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 glass text-slate-600 dark:text-slate-300 hover:bg-secondary hover:text-white rounded-xl flex items-center justify-center text-lg transition-all shadow-sm"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:sankeerthanakoleti@gmail.com"
                aria-label="Send Email"
                className="w-11 h-11 glass text-slate-600 dark:text-slate-300 hover:bg-green-500 hover:text-white rounded-xl flex items-center justify-center text-lg transition-all shadow-sm"
              >
                <FiMail />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form — FIX 2, 6 */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <form
              className="glass p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-xl"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                    placeholder="Enter your name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      id="name-error"
                      className="text-xs text-red-400 mt-1.5"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    placeholder="Enter your professional email"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      id="email-error"
                      className="text-xs text-red-400 mt-1.5"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass('subject')}
                  placeholder="Regarding collaboration / internship opportunity"
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="subject-error"
                    className="text-xs text-red-400 mt-1.5"
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass('message')}
                  placeholder="Write your message here…"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    id="message-error"
                    className="text-xs text-red-400 mt-1.5"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center text-base gap-2 cursor-pointer"
              >
                <FiSend />
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
