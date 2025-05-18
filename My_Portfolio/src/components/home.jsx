import React from 'react'
import HomeImage from '../assets/ima.png'

const home = () => {
  return (
    <section className="section">
      <div className='bg-black text-white text-center py-16' id="home">
          <img src={HomeImage} alt="image"
          className='mx-auto mb-8 w-65 rounded-full object-cover transform transition-transform duration-300 hover:scale-105' />
          <h1 className='text-4xl font-bold'>
              I'm {" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500'>Imandi Kavithma</span>
              
          </h1> 
          <h1 className='text-2xl font-bold mt-4'>
            Full-Stack Developer
          </h1>
          <p className='mt-4 text-lg text-gray-300'>
              I am always eager to learn new technologies and improve my skills.
          </p>
          <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full hidden md:inline transform transition-transform duration-300 hover:scale-105 cursor-pointer'>Resume</button>
          </div>
      </div>
    </section>
  )
}

export default home