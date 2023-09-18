
import React from 'react'
import Navbar from '../components/Navbar'
import SkillStorage from '../components/SkillStorage'
import Footer from '../components/Footer'
import SkillsNav from '../components/SkillsNav'

const page = () => {
  return (
    <>
    <Navbar/>
    <SkillsNav/>
    <SkillStorage/>
    <Footer/>
    </>
  )
}

export default page