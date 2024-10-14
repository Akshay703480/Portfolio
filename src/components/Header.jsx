import React from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';


function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-4 px-8 shadow-md bg-gray-500 dark:bg-gray-800 text-white">
      <div className="flex items-center mb-2 sm:mb-0"> 
        <img className="rounded-full w-8 h-8 mr-2" src="./src/assets/logo.jpg" alt="Logo" /> 
        <h1 className="text-xl sm:text-2xl font-bold text-white">Akshay Chandran</h1>
      </div>

      <nav className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-lg">
        <a href="#home" className="text-white hover:text-gray-300">Home</a>
        <a href="#about" className="text-white hover:text-gray-300">About</a>
        <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
        <a href="#skills" className="text-white hover:text-gray-300">Skills</a>
        <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
        <a ><DarkModeSwitcher/></a>
      </nav>
    </header>
  );
}

export default Header;
