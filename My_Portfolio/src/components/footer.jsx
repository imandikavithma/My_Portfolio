import React from 'react'

const footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src="/icon.png" alt="Logo" className="w-30 h-30 object-contain" />
          <p className="text-sm text-gray-400">© 2025 Imandi Kavithma. All rights reserved.</p>
        </div>

        {/* Subscription Form */}
        <form className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter Email"
            className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-orange-400 w-full md:w-64"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105"
          >
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  )
}

export default footer