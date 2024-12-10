'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const touristSpots = [
  {
    name: 'Cape Coast Castle',
    description: 'Historic fortress and UNESCO World Heritage site.',
    coordinates: [-1.2415, 5.1315]
  },
  {
    name: 'Kakum National Park',
    description: 'Tropical rainforest with canopy walkway.',
    coordinates: [-1.3829, 5.3484]
  },
  {
    name: 'Mole National Park',
    description: 'Largest wildlife park in Ghana with diverse wildlife.',
    coordinates: [-1.8562, 9.2617]
  },
  {
    name: 'Lake Volta',
    description: 'Largest man-made lake in the world by surface area.',
    coordinates: [0.0789, 6.3154]
  },
  {
    name: 'Kwame Nkrumah Memorial Park',
    description: 'Dedicated to Ghana\'s first president and independence leader.',
    coordinates: [-0.1869, 5.5600]
  },
]

export default function LocationSidebar() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  return (
    <div className="border-r h-full overflow-auto">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Tourist Hotspots</h2>
        {touristSpots.map((spot) => (
          <Card key={spot.name} className="mb-4">
            <CardHeader>
              <CardTitle>{spot.name}</CardTitle>
              <CardDescription>{spot.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => setSelectedLocation(spot.name)}
                variant={selectedLocation === spot.name ? "default" : "outline"}
              >
                View on Map
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

