// components/BookingSuccessModal.jsx
import React from 'react';
import { FaCheckSquare } from "react-icons/fa";
const BookingSuccessModal = ({ isOpen, onClose }) => {
  if (isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-10 p-5  z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full text-center">
        <h2 className="text-xl  flex items-center justify-center gap-2 font-semibold text-green-600 mb-4"><FaCheckSquare className=''/> Booking Confirmed!</h2>
        <p className="text-gray-700 mb-4">
          Thank you for booking with CareKwik. You&sbquo;ll receive a confirmation message shortly.
        </p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default BookingSuccessModal;
