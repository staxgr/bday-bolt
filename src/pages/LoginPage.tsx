import React, { useState } from 'react'
import { User, Lock } from 'lucide-react'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', { email, password })
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-purple-600 text-white py-4 px-6">
          <h2 className="text-2xl font-bold">Welcome Back!</h2>
          <p>Log in to create magical invitations</p>
        </div>
        <form onSubmit={handleSubmit} className="py-8 px-6">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <div className="flex items-center border rounded-md">
              <User className="text-gray-500 ml-3" size={20} />
              <input
                type="email"
                id="email"
                className="w-full py-2 px-3 text-gray-700 focus:outline-none"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <div className="flex items-center border rounded-md">
              <Lock className="text-gray-500 ml-3" size={20} />
              <input
                type="password"
                id="password"
                className="w-full py-2 px-3 text-gray-700 focus:outline-none"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-sm text-purple-600 hover:text-purple-800">Forgot password?</a>
          </div>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">
            Log In
          </button>
        </form>
        <div className="bg-gray-100 py-4 px-6 text-center">
          <p className="text-sm text-gray-600">Don't have an account? <a href="#" className="text-purple-600 font-semibold hover:text-purple-800">Sign up</a></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage