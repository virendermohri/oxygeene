'use client';
import Image from 'next/image';
import React from 'react';

import { SlLike, SlDislike } from "react-icons/sl";


const Testimonials = () => {
  return (
  
    <div className="md:max-w-5xl px-2  w-full mx-auto  py-8">
      <h1 className='text-2xl font-bold mb-10'>Testimonials</h1>

      <div className="flex flex-col mb-10">
        <div className="flex gap-5 mb-5">
          <Image width={100} height={100} className='h-12 w-12 rounded-full' alt='Ravi Mehta' src={"https://res.cloudinary.com/divlt5fqo/image/upload/v1746626443/1434464084-1187_1_cfxprf.png"} />
          <div className="flex flex-col">
            <p className='font-medium md:text-xl'>Priya Sharma</p>
            <p className='font-medium text-gray-500'>2023-05-15</p>
          </div>
        </div>
        <div className="flex  gap-1 mb-5">

          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
        </div>
        <p className='font-medium md:text-base text-xs text-gray-700'>The physiotherapy service were excellent. The therapist was knowledgeable and helped me recover quickly from my injury.</p>
        <div className="flex gap-10 mt-5 font-medium text-gray-500 items-center">
          <div className="flex gap-2 items-center">
            <SlLike /> 15
          </div>
          <SlDislike />
        </div>
      </div>
      <div className="flex flex-col mb-10">
        <div className="flex gap-5 mb-5">
          <Image width={100} height={100} className='h-12 w-12 rounded-full' alt='Ravi Mehta' src={"https://res.cloudinary.com/divlt5fqo/image/upload/v1746626591/average-height-in-men-in-india_900_bwjs3k.jpg"} />
          <div className="flex flex-col">
            <p className='font-medium text-xl'>Ravi Mehta</p>
            <p className='font-medium text-gray-500'>2023-09-20</p>
          </div>
        </div>
        <div className="flex  gap-1 mb-5">

          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-gray-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z"
            ></path>
          </svg>
        </div>
        <p className='font-medium text-gray-700  md:text-base text-xs'> The elder care provided for my grandmother was very caring and professional. We are grateful for their support.</p>
        <div className="flex gap-10 mt-5 font-medium text-gray-500 items-center">
          <div className="flex gap-2 items-center">
            <SlLike /> 12
          </div>
          <SlDislike />
        </div>
      </div>
      <div className="flex flex-col mb-10">
        <div className="flex gap-5 mb-5">
          <Image width={100} height={100} className='h-12 w-12 rounded-full' alt='Ravi Mehta' src={"https://res.cloudinary.com/divlt5fqo/image/upload/v1746626506/e2d88306b280450d5ff98421db4296be_f6lxaf.jpg"} />
          <div className="flex flex-col">
            <p className='font-medium text-xl'>Sunita Deswal</p>
            <p className='font-medium text-gray-500'>2023-10-05</p>
          </div>
        </div>
        <div className="flex  gap-1 mb-5">

          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" className='text-blue-700' fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
            ></path>
          </svg>
        </div>
        <p className='font-medium text-gray-700  md:text-base text-xs'> The mother and baby care services were a lifesaver. The nurses were incredibly helpful and supportive during a challenging time.</p>
        <div className="flex gap-10 mt-5 font-medium text-gray-500 items-center">
          <div className="flex gap-2 items-center">
            <SlLike /> 25
          </div>
          <SlDislike />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
