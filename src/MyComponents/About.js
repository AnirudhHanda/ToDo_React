import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h1 className="relative inline-block text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl mb-8">
          <span className="relative z-10">About</span>
          
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          This ToDo app helps you organize your tasks efficiently and boost your productivity. 
          It allows you to add, edit, and delete tasks easily. 
          You can mark them as complete, and filter them based on their status.
        </p>
        <p className="mt-4 text-lg text-gray-200">
          For any questions or feedback, please contact us at: anirudhhanda2@gmail.com
        </p>
      </div>
    </div>
  );
};

export default About;
