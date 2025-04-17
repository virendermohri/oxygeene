"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const services = {
  "Elder Care": { durations: ["Daily", "Weekly", "Monthly"], price: { Daily: 800, Weekly: 5000, Monthly: 15000 } },
  "Nursing Care": { durations: ["Daily", "Monthly"], price: { Daily: 800, Monthly: 20000 } },
  "Physiotherapy": { durations: ["Session"], price: { Session: 1200 } },
  "Doctor Consultation": { durations: ["30 mins"], price: { "30 mins": 500 } },
  "Mother & Baby Care": { durations: ["Weekly", "Monthly"], price: { Weekly: 6000, Monthly: 18000 } },
};

export default function BookService({  }) {
  const searchParam = useSearchParams();
  const serviceParam = searchParam.get('service') || '';
  const serviceKey = Object.keys(services).find(
    key => key.toLowerCase() === serviceParam.toLowerCase()
  );
  const selectedService = serviceKey ? { name: serviceKey, ...services[serviceKey] } : null;
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [address, setAddress] = useState("");
  const [name, SetName] = useState("");
  const [scheduleDateTime, setScheduleDateTime] = useState("")
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(0);

  // ⬇️ Get user address from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user?.address) setAddress(user.address);
      if (user?.name) SetName(user.name);
    }
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
    try {
      e.preventDefault();

      let data = { address, scheduleDateTime, serviceName: selectedService.name,price, duration, paymentMethod };
      const res = await fetch("http://localhost:5000/api/bookservice/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify(data),
      });
      const response = await res.json();
      console.log(response)
      if (res.ok) {
        toast.success("Booking successful!");
        setTimeout(() => (window.location.href = "/my-account"), 2000);
      } else {
        console.log(response.error)
        toast.error(response.error || "Something went wrong.");
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="max-w-3xl m-auto p-6 bg-white md:h-screen mt-10 rounded">
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          Book {selectedService.name}
        </h1>

        <form >


          <div className="mb-4">
            <label className="block font-medium mb-1">Select Duration:</label>
            <select onChange={((e) => { setDuration(e.target.value) })} name="duration" required className="w-full border p-2 rounded">
              {selectedService.durations.map((d) => (
                <option key={d} value={d}>
                  {d} - ₹{selectedService.price[d]}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Schedule Date & Time:</label>
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
            <label className="block font-medium mb-1">Payment Method:</label>
            <select required name="paymentMethod" onChange={((e) => { setPaymentMethod(e.target.value) })} className="w-full border p-2 rounded">
              <option value="online">Online</option>
              <option value="cash">Cash on Service</option>
            </select>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full cursor-pointer bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </>

  );
}
