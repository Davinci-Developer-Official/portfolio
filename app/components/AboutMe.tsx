'use client';
import Image from 'next/image';
import React from 'react'
import profile from '../../public/Official Thomas Mithamo Image.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFile } from '@fortawesome/free-solid-svg-icons';
import ViewCvBtn from './ViewCvBtn';


const AboutMe = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
    <Image
      src={profile}
      alt="Tommy"
      
      className="max-w-sm rounded-lg shadow-1xl"
    />
      <div>
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="py-6 text-2xl italic ">
        I'm a Kenyan-born software developer with over 4 years of experience. My expertise includes software development, UI/UX design, technical blogging, graphic design, and open-source contributions. I actively share tech content on social platforms like Twitter, YouTube, Instagram, and Facebook, fostering a robust online tech community. You can find my detailed CV on LinkedIn, showcasing my career achievements and contributions to the tech industry. I'm passionate, versatile, and committed to making a positive impact in the world of technology.
        </p>
       <ViewCvBtn/>
      </div>
    </div>
  </div>
  )
}

export default AboutMe