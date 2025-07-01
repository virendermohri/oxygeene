'use client'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const OxyTagline = () => {
  const taglines = [
    "CareKwik is here, no need to fear.",
    "Love and care, we’re always there — CareKwik.",
    "Night or day, we light your way — CareKwik by your side.",
    "Heart and tech, we’ll keep you in check — that’s CareKwik.",
    "From pain to peace, our care won’t cease — CareKwik for you.",
    "Ease your mind, peace you’ll find — CareKwik every time."
  ];


  return (
    <div className=" relative   backdrop-blur-sm bg-black  flex items-center justify-center">
      
      <img src="https://res.cloudinary.com/divlt5fqo/image/upload/v1751345302/wmremove-transformed_1_shyymm.jpg"
        className='md:h-[90vh] w-full object-cover  top-0 opacity-50  left-0 z-10'
        alt="" />
      <div className="text-center  inline-block text-white text-lg md:text-2xl absolute bottom-[10%] left-0 w-full font-semibold z-10  p-4 mt-5 font-mono ">
      {/* <button className='bg-white bg-black text-black rounded cursor-pointer px-4 py-2 '>Book Caretaker</button> */}
        <Typewriter
          words={taglines}
          loop={0} // Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={3000}
        />
      </div>
    </div>
  );
};

export default OxyTagline;
