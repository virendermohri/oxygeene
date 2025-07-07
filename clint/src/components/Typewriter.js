'use client'
import React from 'react';

import Link from 'next/link';

const OxyTagline = () => {
 

  return (

    <div className= " relative md:max-w-5xl w-full md:mt-10 m-auto ">

      <img src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751460739/wmremove-transformed_2_sxrfa6.jpg"
        className=' w-full md:h-[450px] shadow-lg object-cover border-1 border-gray-100 md:rounded-lg'
        alt="" />
      <div className=" absolute text-white   flex md:top-[65%] top-[45%] w-[80%]  flex-col flex items-start justify-center left-[3%] gap-3">
        <h1 className="md:text-4xl   md:text-5xl font-bold text-center  ">
        Your Health, Our Priority
        </h1>
        <p className='md:text-center text-xs md:text-base font-sans'>Comprehensive healthcare services tailorde to your need, delvered with care and experties.</p>
        <Link href="#services">
        <button className='bg-[#607AFB] md:text-base text-xs font-mono cursor-pointer text-white rounded-full py-2 px-4'>Explore Servies</button>
        </Link>
      </div>
    </div>
  );
};

export default OxyTagline;
