"use client";
import React, { useState } from 'react';
import Card from './Card';

const Posterzone = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const images = [
    '/image/got_1.png',
    '/image/inozuke_1.jpg',
    '/image/madara_1.jpg',
    '/image/naruto_1.jpg',
    '/image/nari_jiraya_1.jpg',
    '/image/tanjiro_1.jpg',
    '/image/virat_1.png',
    '/image/team_blue_1.png',
    '/image/goku_1.jpg',
    '/image/L_1.jpg',
    '/image/stranger_things_!.webp',
    '/image/gojo_1.webp',
    '/image/batman_1.png',
    '/image/spiderman_1.png',
    '/image/miles_1.png',
    '/image/spiderman_2.png',
    '/image/godofwar_1.png',
    '/image/godofwar_2.png',
   
    '/image/luffy_1.webp',
    '/image/sukuna_2.png',
    '/image/stranger_things_2.webp',
    '/image/top_1.png',
    '/image/jjk_1.png',
    
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 grid-background">
      {images.map((src, index) => (
        <div
          key={index}
          className={`w-[450px] h-auto flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black hover:z-10`}
          style={{
            transform: `rotateY(${index === hoveredIndex ? 0 : index < hoveredIndex ? -10 : 10}deg)`,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(0)}
        >
          <Card url={src} number={index + 1} />
          
        </div>
      ))}
    </div>
  );
};

export default Posterzone;
