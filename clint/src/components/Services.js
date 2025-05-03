'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FaStethoscope, FaUserNurse, FaBaby, FaHeartbeat, FaSyringe, FaDumbbell, FaVial, FaUserShield, FaHeadset } from 'react-icons/fa';
import { MdOutlineClear } from "react-icons/md";
import Filter from './Filter';
import { FaMapMarkerAlt, FaRupeeSign, FaUser } from 'react-icons/fa';
import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

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

const Services = () => {
  const pathname = usePathname(); 
  const serviceSlug = pathname?.split('/').pop();  
  const defaultService = serviceSlug?.replace(/-/g, ' ').toUpperCase();
  const [selectedService, setSelectedService] = useState(null);
  const [caretakers, setCaretaker] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchCaretaker = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/caretaker`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      console.log("Failed to fetch data");
    }
    const caretaker = await res.json();
    setCaretaker(caretaker)
    setLoading(false);
  }
  
  useEffect(() => {
    fetchCaretaker();
  }, []);
  
  useEffect(() => {
    if (defaultService) {
      const matched = services.find(s => s.name.toLowerCase() === defaultService.toLowerCase());
      if (matched) {
        setSelectedService(matched.name);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [defaultService]);

  const filteredCaretakers = selectedService && !loading
    ? caretakers.filter(c => c.certifications.includes(selectedService))
    : caretakers;

  return (
    <>
      <Head>
        <title>{selectedService ? `Top ${selectedService} Caretakers in Your Area - YourPlatform` : 'Our Healthcare Services - YourPlatform'}</title>
        <meta name="description" content={`Find the best caretakers for ${selectedService || 'various healthcare services'} on YourPlatform. Browse experienced professionals near you.`} />
        <meta name="keywords" content="healthcare services, caretakers, home healthcare, elderly care, physiotherapy, doctor consultation, ICU care, nursing care" />
        <link rel="canonical" href={pathname} />
      </Head>

      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className={`px-4 ${pathname == "/services" ? "md:h-screen md:mt-20" : ""} py-4 mb-10`}>
          {selectedService && (
            <div className='mb-10 md:w-[80%] m-auto'>
              <div className="flex justify-between items-center mt-8 mb-4">
                <div className="flex gap-5 text-xl items-center font-semibold">
                  Service:
                  <div className="flex" onClick={() => setSelectedService(null)}>
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
                {filteredCaretakers.map((caretaker, idx) => (
                  <div key={idx} className="flex border border-[#212121] flex-col items-start justify-start p-3 bg-white rounded-lg">
                    <div className="flex flex-col">
                      <div className="flex mb-4 gap-5 items-center justify-between">
                        <Image
                          width={100}
                          height={100}
                          src={caretaker.photo}
                          alt={caretaker.name}
                          className="w-15 h-15 md:w-20 md:h-20 rounded-full object-cover shadow-md"
                        />
                        <div className="flex flex-col">
                          <div className="flex gap-2">
                            <h3 className="md:text-lg font-semibold text-gray-800">{caretaker.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{caretaker.role}</p>
                          </div>
                          <p className="text-gray-600 mb-3 text-sm mt-1">
                            {caretaker.age} yrs • {caretaker.gender}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <p className="text-sm text-gray-600 mb-2">
                          <span>🧠 Exp: {caretaker.experience} yrs</span>
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          <span>🎓 {caretaker.qualification}</span>
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <span>📍 {caretaker.availability}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <FaMapMarkerAlt className="inline mr-2" />
                      {caretaker.location}
                    </p>
                    <p className="text-sm text-gray-600 mb-4">
                      <FaUser className="inline mr-2" />
                      {caretaker.experience} of experience
                    </p>
                    <p className="text-sm font-semibold text-gray-600 mb-2">
                      <FaRupeeSign className="inline mr-2" />
                      {caretaker.pricePerDay} per day
                    </p>
                    <div className="flex w-full my-5 items-center justify-between space-x-4">
                      <Link href={`/caretaker-profile`}>
                        <button className="px-6 py-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-700 transition duration-300">
                          Profile
                        </button>
                      </Link>
                      <Link href={`/book-service?service=${selectedService}`}>
                        <button className="px-6 py-2 bg-green-500 cursor-pointer text-white rounded hover:bg-green-700 transition duration-300">
                          Book
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Our Services</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
            {services.map((service, idx) => {
              return (
                <Link 
                  className={`flex flex-col items-center justify-center p-4 border rounded-2xl shadow 
                  transition duration-300 cursor-pointer
                  ${selectedService === service.name ? "bg-green-200" : "bg-white hover:bg-green-100"}`}
                  key={idx} href={`/services/${service.name.toLowerCase().replace(/ /g, "-")}`}
                >
                  <button key={idx} className='flex flex-col items-center justify-center'>
                    <span className="text-center text-2xl text-green-600 mb-2">{service.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{service.name}</span>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
