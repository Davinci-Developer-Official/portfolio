import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


interface Platform{
    id:number;
    platformname:string;
    platfromlink:string;
    accountname:string;
}
const ContactsSection = () => {
    const platfroms:Platform[]=[
        {
            id:1,
            platformname:"Twitter",
            platfromlink:"https://twitter.com/home",
            accountname:"Dev Tommy @DevTommy_DD"
        },
        {
            id:2,
            platformname:"Instagram",
            platfromlink:"https://www.instagram.com/sir_tomm.y/",
            accountname:"sir_Tomm.y  "
        },{
            id:3,
            platformname:"Whatsapp",
            platfromlink:"https://+254113477249/?text=I'm%20would%20like%20to%20talk%20to%20you%20i%20went%20through%your%20portfolio",
            accountname:"Thomas Mithamo +254113477249 "
        },
        {
            id:4,
            platformname:"Linkedin",
            platfromlink:"https://www.linkedin.com/in/thomas-mithamo-789982202/",
            accountname:"Thomas Mithamo"
        },
        {
            id:5,
            platformname:"figma",
            platfromlink:"https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=871743887568031852",
            accountname:"Thomas Mithamo"
        },
        {
            id:6,
            platformname:"gmail",
            platfromlink:"thomasmithamo01@gmail.com",
            accountname:"Thomas Mithamo"
        },
        {
            id:7,
            platformname:"github",
            platfromlink:"https://github.com/Davinci-Developer-Official",
            accountname:"Thomas Mithamo"
        },
        {
            id:8,
            platformname:"youtube",
            platfromlink:"https://www.youtube.com/channel/UCxdMgzEWNPOWOEJ6VFO_wKg",
            accountname:"Thomas Mithamo"
        },
        {
            id:9,
            platformname:"facebook",
            platfromlink:"https://www.facebook.com/thomas.mithamo.73",
            accountname:"Thomas Mithamo"
        }

    ]
  return (
    <div>
        <p style={{
             textAlign:"center",
             fontSize:"20px",
             fontWeight:"bold",
             marginTop:"2%",
        }} >contact me </p>
        <div style={{
            width:"80%",
            marginLeft:"10%",
            display:"grid",
            gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",
            gap:"35px",
            marginTop:"2%",
        }} >
            {platfroms.map(item=>(
                <div key={item.id} style={{
                    display:"flex",
                    flexDirection:"column",
                    backgroundColor:"white",
                    justifyContent:"space-evenly",
                    marginLeft:5,
                    marginRight:5,
                    padding:10,
                    borderRadius:20,
                    textAlign:"center",
                    //borderWidth:1.5,
                    //borderColor:"green"
                }} >
                    <div style={{
                        display:"flex",
                        flexDirection:"row",
                        width:"100%",
                        justifyContent:"space-evenly"
                    }} >
                        <p style={{
                        fontSize:"20px",
                        fontWeight:"bold",
                        color:"green",
                        

                    }} >{item.platformname} </p>
                    <Link href={item.platfromlink}><FontAwesomeIcon icon={faLink} style={{
                        height:20,
                        width:20,
                    }} /> </Link>
                    </div>
                    
                    <p style={{
                         paddingTop:5,
                    }} >{item.accountname}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ContactsSection