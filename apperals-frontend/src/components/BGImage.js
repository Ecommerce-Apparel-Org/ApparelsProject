import React from 'react';
import backgroundImageTwo from '../assets/clothes_img.jpg';
import image from './BGImage.css';
import { Link } from 'react-router-dom';


function BGImage() {
  const handleClick = () => {
    console.log('Button clicked');
  }

  return (
    <div className='container'>
      <div className='text-overlay'>Elevate Your Style</div>
      <div className='text-overlaytwo'>Discover your fashion identity with our curated collections.</div>
      <button onClick={handleClick}>
        Shop Now
      </button>
    </div>
  );
} 

export default BGImage;
