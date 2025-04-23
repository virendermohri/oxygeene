'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  FaStethoscope, FaUserNurse, FaBaby, FaHeartbeat, FaSyringe,
  FaDumbbell, FaVial, FaUserShield, FaHeadset
} from 'react-icons/fa';
import { MdOutlineClear } from "react-icons/md";
import Filter from './Filter';
import { FaMapMarkerAlt, FaRupeeSign, FaUser } from 'react-icons/fa';
import "../app/globals.css";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
const servicesMeta = {
  "Elder Care": {
    title: "Elder Care Services - Compassionate Home Care for Seniors",
    description: "Provide your loved ones with professional and compassionate elder care services at home. Ensure their well-being and safety with trained caretakers.",
    keywords: "elder care, senior care, home care services, elderly support, at home senior care",
  },
  "Mother, Baby Care": {
    title: "Mother & Baby Care - Expert Care for New Moms and Babies",
    description: "Get specialized care for new mothers and their babies. From postnatal care to baby health, we provide safe and nurturing services for moms and babies.",
    keywords: "mother care, baby care, postnatal care, newborn care, maternal health, parenting support",
  },
  "Nursing Care": {
    title: "Nursing Care Services - Professional Nursing at Home",
    description: "Receive 24/7 nursing care at home from certified professionals. We provide skilled nursing services tailored to your healthcare needs.",
    keywords: "nursing care, home nursing, medical care, in-home nursing, healthcare at home",
  },
  "Physiotherapy": {
    title: "Physiotherapy Services - Restore Mobility and Relieve Pain",
    description: "Get expert physiotherapy at home to help recover from injuries, relieve pain, and improve mobility. We offer personalized physiotherapy treatments.",
    keywords: "physiotherapy, physical therapy, rehabilitation, injury recovery, mobility restoration, pain relief",
  },
  "Doctor Consultation": {
    title: "Doctor Consultation - Consult a Doctor from the Comfort of Your Home",
    description: "Schedule an online or in-home doctor consultation for expert advice, diagnosis, and treatment. Our doctors are here to provide you with personalized care.",
    keywords: "doctor consultation, online doctor, home doctor visit, medical advice, healthcare consultation",
  },
  "Critical Care": {
    title: "Critical Care Services - ICU at Home and Emergency Support",
    description: "Get ICU-level care at home with experienced doctors and nurses. We offer critical care services, including emergency support and intensive monitoring.",
    keywords: "critical care, ICU at home, intensive care, home ICU, emergency medical support, critical health services",
  },
  "Vaccination": {
    title: "Vaccination Services - Safe and Reliable Vaccination at Home",
    description: "Get vaccinated from the comfort of your home with our trusted vaccination services. We provide a variety of vaccines for all ages.",
    keywords: "vaccination, home vaccination, flu vaccine, immunization, vaccine delivery, health protection",
  },
  "Lab Tests": {
    title: "Lab Tests at Home - Convenient and Accurate Medical Testing",
    description: "Schedule lab tests at home for accurate and reliable results. We offer a wide range of medical tests performed by certified professionals.",
    keywords: "lab tests, home lab tests, medical testing, blood tests, diagnostic tests, healthcare services",
  },
  "Counselling": {
    title: "Counselling Services - Mental Health Support and Therapy",
    description: "Access professional counselling services for mental health support. Our trained therapists provide individual and family therapy in a safe and confidential environment.",
    keywords: "counselling, therapy, mental health, psychological support, therapy sessions, family counselling",
  },
};

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
const Services = ({ }) => {
  const pathname = usePathname(); // Get the current path
  const serviceSlug = pathname?.split('/').pop();  // Get the last part of the URL  
  const defaultService = serviceSlug?.replace(/-/g, ' ').toUpperCase();
  const [selectedService, setSelectedService] = useState(null);
  const [caretakers, setCaretaker] = useState();
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
    setLoading(false)
  }
  // useEffect(() => {
  //   if (serviceSlug) {
  //     // Set the meta data when the slug is available
  //     const serviceData = servicesMeta[serviceSlug] || {
  //       title: "Healthcare Services - Personalized Care at Home",
  //       description: "Explore our wide range of healthcare services tailored to your needs.",
  //       keywords: "healthcare, home care, medical services, senior care, nursing care, therapy",
  //     };

  //     // Update the document's meta tags dynamically when service data is available
  //     document.title = serviceData.title;
  //     document.querySelector('meta[name="description"]').setAttribute('content', serviceData.description);
  //     document.querySelector('meta[name="keywords"]').setAttribute('content', serviceData.keywords);
  //   }
  // }, [serviceSlug]);  // This effect runs every time the serviceSlug changes
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

    // window.scrollTo({ top: 0, behavior: 'smooth' });

    // if (selectedService === service) {
    //   setSelectedService(null);
    // } else {
    //   setSelectedService(service)
    // }
  };

  const filteredCaretakers = selectedService && !loading
    ? caretakers.filter(c => c.certifications.includes(selectedService))
    : caretakers;


  return (

    <>
      {loading ?
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
        </div> :
        <>
        {/* <Head>
        <title>{serviceData.title}</title>
        <meta name="description" content={serviceData.description} />
        <meta name="keywords" content={serviceData.keywords} />
        <meta property="og:title" content={serviceData.title} />
        <meta property="og:description" content={serviceData.description} />
        <meta property="og:type" content="website" />
      </Head> */}
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
                <Link 
                className={`flex flex-col items-center justify-center p-4 border rounded-2xl shadow 
                  transition duration-300 cursor-pointer
                  ${selectedService === service.name ? "bg-green-200" : "bg-white hover:bg-green-100"}`}
                key={idx} href={`/services/${service.name.toLowerCase().replace(/ /g, "-")}`}>
                <button
                  key={idx}
                  className='flex flex-col items-center justify-center'
                >
                  <span className=" text-center text-2xl text-green-600 mb-2">{service.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{service.name}</span>
                </button>
                </Link>
              )
            })}
          </div>
        </div>
        </>
        
        }
    </>

  );
};

export default Services;
