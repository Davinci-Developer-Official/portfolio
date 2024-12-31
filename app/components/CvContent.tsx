import React from 'react'
import cv1 from "../../public/cv-1.png"
import cv2 from "../../public/cv-2.png"
import cv3 from "../../public/cv-3.png"
import Image from 'next/image'

const CvContent = () => {
  return (
    <div>
        <div style={{
            width:"70%",
            marginLeft:"15%",
            marginTop:"2%",
        }} >
            <p style={{
                textAlign:"center",
            }} > 
                Name :Thomas Ngunyi Mithamo.<br/>
                MOBILE: (254)113477249 /+254784253699<br/>
                EMAIL: @thomasmithamo01@gmail.com /mithamothomas@zetech.ac.ke /thomasnjon@gmail.com
            </p>
            <div>
           <h1 style={{
                textAlign:"center",
                fontSize:"20px",
                fontWeight:"bold",
                paddingTop:10
            }} > Introduction Statement:</h1>
            <p>
            My names are Thomas Joseph Ngunyi Mithamo. I am a undergraduate
Software Engineering student at Zetech University Ruiru campus.
I am applying for a junior developer role/internship/attachment at your institution,i have around
four years experience in software development for which I spent most of
the time researching,learning,adapting,experimenting and working on both
personal projects and contracted freelance jobs both local and online.
            </p>
          <h2 style={{
                textAlign:"center",
                fontSize:"20px",
                fontWeight:"bold"
            }} >Education:</h2>
        <p>
        My education is modeled around the outgoing 8-4-4 system,i started out at
Jema Academy then transferred to St Benedict boys primary school until I
completed my primary education then I progressed to Baricho Boys High
school where I joined and completed my high school education then later
I enrolled to Zetech university.
A brief education summary:
2004- 2009 Jema primary school.
2010 – 2014 St Benedict boys primary school,
2015 – 2018 Baricho High School
2019-current Zetech University,
        </p>
        <h3 style={{
                textAlign:"center",
                fontSize:"20px",
                fontWeight:"bold"
            }} >Fields that am knowledgeable in:</h3>
        <p>
        In the course of four years I have gained knowledge and grown in various
technology and software development fields and I have become
knowledgeable with:
.Full stack Web Development
.Android Development both Hybrid & Native
.Operating systems(I use Ubuntu Linux and windows 10);
        </p>
        <h4 style={{
                textAlign:"center",
                fontSize:"20px",
                fontWeight:"bold"
            }} >Employment</h4>
        <p>
         I have worked independently on personal projects and freelance
jobs both local and online.
        </p>
        <h5 style={{
                textAlign:"center",
                fontSize:"20px",
                fontWeight:"bold"
            }} >Skills</h5> 
            <p style={{
                marginLeft:"10%"
            }} >My skill set are as illustrated below:</p>          
            <ol >
                <li>Web development : Front-end(React js ,next js, HTML ,CSS),</li>
                <li>Back-end(express js , Node js ).</li>
                <li>Mobile development: React Native,Familiar with Java,flutter and Kotlin but not yet proficient with them .</li>
                <li>Database: SQL( PostgreSQL ,MySQL ,SQL lite) ,NOSQL (Mongo db).</li>
                <li>Operating systems : windows , Linux(Ubuntu 22.04 ,pop os ,parrot sec os ,kali Linux, manjaro Linux).</li>
                <li>Web 3: Am in the process of learning solidity.</li>
                <li>Design : Figma , Mockitt ,ink-scape ,krita and GNU image manipulator.</li>
            </ol>  
    <h5 style={{
                textAlign:"center",
                fontSize:"20px",
                fontWeight:"bold"
            }} >Hobbies and interests</h5>
    <p>
    Am not much of a hobbies guy but football has a special spot in my heart
am actually a Chelsea fan (its not relevant) but am more inclined towards
interests .My interests include: reading philosophy books and other
mindful books , am a pretty good gamer , fascinated with learning game
development ,researching artificial intelligence to further understand the
exciting leap towards the future , Studying Cyber based system
vulnerabilities , learning about web3.         
    </p>
    <h6 style={{
                textAlign:"center",
                fontSize:"20px",
                fontWeight:"bold"
            }} >Reference</h6>
    <p>
    Naomi Njoki,<br/>
Department administratorm<br/>
email: naomi.njoki@zetech.ac.ke,<br/>
mobile: 0748254410.
    </p>
            </div>
        </div>
    </div>
  )
}

export default CvContent
