import React from 'react'
import backgroundImageTwo from '../assets/clothes_img.jpg'
import image from './BGImage.css';


function BGImage() {
  return (
    <div className='container'>
      <img src={backgroundImageTwo} alt="Background" className='bg-image'/>
    </div>
  )
}

export default BGImage
