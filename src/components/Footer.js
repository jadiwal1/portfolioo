import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-400">&copy; {currentYear} Deepak Jadiwal. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-1">
            Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">Next.js</a> & <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">Tailwind CSS</a>
          </p>
        </div>
        <div className="flex gap-6 text-2xl">
          <a href="https://www.linkedin.com/in/deepak-jadiwal-b3225a228/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors"><FaLinkedin /></a>
          <a href="https://github.com/Deepak-Jadiwal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors"><FaGithub /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;