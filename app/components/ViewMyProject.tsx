'use client';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode , faPaintBrush , faLaptop, faVideoCamera, faCut, faHandPaper, faFolder } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const ViewMyProject = () => {
  return (
    <Link href="/projects" className="btn glass text-yellow-900"> <FontAwesomeIcon icon={faFolder} style={{
      height:"30px",
      width:"30px",
      color:"yellow",
      marginTop:5,
      marginLeft:10,
    }} /> View My Projects</Link>
  )
}

export default ViewMyProject