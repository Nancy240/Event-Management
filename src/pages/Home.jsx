import React from "react";  
import { Link } from "react-router-dom";  
import animation from '../assets/animation.mp4';  // Importing video file for background  

const Home = () => {  
  return (  
    <div className="relative h-screen flex flex-col justify-center items-center bg-cover">  
      {/* Background video that plays automatically, loops, and is muted */}
      <video autoPlay loop muted className="h-screen w-screen object-cover">  
        <source src={animation} type="video/mp4" />    
      </video>  

      {/* Overlay content with gradient background and text */}
      <div className="absolute bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 m-4 bg-blue-30 px-6 py-8 lg:p-14 rounded-lg shadow-lg max-w-3xl text-white text-center">  
        
        {/* Main heading */}
        <h1 className="lg:text-4xl md:text-4xl text-2xl font-bold mb-2">  
          Welcome to{" "}  
          <span className="text-blue-900 font-bold">CommunionHub</span>  
        </h1>  

        {/* Subheading with a brief description */}
        <p className="text-base md:text-base lg:text-lg mb-6">  
          Connecting people of all faiths through events and community support.  
        </p>  

        {/* Secondary heading */}
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold mb-4">  
          Connecting People Across Faiths & Interests  
        </h2>  

        {/* Additional description */}
        <p className="lg:text-lg mb-6 max-w-md mx-auto">  
          Join events that inspire, connect, and support communities worldwide.  
        </p>  

        {/* Link button to navigate to the events page */}
        <Link  
          to="/events"  
          className="bg-white text-blue-900 px-6 py-1 lg:px-8 lg:py-3 rounded-md text-base lg:text-lg font-semibold shadow-md hover:bg-[#ecf4cb] transition"  
        >  
          Explore Events  
        </Link>  
      </div>  
    </div>  
  );  
};  

export default Home;  
