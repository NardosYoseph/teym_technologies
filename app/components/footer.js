// components/Footer.js

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the subscription logic here
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-8 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
        
        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors duration-300">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 transition-colors duration-300">Services</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition-colors duration-300">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">Contact Us</Link>
            </li>
          </ul>
        </div>
        
        {/* Services */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services/web-development" className="hover:text-blue-400 transition-colors duration-300">Web Development</Link>
            </li>
            <li>
              <Link href="/services/app-development" className="hover:text-blue-400 transition-colors duration-300">App Development</Link>
            </li>
            <li>
              <Link href="/services/consulting" className="hover:text-blue-400 transition-colors duration-300">Consulting</Link>
            </li>
            <li>
              <Link href="/services/marketing" className="hover:text-blue-400 transition-colors duration-300">Digital Marketing</Link>
            </li>
          </ul>
        </div>

   

        {/* Follow Us */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      {/* <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <h3 className="text-lg font-semibold mb-2">Contact Information</h3>
        <p>Email: <a href="mailto:info@teymtech.com" className="hover:text-blue-400">info@teymtech.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="hover:text-blue-400">+1 (234) 567-890</a></p>
        <p>Address: 123 Main St, City, Country</p>
      </div> */}

      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TeymTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
