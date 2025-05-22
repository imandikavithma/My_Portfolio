import React from 'react'

const navbar= () => {
  return (
    <nav className='bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-2'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center mb-4 md:mb-0'>
            <img src="/icon.png" alt="Logo" 
            className='w-12 h-12 md:w-15 md:h-15' 
            />
          </div>
            
            
            <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-0'>
                <a href="#home" className='hover:text-yellow-400 text-sm md:text-base'>Home</a>
                <a href="#about" className='hover:text-yellow-400 text-sm md:text-base'>About</a>
                <a href="#skills" className='hover:text-yellow-400 text-sm md:text-base'>Skills</a>
                <a href="#projects" className='hover:text-yellow-400 text-sm md:text-base'>Projects</a>
                <a href="#certification" className='hover:text-yellow-400 text-sm md:text-base'>Certifications</a>
                <a href="#education" className='hover:text-yellow-400 text-sm md:text-base'>Education</a>
            </div>
            <a href="#contact" className='w-full md:w-auto text-center'>
              <button className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full w-full md:w-auto transform transition-transform duration-300 hover:scale-105 cursor-pointer text-sm md:text-base'>Connect Me</button>
            </a>
        </div>
    </nav>
  )
}

export default navbar