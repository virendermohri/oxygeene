'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdOutlineMode } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
const MyAccount = () => {
  const [userInfo, setUserInfo] = useState({});
  const [bookings, setBookings] = useState([]);
  const [complaint, setComplaint] = useState(false)
  const [referral, setReferral] = useState(false)
  useEffect(() => {
    if (!localStorage.getItem("auth-token")) {
      window.location.href = "/login";
      return;
    }
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setUserInfo(user);

    const fetchBookings = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookservice/user/${user._id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        });
        const data = await res.json();
        if (res.status !== 200) {
          console.log("Failed to fetch bookings:", data.message);
        }
        else {

          setBookings(data.bookings.flat());
        }
      } catch (err) {
        console.log("Error fetching bookings:", err);
      }
    };

    fetchBookings();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  const handlecomplaint = async () => {
    const complaintText = form.message;
    const subject = form.subject;

    if (!complaintText || !subject) {
      alert("Please fill in all fields.");
      return;
    }

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/complaint/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({ complaintText, subject }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Complaint submitted successfully!")
          setForm({ subject: "", message: "" });
          setComplaint(false);
        } else {
          toast.error("Failed to submit complaint: " + data.message)
        }
      })
      .catch((error) => {
        console.error("Error submitting complaint:", error);
        alert("An error occurred while submitting the complaint.");
      });
  };
  const [form, setForm] = useState({

    subject: "",
    message: "",
    referralCode: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleRefferalcomplaint = async () => {
    const referralCode = form.referralCode;
    if (!referralCode) {
      alert("Please enter your referral code.");
      return;
    }
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/referral/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({ referral: referralCode, email: userInfo.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Referral code generated successfully!")
          setForm({ subject: "", message: "" });
          localStorage.setItem("user", JSON.stringify(data.user));
          setReferral(false);
        } else {
          toast.error("Failed to submit referral code: " + data.message)
        }
      })
      .catch((error) => {
        console.error("Error submitting referral code:", error);
        alert("An error occurred while submitting the referral code.");
      });
  }

  return (
    <div className="px-4 py-8 min-h-screen ">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="md:max-w-2xl   flex-col  flex h-screen mx-auto">
        <div className="flex    gap-5 mb-6">
          <Image alt="My Account" className="h-20 w-20  rounded-full cursur-pointer" src={"https://res.cloudinary.com/divlt5fqo/image/upload/v1751954811/unnamed_dvjv2x.png"} height={100} width={100} />

          <div className="flex  flex-col  gap-1">

            <h2 className="text-xl font-semibold text-gray-800">{userInfo.name}</h2>
            <p className=" text-gray-600 ">{userInfo.email}</p>
            <p className=" text-gray-600  font-medium">Referral code : {userInfo.referral_code}</p>
          </div>
         
        </div>

        <div className="w-full mb-5 ">

          <button onClick={(() => { setReferral(!referral) })} className="px-4  w-[100%] cursor-pointer py-2 border border-1 font-medium hover:bg-gray-100 text-gray-600 border-gray-200 rounded  "> Generate refferal code</button>
        </div>
        {referral && <div className=" my-5">
          <h1 className='font-medium text-xl mb-1'> Refferal code</h1>
          <input name='referralCode' onChange={handleChange} type='text' className='w-full p-2 border border-gray-300 rounded' placeholder='Write your refferal code here...'></input>
          <button onClick={handleRefferalcomplaint} className="px-4 mt-2 w-full cursor-pointer py-2 border border-1 font-medium hover:bg-gray-100 text-gray-600 border-gray-200 rounded  w-full sm:w-auto">Submit</button>
        </div>}
        <div className="mb-5">

          <button onClick={(() => { setComplaint(!complaint) })}
            className="px-4  cursor-pointer flex  justify-center gap-2 py-2 border border-1 font-medium hover:bg-gray-100 text-gray-600 border-gray-200 rounded  w-[100%]">
            <MdOutlineMode className="text-gray-500" />
            <span>Complaint</span>
          </button>
        </div>
        {complaint && <div className=" my-5">
          <h1 className='font-medium text-xl'>Complaint</h1>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Complaint Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a Subject</option>
              <option value="Service Delay">Service Delay</option>
              <option value="Unprofessional Behavior">Unprofessional Behavior</option>
              <option value="Incorrect Billing">Incorrect Billing</option>
              <option value="Caretaker Not Qualified">Caretaker Not Qualified</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <textarea name='message' onChange={handleChange} className='w-full h-32 p-2 border border-gray-300 rounded' placeholder='Write your complaint here ...'></textarea>
          <button onClick={handlecomplaint} className="px-4 mt-2 w-full cursor-pointer py-2 border border-1 font-medium hover:bg-gray-100 text-gray-600 border-gray-200 rounded  w-full sm:w-auto">Submit Complaint</button>
        </div>}
      </div>

      <div className="flex mt-20  itmes-center justify-center">

        <button onClick={handleLogout} className="px-4 cursor-pointer py-2 border border-1 font-medium bg-gray-100 text-gray-600 border-gray-200 rounded  w-full sm:w-auto">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
