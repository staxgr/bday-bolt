import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">KidPartyPro</h3>
            <p className="text-purple-200">Making birthday invitations fun and easy!</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#" className="text-purple-200 hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition duration-300">FAQ</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition duration-300">
                <Facebook />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition duration-300">
                <Twitter />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition duration-300">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-purple-200">
          <p>&copy; 2024 KidPartyPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer