// data face 
import { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';

const DoctorsSection = () => {
  const [doctorsList, setDoctorsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch('/doctor.json');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors data');
        }
        const data = await response.json();
        setDoctorsList(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const displayedDoctors = showAll ? doctorsList : doctorsList.slice(0, 6);

  return (
    <div className="p-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Best Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it’s a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedDoctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
            {!showAll && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAll(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                  View All Doctors
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsSection;