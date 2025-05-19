import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const contact = () => {
  return (
    <section className="section">
          <div className='bg-black text-white py-20' id="contact">
              <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                  <h2 className='text-4xl font-bold text-center mb-12'>Connect Me</h2>
                  <div className='flex flex-col md:flex-row items-center md:space-x-12'>

                        <div className='flex-1'>
                            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4'>Let's Talk</h3>
                            <p>I'm open to discussing web development projects or partnership opportunities.</p>
                            <div className='mb-4 mt-8'>
                                <FaEnvelope className='inline-block text-orange-300 mr-2' />
                                <a href="mailto:imandikavithma2714@gmail.com" className='hover:text-orange-400'>
                                    imandikavithma2714@gmail.com
                                </a>
                            </div>
                            <div className='mb-4'>
                                <FaPhone className='inline-block text-orange-300 mr-2' />
                                <span>(+94) 714079273</span>
                            </div>
                            <div className='mb-4'>
                                <FaMapMarkedAlt className='inline-block text-orange-300 mr-2' />
                                <span>"Chanmini", Pattidora, Boossa, Galle, Sri Lanka</span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
    </section>
  )
}

export default contact