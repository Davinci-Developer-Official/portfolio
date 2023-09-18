import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCart'
import Navbar from './components/Navbar'
import DashContent from './components/DashContent'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import FAQS from './components/FAQS'

export default function Home() {
  return (
    <>
    <Navbar/>
    <DashContent/>
    <AboutMe/>
    <FAQS/>
    <Footer/>
    </>
  )
}
