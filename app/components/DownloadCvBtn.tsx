// components/DownloadButton.tsx
'use client'
import React from 'react';
//import CV from "../../public/THOMAS MITHAMO CV-update2.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import useDownloader from "react-use-downloader";


export default function DownloadCvBtn(){
    const { size, elapsed, percentage, download,
        cancel, error, isInProgress } =useDownloader();
    const fileUrl = "/public/assets/THOMAS MITHAMO CV-update2.pdf";
    const filename = "File.pdf";
    const handleDownloadClick = () => {
        download(fileUrl, filename)
    }
      

  return (
    <button onClick={handleDownloadClick} style={{
        backgroundColor:"white",
        borderWidth:"20%",
        marginLeft:"10%",
        padding:10,
        color:"red",
    }} > <FontAwesomeIcon icon={faDownload} style={{
        height:"20px",
        width:"20px",
    }} /> Download CV</button>
  );
};

//export default DownloadCvBtn;
