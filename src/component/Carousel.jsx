import React from 'react'
import { useState, useEffect } from 'react';
import img1 from "../assets/carousel/ad1.jpg";
import img2 from "../assets/carousel/ad2.jpg";
import img3 from "../assets/carousel/ad3.jpg";


const Carousel = () => {

  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = images.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [nextSlide, prevSlide]);

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>

      <div className="arrows">
        <div className="arrow" onClick={prevSlide}>
          &#10094;
        </div>
        <div className="arrow" onClick={nextSlide}>
          &#10095;
        </div>
      </div>
    </div>
  )
}

export default Carousel