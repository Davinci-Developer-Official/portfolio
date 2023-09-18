'use client'
import React from 'react'

import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ViewCvBtn = () => {
  return (
    <button className="btn btn-active btn-primary"> <FontAwesomeIcon icon={faFile} style={{
      height:"20px",
      width:"20px",
      color:"yellow",
      marginTop:5,
      marginLeft:10,
    }} /> View CV</button>
  )
}

export default ViewCvBtn