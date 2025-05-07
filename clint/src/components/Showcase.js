// components/Showcase.js
import React from "react";

// const media = [
//   { type: "video", src: "https://res.cloudinary.com/divlt5fqo/video/upload/v1746254624/VID-20250503-WA0012_ani51h.mp4" },
//   { type: "video", src: "https://res.cloudinary.com/divlt5fqo/video/upload/v1746254625/VID-20250503-WA0011_xjjnsz.mp4" },
//   { type: "video", src: "https://res.cloudinary.com/divlt5fqo/video/upload/v1746254623/VID-20250503-WA0004_uknbw6.mp4" },
//   { type: "image", src: "https://res.cloudinary.com/divlt5fqo/image/upload/v1746254565/IMG-20250503-WA0001_e5f40e.jpg" },
//   { type: "image", src: "https://res.cloudinary.com/divlt5fqo/image/upload/v1746254569/IMG-20250503-WA0002_pkknnt.jpg" },
// ];
const media = [
  {
    type: "image",
    src: "https://res.cloudinary.com/divlt5fqo/image/upload/v1746254565/IMG-20250503-WA0001_e5f40e.jpg",
    description: "Setup of home medical equipment by our team",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/divlt5fqo/video/upload/v1746254624/VID-20250503-WA0012_ani51h.mp4",
    description: "Caregiver assisting an elderly patient at home",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/divlt5fqo/video/upload/v1746254623/VID-20250503-WA0004_uknbw6.mp4",
    description: "Caregiver assisting an elderly patient at home",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/divlt5fqo/image/upload/v1746254569/IMG-20250503-WA0002_pkknnt.jpg",
    description: "In-home nursing care for post-surgery recovery",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/divlt5fqo/video/upload/v1746254625/VID-20250503-WA0011_xjjnsz.mp4",
    description: "Quick ambulance response for emergency care",
  },
];
const Showcase = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work Speaks for Itself</h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          From compassionate caretakers to advanced medical equipment setup, explore how CareKwik is transforming healthcare through real stories, services, and smiles.
        </p>
      </div>

      <div className="grid  sm:grid-cols-2 md:grid-cols-3  gap-10 max-w-7xl mx-auto">
        {media.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden  bg-white "
          >
            <div className="w-full  ">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Work ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              ) : (
                <video
                  autoPlay
                  muted
                  loop
                  download={false}
                  playsInline
                  className="w-full h-full  object-contain"
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="p-3 text-sm text-gray-700 font-medium">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;