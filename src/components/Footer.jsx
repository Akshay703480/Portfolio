import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram } from 'react-icons/fa'; 

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        
        <div>
          <h3 className="text-lg font-semibold mb-4 ">Site Map</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="flex items-center text-white">
                <span className="material-icons mr-2">home</span>
                Home
              </a>
            </li>
            <li>
              <a href="/portfolio" className="flex items-center text-white">
                <span className="material-icons mr-2">description</span>
                Portfolio
              </a>
            </li>
            <li>
              <a href="/privacy" className="flex items-center text-white">
                <span className="material-icons mr-2">lock</span>
                Privacy
              </a>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 ">About Me</h3>
           My passion lies in web development, especially in crafting visually appealing and user-friendly interfaces. </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="mailto:akshaychandran41@gmail.com" className="flex items-center text-white">
                <span className="material-icons mr-2">email</span>
                Email
              </a>
            </li>
            <li>
              <a href="https://github.com" className="flex items-center text-white">
                <span className="material-icons mr-2">code</span>
                GitHub
              </a>
            </li>
          </ul>
        </div>

        
      </div>

      <div className="mt-8 flex  justify-center space-x-6">
          <a href="https://www.linkedin.com/in/akshay-chandran-b4a316297/" className="text-3xl text-white hover:text-gray-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Akshay703480" className="text-3xl text-white hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="" className="text-3xl text-white hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="" className="text-3xl text-white hover:text-gray-400">
            <FaTelegram />
          </a>
          <a href="https://www.instagram.com/ak_sha_yy._/" className="text-3xl text-white hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
    </footer>
  );
}

export default Footer;
