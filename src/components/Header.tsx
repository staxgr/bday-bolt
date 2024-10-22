import React from 'react'
import { Link } from 'react-router-dom'
import { Cake, User, PenTool } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-600 flex items-center">
            <Cake className="mr-2" />
            KidPartyPro
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition duration-300">Home</Link>
            <Link to="/login" className="text-gray-700 hover:text-purple-600 transition duration-300">
              <User className="inline-block mr-1" size={18} />
              Login
            </Link>
            <Link to="/create-invitation" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300 flex items-center">
              <PenTool className="mr-1" size={18} />
              Create Invitation
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header