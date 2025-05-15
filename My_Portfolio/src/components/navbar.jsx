import React from 'react'

const navbar= () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <img src="/icon.png" alt="Logo" className='w-15 h-15' />
            {/*<div className='text-2xl font-bold hidden md:inline'>Imandi Kavithma</div>*/}
            <div className='space-x-13'>
                <a href="#home" className='hover:text-yellow-400'>Home</a>
                <a href="#about" className='hover:text-yellow-400'>About</a>
                <a href="#skills" className='hover:text-yellow-400'>Skills</a>
                <a href="#projects" className='hover:text-yellow-400'>Projects</a>
                <a href="#certification" className='hover:text-yellow-400'>Certifications</a>
                <a href="#education" className='hover:text-yellow-400'>Education</a>
            </div>
            <a href="#contact">
              <button className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full hidden md:inline transform transition-transform duration-300 hover:scale-105 cursor-pointer'>Connect Me</button>
            </a>
        </div>
    </nav>
  )
}

export default navbar