import React, { useState, useEffect } from "react";

const images = [
  "https://i.ytimg.com/vi/6okddtpBcTE/maxresdefault.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQURHAKom3m8N3tUU-oZVVrJCCZN7DCDulTlQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvZFcNjskhEQXXkEyyqtwb-dOxy87I_oRqA&s"
];

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full  rounded-xl flex justify-center  shadow-2xl max-w-3xl mx-auto overflow-hidden relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full rounded-xl flex-shrink-0">
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-[300px] rounded-xl object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
