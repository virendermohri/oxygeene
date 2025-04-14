'use client';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Gurgaon, India",
    feedback:
      "Oxygeene helped me find a nurse for my father within hours. The service was professional and extremely comforting.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ravi Mehta",
    location: "Delhi, India",
    feedback:
      "The caretaker we got through Oxygeene was kind and skilled. Highly recommended for elder care at home!",
    image:
      "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "Sunita Deswal",
    location: "Panipat, India",
    feedback:
      "I was worried about renting medical equipment, but Oxygeene made it seamless and affordable.",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-10">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={"https://www.pba.edu/wp-content/uploads/2023/05/academics-physical-science-female-student-indoors-pba-palm-beach-atlantic-university-1200x800-1.jpg"}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <FaQuoteLeft className="text-green-600 text-xl mb-2" />
            <p className="text-gray-700 text-sm italic mb-4">"{t.feedback}"</p>
            <h4 className="font-semibold text-gray-900">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
