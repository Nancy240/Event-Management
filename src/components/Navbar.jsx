import React, { useState } from 'react'; // Importing React and useState hook for state management
import { Link, useLocation } from 'react-router-dom'; // Importing Link for navigation and useLocation to track current route
import { Users, Menu, X } from 'lucide-react'; // Importing icons from Lucide React
import { motion, AnimatePresence } from 'framer-motion'; // Importing motion and AnimatePresence from Framer Motion for animations
import favicon from '../assets/favicon.ico';

const Navbar = () => {
  const location = useLocation(); // Hook to get the current location (route)
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track whether the mobile menu is open or not

  return (
      <nav className="bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            
            {/* Logo and Brand Name */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
              <img src="/favicon.ico" alt="Logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-900">CommunionHub</span> {/* Brand name */}
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home Link */}
              <Link to="/" className={`nav-link px-3 py-2 text-sm font-medium ${location.pathname === '/' ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'}`}>
                Home
              </Link>
              {/* Events Link */}
              <Link to="/events" className={`nav-link px-3 py-2 text-sm font-medium ${location.pathname === '/events' ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'}`}>
                Events
              </Link>
              {/* About Link */}
              <Link to="/about" className={`nav-link px-3 py-2 text-sm font-medium ${location.pathname === '/about' ? 'text-blue-900' : 'text-gray-700 hover:text-blue-900'}`}>
                About
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-900 focus:outline-none">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />} {/* Show Menu or Close icon based on state */}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }} // Initial animation state
              animate={{ opacity: 1, height: 'auto' }} // Animate to full visibility and height
              exit={{ opacity: 0, height: 0 }} // Exit animation when menu is closed
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {/* Mobile Home Link */}
                <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                {/* Mobile Events Link */}
                <Link to="/events" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/events' ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setIsMenuOpen(false)}>
                  Events
                </Link>
                {/* Mobile About Link */}
                <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/about' ? 'text-blue-900 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
};

export default Navbar;
