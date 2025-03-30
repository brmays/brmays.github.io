
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "My cat hacked the Pentagon using their AI. 5 stars!!!",
    author: "DogLover88"
  },
  {
    text: "I wanted burger, got Python script. Still delicious!",
    author: "CodeEater42"
  },
  {
    text: "Their AI wrote my wedding vows. I'm now married to my toaster.",
    author: "ToastBride"
  },
  {
    text: "Best cat-based micro-services in town! Meow-velous!",
    author: "CrazyCatLady"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="max-w-md mx-auto bg-white p-4 border-4 border-neon-green rounded shadow-md my-8">
      <h3 className="text-center font-comic text-lg mb-4 text-hot-pink">WHAT OUR CUSTOMERS SAY:</h3>
      <div className="italic text-center font-comic">"{current.text}"</div>
      <div className="text-right mt-2 font-bold font-comic">- {current.author}</div>
    </div>
  );
};

export default TestimonialCarousel;
