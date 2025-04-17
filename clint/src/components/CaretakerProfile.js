'use client';
import React, { useEffect, useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaRupeeSign, FaUser } from 'react-icons/fa';
import "../app/globals.css";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from 'next/link';
import Image from 'next/image';
const CaretakerProfile = () => {

    const [caretakers, setCaretaker] = useState(null);
    useEffect(() => {
        getdata()
    }, [])
    const getdata = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/caretaker`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!res.ok) {
            throw new Error("Failed to fetch caretaker data");
        }
        const caretakerData = await res.json();
        setCaretaker(caretakerData)
        console.log(caretakerData)
    }
    return (
        <div className="md:px-10  px-4 py-8  mb-10 md:mb-20">
            <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Meet Our Caretakers</h2>
            <div className="flex  w-auto overflow-auto gap-4 caretakerbox" >
                {caretakers && caretakers.map((caretaker, idx) => (
                    <div
                        key={idx}
                        className="flex cursor-pointer min-w-[300px] border sm:min-w-[350px] md:min-w-[350px] shadow rounded border-[#212121] flex-col items-start justify-start   p-3 bg-white rounded-lg "
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
                            <div className=" flex gap-3">
                               
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
