// components/Footer.js
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const teamMembers = [
    { name: 'Magan', photo: '/team/Magan.jpg' },
    { name: 'Omesh', photo: '/team/Omesh.jpg' },
    { name: 'Aditya', photo: '/team/Aditya.jpg' },
    { name: 'Swapnil', photo: '/team/Swapnil.jpg' },
    { name: 'Divyansh', photo: '/team/Divyansh.jpg' },
    { name: 'Chandrashekhar', photo: '/team/Chandrashekhar.jpg' },
    { name: 'Sumit', photo: '/team/Sumit.jpg' },
    { name: 'Rakesh', photo: '/team/Rakesh.jpg' },
    { name: 'Saksham', photo: '/team/Saksham.jpg' },
    { name: 'Vansh', photo: '/team/Vansh.jpg' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="text-center mb-8">
          <p className="text-lg">Active Users: 120</p>
          <p className="text-lg">Sales Till Now: 145</p>
          <Link href="https://forms.gle/NNhpDrgjUN5mpmvh9">           <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            For more details, click here
          </button></Link>

        </div>

        {/* Team Section */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold">Team Wallatrio</h3>
          <p className="text-gray-400 mt-1">Meet our talented team members</p>
        </div>
        <div className="flex flex-wrap justify-around gap-4">
          {teamMembers.map((member, index) => (
           
             
              <div className="text-center mt-2">{member.name}</div>
          
          ))}
        </div>
      </div>
      <div className="text-center text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Wallatrio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
