import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [isAvailableToday, setIsAvailableToday] = useState(false);

  const getTodayDayName = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  useEffect(() => {
    
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);

    const fetchDoctor = async () => {
      try {
        const response = await fetch('/doctor.json');
        if (!response.ok) {
          throw new Error('Failed to fetch doctors data');
        }
        const data = await response.json();
        
        const selectedDoctor = data.find(doc => 
          doc.id === parseInt(id) || doc.detailsRoute === `/doctors/${id}`
        );
        
        if (!selectedDoctor) {
          toast.error('Doctor not found');
          navigate('/', { replace: true });
          return;
        }
        
        setDoctor(selectedDoctor);
        
        const today = getTodayDayName();
        const availableToday = selectedDoctor.availability ? 
          selectedDoctor.availability.includes(today) : 
          ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(today);
        setIsAvailableToday(availableToday);
        
      } catch (error) {
        console.error('Error fetching doctor details:', error);
        toast.error('Error loading doctor details');
        navigate('/', { replace: true });
      } finally {
        setLoading(false);
      }
    };
    
    fetchDoctor();
  }, [id, navigate]);

  const hasBookedThisDoctor = () => {
    return bookings.some(booking => booking.doctorId === doctor.id);
  };

  const handleBookAppointment = () => {
    if (!doctor) return;
    
    
    if (hasBookedThisDoctor()) {
      toast.error(`You already have an appointment with Dr. ${doctor.name}`);
      return;
    }
    
    const newBooking = {
      id: Date.now(),
      doctorId: doctor.id,
      doctorName: doctor.name,
      doctorImage: doctor.image,
      education: doctor.education,
      speciality: doctor.speciality,
      fee: doctor.fee || 'Taka 275',
      bookingDate: new Date().toISOString(),
    };
    
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    
    toast.success(`Appointment booked with Dr. ${doctor.name}`);
    
    navigate('/my-bookings');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-bold text-red-600">Doctor not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">Doctor's Profile Details</h1>
        <p className="text-center text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Est volutpat non tempus amet et. Aliquam sed elit tempus in magna. Quis diam tempus facilisis nisi interdum vulputate diam dignissim volutpat.
        </p>
      </div>
      
      {/* Info Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          <div className="md:w-1/3">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800">{doctor.name}</h2>
            <p className="text-gray-600 mb-2">{doctor.education}</p>
            <p className="text-blue-600 mb-3">{doctor.speciality}</p>
            
            <div className="flex items-center mb-3">
              <FaMapMarkerAlt className="text-gray-500 mr-2" />
              <span className="text-gray-700">
                Working at: {doctor.workplace || 'TMSS Medical College & Rafatullah Community Hospital, Bogura'}
              </span>
            </div>
            
            <div className="mb-3">
              <span className="text-gray-700">Reg No: {doctor.registrationNumber}</span>
            </div>
            
            <div className="mb-4">
              <span className="font-medium text-black">Consultation Fee: </span>
              <span className="text-black font-medium">{doctor.fee || 'Taka 275'}</span>
              <span className="text-gray-600"> (incl. VAT per consultation)</span>
            </div>
            
            {/* Avaiability */}
            <div className="mb-4">
              <h3 className="font-medium mb-2 text-black">Availability</h3>
              <div className="flex flex-wrap gap-2">
                {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => {
                  const isAvailable = doctor.availability ? doctor.availability.includes(day) : index < 5;
                  return (
                    <span 
                      key={day} 
                      className={`px-3 py-1 rounded-full text-sm ${
                        isAvailable ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {day}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/*  Booking Card */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-3xl font-bold mb-4 text-center text-black">Book an Appointment</h3>
        
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h4 className="font-medium text-black">Availability</h4>
            <span className={`px-3 py-1 rounded-full text-sm ${
              isAvailableToday ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}>
              {isAvailableToday ? 'Doctor Available Today' : 'Doctor Unavailable Today'}
            </span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 bg-yellow-50 p-4 rounded-lg">
            <FaCalendarAlt className="text-yellow-500" />
            <p className="text-yellow-700">
              Booking stays effective until you cancel your appointment. We appreciate you updating your appointment status.
            </p>
          </div>
        </div>
        
        <button 
          onClick={handleBookAppointment}
          disabled={!isAvailableToday}
          className={`w-full py-3 px-4 rounded text-white font-medium text-center ${
            isAvailableToday ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;