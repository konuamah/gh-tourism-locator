'use client'
import { useState } from 'react'
import TourismMap from './components/tourism-map'
import LocationSidebar from './components/location-sidebar'
import Header from './components/header'

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleLocationSelect = (locationName) => {
    setSelectedLocation(locationName)
  }

  return (
    <main className="flex-1 overflow-hidden">
      <div className="grid lg:grid-cols-[300px_1fr] h-[calc(100vh-4rem)]">
  
        <LocationSidebar 
          onLocationSelect={handleLocationSelect}
          selectedLocation={selectedLocation}
        />
        <TourismMap selectedLocation={selectedLocation} />
      
      </div>
    </main>
  )
}