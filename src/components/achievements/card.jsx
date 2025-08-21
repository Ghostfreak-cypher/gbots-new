import React from 'react';

function AchievementCard() {
  return (
    <section className='w-full h-screen flex flex-col items-center justify-center p-4'>
      <div className='max-w-7xl h-1/6 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-center'>Projects</h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-lg text-center'>
            Here are some of the projects I've worked on.
          </p>
        </div>
      </div>
      <div className='w-full h-5/6 flex flex-col items-center justify-center md:flex-row md:flex-wrap md:justify-around'>
        <div className='flex flex-col items-center justify-center m-2 p-4 bg-gray-900 rounded-lg shadow-lg transform transition duration-500 hover:scale-105'>
          <div className='image-container w-full md:w-96 h-64 rounded-lg overflow-hidden'>
            <img
              src='https://images.pexels.com/photos/31402214/pexels-photo-31402214.jpeg'
              alt='Project 1'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='flex flex-col items-center justify-center mt-4'>
            <h1 className='text-2xl font-bold text-center'>Project 1</h1>
            <p className='text-lg text-center'>
              Here is a description of the project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AchievementCard;
