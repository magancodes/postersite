import React from 'react';
import Image from 'next/image';

const Card = ({ url, number }: { url: string; number: number }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-white border rounded-lg shadow-md overflow-hidden">
      {/* Number overlay */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
        {number}
      </div>
      {/* Image */}
      <Image
        src={url}
        alt="poster"
        width={150}
        height={200}
        className="object-cover w-full h-full"
      />
    </div>
  );
};

export default Card;
