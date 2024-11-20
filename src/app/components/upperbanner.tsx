// components/Carousel.js
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '../../../public/image/jjk_1.png';
import img2 from '../../../public/image/top_1.png';
import img3 from '../../../public/image/stranger_things_2.webp';
import img4 from '../../../public/image/sukuna_2.png';
import img5 from '../../../public/image/luffy_1.webp';
import img6 from '../../../public/image/gojo_2.png';
import img7 from '../../../public/image/sukuna_1.png';
import Link from 'next/link';


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4,img5,img6,img7];
  const descriptions = [
    "Here is a collection of some of the most famous posters in our collections. \nJujutsu Kaisen",
    " \nTournament Of Power Dragon Ball Super",
    " \nStranger Things",
    " \n Sukuna from Jujutsu Kaisen",
    " \n Luffy from One Piece",
    " \n Gojo from Jujutsu Kaisen",
    " \n Sukuna from Jujutsu Kaisen",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel w-full overflow-hidden">
      <div className="list flex">
        <div className="item flex-shrink-0 w-full font-black text-white">
          <Image src={images[currentIndex]} alt={`img${currentIndex + 1}`} />
          <div className="content p-4">
            <div className="author">TEAM WALLATRIO</div>
            <div className="title">OUR POSTERS</div>
            <div className="topic">ANIME</div>
            <div className="des text-white font-black text-3xl">{descriptions[currentIndex]}</div>
            <div className="buttons">
              <button className="mr-2 text-black font-bold">SEE MORE</button>
              <Link href="https://www.instagram.com/startup_walltrio/profilecard/?igsh=dnI0dTNuaDVxdTNz" className='text-black bg-opacity-0 text-2xl font-black'>
              <button >SUBSCRIBE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail flex mt-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`item cursor-pointer ${index === currentIndex ? 'border border-blue-500' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image src={img} alt={`Thumbnail ${index + 1}`} />
            <div className="content p-2">
              <div className="title">Name Slider {index + 1}</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="arrows flex justify-between mt-4 ">
        <button onClick={handlePrev} id="prev">&lt;</button>
        <button onClick={handleNext} id="next">&gt;</button>
      </div>

      {/* Time Indicator */}
      <div className="time mt-2 h-1 bg-blue-500 w-full"></div>
    </div>
  );
};

export default Carousel;
