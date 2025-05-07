'use client';
import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Gurgaon, India",
    feedback:
      "CareKwik helped me find a nurse for my father within hours. The service was professional and extremely comforting.",
    image:
      "https://res.cloudinary.com/divlt5fqo/image/upload/v1746626443/1434464084-1187_1_cfxprf.png",
  },
  {
    name: "Ravi Mehta",
    location: "Delhi, India",
    feedback:
      "The caretaker we got through CareKwik was kind and skilled. Highly recommended for elder care at home!",
    image:
      "https://res.cloudinary.com/divlt5fqo/image/upload/v1746626591/average-height-in-men-in-india_900_bwjs3k.jpg",
  },
  {
    name: "Sunita Deswal",
    location: "Panipat, India",
    feedback:
      "I was worried about renting medical equipment, but CareKwik made it seamless and affordable.",
    image:
      "https://res.cloudinary.com/divlt5fqo/image/upload/v1746626506/e2d88306b280450d5ff98421db4296be_f6lxaf.jpg",
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
            <Image
            width={100}

            height={100}
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <FaQuoteLeft className="text-green-600 text-xl mb-2" />
            <p className="text-gray-700 text-sm italic mb-4">&#34;{t.feedback}&#34;</p>
            <h4 className="font-semibold text-gray-900">{t.name}</h4>
            <p className="text-sm text-gray-500">{t.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
