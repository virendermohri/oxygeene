"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FesitvalBanner() {
  return (
    <div className="relative w-full bg-gradient-to-r from-orange-600 via-pink-600 to-yellow-500 text-white py-3 md:py-4 overflow-hidden">
      {/* Decorative diya or candle icons (optional images) */}
      <div className="absolute left-3 top-0 h-full flex items-center">
        <Image
          src="https://res.cloudinary.com/divlt5fqo/image/upload/v1760421988/lamp_lamp_offer_f01jv7.png"
          alt="Diya"
          width={80}
          height={80}
          className="animate-bounce"
        />
      </div>

      <div className="absolute right-3 top-0 h-full flex items-center">
        <Image
          src="https://res.cloudinary.com/divlt5fqo/image/upload/v1760421988/lamp_lamp_offer_f01jv7.png"
          alt="Lantern"
          width={80}
          height={80}
          className="animate-bounce"
        />
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center gap-2 md:gap-4 px-14 md:px-0">
        <p className="text-sm md:text-lg font-medium flex items-center gap-2">
          <span className="md:block hidden ">🪔</span> <span>Celebrate a Healthy & Joyful Diwali with CareKwik</span>  <span className="md:block hidden ">🪔</span>
        </p>
        <Link
          href="/offers"
          className="bg-white text-orange-600 font-semibold text-sm md:text-base px-4 py-2 rounded-full shadow hover:bg-orange-50 hover:scale-105 transition-all"
        >
          Get Festive Discount 🎁
        </Link>
      </div>

      {/* Optional floating candles at bottom */}
      <div className="absolute -bottom-2 left-10 w-6 h-6 bg-yellow-300 rounded-full blur-sm opacity-80 animate-ping"></div>
      <div className="absolute -bottom-2 right-10 w-6 h-6 bg-yellow-300 rounded-full blur-sm opacity-80 animate-ping"></div>
       <style jsx>{`
        .animate-flicker-soft {
          animation: flicker 4.5s infinite ease-in-out alternate;
        }

        @keyframes flicker {
          0% {
            opacity: 0.9;
            transform: translateY(0);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-1px);
          }
          100% {
            opacity: 0.9;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
