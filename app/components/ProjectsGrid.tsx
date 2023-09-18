import React from 'react'
import davinci from '../../public/davinciImage.jpeg'
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';


interface Projects{
    id:number;
    projectname:string;
    projectdescription:string;
    languagesused:string;
    projectlink:string;
    contributor:string;
}
const ProjectsGrid = () => {

    const projects : Projects[] = [
        {
            id:1,
            projectname:"Orion Developers",
            projectdescription:"Official website for Orion Developers LTD",
            languagesused:"Javascript{Next JS}",
            projectlink:"https://github.com/Davinci-Developer-Official/Orion-Developers.git",
            contributor:"Me , Allan Macharia",
        },
        {
            id:2,
            projectname:"Mock-Store",
            projectdescription:"Mock store that deals with mock data, it's for pure academic reasons. How i made the tutorials @youtube @twitter @instagram",
            languagesused:"JavaScript {React}",
            projectlink:"https://github.com/Davinci-Developer-Official/Mock-Store.git",
            contributor:"Me",
        },
        {
            id:3,
            projectname:"portfolio ",
            projectdescription:"This is my personal portfolio website. It has no commercial purpose ,it a website made to purely showcase my works and projects.",
            languagesused:"JavaScript {Next Js}",
            projectlink:"https://github.com/Davinci-Developer-Official/portfolio.git",
            contributor:"Me",
        },
        {
            id:4,
            projectname:"AlatPresOfficial",
            projectdescription:"Official Alatpres Repository",
            languagesused:"JavaScript {React Native}",
            projectlink:"https://github.com/Davinci-Developer-Official/AlatPresOfficial.git",
            contributor:"Me",
        },
        {
            id:5,
            projectname:"Alatpres-Integrations",
            projectdescription:"Alatpres Integrations Repository ",
            languagesused:"JavaScript {React Native}",
            projectlink:"https://github.com/Davinci-Developer-Official/Alatpres-Integrations.git",
            contributor:"Me",
        },
        {
            id:6,
            projectname:"Stexe",
            projectdescription:"Stock exemplum(stock model).Modelled data is derived from Nairobi Stock Market (NSE) records and Historical data.",
            languagesused:"JavaScript",
            projectlink:"https://github.com/Davinci-Developer-Official/Stexe.git",
            contributor:"Me",
        },
        {
            id:7,
            projectname:"ApatoKE",
            projectdescription:"Housing inquisition and management platform",
            languagesused:"JavaScript {React Native} ",
            projectlink:"https://github.com/Davinci-Developer-Official/ApatoKE.git",
            contributor:"Me , Eugine Moti",
        },
        {
            id:8,
            projectname:"forecast_FEB ",
            projectdescription:"Forecast windows form application made using c# On february",
            languagesused:"C#",
            projectlink:"https://github.com/Davinci-Developer-Official/forecast_FEB.git",
            contributor:"Me",
        },
        {
            id:9,
            projectname:"Flock-App ",
            projectdescription:"An opensource group based chatrooms.",
            languagesused:"JavaScript {React} ",
            projectlink:"https://github.com/Davinci-Developer-Official/Flock-App.git",
            contributor:"Me",
        },
        {
            id:10,
            projectname:"Glitex-project-manager ",
            projectdescription:"project manager for glitex solutions ltd ",
            languagesused:"JavaSxript {React} ",
            projectlink:"https://github.com/Davinci-Developer-Official/Glitex-project-manager.git",
            contributor:"Me , Simion , Asahel",
        },
        {
            id:11,
            projectname:"Agora-free-market ",
            projectdescription:"blockchain based market ",
            languagesused:"JavaScript {Next Js} ",
            projectlink:"https://github.com/Davinci-Developer-Official/Agora-free-market.git",
            contributor:"Me",
        },
        {
            id:12,
            projectname:"sensation",
            projectdescription:"Online Adult Toys Store ",
            languagesused:"HTML,CSS & JavaScript",
            projectlink:"https://github.com/Davinci-Developer-Official/sensation.git",
            contributor:"Me",
        }      
    ]

  return (
    <div  style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(20%, 1fr))",
        gap:"10px",
        
    }} >
        {projects.map(item=>(
            <div key={item.id} className="card w-96 bg-blue-600 shadow-xl mr-20 " style={{
                marginLeft:5,
                marginRight:5,
                marginTop:5,
                marginBottom:5,
                
            }} >
            <figure  ><Image src={davinci} alt="project image" className='w-96' /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.projectname}
                card  <Link href={item.projectlink} className="badge badge-secondary" >
                    <FontAwesomeIcon icon={faLink} style={{
                        height:20,
                        width:20,
                    }} />  github                        
                </Link>
              </h2>
              <p>{item.projectdescription}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{item.languagesused}</div> 
                <div className="badge badge-outline">{item.contributor}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ProjectsGrid