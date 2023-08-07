import React from 'react'
import '../style/about.css'
import profileImage from '../Component/pngfile.png'

export default function About() {
  return (
    <div className='section'>
      <div className='aboutt'>
        <div className='title'>
          <h1>Hey there, I'm Diwash.</h1>
          <p>
            A passionate and tech-savvy student currently pursuing my Bachelor of Information Technology (BIT) at Texas College of Management and IT.
            Welcome to my digital space!
          </p>
        </div>
        <h3 className='topic'>My Journey in Technology
        </h3>
        <span>Ever since I was young, I've been captivated by the world of technology. From exploring the inner workings of computers to coding my first lines, the digital realm has always felt like home to me. Now, as a 3rd-year BIT student, I'm delving even deeper into the fascinating world of IT.</span>
        <h3 className='topic'>Areas of Interest</h3>
        <span>As an IT enthusiast, I have developed a keen interest in various areas within the field. My coursework has allowed me to explore subjects like software development, database management, cybersecurity, and networking. Additionally, I've been actively involved in extracurricular projects that have given me a taste of real-world IT challenges.</span>
        <h3 className='thanks'>Thank you for visiting, and I hope you enjoy exploring my digital world.</h3>
        <div className='contacts'>
        <span>
          Mail:
        dwaskc@gmail.com
          </span>
        <span>Contact no:
        +977-9810299243
          </span>
          <span>
          Residency:
        Nepal
          </span>
       

      </div>
      </div>
      <div className="photo">
        <img src={profileImage} alt='Profile' className='pngfile' />

      </div>
      

    </div>

  )
}
