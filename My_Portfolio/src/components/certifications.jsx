import React from 'react'

const certifications = () => {
  return (
    <section className="section">
        <div className="bg-black text-white py-20" id="certifications">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 lg:px-16">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Web Design for Beginners</h3>
                        <p className="text-gray-400">University of Moratuwa</p>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">View Certificate</a>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Scratch Coding Championship 2020</h3>
                        <p className="text-gray-400">ShilpaSayura Foundation</p>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">View Certificate</a>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Java Object Programming</h3>
                        <p className="text-gray-400">LinkedIn</p>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">View Certificate</a>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">React Essential Training</h3>
                        <p className="text-gray-400">LinkedIn</p>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">View Certificate</a>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Git and GitHub</h3>
                        <p className="text-gray-400">LinkedIn</p>
                        <a href="" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">View Certificate</a>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default certifications