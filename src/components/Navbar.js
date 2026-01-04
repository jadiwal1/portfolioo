export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <ul className="flex justify-center gap-8 py-4 font-medium">
        <li><a href="/" className="hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}
