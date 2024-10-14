import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const skillsData = [
  { name: 'React', level: 50 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'Tailwind CSS', level: 75 },
  { name: 'Bootstrap', level: 85 },
  { name: 'Node.js', level: 30 },
];

function Skill() {
  return (
    <div id='skills' className="bg-gray-100 py-10 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 dark:text-white">My Skills</h2>
      <div className="max-w-6xl mx-auto mt-10">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center dark:text-white">Skill Proficiency</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={skillsData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="level" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Skill