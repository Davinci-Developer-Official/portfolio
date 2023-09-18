import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode , faPaintBrush , faLaptop, faVideoCamera, faCut } from '@fortawesome/free-solid-svg-icons';

const SkillsNav = () => {
  return (
    <div style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        marginBottom:5,
        height:"100px"
    }} >
        <div style={{
            width:"18%",
            //backgroundColor:"rgba(148, 133, 242, 1)",
            height:"80px",
            marginTop:"5px",
            borderRadius:20,
            borderColor:"rgba(148, 133, 242, 1)",
            borderWidth:1.5
        }}>
            <p className='sm:text-sm md:text-lg lg:text-xl' style={{
            paddingTop:"10%",
            textAlign:"center",
            color:"rgba(148, 133, 242, 1)"
        }}>Software Development</p></div>
        <div style={{
            width:"18%",
            //backgroundColor:"rgba(219, 37, 235, 1)",
            height:"80px",
            marginTop:"5px",
            borderRadius:20,
            borderWidth:1.5,
            borderColor:"rgba(219, 37, 235, 1)"
        }}><p className='sm:text-sm md:text-lg lg:text-xl' style={{
            paddingTop:"10%",
            textAlign:"center",
            color:"rgba(219, 37, 235, 1)"
        }}>UI/UX Design & Prototyping </p></div>
        <div style={{
            width:"18%",
            //backgroundColor:"rgba(190, 83, 83, 1)",
            height:"80px",
            marginTop:"5px",
            borderRadius:20,
            borderWidth:1.5,
            borderColor:"rgba(190, 83, 83, 1)"
        }}><p className='sm:text-sm md:text-lg lg:text-xl' style={{
            paddingTop:"10%",
            textAlign:"center",
            color:"rgba(190, 83, 83, 1)"
        }}>Technical Writing</p></div>
        <div style={{
            width:"18%",
            //backgroundColor:"rgba(144, 2, 255, 1)",
            height:"80px",
            marginTop:"5px",
            borderRadius:20,
            borderWidth:1.5,
            borderColor:"rgba(144, 2, 255, 1)"
        }}><p className='sm:text-sm md:text-lg lg:text-xl' style={{
            paddingTop:"10%",
            textAlign:"center",
            color:"rgba(144, 2, 255, 1)"
        }}>Video Editing & Production </p></div>
        <div style={{
            width:"18%",
            //backgroundColor:"rgba(37, 225, 124, 1)",
            height:"80px",
            marginTop:"5px",
            borderRadius:20,
            borderWidth:1.5,
            borderColor:"rgba(37, 225, 124, 1)"
        }}>
            <p className='sm:text-sm md:text-lg lg:text-xl' style={{
            paddingTop:"10%",
            textAlign:"center",
            color:"rgba(37, 225, 124, 1)"
        }}>Graphic Design</p></div>
    </div>
  )
}

export default SkillsNav