
import React from 'react'
import Image from 'next/image'
import cv1 from "../../public/cv-1.png"
import cv2 from "../../public/cv-2.png"
import cv3 from "../../public/cv-3.png"

const CvContent = () => {
  return (
    <div className="w-[70%] mx-auto mt-8">
      <p className="text-center">
        <strong>Name:</strong> Thomas Ngunyi Mithamo<br />
        <strong>Mobile:</strong> +254113477249 / +254784253699<br />
        <strong>Email:</strong> thomasmithamo01@gmail.com / mithamothomas@zetech.ac.ke / thomasnjon@gmail.com
      </p>

      <h1 className="text-center text-xl font-bold pt-4">Introduction Statement:</h1>
      <p>
        My name is Thomas Joseph Ngunyi Mithamo. I am a final-year Software Engineering student at Zetech University, Ruiru campus. I am seeking a junior or intermediate developer role within your organization. With over four years of hands-on experience in software development, I have spent considerable time researching, learning, adapting, experimenting, and delivering on both personal projects and freelance contracts, both locally and online.
      </p>

      <h2 className="text-center text-xl font-bold mt-4">Education:</h2>
      <p>
        My education followed the outgoing 8-4-4 system in Kenya. I began at Jema Academy before transferring to St. Benedict Boys Primary School. I completed my high school education at Baricho Boys High School and later joined Zetech University, where I am currently pursuing a Bachelor’s degree in Software Engineering.
        <br /><br />
        <strong>Education Summary:</strong><br />
        2004–2009: Jema Academy<br />
        2010–2014: St. Benedict Boys Primary School<br />
        2015–2018: Baricho Boys High School<br />
        2019–Present: Zetech University (BSc. Software Engineering)
      </p>

      <h3 className="text-center text-xl font-bold mt-4">Technical Proficiencies:</h3>
      <p>
        Over the past four years, I have developed knowledge and skills in multiple areas of software development including:
      </p>
      <ul className="list-disc pl-6">
        <li>Full Stack Web Development</li>
        <li>Android Development – Hybrid (React Native) and Native (basic familiarity with Java, Flutter, and Kotlin)</li>
        <li>Operating Systems – Ubuntu Linux, Windows 10</li>
      </ul>

      <h4 className="text-center text-xl font-bold mt-4">Experience:</h4>
      <p>
        I have worked independently on a range of personal and freelance projects locally and through online platforms. Additionally, I completed a 3-month industrial attachment at Nairobi City Hall, where I gained practical experience working in a collaborative tech environment.
      </p>

      <h5 className="text-center text-xl font-bold mt-4">Skills:</h5>
      <p className="ml-4">My skillset includes but is not limited to:</p>
      <ol className="list-decimal pl-6">
        <li>Front-end Development: React.js, Next.js, HTML, CSS</li>
        <li>Back-end Development: Node.js, Express.js</li>
        <li>Mobile Development: React Native; familiar with Java, Flutter, and Kotlin</li>
        <li>Databases: PostgreSQL, MySQL, SQLite, MongoDB</li>
        <li>Operating Systems: Windows, Ubuntu, Pop!_OS, Parrot OS, Kali Linux, Manjaro</li>
        <li>Web3 Development: Currently learning Solidity</li>
        <li>Design Tools: Figma, Mockitt, Inkscape, Krita, GIMP</li>
      </ol>

      <h5 className="text-center text-xl font-bold mt-4">Hobbies & Interests:</h5>
      <p>
        I enjoy football and am a loyal Chelsea FC supporter. My deeper interests lie in philosophy, gaming, game development, artificial intelligence, cybersecurity, and web3 technologies. I am passionate about continuous learning and staying ahead of tech trends.
      </p>

      <h6 className="text-center text-xl font-bold mt-4">Reference:</h6>
      <p>
        Naomi Njoki<br />
        Department Administrator, Zetech University<br />
        Email: naomi.njoki@zetech.ac.ke<br />
        Mobile: +254748254410
      </p>
    </div>
  )
}

export default CvContent

