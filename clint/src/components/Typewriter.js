'use client'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const OxyTagline = () => {
  const taglines = [
    "When care is near, there's nothing to fear — Oxygeene is always here.",
    "For love and care, we’re always there — Oxygeene.",
    "Day or night, we bring the light — Oxygeene by your side.",
    "With heart and screen, we care unseen — that’s Oxygeene.",
    "From pain to peace, our care won’t cease — only with Oxygeene.",
    "Feel the ease, live in peace — choose Oxygeene."
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
