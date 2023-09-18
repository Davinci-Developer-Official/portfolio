import React from 'react'

const FAQS = () => {
  return (
    <>
    <p className='text-center text-indigo-700 text-4xl ' >Frequently Asked Questions (FAQS) </p>
    <div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked={true} />
        <div className="collapse-title text-xl font-medium text-center text-indigo-700 ">
          Are you experienced in Web Development
        </div>
        <div className="collapse-content">
          <p className='text-center' >
            I have more than 3 years experience in web Development.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium text-center text-indigo-700 ">
          what is the difference between Frontend,Backend  and fullstack web Development
        </div>
        <div className="collapse-content">
          <p className='text-center' >
          Frontend development focuses on the user interface, backend development deals with server-side logic and data management, while full-stack developers are proficient in both frontend and backend development, covering the entire web development spectrum.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium text-center text-indigo-700 ">
          Are you a frontend developers,backend developer or fullstack
        </div>
        <div className="collapse-content">
          <p className='text-center' >
            I consider myself a fullstack developer,but am capable of developing Web Interfaces and confortably deal with servers.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked={true} />
        <div className="collapse-title text-xl font-medium text-center text-indigo-700 ">
          Are you experienced in Mobile Aplication Development
        </div>
        <div className="collapse-content">
          <p className='text-center' >
            I have more than 2 years experience in Mobile Application Development.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default FAQS