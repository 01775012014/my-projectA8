// doctor card degain

import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  const { id, name, image, education, speciality, experience, registrationNumber } = doctor;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="h-64 w-full object-cover object-center"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">Available</span>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">{experience}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-600">{education}, {speciality}</p>
        <div className="flex items-center mt-2">
          <span className="text-sm text-gray-600 mr-1">Reg No:</span>
          <span className="text-sm text-gray-600">{registrationNumber}</span>
        </div>
        <Link
          to={`/doctors/${id}`}
          className="block text-center mt-4 text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;