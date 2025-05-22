import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const contact = () => {
  return (
    <section className="section">
          <div className='bg-black text-white py-20' id="contact">
              <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                  <h2 className='text-4xl font-bold text-center mb-12'>Connect Me</h2>
                  <div className='flex flex-col md:flex-row items-center md:space-x-10'>

                    <div className='flex-1'>
                        <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-4'>Let's Talk</h3>
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
                        
                    </div>
                    <div className='flex-1 w-full'>
                        <form className='space-y-4'>
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-400' 
                                placeholder='Enter your name' required />
                            </div><br/>
                            <div>
                                <label htmlFor="email" className='block mb-2' >Email</label>
                                <input type="text" id="email" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-400' 
                                placeholder='Enter your Email' required />
                            </div><br/>
                            <div>
                                <label htmlFor="message" className='block mb-2' >Message</label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-400 resize-none'
                                    placeholder='Enter your message' required>

                                </textarea>
                            </div><br/>
                            <button className='bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-1 rounded-full  
                            transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                                Send
                            </button>
                        </form>
                        
                    </div>

                  </div>
              </div>
    
          </div>
        </section>
  )
}

export default contact