export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <ul className="flex justify-center gap-6 md:gap-8 py-4 font-medium text-gray-700">
        <li><a href="#" className="hover:text-indigo-600 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-indigo-600 transition-colors">About</a></li>
        <li><a href="#experience" className="hover:text-indigo-600 transition-colors">Experience</a></li>
        <li><a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a></li>
        <li><a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a></li>
        <li><a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
}
