import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-white/10 mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Sankeerthana Koleti
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0">
          <a href="https://github.com/KoletiSankeerthana" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-xl">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/sankeerthana-koleti" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors text-xl">
            <FiLinkedin />
          </a>
          <a href="mailto:sankeerthanakoleti@gmail.com" className="text-slate-400 hover:text-primary transition-colors text-xl">
            <FiMail />
          </a>
        </div>

        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-md"
        >
          <FiArrowUp className="text-xl" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
