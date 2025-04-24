import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaRegTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MyBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  
  useEffect(() => {
    
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);
  
  const handleCancelAppointment = (bookingId) => {
    const updatedBookings = bookings.filter(booking => booking.id !== bookingId);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    toast.success('Appointment cancelled successfully');
  };
  
  
  const chartData = bookings.map(booking => ({
    name: booking.doctorName.split(' ')[1] || booking.doctorName, 
    fee: parseInt(booking.fee.replace(/[^\d]/g, ''), 10) || 0 
  }));
  
  if (bookings.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">You have no appointments</h2>
        <p className="text-gray-600 mb-8">Schedule an appointment with one of our doctors.</p>
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">My Appointments</h1>
      
      
      {bookings.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-center text-gray-600">Appointment Fee Analysis</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `${value} Taka`} />
                <Bar dataKey="fee" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
      
      {/* Bookings list */}
      <div className="space-y-6">
        {bookings.map((booking) => (
          <div 
            key={booking.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/*  Image */}
                <div className="md:w-1/4">
                  <img 
                    src={booking.doctorImage} 
                    alt={booking.doctorName} 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                
                {/* Booking  */}
                <div className="md:w-3/4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{booking.doctorName}</h3>
                      <p className="text-gray-600">{booking.education}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-blue-600">{booking.fee}</p>
                      <p className="text-gray-500 text-sm">Consultation Fee</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-gray-700"><span className="font-medium">Speciality:</span> {booking.speciality}</p>
                    <p className="text-gray-700">
                      <span className="font-medium">Booking Date:</span> {new Date(booking.bookingDate).toLocaleDateString()}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleCancelAppointment(booking.id)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
                  >
                    <FaRegTrashAlt /> Cancel Appointment
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;