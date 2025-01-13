'use client';
import React, { useState, useEffect } from "react";

const FlipWords = () => {
  const words = [
    "Generative AI",
    "Frontend developer",
    "Backend developer",
    "Mobile app development",
    "NextJS developer",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative h-12 w-full flex justify-center items-center overflow-hidden">
      <div className="text-7xl font-extrabold text-center gradient-text flip">
        {words[currentWordIndex]}
      </div>
    </div>
  );
};

export default FlipWords;
