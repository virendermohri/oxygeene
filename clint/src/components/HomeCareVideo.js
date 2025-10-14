
import React from "react";
import Link from "next/link";

export default function HomeCareWomenVideo() {
  return (
    <section className="relative max-w-7xl mx-auto h-[80vh] flex items-center justify-center overflow-hidden shadow-lg my-10">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/divlt5fqo/video/upload/v1760281721/5793218-uhd_3840_2160_25fps_eljzll.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🩺 Overlay for contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* ✨ Foreground Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
         Restore Strength with Physiotherapy at Home 🏋️‍♂️
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-100">
          Expert physiotherapists help you recover mobility, reduce pain, and
          regain confidence — all from the comfort of your home.
        </p>
        <Link
          href="/physiotherapy-at-home"
          className="bg-pink-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-transform hover:scale-105"
        >
          Explore Services
        </Link>
      </div>
    </section>
  );
}
