"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
const services = [
  {
    title: "Physiotherapy",
    description: "Expert physiotherapy for recorey and pain management.",
    image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751540191/unnamed_jpwwlk.png",

  },
  {
    title: "Elder Care",
    description: "Compassionate care for seniors in the comfort of their home.",
    image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751464805/unnamed_o3gcdc.png"
  },
  {
    title: "Mother & Baby Care",
    description: "Spacialized care for new mothers and infants.",
    image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751464831/unnamed_aem8be.png"
  },
  {
    title: "Vaccination",
    description: "Safe and convenient vaccination services.",
    image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751464886/unnamed_ijrmau.png"
  },
  {
    title: "ICU at Home",
    description: "Advanced ICU setup and care at home.",
    image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751541246/unnamed_pmleda.png"
  },
  {
    title: "Consulations",
    description: "Connect with experienced doctors for online consultations.",
    image_url: "https://res.cloudinary.com/divlt5fqo/image/upload/v1751541271/unnamed_rt3tw7.png"
  },

]

const BookService = ({servicename}) => {
  const [coupon, setCoupon] = useState(false)
  const [referral, setReferral] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookservice/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify(({ ...form, serviceName:servicename  })),
      });

      const response = await res.json();
      if (res.ok) {
        setShowModal(true);
        // toast.success(response.message)
        setTimeout(() => (window.location.href = "/"), 5000);
      } else {
        toast.error(response.error || "Something went wrong.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Booking failed.");
    }
  };


  const [form, setForm] = useState({
    caretakerType: "",
    location: "",
    schedule: "",
    address: "",
    phone: "",
    duration: "",
    price: null,
    referenceid: ""
  });
  const locationPriceRanges = {
    Chandigarh: { min: 800, max: 1000 },
    Mohali: { min: 650, max: 950 },
    Ambala: { min: 500, max: 900 },
    Panchkula: { min: 500, max: 1050 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

  };
  const computePriceRange = () => {
    const range = locationPriceRanges[form.location];
    if (!range) return null;

    const femaleCharge = form.caretakerType === "Female" ? 200 : 0;

    return {
      min: range.min + femaleCharge,
      max: range.max + femaleCharge,
    };
  };

  useEffect(() => {
    if (form.caretakerType && form.location) {
      const pricerange = computePriceRange()
      setForm({ ...form, price: pricerange })

    }

  }, [form.location, form.caretakerType])
  const handlecoupancode = async () => {
    console.log(form)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/referral/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ referral: form.referenceid }),
      });

      const response = await res.json();
      if (res.ok) {
        toast.success(response.message);
        setReferral(true)
      } else {
        toast.error(response.error || "Invalid coupon code.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to apply coupon code.");
    }
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="">
        
        
        <form onSubmit={handleSubmit} className="space-y-5  ">

          <div className="flex flex-col gap-2">

            <div className="mb-1 ">
              <label className="block  text-base font-bold text-gray-700 mb-3">Caretaker Gender</label>
              
              <div className="flex flex-wrap gap-3 ">
                <label
                  className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dde1e4] px-4 h-11 text-[#121517] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#318fcd] relative cursor-pointer"
                >
                  Male
                  <input type="radio"  onChange={handleChange} className="invisible absolute" name="caretakerType" value="Male" />
                </label>
                <label
                  className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dde1e4] px-4 h-11 text-[#121517] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#318fcd] relative cursor-pointer"
                >
                  Female
                  <input type="radio"  onChange={handleChange} className="invisible absolute" name="caretakerType" value="Female" />
                </label>
                <label
                  className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dde1e4] px-4 h-11 text-[#121517] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#318fcd] relative cursor-pointer"
                >
                  Any
                  <input type="radio"  onChange={handleChange} className="invisible absolute" name="caretakerType" value="Other" />
                </label>
              </div>
            </div>
            <div className="mb-1">
              <label className="block  text-base font-bold text-gray-700 mb-3">Schedule</label>
              <div className="flex gap-10 ">
                
                <input
                  type="date"
                  name="schedule"
                  value={form.schedule}
                  onChange={handleChange}
                  required
                  className="w-full text-sm font-medium  border border-gray-300 rounded-md px-4 py-3"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center md:justify-between ">
            <div className="mb-1">
              <label className="block   text-base font-bold text-gray-700 mb-3">
                Select Location
              </label>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full p-3 text-sm font-medium border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" >Select your city</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Mohali">Mohali</option>
                <option value="Ambala">Ambala</option>
                <option value="Panchkula">Panchkula</option>
              </select>
            </div>
           
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center md:justify-between ">

            <div className="mb-1">
              <label className="block  text-base font-bold text-gray-700 mb-3">Duration</label>
              <select
                name="duration"
                value={form.duration}
                onChange={handleChange}
                required
                className="w-full text-sm font-medium border border-gray-300 rounded-md px-4 py-3"
              >
                <option value="">Select Duration</option>
                <option value="1 Day">1 Day</option>
                <option value="3 Days">3 Days</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="1 Month">1 Month</option>
              </select>
            </div>
            <div className="mb-1">
              <label className="block  text-base font-bold text-gray-700 mb-3">Phone Number</label>
              
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                maxLength={10}
                placeholder="Phone Number"
                className="w-full text-sm font-medium border border-gray-300 rounded-md px-4 py-3"
              />
            </div>
          </div>
          <div className="mb-2">
            <button type="button" onClick={(() => { setCoupon(true) })} className="text-blue-700 cursor-pointer font-medium">Have a coupon code?</button>
            {coupon && <div className="flex items-center justify-between">
              <input
                type="text"
                name="referenceid"
                onChange={(e) => setForm({ ...form, referenceid: e.target.value })}
                placeholder="Enter coupon code"
                className="w-full border border-gray-300 rounded-md px-4 py-3 mt-2"
              />
              <button type="button" onClick={handlecoupancode} className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition ml-2">
                Apply
              </button>
            </div>}
          </div>
          {referral && (
            <div className="font-semibold mt-2">
              Referral code applied successfully! You will receive a discount on your booking.
            </div>
          )}
          {form.price !== null && form.address && form.phone && form.duration && (

            <div className="text-green-600 font-semibold mt-2">
              Base Price (per day) : ₹{form.price.min} - ₹{form.price.max}
              {form.caretakerType === "Female" && (
                <p className="text-sm text-blue-600 mt-1">
                  ₹200 additional charge for selecting a female caretaker.
                </p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </form>
        {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4 animate-fade-in relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>
            <div className="flex flex-col items-center text-center">
              <FaCheckCircle className="text-green-600 w-10 h-10 mb-2" />
              <h2 className="text-base font-bold text-green-700">Booking Confirmed!</h2>
              <p className="text-gray-600 mt-1">
                Thank you for choosing <span className="font-semibold">CareKwik</span>.
                <br />
                Our team will contact you shortly to confirm your booking.
              </p>
              <p className="text-sm text-gray-400 mt-3 italic">
                “Because every care request deserves a real human response.” 💙
              </p>
            </div>
          </div>
        </div>
      )}
      </div >

    </>
  );
};

export default BookService;
