import React from 'react';

function Project() {
  const projectData = [
    {
      id: 1,
      title: 'Simple Budget Calculator',
      description: 'A brief description of project 1.',
      imageUrl: './src/assets/Budjet.jpg',
      link:'https://akshay703480.github.io/budgetcalculator/',
    },
    {
      id: 2,
      title: 'Online Bank website',
      description: 'A brief description of project 2.',
      imageUrl: './src/assets/onlinebank.jpg',
      link:'https://akshay703480.github.io/onlinebank/',
    },
    {
      id: 2,
      title: 'Online Bank website',
      description: 'A brief description of project 2.',
      imageUrl: './src/assets/furniture.jpg',
      link:'https://furniture-shopsite-akshaychandran.netlify.app/',
    },
  ];

  return (
    <section id="projects" className=" dark:from-gray-800 min-h-screen py-12 bg-gradient-to-r  from-gray-500 to-gray-100 text-white">
      <div className="container mx-auto ">
        <h2 className="text-5xl font-bold mb-4 text-center">My Projects</h2>
        <p className="text-lg mb-8 text-center">
          Explore some of my recent works and projects that I have been passionate about.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="w-72 p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="mb-4 rounded-lg object-cover h-48 w-full"
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <button onClick={() => window.open(project.link)} className=" mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200">
              <span className="material-icons mr-2">code</span> Live Link
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
