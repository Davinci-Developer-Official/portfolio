import React from 'react'
import ViewMyProject from './ViewMyProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode , faPaintBrush , faLaptop, faVideoCamera, faCut, faHandPaper } from '@fortawesome/free-solid-svg-icons';

const DashContent = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md  ">
      <h1 className="mb-5 text-5xl font-bold flex flex-row" >Hello there <FontAwesomeIcon icon={faHandPaper} style={{
        height:"30px",
        width:"30px",
        color:"yellow",
        marginTop:5,
        marginLeft:10,
      }} /> </h1>
      <p className="mb-5 text-2xl italic bg-white bg-opacity-20 rounded  ">
      "I am a versatile developer skilled in web development, mobile app development, API development, and proficient in utilizing GitHub for version control and collaboration, with a passion for creating innovative and user-centric solutions."  
      </p>
      <ViewMyProject/>
    </div>
  </div>
</div>
  )
}

export default DashContent