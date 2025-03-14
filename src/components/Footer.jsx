import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin } from 'lucide-react';

// Footer Component
const Footer = () => {
  return (
    // Footer container with background color, text color, and shadow
    <footer className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
        {/* Grid layout with three columns on medium screens and above */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* First column: Brand Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Users className="h-8 w-8 text-white-400" /> {/* Users icon */}
              <span className="text-2xl font-bold">CommunionHub</span> {/* Brand name */}
            </div>
            <p className="text-white-400 text-sm">
              Connecting people of all faiths through events and community support.
            </p> {/* Short description */}
          </div>

          {/* Second column: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3> {/* Section title */}
            <ul className="space-y-3">
              {/* Navigation links */}
              <li><Link to="/" className="text-white-400 hover:text-blue-900 transition-colors">Home</Link></li>
              <li><Link to="/events" className="text-white-400 hover:text-blue-900 transition-colors">Events</Link></li>
              <li><Link to="/about" className="text-white-400 hover:text-blue-900 transition-colors">Abouts</Link></li>
            </ul>
          </div>

          {/* Third column: Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3> {/* Section title */}
            <ul className="space-y-3">
              {/* Email */}
              <li className="flex items-center space-x-3 text-white-400">
                <Mail className="h-6 w-6" />
                <span>support@communionhub.com</span>
              </li>
              {/* Phone */}
              <li className="flex items-center space-x-3 text-white-400">
                <Phone className="h-6 w-6" />
                <span>+91 XXXX XXXX</span>
              </li>
              {/* Address */}
              <li className="flex items-center space-x-3 text-white-400">
                <MapPin className="h-6 w-6" />
                <span>Hyderabad, India.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright section */}
        <div className="border-t-2 border-white-800 mt-12 pt-8 text-center text-white-400">
          <p>&copy; 2025 CommunionHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
