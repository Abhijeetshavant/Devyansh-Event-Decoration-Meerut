import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaGift,
  FaInfoCircle,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+916396028950";
  };

  const handleWhatsApp = () => {
    const phoneNumber = "916396028950";
    const message = "Hi, I want to book event decoration services in Meerut.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const navItems = [
    { name: "Services", icon: <FaGift />, href: "/services" },
    { name: "About", icon: <FaInfoCircle />, href: "/about" },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-2" : "bg-white shadow-sm py-3"}`}
      >
        <div className="w-full px-4">
          <div className="flex items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <img
                src={logo}
                alt="Meerut Event Hub Logo"
                className={`transition-all duration-300 ${scrolled ? "w-10 h-10" : "w-12 h-12"}`}
              />
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 whitespace-nowrap">
                  Meerut Event Hub
                </h1>
                <p
                  className={`text-xs text-gray-500 transition-all duration-300 ${scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"}`}
                >
                  Creating Unforgettable Moments
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group relative"
                >
                  <span className="text-blue-500">{item.icon}</span>
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>

            {/* Contact Buttons */}
            <div className="flex items-center gap-2">
              {/* Call Button - Desktop */}
              <button
                onClick={handleCall}
                aria-label="Call"
                className="hidden md:flex group relative items-center gap-2 px-4 py-2 
                  rounded-full border border-blue-600 
                  text-blue-600 hover:bg-blue-50 
                  transition-all duration-300 hover:shadow-md"
              >
                <FaPhoneAlt size={14} />
                <span className="text-sm font-medium">Call Now</span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* WhatsApp Button - Desktop */}
              <button
                onClick={handleWhatsApp}
                aria-label="WhatsApp"
                className="hidden md:flex group items-center gap-2 px-4 py-2 
                  rounded-full bg-gradient-to-r from-green-500 to-green-600 
                  text-white hover:shadow-lg 
                  transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp size={16} />
                <span className="text-sm font-medium">WhatsApp</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                aria-label="Menu"
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col gap-2 w-full">
                {/* Navigation Items with Icons */}
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 
                      text-gray-700 hover:text-blue-600 hover:bg-blue-50 
                      rounded-lg font-medium transition-all duration-300 w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-blue-500 text-lg">{item.icon}</span>
                    <span className="text-base">{item.name}</span>
                  </a>
                ))}

                {/* Mobile Call to Action Section */}
                <div className="mt-2 p-4 bg-blue-50 rounded-lg w-full">
                  <p className="text-sm text-gray-700 text-center mb-3">
                    Get in touch with us for your event planning needs
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        handleCall();
                        setIsOpen(false);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                          rounded-lg bg-blue-600 text-white 
                          hover:bg-blue-700 transition-colors duration-300"
                    >
                      <FaPhoneAlt /> Call Now
                    </button>
                    <button
                      onClick={() => {
                        handleWhatsApp();
                        setIsOpen(false);
                      }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                          rounded-lg bg-green-600 text-white 
                          hover:bg-green-700 transition-colors duration-300"
                    >
                      <FaWhatsapp /> WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
