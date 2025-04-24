import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/error.webp'; 

const ErrorPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col bg-amber-50 items-center justify-center min-h-[70vh] px-4 py-12">
      <img 
        src={errorImg || 'https://i.postimg.cc/kG75Fz8L/404.png'} 
        alt="Page not found" 
        className="w-full max-w-md mb-8"
      />
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Oops! Page Not Found</h1>
      <p className="text-gray-600 text-center max-w-md mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;