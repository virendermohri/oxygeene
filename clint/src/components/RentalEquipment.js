'use client';
import React from 'react';
import { FaHeartbeat, FaWheelchair, FaProcedures, FaLungs } from 'react-icons/fa';

const equipments = [
  {
    name: 'Oxygen Cylinder',
    icon: <FaLungs size={28} />,
    description: 'Medical-grade oxygen for home use.',
    priceRange: '₹400 - ₹600/day',
  },
  {
    name: 'Wheelchair',
    icon: <FaWheelchair size={28} />,
    description: 'Comfortable manual wheelchair for patients.',
    priceRange: '₹150 - ₹300/day',
  },
  {
    name: 'Hospital Bed',
    icon: <FaProcedures size={28} />,
    description: 'Adjustable hospital bed for home care.',
    priceRange: '₹500 - ₹800/day',
  },
  {
    name: 'Cardiac Monitor',
    icon: <FaHeartbeat size={28} />,
    description: 'Track vitals for critical care.',
    priceRange: '₹1000 - ₹1500/day',
  },
];

const RentalEquipment = () => {
  return (
    <div className="px-4 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        Available Rental Equipment
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {equipments.map((eq, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition-all duration-300"
          >
            <div className="text-green-600 mb-3">{eq.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{eq.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{eq.description}</p>
            <p className="text-sm font-medium text-black">Rent: {eq.priceRange}</p>
            <button
              onClick={() => alert(`Requesting ${eq.name}`)}
              className="mt-3 bg-green-700 text-white py-1.5 px-4 rounded hover:bg-green-800 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RentalEquipment;
