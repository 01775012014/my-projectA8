
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 mt-12">
      <div className="container mx-auto px-4">
        
        <div className="flex justify-center mb-6">
          <Link to="/" className="flex items-center gap-2">
            <img className='h-10' src="https://i.postimg.cc/qMKpGGzy/logo.png" alt="" />
            <span className="text-2xl font-bold text-blue-600">Phudu</span>
          </Link>
        </div>

        
        <div className="flex justify-center gap-8 mb-6">
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

       
        <div className="flex justify-center gap-4">
          <a
            href="https://facebook.com/yourprofile"
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
          >
            <FaFacebook className="text-blue-600" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
          >
            <FaTwitter className="text-blue-400" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
          >
            <FaLinkedin className="text-blue-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;