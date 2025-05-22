import React from 'react'

const certifications = () => {
  return (
    <section className="section">
        <div className="bg-black text-white py-20" id="certification">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 lg:px-16">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Web Design for Beginners</h3>
                        <p className="text-gray-400">University of Moratuwa</p>
                        <a href="/Certificates/Web_Design_for_Beginners_E-Certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">View Certificate</a>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Scratch Coding Championship 2020</h3>
                        <p className="text-gray-400">ShilpaSayura Foundation</p>
                        <a href="/Certificates/Scratch.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">View Certificate</a>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Java Object Programming</h3>
                        <p className="text-gray-400">LinkedIn</p>
                        <a href="https://www.linkedin.com/learning/certificates/23e6f550a1f6dccfc285cad56da077780681fdd524451461ff865436e5681c39?trk=share_certificate" 
                            target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">
                            View Certificate
                        </a>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">React Essential Training</h3>
                        <p className="text-gray-400">LinkedIn</p>
                        <a href="https://www.linkedin.com/learning/certificates/1046eb28a4d0e3a60abeff52200dbe1c6f15440845707915abf0e1ee591173c4?trk=share_certificate" 
                            target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">
                            View Certificate
                        </a>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Git and GitHub</h3>
                        <p className="text-gray-400">LinkedIn</p>
                        <a href="https://www.linkedin.com/learning/certificates/9ff7839ea62149c1bdfd4d51126e0078172ccab5b823d2b50903eb78520d1d75?trk=share_certificate" 
                            target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline mt-4 block">
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>


        </div>
    </section>
  )
}

export default certifications