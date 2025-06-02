import React from 'react'
//motion
import { motion } from 'framer-motion'
import { fadeIn } from '../Variants'

const education = () => {
  return (
    <section className="section">
        <div className="bg-black text-white py-20" id="education">
           <h2 className="text-4xl font-bold text-center mb-10">Education</h2>
        <div className="flex flex-wrap justify-center mb-30 gap-5">

            <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className=" bg-gray-800 w-100 h-50 pl-5 pt-5 space-y-1 rounded-2xl hover:bg-amber-600 hover:text-white hover:scale-105 duration-400">
                <p className="text-xl font-semibold"> BSc(Hons) Computer Science </p>
                <p> University of Westminster (IIT- Sri Lanka) </p>
                <p> 2023- present </p>
                
            </motion.div>
           
            <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.7 }}
            className=" bg-gray-800 w-100 h-50 pl-5 pt-5 space-y-1 rounded-2xl  hover:bg-amber-600 hover:text-white hover:scale-105 duration-400">
                <p className="text-xl font-semibold">G. C. E. Advanced Level Examination 2022(2023)</p>
                <p> Southlands College </p>
                <p> 2008 - 2022 </p>
                
            </motion.div>
        </div>
        
        </div>
    </section>
  )
}

export default education