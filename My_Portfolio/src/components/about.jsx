import React from 'react'
import AboutImage from '../assets/ima.png'
//motion
import { motion } from 'framer-motion'
import { fadeIn } from '../Variants'

const about = () => {
  return (
    <section className="secction">
      <div className='bg-black text-white py-20' id="about">
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.9 }}
            className='container mx-auto px-8 md:px-16 lg:px-24'>
              <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
              <motion.div 
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.9 }}
                className='flex flex-col md:flex-row items-center md:space-x-12'>
                  <img src={AboutImage} alt="Image" 
                  className='w-90 h-90 rounded object-cover mb-8 md:mb-0'/>
                  <p>
                    I am a second-year Computer Science student at the <b>University of
                    Westminster, UK (Informatics Institute of Technology - IIT )</b>  with a strong
                    foundation in programming and problem-solving. I can work under
                    pressure and have a high sense of responsibility. I am eager to apply my
                    knowledge to real-world projects and collaborate with teams. I intend to
                    leverage my knowledge and develop further in the field as my future
                    career.
                  </p>
              </motion.div>
          </motion.div>

      </div>
    </section>
  )
}

export default about