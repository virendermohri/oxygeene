'use client';
import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaRupeeSign, FaUser } from 'react-icons/fa';
import "../app/globals.css";
import Link from 'next/link';
const caretakers = [
    {
        name: "John Doe",
        role: "Nursing Care",
        rating: 4.5,
        minprice: 500,
        maxprice: 1000,
        location: "Delhi, India",
        phone: "+91 123 456 7890",
        img: "https://source.unsplash.com//150x150?nurse",
        experience: "5 years",
    },
    {
        name: "John Doe",
        role: "Nursing Care",
        rating: 4.5,
        minprice: 500,
        maxprice: 1000,
        location: "Delhi, India",
        phone: "+91 123 456 7890",
        img: "https://source.unsplash.com//150x150?nurse",
        experience: "5 years",
    },
    {
        name: "John Doe",
        role: "Nursing Care",
        rating: 4.5,
        minprice: 500,
        maxprice: 1000,
        location: "Delhi, India",
        phone: "+91 123 456 7890",
        img: "https://source.unsplash.com//150x150?nurse",
        experience: "5 years",
    },
    {
        name: "John Doe",
        role: "Nursing Care",
        rating: 4.5,
        minprice: 500,
        maxprice: 1000,
        location: "Delhi, India",
        phone: "+91 123 456 7890",
        img: "https://source.unsplash.com//150x150?nurse",
        experience: "5 years",
    },
    {
        name: "Jane Smith",
        role: "Physiotherapy",
        rating: 4.8,
        minprice: 700,
        maxprice: 2000,
        location: "Mumbai, India",
        phone: "+91 987 654 3210",
        img: "https://source.unsplash.com/random/150x150?nurse",
        experience: "3 years",
    },
    {
        name: "Arvind Kumar",
        role: "Elder Care",
        rating: 4.3,
        minprice: 300,
        maxprice: 900,
        location: "Bangalore, India",
        phone: "+91 345 678 9012",
        img: "https://source.unsplash.com/random/150x150?nurse",
        experience: "7 years",
    },
    {
        name: "Arvind Kumar",
        role: "Elder Care",
        rating: 4.3,
        minprice: 400,
        maxprice: 1000,
        location: "Bangalore, India",
        phone: "+91 345 678 9012",
        img: "https://source.unsplash.com/random/150x150?nurse",
        experience: "7 years",
    },
    {
        name: "Arvind Kumar",
        role: "Elder Care",
        rating: 4.3,
        minprice: 700,
        maxprice: 2000,
        location: "Bangalore, India",
        phone: "+91 345 678 9012",
        img: "https://source.unsplash.com/random/150x150?nurse",
        experience: "7 years",
    },
];
const CaretakerProfile = () => {
    return (
        <div className="md:px-10  px-4 py-8  mb-10 md:mb-20">
            <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Meet Our Caretakers</h2>
            <div className="flex  w-auto overflow-auto gap-4 md:caretakerbox" >
                {caretakers.map((caretaker, idx) => (
                    <div
                        key={idx}
                        className="flex min-w-[300px] border sm:min-w-[350px] md:min-w-[350px] shadow rounded border-[#212121] flex-col items-start justify-start   p-3 bg-white rounded-lg "
                    >
                        <div className="flex  mb-4  gap-5 items-center justify-between">

                            <img
                                src={"https://www.pba.edu/wp-content/uploads/2023/05/academics-physical-science-female-student-indoors-pba-palm-beach-atlantic-university-1200x800-1.jpg"}
                                alt={caretaker.name}
                                className="w-20 h-20 rounded-full object-cover  shadow-md "
                            />
                            <div className="flex flex-col">

                                <h3 className="md:text-lg  font-semibold text-gray-800">{caretaker.name}</h3>
                                <p className="text-sm text-gray-500 mb-2">{caretaker.role}</p>
                            </div>
                            <div className="flex items-center text-red-400 mb-2">
                                {"★".repeat(Math.floor(caretaker.rating))}
                                {"☆".repeat(5 - Math.floor(caretaker.rating))}
                            </div>
                        </div>
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
                            {caretaker.minprice}-{caretaker.maxprice} per day
                        </p>
                        <div className="flex w-full my-5 items-center justify-between space-x-4">

                            <button
                                className="px-6 py-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-700 transition duration-300"
                                onClick={() => alert(`Booking service with ${caretaker.name}`)}
                            >
                                Profile
                            </button>
                            <Link href={`/book-service?service=Elder care`}><button
                                className="px-6 py-2 bg-green-500 cursor-pointer text-white rounded hover:bg-green-700 transition duration-300"

                            >
                                Book
                            </button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaretakerProfile;
