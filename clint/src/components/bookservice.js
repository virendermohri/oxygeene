"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const BookService = () => {
  const searchParam = useSearchParams();
  const serviceParam = searchParam.get("service");
  const [coupon, setCoupon] = useState(false)
  const [referral, setReferral] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookservice/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify(({ ...form, serviceName: unslugifyService(serviceParam) })),
      });

      const response = await res.json();
      if (res.ok) {
        toast.success(response.message)
        setTimeout(() => (window.location.href = "/"), 5000);
      } else {
        toast.error(response.error || "Something went wrong.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Booking failed.");
    }
  };

  const unslugifyService = (slug) => {
    return slug
      .split('-')                            // split by hyphen
      .map(word => {
        if (word === 'and') return '&';      // replace 'and' with '&'
        return word.charAt(0).toUpperCase() + word.slice(1); // capitalize first letter
      })
      .join(' ');
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



  const getToday = () => new Date().toISOString().split('T')[0];
  const handleSelect = (val) => {
    setForm({ ...form, schedule: val });

  };
  const locationPriceRanges = {
    Chandigarh: { min: 500, max: 1000 },
    Mohali: { min: 450, max: 950 },
    Ambala: { min: 400, max: 900 },
    Panchkula: { min: 550, max: 1050 },
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

      <div className="max-w-5xl mx-auto md:mt-10 mt-5 mb-20  p-4">
        <h1 className="md:text-2xl font-bold mb-6 flex gap-2"><p className="text-gray-500">Service Name</p> : {unslugifyService(serviceParam)}</h1>
        <div className="">
          <Image width={100} height={100} src={services.find(service => service.title.toLowerCase() === unslugifyService(serviceParam).toLowerCase())?.image_url || "https://res.cloudinary.com/divlt5fqo/image/upload/v1751460739/wmremove-transformed_2_sxrfa6.jpg"}
            className=' w-full md:h-[450px]  object-cover border-1 border-gray-100 md:rounded-lg'
            alt="" />

        </div>

        <form onSubmit={handleSubmit} className="space-y-5 mt-10 ">

          {/* Caretaker Type */}
          <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center md:justify-between">

            <div className="mb-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Caretaker Gender</label>
              <select
                name="caretakerType"
                value={form.caretakerType}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              >
                <option value="">Select Gender</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
              </select>
            </div>
            <div className="mb-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Schedule</label>
              <div className="flex gap-10 ">
                <button onClick={() => {
                  handleSelect(getToday());
                }} type="button" className="border border-1 cursor-pointer border-gray-200 px-5 py-1 rounded-md">Today</button>

                <input
                  type="date"
                  name="schedule"
                  value={form.schedule}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </div>
            {/* Location */}
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center md:justify-between ">
            <div className="mb-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Location
              </label>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="" >Select your city</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Mohali">Mohali</option>
                <option value="Ambala">Ambala</option>
                <option value="Panchkula">Panchkula</option>
              </select>
            </div>
            <div className="mb-1">

              <label className="block text-sm font-medium text-gray-700 mb-1">Full Address</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                placeholder="Street, City, Zip Code"
                rows="2"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center md:justify-between ">

            <div className="mb-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="e.g. 9876543210"
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>
            <div className="mb-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
              <select
                name="duration"
                value={form.duration}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              >
                <option value="">Select Duration</option>
                <option value="1 Day">1 Day</option>
                <option value="3 Days">3 Days</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="1 Month">1 Month</option>
              </select>
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
                className="w-full border border-gray-300 rounded-md px-4 py-2 mt-2"
              />
              <button type="button" onClick={handlecoupancode} className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition ml-2">
                Apply
              </button>
            </div>}
          </div>
          { referral && (
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
      </div >

    </>
  );
};

export default BookService;
