"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import BookingSuccessModal from "./BookingSuccessModal";
const services = {
  "Elder Care": {
    durations: ["Daily", "Weekly", "Monthly"],
    price: { Daily: 600, Weekly: 4500, Monthly: 15000 },
  },
  "Nursing Care": {
    durations: ["Daily", "Monthly"],
    price: { Daily: 800, Monthly: 20000 },
  },
  "Physiotherapy": {
    durations: ["Session"],
    price: { Session: 1200 },
  },
  "Doctor Consultation": {
    durations: ["30 mins"],
    price: { "30 mins": 500 },
  },
  "Mother Baby Care": {
    durations: ["Weekly", "Monthly"],
    price: { Weekly: 6000, Monthly: 18000 },
  },
};

const BookService = () => {
  const searchParam = useSearchParams();
  const serviceParam = searchParam.get("service") || "";
  const caretakerParam = searchParam.get("caretaker");

  const serviceKey = Object.keys(services).find(
    (key) => key.toLowerCase() === serviceParam.toLowerCase()
  );
  const selectedService = serviceKey
    ? { name: serviceKey, ...services[serviceKey] }
    : null;

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [address, setAddress] = useState("");
  const [phone_number, SetPN] = useState();
  const [scheduleDateTime, setScheduleDateTime] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(0);
  const [caretaker, setCaretaker] = useState(null);
  const [loading, setLoading] = useState(true);
  const[ismoadalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.address) setAddress(user.address);
    
    }
    const res = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/caretaker/${caretakerParam}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCaretaker(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching caretaker:", error);
      });

  }, []);

  useEffect(() => {
    if (selectedService && selectedService.durations.length > 0) {
      setDuration(selectedService.durations[0]);
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedService && duration && selectedService.price?.[duration]) {
      setPrice(selectedService.price[duration]);
    }
  }, [selectedService, duration]);

  if (!selectedService) {
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        Invalid service selected.
      </div>
    );
  }

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    localStorage.setItem("userAddress", e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        address,
        scheduleDateTime,
        serviceName: selectedService.name,
        price,
        duration,
        phone_number,
        paymentMethod,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookservice/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      if (res.ok) {
        setIsModalOpen(true);
        setTimeout(() => (window.location.href = "/"), 5000);
      } else {
        toast.error(response.error || "Something went wrong.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Booking failed.");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <BookingSuccessModal isOpen={ismoadalOpen} onClose={(()=>{setIsModalOpen(false)})}/>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-white">
          <h1 className="text-xl font-semibold text-gray-600">Loading...</h1>
        </div>):

      <div className="max-w-3xl m-auto p-10 md:mb-20 bg-gray-100  md:h-screen mt-10 rounded">
        <div className="flex justify-between mb-6">

          <h1 className=" text-2xl font-bold text-green-700">
            {selectedService.name}
          </h1>
          <div className="flex justify-center items-center gap-4 text-gray-600 mb-4">
            <Image
              width={100}
              height={100}
              src={caretaker.photo}
              alt={caretaker.name}
              className="w-10 h-10 md:w-15 md:h-15 rounded-full object-cover  shadow-md "
            />
             {caretaker?.name || "Caretaker"}
          </div>
        </div>

        <form>
          <div className="mb-4">
            <label className="block font-medium mb-1">Select Duration:</label>
            <select
              onChange={(e) => setDuration(e.target.value)}
              name="duration"
              required
              className="w-full border p-2 rounded"
            >
              {selectedService.durations.map((d) => (
                <option key={d} value={d}>
                  {d} - ₹{selectedService.price[d]}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">
              Schedule Date & Time:
            </label>
            <input
              type="datetime-local"
              name="schedule"
              value={scheduleDateTime}
              onChange={(e) => setScheduleDateTime(e.target.value)}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Address:</label>
            <textarea
              name="address"
              value={address}
              onChange={handleAddressChange}
              className="w-full border p-2 rounded bg-gray-100 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-1">Phone:</label>
            <input
              type="tel"
              name="phone_number"
              
              onChange={((e) => SetPN(e.target.value))}
              required
              inputMode="numeric"
              pattern="[0-9]{10}"
              className="w-full border p-2 rounded bg-gray-100 text-gray-700"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Payment Method:</label>

            <p className="p-2 bg-white rounded ">Cash on Service</p>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>}
    </>
  );
};

export default BookService;
