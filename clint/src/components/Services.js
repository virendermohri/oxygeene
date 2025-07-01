'use client';

import React, { useState, useEffect } from 'react';
import { FaStethoscope, FaUserNurse, FaBaby, FaHeartbeat, FaSyringe, FaDumbbell, FaVial, FaUserShield, FaHeadset, FaMapMarkerAlt, FaRupeeSign, FaUser } from 'react-icons/fa';
import { MdOutlineClear } from 'react-icons/md';
import Filter from './Filter';
import Link from 'next/link';
import Image from 'next/image';
import "../app/globals.css";

const services = [
  { name: "Elder Care", icon: <FaUserShield /> },
  { name: "Mother Baby Care", icon: <FaBaby /> },
  { name: "Nursing Care", icon: <FaUserNurse /> },
  { name: "Physiotherapy", icon: <FaDumbbell /> },
  { name: "Doctor Consultation", icon: <FaStethoscope /> },
  { name: "ICU at Home Critical Care", icon: <FaHeartbeat /> },
  { name: "Vaccination", icon: <FaSyringe /> },
  { name: "Lab Tests", icon: <FaVial /> },
  { name: "Counselling", icon: <FaHeadset /> },
];

export default function Services({ serviceSlug }) {
  const defaultService = serviceSlug?.replace(/-/g, ' ').toLowerCase();
  const [selectedService, setSelectedService] = useState(null);
  const [caretakers, setCaretakers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCaretakers() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/caretaker`);
        if (!res.ok) throw new Error("Failed to fetch caretakers");
        const data = await res.json();
        setCaretakers(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCaretakers();
  }, []);

  useEffect(() => {
    if (defaultService) {
      const match = services.find(s => s.name.toLowerCase() === defaultService);
      if (match) {
        setSelectedService(match.name);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [defaultService]);

  const filteredCaretakers = selectedService
    ? caretakers.filter(c => c.certifications.includes(selectedService))
    : caretakers;

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-white ">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="px-4 bg-gray-50   py-20 ">
      {selectedService && (
        <div className="mb-10 md:w-[80%] m-auto">
          <div className="flex justify-between items-center mt-8 mb-4">
            <div className="flex gap-5 text-xl items-center font-semibold">
              Service:
              <div className="flex">
                <button className="flex items-center cursor-pointer justify-center px-7 py-2 border rounded-2xl shadow">
                  <h1>{selectedService}</h1>
                </button>
                <MdOutlineClear
                  className="relative border p-1 rounded-full text-white bg-black text-2xl -left-6 cursor-pointer"
                  onClick={() => setSelectedService(null)}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Available Caretakers</h3>
            <Filter selectedService={selectedService} setSelectedService={setSelectedService} />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {filteredCaretakers.map((c, idx) => (
              <div key={idx} className="flex border border-[#212121] flex-col p-3 bg-white rounded-lg">
                <div className="flex mb-4 gap-5 items-center">
                  <Image
                    width={100}
                    height={100}
                    src={c.photo}
                    alt={c.name}
                    className="w-15 h-15 md:w-20 md:h-20 rounded-full object-cover shadow-md"
                  />
                  <div>
                    <h3 className="md:text-lg font-semibold text-gray-800">{c.name}</h3>
                    <p className="text-sm text-gray-500">{c.role}</p>
                    <p className="text-gray-600 text-sm">{c.age} yrs • {c.gender}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">🧠 Exp: {c.experience} yrs</p>
                <p className="text-sm text-gray-600">🎓 {c.qualification}</p>
                <p className="text-sm text-gray-600">📍 {c.availability}</p>
                {/* <p className="text-sm text-gray-600"><FaMapMarkerAlt className="inline mr-2" />{c.location}</p> */}
                <p className="text-sm text-gray-600"><FaUser className="inline mr-2" />{c.experience} of experience</p>
                <p className="text-sm font-semibold text-gray-600"><FaRupeeSign className="inline mr-2" />{c.pricePerDay} per day</p>
                <div className="flex w-full my-5 items-center justify-between">
                  <Link href={`/caretaker-profile?id=${c._id}`}>
                    <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition">Profile</button>
                  </Link>
                  <Link href={`/book-service?service=${selectedService}&caretaker=${c._id}`}>
                    <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">Book</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Our Services</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
        {services.map((service, idx) => (
          <Link
          target='_blank'
            key={idx}
            href={`/services/${service.name.toLowerCase().replace(/ /g, "-")}`}
            className={`flex flex-col items-center justify-center p-4 border rounded-2xl shadow 
              ${selectedService === service.name ? "bg-green-200" : "bg-white hover:bg-green-100"} 
              transition duration-300`}
          >
            <span className="text-2xl text-green-600 mb-2">{service.icon}</span>
            <span className="text-sm text-center  font-medium text-gray-700">{service.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
