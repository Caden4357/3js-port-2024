import React, { useState, useEffect } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../components/HOC';
import { technologies } from '../constants';

const Tech = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false); // State to track if images are loaded

  useEffect(() => {
    // Function to preload all images
    const preloadImages = () => {
      let loadedImagesCount = 0;
      technologies.forEach((tech) => {
        const img = new Image();
        img.src = tech.icon;

        img.onload = () => {
          loadedImagesCount++;
          // Check if all images are loaded
          if (loadedImagesCount === technologies.length) {
            setImagesLoaded(true); // Set images loaded state to true
          }
        };

        img.onerror = () => {
          console.error(`Failed to load image: ${tech.icon}`);
          loadedImagesCount++;
          // Even on error, count as "loaded" to avoid infinite wait
          if (loadedImagesCount === technologies.length) {
            setImagesLoaded(true); // Set images loaded state to true
          }
        };
      });
    };

    preloadImages(); // Call the function to preload images
  }, []); // Empty dependency array to run this once on mount

  if (!imagesLoaded) {
    return <div>Loading...</div>; // Display a loading message or spinner until images are loaded
  }

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {
      imagesLoaded &&
      technologies.map((tech, idx) => (
        <div className='w-28 h-28' key={idx}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
