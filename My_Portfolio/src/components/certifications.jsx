import React from 'react'
//motion
import { motion } from 'framer-motion'
import { fadeIn } from '../Variants'

const certifications = () => {
  return (
    <section className="section">
        <div className="bg-black text-white py-20" id="certification">
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.7 }}
                className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 lg:px-16">
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0.7 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Web Design for Beginners</h3>
                            <p className="text-gray-400">University of Moratuwa</p>
                            <a href="/Certificates/Web_Design_for_Beginners_E-Certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">View Certificate</a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0.7 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Scratch Coding Championship 2020</h3>
                            <p className="text-gray-400">ShilpaSayura Foundation</p>
                            <a href="/Certificates/Scratch.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">View Certificate</a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0.7 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Java Object Programming</h3>
                            <p className="text-gray-400">LinkedIn</p>
                            <a href="https://www.linkedin.com/learning/certificates/23e6f550a1f6dccfc285cad56da077780681fdd524451461ff865436e5681c39?trk=share_certificate" 
                                target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">
                                View Certificate
                            </a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.6)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0.7 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">React Essential Training</h3>
                            <p className="text-gray-400">LinkedIn</p>
                            <a href="https://www.linkedin.com/learning/certificates/1046eb28a4d0e3a60abeff52200dbe1c6f15440845707915abf0e1ee591173c4?trk=share_certificate" 
                                target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">
                                View Certificate
                            </a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.7)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0.7 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Git and GitHub</h3>
                            <p className="text-gray-400">LinkedIn</p>
                            <a href="https://www.linkedin.com/learning/certificates/9ff7839ea62149c1bdfd4d51126e0078172ccab5b823d2b50903eb78520d1d75?trk=share_certificate" 
                                target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">
                                View Certificate
                            </a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.8)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0.7 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Spring Boot 2.0 Essential Training</h3>
                            <p className="text-gray-400">LinkedIn</p>
                            <a href="https://www.linkedin.com/learning/certificates/202ae180735a1e54801993bf1881c866c4d2234af09f037b6f12fbea432cf517?u=76664938" 
                                target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">
                                View Certificate
                            </a>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('right', 0.9)}
                        initial='hidden'
                        whileInView='show'
                        viewport={{ once: false, amount: 0.7 }}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">NLP with Python for Machine Learning Essential Training</h3>
                            <p className="text-gray-400">LinkedIn</p>
                            <a href="https://www.linkedin.com/learning/certificates/a4eece4d7f43ac0b5833adbbba267567cda67b46e395f2338bb5b87209af9cb0?u=76664938" 
                                target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">
                                View Certificate
                            </a>
                    </motion.div>
                </div>
            </motion.div>


        </div>
    </section>
  )
}

export default certifications