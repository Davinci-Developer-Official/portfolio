import React from 'react'

const CvContent = () => {
  return (
    <div className="w-[70%] mx-auto mt-8 text-sm leading-relaxed text-gray-800">
      {/* Contact Information */}
      <div className="text-center mb-6">
        <p>
          <strong className="block">Name:</strong> Thomas Ngunyi Mithamo
        </p>
        <p>
          <strong className="block">Mobile:</strong> +254 113 477 249 / +254 784 253 699
        </p>
        <p>
          <strong className="block">Email:</strong> thomasmithamo01@gmail.com / mithamothomas@zetech.ac.ke / thomasnjon@gmail.com
        </p>
      </div>

      {/* Introduction */}
      <h2 className="text-center text-xl font-bold mb-2">Professional Summary</h2>
      <p>
        I am a final-year Diploma student in Software Engineering at Zetech University (Ruiru Campus), with over 6 years of hands-on experience in full-stack and mobile application development. Since 2018, I have built over 49 personal and freelance projects (available on GitHub), contributed to open-source projects, and gained professional exposure through a 4-month industrial attachment at Nairobi City Hall. I am now seeking junior or intermediate developer roles where I can contribute to building scalable and meaningful technology products.
      </p>

      {/* Target Roles */}
      <h2 className="text-center text-xl font-bold mt-6 mb-2">Target Roles & Areas of Interest</h2>
      <ul className="list-disc pl-6">
        <li>Junior Full Stack Developer</li>
        <li>React.js / Front-End Developer</li>
        <li>React Native Developer</li>
        <li>Graduate Trainee / Web Development Intern</li>
        <li>Open Source Contributor</li>
      </ul>

      {/* Technical Skills */}
      <h2 className="text-center text-xl font-bold mt-6 mb-2">Technical Skills</h2>
      <ul className="list-disc pl-6">
        <li>Front-End: React.js, Next.js, HTML5, CSS3, Tailwind CSS</li>
        <li>Back-End: Node.js, Express.js</li>
        <li>Mobile: React Native, Java, Flutter, Kotlin (basic)</li>
        <li>Databases: PostgreSQL, MySQL, SQLite, MongoDB</li>
        <li>Version Control: Git, GitHub (49+ repositories)</li>
        <li>Deployment: Vercel, Firebase, Supabase</li>
        <li>Web3 & Solidity (currently learning)</li>
        <li>Operating Systems: Ubuntu Linux, Windows, Manjaro, Kali, Parrot OS</li>
      </ul>

      {/* Work Experience */}
      <h2 className="text-center text-xl font-bold mt-6 mb-2">Experience</h2>
      <p>
        <strong>Freelance & Personal Projects (2018 – Present)</strong><br />
        • Developed a wide range of full-stack and mobile apps using React, Next.js, React Native, Node.js, and Firebase.<br />
        • Delivered custom software solutions to clients in education, logistics, and community sectors across Kenya and globally.<br />
        • Contributed to open-source projects on GitHub and published reusable components and tools.<br />
        <br />
        <strong>Industrial Attachment – Nairobi City Hall ICT Department (Jan 2024 – Apr 2024)</strong><br />
        • Participated in software maintenance, internal system support, and technical documentation.<br />
        • Worked alongside senior ICT officers to troubleshoot user issues and maintain service reliability.
      </p>

      {/* Education */}
      <h2 className="text-center text-xl font-bold mt-6 mb-2">Education</h2>
      <p>
        <strong>Zetech University</strong><br />
        Diploma in Software Engineering (2019 – Present)
      </p>
      <p className="mt-2">
        <strong>Baricho Boys High School</strong><br />
        Kenya Certificate of Secondary Education (KCSE) (2015 – 2018)
      </p>
      <p className="mt-2">
        <strong>St. Benedict Boys Primary School</strong><br />
        Kenya Certificate of Primary Education (KCPE) (2010 – 2014)
      </p>
      <p className="mt-2">
        <strong>Jema Academy</strong><br />
        Lower Primary Education (2004 – 2009)
      </p>

      {/* References */}
      <h2 className="text-center text-xl font-bold mt-6 mb-2">References</h2>
      <div className="space-y-3">
        <p>
          <strong>Naomi Njoki</strong><br />
          Department Administrator, Zetech University<br />
          Email: naomi.njoki@zetech.ac.ke<br />
          Mobile: +254 748 254 410
        </p>
        <p>
          <strong>Cyrus Muturi</strong><br />
          Freelance Client<br />
          Mobile: +254 708 538 399
        </p>
        <p>
          <strong>Oscar Muthoka</strong><br />
          GGIS Freelance Client<br />
          Mobile: +254 716 035 220
        </p>
        <p>
          <strong>Florence Hill</strong><br />
          Freelance Client<br />
          Email: hillwflorence@gmail.com<br />
          Mobile: +1 (515) 707-4317
        </p>
        <p>
          <strong>Ester</strong><br />
          Freelance Client<br />
          Mobile: +1 (206) 941-1609
        </p>
      </div>
    </div>
  )
}

export default CvContent
