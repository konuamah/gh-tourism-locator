'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import touristSpots from './touristSpots'

export default function LocationSidebar({ onLocationSelect, selectedLocation }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  // Handle responsive behavior
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true)
      } else {
        setIsSidebarOpen(false)
      }
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`
          lg:hidden fixed z-50
          top-4 ${isSidebarOpen ? 'left-[270px] sm:left-[320px]' : 'left-4'}
          transition-all duration-300
          p-2 bg-white rounded-lg shadow-lg
          hover:bg-gray-100
        `}
        aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isSidebarOpen ? (
          <X size={24} className="text-gray-700" />
        ) : (
          <Menu size={24} className="text-gray-700" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative
          top-0 left-0
          h-full
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          border-r border-gray-200
          overflow-y-auto
          bg-white
          w-[300px] sm:w-[350px] lg:w-full
          z-40
          shadow-lg lg:shadow-none
        `}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Tourist Hotspots</h2>
          <div className="space-y-4">
            {touristSpots.map((spot) => (
              <div
                key={spot.name}
                className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {spot.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {spot.description}
                  </p>
                  <button
                    onClick={() => {
                      onLocationSelect(spot.name)
                      if (isMobile) {
                        setIsSidebarOpen(false)
                      }
                    }}
                    className={`
                      w-full px-4 py-2.5 rounded-lg
                      font-medium text-sm
                      transition duration-200
                      ${
                        selectedLocation === spot.name
                          ? 'bg-blue-500 text-white hover:bg-blue-600'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }
                    `}
                  >
                    View on Map
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}