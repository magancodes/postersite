import Link from 'next/link';
import React from 'react';

const Banner = () => {
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
    
    
    
  ];

  return (
    <div className="banner overflow-y-hidden w-full text-black grid-background">
      <div className="slider" style={{ '--quantity': images.length } as any}>
        {images.map((src, index) => (
          <div className="item" key={index} style={{ '--position': index + 1 } as any}>
            <img src={src}  />
          </div>
        ))}
      </div>
      <div className="content flex justify-center">
       <h1 data-content="WALLATRIO " className='px-32'>WALLATRIO</h1>
        
        <div className="model"></div>
      </div>

     
    </div>
  );
  
};

export default Banner;
