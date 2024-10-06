// components/Overview.js

import Navbar from '../navbar';
import ThreeDScene from './ThreeDScene';
import { useEffect } from 'react';

export default function Overview() {
  useEffect(() => {
    const animateText = () => {
      const title = document.querySelector('.animated-title');
      title.classList.add('fade-in');

      setTimeout(() => {
        title.classList.remove('fade-in');
        title.classList.add('slide-up');
      }, 3000);
    };

    animateText();
  }, []);

  return (
    <div id="overview" className="fixed w-full h-screen overflow-hidden ">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/vid12.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 3D Animation Background */}
      {/* <ThreeDScene />  */}

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8 text-center">
        <h1 className="animated-title text-5xl md:text-6xl font-extrabold leading-tight opacity-0 transition-opacity duration-700 delay-200 ">
          Welcome to <span className="text-blue-500">Teym Technologies</span>
        </h1>
        <p className="text-lg text-gray-800 md:text-2xl max-w-2xl transition-opacity duration-700 delay-400 mb-8">
          We build innovative software solutions for businesses that thrive in the digital age.
        </p>
        <a
          href="#services"
          className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105 "
        >
          Explore Our Services
        </a>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 1s forwards;
        }

        .slide-up {
          animation: slideUp 0.5s forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
