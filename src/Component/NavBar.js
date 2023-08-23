import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css';
import profileImage from './pngfile.png';

export default function NavBar() {
  return (
    <>
    <div className='tooglebar'>
       <img src={profileImage}alt='Profile' className='pngfile'/>
       <span>
        <h2>Dwas</h2>
        </span>
        {/* <PersonIcon/> */}
       
      <div className='links'>
        <Link to ='/'>Home</Link>
        <Link to ='/about'>About</Link>
        <Link to ='/projects'>Projects</Link>
        <Link to ='/education'>Education</Link>

      </div>
    </div >
    </>
  )
}
