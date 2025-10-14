"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const menServices = [
  {
    title: "Post-Surgery Recovery",
    image:
      "https://res.cloudinary.com/divlt5fqo/image/upload/v1760422806/300-SM1086010_njjljl.jpg",
  },
  {
    title: "Physiotherapy at Home",
    image:
      "https://res.cloudinary.com/divlt5fqo/image/upload/v1760422884/220-SM449419_fndpo3.jpg",
  },
  {
    title: "Elder Care for Men",
    image:
      "https://res.cloudinary.com/divlt5fqo/image/upload/v1760425106/300-SM1064711_jdeg1d.jpg",
  },
  {
    title: "Cardiac Care at Home",
    image:
      "https://res.cloudinary.com/divlt5fqo/image/upload/v1760425321/15-SM226434_loa6sx.jpg",
  },
];

export default function HomeCareForMen() {
  return (
    <section className="">
      <div className="max-w-7xl py-12 mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Home Care Services for Men 🩺
        </h2>

        {/* Cards container */}
        <div className="flex md:grid md:grid-cols-4 gap-5 overflow-x-auto scrollbar-hide">
          {menServices.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 md:flex-shrink md:w-auto w-64 bg-white shadow overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Optional View More Button */}
        <Link href={"#Typewriter"} className="flex justify-center mt-8">
          <button  className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition">
            View All Services
          </button>
        </Link>
      </div>
    </section>
  );
}
