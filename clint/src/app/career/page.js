'use client';
import React, { useState } from 'react';

const JoinCaretakerPage = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    experience: '',
    gender: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    // Later: integrate with backend (POST API)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-4">Join as a Caretaker</h1>
      <p className="text-center text-lg mb-8 text-gray-600">
        Become part of Oxygeene and offer compassionate care to families in need. Get visibility,
        verified identity, and job opportunities near you.
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email (optional)"
          value={form.email}
          onChange={handleChange}
          className="border p-3 rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="City / Location"
          value={form.location}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        >
          <option value="">Select Service Type</option>
          <option value="Elder Care">Elder Care</option>
          <option value="Nursing Care">Nursing Care</option>
          <option value="Mother & Baby Care">Mother & Baby Care</option>
          <option value="Physiotherapy">Physiotherapy</option>
          <option value="Critical Care">Critical Care</option>
        </select>
        <input
          type="text"
          name="experience"
          placeholder="Experience (e.g. 2 years)"
          value={form.experience}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="border p-3 rounded"
        >
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded-lg w-full hover:bg-green-700 transition"
          >
            Submit & Join
          </button>
        </div>
      </form>

      <div className="mt-10 text-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-2">Why Join Oxygeene?</h2>
        <ul className="list-disc list-inside space-y-2 text-left max-w-md mx-auto">
          <li>Earn consistent income from verified clients</li>
          <li>Flexible working hours and location preference</li>
          <li>Build your profile and get hired faster</li>
          <li>Zero cost to join — completely free</li>
        </ul>
      </div>
    </div>
  );
};

export default JoinCaretakerPage;
