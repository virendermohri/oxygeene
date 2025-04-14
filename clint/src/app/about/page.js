import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
        About Oxygeene
      </h1>

      <p className="text-lg mb-6 leading-relaxed text-gray-700 text-center max-w-2xl mx-auto">
        Oxygeene is India’s next-generation healthcare platform dedicated to
        connecting families with trained, trusted caretakers — right at home.
        Whether you need elder care, nursing assistance, physiotherapy, or
        post-surgery support, we’re here to make healthcare accessible, affordable,
        and compassionate.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">🌱 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To revolutionize the way healthcare is delivered at home by bridging the
            gap between medical professionals and families in need — especially in
            Tier-2 and Tier-3 cities of India. We aim to make healthcare services
            more personal, reliable, and technology-driven.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">🤝 Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Verified & Trained Caretakers</li>
            <li>Filter by budget, gender, experience & language</li>
            <li>Partnered with hospitals & trusted providers</li>
            <li>24/7 support for urgent requirements</li>
            <li>Transparent pricing & seamless bookings</li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">💡 Built with Purpose</h2>
        <p className="text-gray-700 leading-relaxed">
          Born out of a personal experience, Oxygeene was created to solve the real
          challenges families face when finding trustworthy homecare. Our platform
          blends tech innovation with human compassion to support India’s evolving
          healthcare needs.
        </p>
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-600 italic">“Care that feels like family — powered by technology.”</p>
      </div>
    </div>
  );
};

export default AboutPage;
