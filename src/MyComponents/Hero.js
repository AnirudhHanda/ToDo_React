import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-royalblue via-blue-600 to-darkslateblue py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl shadow-lg">Get Things Done</h1>
        <p className="mt-4 text-lg">Organize your tasks efficiently and boost your productivity.</p>
        <Link to="/todos" className="inline-block bg-gray-100 text-gray-900 font-semibold py-3 px-8 mt-8 rounded-full shadow-md hover:bg-gray-200 hover:text-gray-900 transform hover:scale-95 transition duration-500">Get Started</Link>
      </div>
    </div>
  );
};

export default Hero;
