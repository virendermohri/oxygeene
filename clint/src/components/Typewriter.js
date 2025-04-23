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
    <div className="text-center text-lg md:text-2xl   font-semibold p-4 mt-5 font-mono">
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
  );
};

export default OxyTagline;
