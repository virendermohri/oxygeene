import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        About CareKwik
      </h1>

      <p className="text-lg mb-6 leading-relaxed text-gray-700 text-center max-w-2xl mx-auto">
        CareKwik is India’s emerging health super app — built to connect families with trusted, verified caretakers and medical help, anytime, anywhere. From elder care and nursing to physiotherapy and post-surgery support, we bring personalized care right to your doorstep.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">🚀 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To redefine home healthcare in India through technology, compassion, and accessibility. We’re on a mission to empower families in Tier-2 and Tier-3 cities with fast, reliable, and affordable health services at home.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">🔍 Why CareKwik?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>100% Verified & Skilled Caretakers</li>
            <li>Choose by budget, experience, language & location</li>
            <li>Fast bookings with hospital & doctor partnerships</li>
            <li>24/7 customer care & emergency support</li>
            <li>Transparent pricing, real-time updates</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">💡 Why We Started</h2>
        <p className="text-gray-700 leading-relaxed">
          CareKwik was born from a real family need — and that need turned into a vision. We aim to bridge the healthcare gap with a platform that puts families first. With tech at its core and care at its heart, CareKwik is designed to be India’s most human healthtech brand.
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 italic">“Instant care, anytime, anywhere — powered by CareKwik.”</p>
      </div>
    </div>
  );
};

export default AboutPage;
