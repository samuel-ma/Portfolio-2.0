import React from 'react';
import '../styles/home.css';

function Home() {
  return (
    <div className='home-div'>
      <div className='Home'>
      <div className="home-container">
        <p className='phone'>+04 6545-9535-6515</p>
        <p className='email'>samuel-majuk@gmail.com</p>
      </div>

      <div className='hero-section'>
          <div className='description'>
        <p>Hello, My name is</p>
        <p className='samuel'>Samu&l Majok</p>
        <p className='full'>Full Stack Developer</p>
        <p className='design'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.</p>

        <div className='download'>
          <p>Download CV</p>
        </div>

          </div>

          <div className='image-div'>
            <img src='../images/1.svg' alt='hero' className='image' />
          </div>
      </div>
      
    </div>
    </div>
  )
}

export default Home;