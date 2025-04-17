'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdOutlineMode } from "react-icons/md";
const MyAccount = () => {
  const [userInfo, setUserInfo] = useState({});
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if(!localStorage.getItem("auth-token")) {
      window.location.href = "/login";
    }
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setUserInfo(user);

    const fetchBookings = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/bookservice/user/${user._id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        });
        const data = await res.json();
        console.log(data);
        setBookings(data.bookings.flat());
      } catch (err) {
        console.error("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const handleChangeAddress = () => {
    const newAddress = prompt("Enter your new address:");
    if (newAddress) {
      setUserInfo(prev => ({ ...prev, address: newAddress }));
      localStorage.setItem("user", JSON.stringify({ ...userInfo, address: newAddress }));
    }
  };

  return (
    <div className="px-4 py-8 min-h-screen ">
      <div className="max-w-4xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{userInfo.name}</h2>
              <p className="text-sm text-gray-600">{userInfo.email}</p>
            </div>
          </div>
         
        </div>

        {/* Address Section */}
     

        {/* Bookings Section */}
        <div className="bg-white  overflow-auto h-[70vh] shadow pb-6  pl-6 pr-6 rounded-lg ">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 pt-6 w-full pb-6 absolute pl-6 bg-white">My Bookings</h3>
          {bookings.length === 0 ? (
            <p className="text-gray-600">No bookings found.</p>
          ) : (
            <div className="space-y-4 mt-10">
              {bookings.map((booking, index) => (
                <div key={index} className="shadow p-3 rounded-md">
                  <p><span className="font-semibold">Service:</span> {booking.serviceName}</p>
                  <p><span className="font-semibold">Duration:</span> {booking.duration}</p>
                  <p><span className="font-semibold">Scheduled:</span> {new Date(booking.scheduleDateTime).toLocaleString()}</p>
                  <p><span className="font-semibold">Price:</span> ₹{booking.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h3 className="text-lg font-semibold text-gray-800 flex gap-5 mb-2">Contact Info <MdOutlineMode
            onClick={handleChangeAddress}
            className='text-2xl p-1 text-gray-500 hover:text-gray-700 cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out'
            /></h3>
          <p className="text-gray-600 mb-1"><FaMapMarkerAlt className="inline mr-2" />{userInfo.address || 'No address found'}</p>
          <p className="text-gray-600"><FaPhone className="inline mr-2" />{userInfo.phone_number || 'No phone number'}</p>
         
          
        </div>
      </div>
      <div className="flex mt-20  itmes-center justify-center">

       <button onClick={handleLogout} className="px-4 cursor-pointer py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto">
            Log Out
          </button>
      </div>
    </div>
  );
};

export default MyAccount;
