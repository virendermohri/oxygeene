'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  FaStethoscope, FaUserNurse, FaBaby, FaHeartbeat, FaSyringe,
  FaDumbbell, FaVial, FaUserShield, FaHeadset
} from 'react-icons/fa';
import * as FaIcons from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import Filter from './Filter';
import { FaPhone, FaMapMarkerAlt, FaRupeeSign, FaUser } from 'react-icons/fa';
import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';

const services = [
  { name: "Elder Care", icon: <FaUserShield /> },
  { name: "Mother, Baby Care", icon: <FaBaby /> },
  { name: "Nursing Care", icon: <FaUserNurse /> },
  { name: "Physiotherapy", icon: <FaDumbbell /> },
  { name: "Doctor Consultation", icon: <FaStethoscope /> },
  { name: "Critical Care", icon: <FaHeartbeat /> },
  { name: "Vaccination", icon: <FaSyringe /> },
  { name: "Lab Tests", icon: <FaVial /> },
  { name: "Counselling", icon: <FaHeadset /> },
];

const Services = ({ }) => {

  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service");
  const pathname = usePathname()
  const [selectedService, setSelectedService] = useState(null);
  const [caretakers, setCaretaker] = useState();
  const fetchCaretaker = async () => {
    const res = await fetch("http://localhost:5000/api/caretaker", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need
      },
    });
    if (!res.ok) {
      console.log("Failed to fetch data");
    }
    const caretaker = await res.json();
    setCaretaker(caretaker)
    console.log(caretaker)

  }
  useEffect(() => {
    fetchCaretaker()
  }, [])
  useEffect(() => {
    if (defaultService) {
      const matched = services.find(s => s.name.toLowerCase() === defaultService.toLowerCase());
      if (matched) {
        setSelectedService(matched.name);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [defaultService]);

  const handleServiceClick = (service) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (selectedService === service) {
      setSelectedService(null);
    } else {
      setSelectedService(service);
    }
  };

  const filteredCaretakers = selectedService
    ? caretakers.filter(c => c.certifications.includes(selectedService))
    : caretakers;


  return (
    <div className={`px-4 ${pathname == "/services" ? "md:h-screen" : ""} py-4 mb-10`}>
      {selectedService && (
        <div className='mb-10 md:w-[80%] m-auto'>
          <div className="flex justify-between items-center mt-8 mb-4">
            <h3 className="flex gap-5 text-xl items-center font-semibold">
              Service:
              <div className="flex" onClick={() => setSelectedService(null)}>
                <button className="flex items-center cursor-pointer justify-center px-7 py-2 border rounded-2xl shadow">
                  {selectedService}
                </button>
                <MdOutlineClear
                  className="relative border p-1 rounded-full text-white bg-black text-2xl -left-6 cursor-pointer"
                  onClick={() => setSelectedService(null)}
                />
              </div>
            </h3>
          </div>
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">Available Caretakers</h3>
            <Filter selectedService={selectedService} setSelectedService={setSelectedService} />
          </div>
          <div className="grid md:grid-cols-3  gap-5">

            {filteredCaretakers.map((caretaker, idx) => (
              <div
                key={idx}
                className="flex  border border-[#212121] flex-col items-start justify-start   p-3 bg-white rounded-lg "
              >
                <div className="flex flex-col">

                  <div className="flex  mb-4  gap-5 items-center justify-between">

                    <Image
                      width={100}
                      height={100}
                      src={"https://www.pba.edu/wp-content/uploads/2023/05/academics-physical-science-female-student-indoors-pba-palm-beach-atlantic-university-1200x800-1.jpg"}
                      alt={caretaker.name}
                      className="w-15 h-15 md:w-20 md:h-20 rounded-full object-cover  shadow-md "
                    />
                    <div className="flex flex-col">
                      <div className=" flex gap-2">
                        <div className="flex flex-col">


                          <h3 className="md:text-lg  font-semibold text-gray-800">{caretaker.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{caretaker.role}</p>
                        </div>
                        <div className="flex items-center text-red-400 mb-2">
                          {"★".repeat(Math.floor(caretaker.rating))}
                          {"☆".repeat(5 - Math.floor(caretaker.rating))}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3 text-sm mt-1">
                        {caretaker.age} yrs • {caretaker.gender}
                      </p>
                    </div>
                  </div>
                  <div className="flex  gap-3">

                    <p className="text-sm  text-gray-600 mb-2">
                      <span>🧠 Exp: {caretaker.experience} yrs</span>
                    </p>
                    <p className="text-sm  text-gray-600 mb-2">
                      <span>🎓 {caretaker.qualification}</span>
                    </p>
                  </div>
                </div>

                <p className="text-sm  text-gray-600 mb-2">
                  <span>📍 {caretaker.availability}</span>
                </p>
                <p className="text-sm  text-gray-600 mb-2">
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
                    <button
                      className="px-6 py-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                      Profile
                    </button></Link>
                  <Link href={`/book-service?service=${selectedService}`}><button
                    className="px-6 py-2 bg-green-500 cursor-pointer text-white rounded hover:bg-green-700 transition duration-300"

                  >
                    Book
                  </button></Link>
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
            <button
              key={idx}
              className={`flex flex-col items-center justify-center p-4 border rounded-2xl shadow 
              transition duration-300 cursor-pointer
              ${selectedService === service.name ? "bg-green-200" : "bg-white hover:bg-green-100"}`}
              onClick={() => handleServiceClick(service.name)}
            >
              <span className="text-2xl text-green-600 mb-2">{service.icon}</span>
              <span className="text-sm font-medium text-gray-700">{service.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  );
};

export default Services;
