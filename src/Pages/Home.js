import React from 'react'
import '../style/home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Home() {
  return (
    <div>
      <div className='home'>
        <div className='about'>
          <h2>Hi, I am Diwash.</h2>
          <div className='prompt'>
            <p> A frontend developer with a passion of learning and creating.</p>
            <LinkedInIcon/>
            <InstagramIcon/>
            <EmailIcon/>
            <GitHubIcon/>

          </div>
        </div>
        
      
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='items'></li>
          <h1>Front-end</h1>
          <p>Html, CSS, ReactJs</p>
          <li className='items'></li>
          <h1>Back-end</h1>
          <p>Python, NodeJs</p>
          <li className='items'></li>
          <h1>Others</h1>
          <p>C++, JavaScript</p>
        </ol>
      </div>
    </div>
    </div>
  )
}
