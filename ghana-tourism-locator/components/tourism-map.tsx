'use client'

import { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || ''

const touristSpots = [
  { name: 'Cape Coast Castle', coordinates: [-1.2415, 5.1315] },
  { name: 'Kakum National Park', coordinates: [-1.3829, 5.3484] },
  { name: 'Mole National Park', coordinates: [-1.8562, 9.2617] },
  { name: 'Lake Volta', coordinates: [0.0789, 6.3154] },
  { name: 'Kwame Nkrumah Memorial Park', coordinates: [-0.1869, 5.5600] },
]

export default function TourismMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  useEffect(() => {
    if (map.current) return

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.0232, 7.9465],
      zoom: 6
    })

    map.current.on('load', () => {
      touristSpots.forEach((spot) => {
        new mapboxgl.Marker()
          .setLngLat(spot.coordinates)
          .setPopup(new mapboxgl.Popup().setHTML(`<h3>${spot.name}</h3>`))
          .addTo(map.current!)
      })
    })

    return () => map.current?.remove()
  }, [])

  useEffect(() => {
    if (!map.current || !selectedLocation) return

    const spot = touristSpots.find(s => s.name === selectedLocation)
    if (spot) {
      map.current.flyTo({
        center: spot.coordinates,
        zoom: 12
      })
    }
  }, [selectedLocation])

  return <div ref={mapContainer} className="w-full h-full" />
}

