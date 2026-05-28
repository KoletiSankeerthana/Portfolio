import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-white/10 mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
            Sankeerthana Koleti
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} · All rights reserved.
          </p>
        </div>

        {/* FIX 4: All social links use <a> with correct URLs — no React Router Link */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/KoletiSankeerthana"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-lg"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/koleti-sankeerthana-a093612a4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-lg"
          >
            <FiLinkedin />
          </a>
          <a
            href="mailto:sankeerthanakoleti@gmail.com"
            aria-label="Email"
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-lg"
          >
            <FiMail />
          </a>
        </div>

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-md"
          aria-label="Back to top"
        >
          <FiArrowUp className="text-xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
