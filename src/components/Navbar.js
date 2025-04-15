import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Jaya Sakthi</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/projects" className="hover:text-gray-200">Projects</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
