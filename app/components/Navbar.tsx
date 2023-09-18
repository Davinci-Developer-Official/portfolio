'use client';
import Link from 'next/link'
import React from 'react'
import logo from '../../public/T.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
       
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link href='/'>Homepage</Link></li>
        <li><Link href='/skills'>Skills</Link></li>
        <li><Link href='/projects'>Projects</Link></li>
        <li><Link href='/blogs'>Blogs</Link></li>
        <li><Link href='/videos'>Videos</Link></li>
        <li><Link href='/contact'>Contact Me </Link></li>
        <li><Link href='/cv'>View CV </Link></li>

      </ul>
    </div>
  </div>
  
  <div className="navbar-center">
 
    <a className="btn btn-ghost normal-case text-xl">Thomas Joseph Mithamo</a>
  </div>
  <div className="navbar-end">
 
    <span style={{
      marginRight:10,
      width:"40px"
    }} >
       <Image 
     src={logo}
     alt='logo'
     width="34" 
     height="34"/>
       </span>
  </div>
</div>
  )
}

export default Navbar