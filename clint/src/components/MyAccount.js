'use client';
import React, { useState } from 'react';
import { FaEdit, FaUser, FaMapMarkerAlt, FaPhone, FaCalendarAlt } from 'react-icons/fa';

const MyAccount = ({ userType = "normal" }) => {
    const [userInfo, setUserInfo] = useState({
        name: "Virender Singh",
        email: "virender@example.com",
        location: "Kurukshetra, India",
        phone: "+91 123 456 7890",
        profilePic: "https://source.unsplash.com/random/150x150?person",
    });

    const [caretakerInfo, setCaretakerInfo] = useState({
        name: "John Doe",
        role: "Nurse",
        rating: 4.5,
        location: "Delhi, India",
        phone: "+91 987 654 3210",
        experience: "5 years",
        available: true, // Caretaker availability toggle
    });

    return (
        <div className="px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* User Information */}
                <div className="flex items-center justify-between mb-8">
                    <img
                        src={"https://www.pba.edu/wp-content/uploads/2023/05/academics-physical-science-female-student-indoors-pba-palm-beach-atlantic-university-1200x800-1.jpg"}

                        alt={userInfo.name}
                        className="w-24 h-24 rounded-full object-cover shadow-md"
                    />
                    <div className="ml-4">
                        <h2 className="text-2xl font-semibold text-gray-800">{userInfo.name}</h2>
                        <p className="text-sm text-gray-600">{userInfo.email}</p>
                        <p className="text-sm text-gray-600">
                            <FaMapMarkerAlt className="inline mr-2" />
                            {userInfo.location}
                        </p>
                        <p className="text-sm text-gray-600">
                            <FaPhone className="inline mr-2" />
                            {userInfo.phone}
                        </p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                        <FaEdit />
                    </button>
                </div>

                {/* Different Views for User or Caretaker */}
                {userType === "caretaker" ? (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Caretaker Profile</h3>
                        <div className="flex flex-col mb-4">
                            <h4 className="font-medium text-gray-700">Role: {caretakerInfo.role}</h4>
                            <div className="flex items-center text-yellow-400 mb-2">
                                {"★".repeat(Math.floor(caretakerInfo.rating))}
                                {"☆".repeat(5 - Math.floor(caretakerInfo.rating))}
                            </div>
                            <p className="text-sm text-gray-600">{caretakerInfo.experience} of experience</p>
                            <p className="text-sm text-gray-600">
                                <FaMapMarkerAlt className="inline mr-2" />
                                {caretakerInfo.location}
                            </p>
                            <p className="text-sm text-gray-600">
                                <FaPhone className="inline mr-2" />
                                {caretakerInfo.phone}
                            </p>
                        </div>

                        {/* Availability Toggle */}
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600">Available for Service:</p>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="sr-only"
                                    checked={caretakerInfo.available}
                                    onChange={() =>
                                        setCaretakerInfo((prevState) => ({
                                            ...prevState,
                                            available: !prevState.available,
                                        }))
                                    }
                                />
                                <span className="block w-10 h-5 bg-gray-200 rounded-full"></span>
                                <span
                                    className={`absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-all ${caretakerInfo.available ? "translate-x-5" : ""
                                        }`}
                                ></span>
                            </label>
                        </div>

                        {/* Caretaker Action Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                                View My Bookings
                            </button>
                            <button className="px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">
                                Manage Availability
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h3>
                        <div className="flex flex-col mb-4">
                            <p className="text-sm text-gray-600">
                                You can view and manage your personal information, and view your booking
                                history here.
                            </p>
                        </div>

                        {/* User Action Buttons */}
                        <div className="mt-6 flex gap-4">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                View My Bookings
                            </button>
                            <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyAccount;
