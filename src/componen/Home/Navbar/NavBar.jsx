
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-12 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
       
        <Link to="/" className="flex items-center gap-2">
        <img className='h-10' src="https://i.postimg.cc/qMKpGGzy/logo.png" alt="" />
          <span className="text-2xl font-bold text-blue-600">Phudu</span>
        </Link>

        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/my-bookings" className="text-gray-700 hover:text-blue-600">
            My Bookings
          </Link>
          <Link to="/blogs" className="text-gray-700 hover:text-blue-600">
            Blogs
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </div>

        
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Emergency
        </Link>

        
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-2">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/my-bookings"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
            onClick={toggleMenu}
          >
            My Bookings
          </Link>
          <Link
            to="/blogs"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
            onClick={toggleMenu}
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
