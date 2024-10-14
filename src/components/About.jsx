
import React from 'react';


function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col items-center justify-center p-8 dark:bg-gray-800 bg-gray-200 text-gray-900"
    >
 
      <h1 className="text-4xl font-bold dark:text-white mb-3 text-grey-30">About Me</h1>

 
      <div className="flex flex-col md:flex-row items-center justify-center p-8 rounded-lg shadow-lg   bg-white">
       
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 ">
          <img 
            src="./src/assets/IMG_1030.JPG" 
            alt="Profile" 
            className="rounded-lg w-96 h-96 object-cover" 
          />
        </div>
        
        <div className="text-center md:text-left font-style4 ">
          <h1 className="text-lg font-light mb-1">Hello Everybody, I am</h1>
          <h2 className="text-4xl font-bold mb-2">AKSHAY CHANDRAN</h2>
          <h3 className="text-xl font-semibold mb-4">MERN stack developer</h3>
          <p className="mb-6">
          I am currently a MERN stack developer in training at Luminar Technolab, building on my foundation from a Diploma in Computer Engineering at Govt. Polytechnic College Cherthala. My passion lies in web development, especially in crafting visually appealing and user-friendly interfaces.
          </p>

          <div className="space-y-2">
            
            <div className="flex items-center justify-center md:justify-start">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7z"/>
              </svg>
              <span>17th November, 2000</span>
            </div>

        
            <div className="flex items-center justify-center md:justify-start">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c2.05 4.1 5.47 7.52 9.57 9.57l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.36 2.33.57 3.59.57.55 0 1-.45 1-1V17c0-.55-.45-1-1-1-5.52 0-10-4.48-10-10 0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1 0 1.26.2 2.47.57 3.59.12.35.03.74-.24 1.02l-2.2 2.2c-.3.3-.3.77 0 1.06l2.2 2.2z"/>
              </svg>
              <span>+91-7034801338</span>
            </div>

        
            <div className="flex items-center justify-center md:justify-start">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 13.865l-9.599-5.18c-.264-.143-.4-.425-.4-.719s.136-.576.4-.719l9.599-5.18 9.599 5.18c.264.143.4.425.4.719s-.136.576-.4.719L12 13.865z"/>
              </svg>
              <span>akshaychandran41@gmail.com</span>
            </div>

         
            <div className="flex items-center justify-center md:justify-start">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 3.75 5.53 11.54 6.27 12.64.38.57 1.08.57 1.46 0C13.47 20.54 19 12.75 19 9c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9s-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Alappuzha, Kerala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
