import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaGift,
  FaInfoCircle,
  FaUserCircle,
  FaShoppingCart,
  FaUser,
  FaBuilding,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [shoppingDropdown, setShoppingDropdown] = useState(false);
  const accountRef = useRef(null);
  const shoppingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Close dropdowns when clicking outside
    const handleClickOutside = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountDropdown(false);
      }
      if (shoppingRef.current && !shoppingRef.current.contains(event.target)) {
        setShoppingDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+916396028950";
  };

  const handleWhatsApp = () => {
    const phoneNumber = "916396028950";
    const message = "Hi, I want to book event decoration services in Meerut.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleUserLogin = () => {
    setAccountDropdown(false);
    setIsOpen(false);
    navigate("/user/login");
  };

  const handleUserRegister = () => {
    setAccountDropdown(false);
    setIsOpen(false);
    navigate("/user/register");
  };

  const handleBusinessLogin = () => {
    setAccountDropdown(false);
    setIsOpen(false);
    navigate("/admin/login");
  };

  const handleBusinessRegister = () => {
    setAccountDropdown(false);
    setIsOpen(false);
    navigate("/admin/register");
  };

  const handleLogout = () => {
    setAccountDropdown(false);
    setIsOpen(false);
    navigate("/logout");
  };

  const handleOrderDashboard = () => {
    setShoppingDropdown(false);
    setIsOpen(false);
    navigate("/user/OrderDashbord");
  };

  // Check if user is logged in (you can replace this with actual auth logic)
  const isLoggedIn = false; // Change this based on your auth state

  const navItems = [
    { name: "Services", icon: <FaGift />, href: "/services" },
    { name: "About", icon: <FaInfoCircle />, href: "/about" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-white"}
      `}
    >
      <div className="px-4 py-3 md:py-2 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Meerut Event Hub"
              className="w-12 h-12 md:w-10 md:h-10"
            />
            <div>
              <h1 className="text-lg md:text-base font-bold text-gray-900">
                Meerut Event Hub
              </h1>
              <p className="text-sm md:text-xs text-gray-500">
                Creating Unforgettable Moments
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                <span className="text-blue-500">{item.icon}</span>
                {item.name}
              </Link>
            ))}

            {/* Shopping Dropdown */}
            <div className="relative" ref={shoppingRef}>
              <button
                onClick={() => setShoppingDropdown(!shoppingDropdown)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                <span className="text-blue-500">
                  <FaShoppingCart />
                </span>
                Shopping
                <FaChevronDown className="text-xs" />
              </button>

              {shoppingDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border">
                  <button
                    onClick={handleOrderDashboard}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 text-gray-700"
                  >
                    <FaShoppingCart className="text-blue-500" />
                    Order Dashboard
                  </button>
                </div>
              )}
            </div>

            {/* Account Dropdown */}
            <div className="relative" ref={accountRef}>
              <button
                onClick={() => setAccountDropdown(!accountDropdown)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium"
              >
                <span className="text-blue-500">
                  <FaUserCircle />
                </span>
                Account
                <FaChevronDown className="text-xs" />
              </button>

              {accountDropdown && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-red-50 text-red-600 font-medium"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>

                  <>
                    <button
                      onClick={handleUserLogin}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 text-gray-700"
                    >
                      <FaUser className="text-blue-500" />
                      User Login
                    </button>
                    <button
                      onClick={handleUserRegister}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 text-gray-700"
                    >
                      <FaUser className="text-blue-500" />
                      User Register
                    </button>

                    <div className="border-t my-1"></div>

                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Business Account
                    </div>
                    <button
                      onClick={handleBusinessLogin}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 text-gray-700"
                    >
                      <FaBuilding className="text-green-500" />
                      Business Login
                    </button>
                    <button
                      onClick={handleBusinessRegister}
                      className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-blue-50 text-gray-700"
                    >
                      <FaBuilding className="text-green-500" />
                      Business Register
                    </button>
                  </>
                </div>
              )}
            </div>

            <button
              onClick={handleCall}
              className="flex items-center gap-2 px-4 py-2 rounded-full
              border border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <FaPhoneAlt size={14} />
              Call Now
            </button>

            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 px-4 py-2 rounded-full
              bg-green-600 text-white hover:bg-green-700"
            >
              <FaWhatsapp size={16} />
              WhatsApp
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 rounded-xl bg-white shadow-lg p-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-4 py-4 rounded-lg
                text-lg font-medium text-gray-800 hover:bg-blue-50"
              >
                <span className="text-blue-600 text-xl">{item.icon}</span>
                {item.name}
              </Link>
            ))}

            {/* Mobile Shopping */}
            <div className="px-4 py-4">
              <div className="font-medium text-gray-700 mb-2 flex items-center gap-3">
                <FaShoppingCart className="text-blue-600 text-xl" />
                Shopping
              </div>
              <div className="pl-7 space-y-2">
                <button
                  onClick={handleOrderDashboard}
                  className="w-full text-left py-2 px-3 rounded-lg hover:bg-blue-50 text-gray-700"
                >
                  Order Dashboard
                </button>
              </div>
            </div>

            {/* Mobile Account */}
            <div className="px-4 py-4">
              <div className="font-medium text-gray-700 mb-2 flex items-center gap-3">
                <FaUserCircle className="text-blue-600 text-xl" />
                Account
              </div>
              <div className="pl-7 space-y-2">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-left py-2 px-3 rounded-lg hover:bg-red-50 text-red-600 font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2 mb-1">
                      User Account
                    </div>
                    <button
                      onClick={handleUserLogin}
                      className="w-full flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-blue-50 text-gray-700"
                    >
                      <FaUser className="text-blue-500" />
                      User Login
                    </button>
                    <button
                      onClick={handleUserRegister}
                      className="w-full flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-blue-50 text-gray-700"
                    >
                      <FaUser className="text-blue-500" />
                      User Register
                    </button>

                    <div className="border-t my-2"></div>

                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2 mb-1">
                      Business Account
                    </div>
                    <button
                      onClick={handleBusinessLogin}
                      className="w-full flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-blue-50 text-gray-700"
                    >
                      <FaBuilding className="text-green-500" />
                      Business Login
                    </button>
                    <button
                      onClick={handleBusinessRegister}
                      className="w-full flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-blue-50 text-gray-700"
                    >
                      <FaBuilding className="text-green-500" />
                      Business Register
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className="pt-4 border-t space-y-3">
              <button
                onClick={handleCall}
                className="w-full flex items-center justify-center gap-3
                py-4 text-lg rounded-lg bg-blue-600 text-white"
              >
                <FaPhoneAlt /> Call Now
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3
                py-4 text-lg rounded-lg bg-green-600 text-white"
              >
                <FaWhatsapp /> WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
