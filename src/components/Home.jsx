import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    
    <section 
      id='home' 
      className="w-screen relative flex flex-col md:flex-row items-center justify-between text-center md:text-left p-8 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/45/3f/14/453f143ad31ed8482ebed9c4084b8059.jpg')`, 
      }}
    >
      
      <div className="absolute inset-0 bg-gradient-to-t  from-black via-gray-800 to-white opacity-60" />
      <div className="flex-1 text-center p-4 rounded-lg relative z-10"> 
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
          Hi There, <br />
          I'm <span className="text-gray-200">Akshay Chandran</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300">
          I Am Into <span className="text-white">Web Development</span>
        </p>

        
        <button
          type="button"onClick={() => window.scrollTo(0, 1000) }
          className="text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mt-4"
        >
          About Me
        </button>

        
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
      </div>

    
      <div className="flex-1 mt-12 md:mt-0 flex justify-center relative z-10"> 
        <img
          src="./src/assets/IMG_0838.JPG" 
          alt="Akshay Chandran Avatar"
          className="w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-yellow-400 shadow-lg" 
        />
      </div>
    </section>
  );
}

export default Home;
