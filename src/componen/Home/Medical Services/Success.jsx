import { useState } from 'react';
import CountUp from 'react-countup';
import SuccessData from '../../../data/ServicesData';

const SuccessSection = () => {
  const [data] = useState(SuccessData);
  
  return (
    <div className="py-16 bg-white px-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">We Provide Best Medical Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of medical professionals is committed to providing exceptional healthcare services to our patients.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">
                <CountUp end={item.number} duration={2.5} />
              </div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessSection;

