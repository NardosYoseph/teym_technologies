"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = ({ isOverview }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isOverview ? 'bg-transparent' : 'bg-blue-600 shadow-md'}`}>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
      {!isOpen && (  <Link href="/" className="text-2xl font-bold">
          <span className={isOverview ? 'text-blue-100' : 'text-blue-100'}>TeymTech</span>
        </Link>)}
        <button
          className={`md:hidden ${isOverview ? 'text-blue-100' : 'text-blue-100'} focus:outline-none`}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <ul className={`flex space-x-6 md:flex md:items-center ${isOpen ? "block" : "hidden"} md:block`}>
          {[
            { label: 'Home', href: '/' },
            { label: 'About Us', href: '/pages/aboutus' },
            { label: 'Services', href: '/pages/services' },
            { label: 'Projects', href: '/pages/projects' },
            { label: 'Contact', href: '/pages/contact' }
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={`transition-colors duration-300 ${isOverview ? 'text-blue-100' : 'text-blue-100 hover:text-blue-200'}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
