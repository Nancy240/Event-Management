import React from 'react';
import { useNavigate } from 'react-router-dom'; // Hook for programmatic navigation
import { motion } from 'framer-motion'; // Animation library for smooth transitions
import { Heart, Users, Calendar } from 'lucide-react'; // Icons from Lucide React library
import animation from '../assets/animation.mp4'; // Importing an animation video (not used in the component)

const About = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

  return (
    <div className="min-h-screen">
      {/* About section with padding and background color */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading section with title and description */}
          <div className="text-center mb-16" style={{ opacity: 1, transform: 'none' }}>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About
              <span className="text-blue-900"> CommunionHub</span>   
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're building bridges between communities, fostering understanding, 
              and creating meaningful connections across different faiths and cultures.
            </p>
          </div>

          {/* Grid layout for features with animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Community Building Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              whileInView={{ opacity: 1, y: 0 }} // Animation on view
              transition={{ duration: 0.5, delay: 0.1 }} // Smooth transition effect
              className="text-center p-6"
            >
              <Users className="w-12 h-12 text-blue-900 mx-auto mb-4" /> {/* Icon for community */}
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-gray-600">
                Engage with like-minded individuals, create lasting connections, 
                and build a supportive network.
              </p>
            </motion.div>

            {/* Diverse Events Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              whileInView={{ opacity: 1, y: 0 }} // Animation when component comes into view
              transition={{ duration: 0.5, delay: 0.2 }} // Smooth transition with delay
              className="text-center p-6"
            >
              <Calendar className="w-12 h-12 text-blue-900 mx-auto mb-4" /> {/* Icon for events */}
              <h3 className="text-xl font-semibold mb-2">Diverse Events</h3>
              <p className="text-gray-600">
                Get involved in diverse events that cater to all interests – 
                from religious gatherings to social and charitable activities.
              </p>
            </motion.div>

            {/* Support Network Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              whileInView={{ opacity: 1, y: 0 }} // Animation effect
              transition={{ duration: 0.5, delay: 0.3 }} // Smooth transition with delay
              className="text-center p-6"
            >
              <Heart className="w-12 h-12 text-blue-900 mx-auto mb-4" /> {/* Icon for support */}
              <h3 className="text-xl font-semibold mb-2">Support Network</h3>
              <p className="text-gray-600">
                Access a caring community that offers guidance, emotional support, 
                and a safe space to be heard.
              </p>
            </motion.div>

          </div> {/* End of grid */}
        </div>
      </section>
    </div>
  );
};

export default About;
