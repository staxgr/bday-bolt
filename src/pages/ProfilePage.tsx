import React from 'react'
import { User, Mail, Phone, Calendar, Edit } from 'lucide-react'

const ProfilePage: React.FC = () => {
  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '(555) 123-4567',
    joinDate: 'January 15, 2024',
  }

  // Mock past invitations
  const pastInvitations = [
    { id: 1, title: 'Emma\'s Princess Party', date: '2024-03-10', guests: 15 },
    { id: 2, title: 'Jack\'s Superhero Bash', date: '2023-11-05', guests: 20 },
    { id: 3, title: 'Sophia\'s Unicorn Adventure', date: '2023-08-22', guests: 12 },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-purple-600 text-white py-6 px-8">
          <h2 className="text-3xl font-bold">My Profile</h2>
        </div>
        <div className="p-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-purple-100 rounded-full w-48 h-48 flex items-center justify-center mx-auto md:mx-0">
                <User className="text-purple-600" size={64} />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">{user.name}</h3>
              <div className="space-y-3">
                <p className="flex items-center text-gray-600">
                  <Mail className="mr-2" size={18} />
                  {user.email}
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="mr-2" size={18} />
                  {user.phone}
                </p>
                <p className="flex items-center text-gray-600">
                  <Calendar className="mr-2" size={18} />
                  Member since {user.joinDate}
                </p>
              </div>
              <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300 flex items-center">
                <Edit className="mr-2" size={18} />
                Edit Profile
              </button>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6">Past Invitations</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="py-3 px-4 font-semibold">Event</th>
                    <th className="py-3 px-4 font-semibold">Date</th>
                    <th className="py-3 px-4 font-semibold">Guests</th>
                    <th className="py-3 px-4 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pastInvitations.map((invitation) => (
                    <tr key={invitation.id} className="border-b">
                      <td className="py-3 px-4">{invitation.title}</td>
                      <td className="py-3 px-4">{invitation.date}</td>
                      <td className="py-3 px-4">{invitation.guests}</td>
                      <td className="py-3 px-4">
                        <button className="text-purple-600 hover:text-purple-800">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage