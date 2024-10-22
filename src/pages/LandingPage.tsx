import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Gift, Palette } from 'lucide-react'

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">Create Magical Birthday Invitations</h1>
        <p className="text-xl text-gray-600 mb-8">Make your child's special day even more exciting with our fun and easy-to-use invitation creator!</p>
        <Link to="/create-invitation" className="bg-purple-600 text-white text-lg px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 inline-flex items-center">
          <Sparkles className="mr-2" />
          Start Creating Now
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Gift className="mx-auto text-purple-600 mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Customizable Designs</h3>
          <p className="text-gray-600">Choose from a variety of themes and personalize every detail.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Palette className="mx-auto text-purple-600 mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
          <p className="text-gray-600">Our intuitive interface makes creating invitations a breeze.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Sparkles className="mx-auto text-purple-600 mb-4" size={48} />
          <h3 className="text-xl font-semibold mb-2">Magical Themes</h3>
          <p className="text-gray-600">Bring your child's imagination to life with our enchanting designs.</p>
        </div>
      </section>

      <section className="text-center mb-16">
        <h2 className="text-3xl font-bold text-purple-800 mb-8">Sample Invitations</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md">
              <img src={`https://source.unsplash.com/random/400x300?birthday,kid&sig=${i}`} alt={`Sample Invitation ${i}`} className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="text-gray-600">Magical Unicorn Party</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Ready to Make Some Magic?</h2>
        <p className="text-xl text-gray-600 mb-8">Join thousands of happy parents and create unforgettable invitations today!</p>
        <Link to="/create-invitation" className="bg-purple-600 text-white text-lg px-8 py-3 rounded-full hover:bg-purple-700 transition duration-300 inline-flex items-center">
          <Sparkles className="mr-2" />
          Get Started
        </Link>
      </section>
    </div>
  )
}

export default LandingPage