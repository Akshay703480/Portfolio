import React, { useState, useEffect } from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Skills from '../components/Skill';


const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and apply/remove class from body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`w-full h-auto items-center justify-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Pass darkMode and toggleDarkMode to Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
