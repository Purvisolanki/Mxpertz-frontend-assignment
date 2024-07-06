import React, { useEffect } from 'react';

const displayImage = async () => {
  try {
    const response = await fetch('https://ik.imagekit.io/dev24/');
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const imageData = await response.json(); 
    const imageUrl = imageData.url; 
    document.querySelector('.hero-image').src = imageUrl;
  } catch (error) {
    console.log(error);
  }
};

const Design1Page = () => {
  useEffect(() => {
    try {
      displayImage();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className='relative w-screen overflow-hidden bg-indigo-900'>
      <div className="relative w-full h-80 overflow-hidden">
        <img
          src='assets/space.jpeg'
          alt='dummy image'
          className='hero-image w-full object-cover h-80'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center bg-indigo-900 bg-opacity-50'>
          <h1 className="text-4xl font-bold text-white text-center mb-4">Science Fiction Stories</h1>
          <div className="flex justify-center">
            <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded-full">New</button>
            <button className="mx-2 px-4 py-2 bg-yellow-500 text-white rounded-full">In Progress</button>
            <button className="mx-2 px-4 py-2 bg-green-500 text-white rounded-full">Completed</button>
            <button className="mx-2 px-4 py-2 bg-blue-600 text-white rounded-full">Clear All</button>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 flex items-end justify-center'>
        <svg
          className='h-20 w-screen'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'
        >
          <path
            className='fill-current text-indigo-900'
            d='M0,288L60,272C120,256,240,224,360,192C480,160,600,128,720,144C840,160,960,224,1080,240C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Design1Page;
