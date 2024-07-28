import React, { useState, useEffect } from 'react';
import ban1 from "./ban0.jpg";
import ban2 from "./ban4.jpg";
import ban3 from "./ban3.jpg"
const images = [ban1, ban2,ban3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex px-4 flex-col items-center justify-center mt-11'>
      <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-96 xl:h-112 overflow-hidden ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
