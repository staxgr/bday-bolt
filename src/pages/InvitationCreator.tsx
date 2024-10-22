import React, { useState } from 'react'
import { Palette, Image, Type, Calendar, MapPin, Save } from 'lucide-react'

interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    text: string;
  };
  imageUrl: string;
}

const themes: Theme[] = [
  {
    name: 'princess',
    colors: {
      primary: '#FFB6C1',
      secondary: '#FFC0CB',
      text: '#8B4789',
    },
    imageUrl: 'https://images.unsplash.com/photo-1535572290543-960a8046f5af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'superhero',
    colors: {
      primary: '#FF0000',
      secondary: '#0000FF',
      text: '#FFFFFF',
    },
    imageUrl: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'space',
    colors: {
      primary: '#000080',
      secondary: '#4B0082',
      text: '#FFFFFF',
    },
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'unicorn',
    colors: {
      primary: '#FF69B4',
      secondary: '#9370DB',
      text: '#4B0082',
    },
    imageUrl: 'https://images.unsplash.com/photo-1531425300797-d5dc8b021c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
]

const InvitationCreator: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(themes[0])
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('')

  const handleSave = () => {
    // Handle saving the invitation
    console.log('Saving invitation:', { theme: theme.name, title, date, location })
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Create Your Invitation</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Palette className="mr-2" />
              Choose a Theme
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {themes.map((t) => (
                <button
                  key={t.name}
                  className={`p-4 rounded-md text-center capitalize ${
                    theme.name === t.name ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                  onClick={() => setTheme(t)}
                  style={{
                    backgroundColor: theme.name === t.name ? t.colors.primary : undefined,
                    color: theme.name === t.name ? t.colors.text : undefined,
                  }}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Type className="mr-2" />
              Invitation Details
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
                <input
                  type="text"
                  id="title"
                  className="w-full p-2 border rounded-md"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Emma's 7th Birthday Party"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
                <input
                  type="datetime-local"
                  id="date"
                  className="w-full p-2 border rounded-md"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  id="location"
                  className="w-full p-2 border rounded-md"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., 123 Party Lane, Funtown"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Image className="mr-2" />
              Preview
            </h3>
            <div 
              className="rounded-lg p-6 text-center"
              style={{
                backgroundColor: theme.colors.secondary,
                color: theme.colors.text,
              }}
            >
              <h4 className="text-2xl font-bold mb-4" style={{ color: theme.colors.accent }}>{title || "Your Event Title"}</h4>
              <p className="mb-2 flex items-center justify-center">
                <Calendar className="mr-2" size={18} />
                {date ? new Date(date).toLocaleString() : "Date and Time"}
              </p>
              <p className="mb-4 flex items-center justify-center">
                <MapPin className="mr-2" size={18} />
                {location || "Event Location"}
              </p>
              <p className="text-sm">Theme: {theme.name}</p>
              <div className="mt-4">
                <img
                  src={theme.imageUrl}
                  alt={`${theme.name} theme preview`}
                  className="rounded-lg mx-auto w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
          <button
            onClick={handleSave}
            className="mt-6 w-full py-3 px-4 rounded-md hover:opacity-90 transition duration-300 flex items-center justify-center"
            style={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.text,
            }}
          >
            <Save className="mr-2" size={18} />
            Save Invitation
          </button>
        </div>
      </div>
    </div>
  )
}

export default InvitationCreator