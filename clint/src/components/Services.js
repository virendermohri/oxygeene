'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import "../app/globals.css";


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
const slugifyServices = (servicename) => {
  return servicename
      .toLowerCase()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-') // replace non-alphanumerics with hyphen
      .replace(/^-+|-+$/g, '')      // remove leading/trailing hyphens
  ;
};
export default function Services({  }) {
  return (
    <div id='services' className=" border px-4 md:mb-20 md:h-screen md:h-auto md:max-w-5xl  w-full mx-auto  py-8  ">
      <div className="flex flex-col">
        <h1 className='font-bold text-2xl mb-10'>Our Services</h1>
        <div className="grid md:grid-cols-5 grid-cols-3 justify-center md:gap-10 gap-6 ">
          {services.map((item, index) => {
            return <Link href={`/book-service?service=${slugifyServices(item.title)}`} className="flex cursor-pointer flex-col gap-2 " key={item.title}>
              <Image src={item.image_url} className='w-full rounded-xl shadow' width={100} height={100} alt={item.title} />
              <h1 className='md:font-semibold  md:text-black text-gray-700 md:text-xl '>{item.title}</h1>
              <p className='text-gray-600 md:block hidden'>{item.description}</p>
            </Link>
          })}
        </div>
      </div>
    </div>
  );
}
