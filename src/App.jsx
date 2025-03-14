import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import Home from './pages/Home';  
import Events from './pages/Events';  
import About from './pages/About';  

function App() {  
  return (  
    // Wrapping the entire application inside Router to enable routing  
    <Router>  
      <div className="min-h-screen bg-gray-50 flex flex-col">  
        {/* Navbar component displayed at the top of the page */}
        <Navbar />  
        
        {/* Main content area that will change based on the route */}
        <main className="flex-grow">  
          <Routes>  
            {/* Route for the home page */}
            <Route path="/" element={<Home />} />  
            
            {/* Route for the events page */}
            <Route path="/events" element={<Events />} />  
            
            {/* Route for the about page */}
            <Route path="/about" element={<About />} />  
          </Routes>  
        </main>  
        
        {/* Footer component displayed at the bottom of the page */}
        <Footer />  
      </div>  
    </Router>  
  );  
}  

export default App;  
