import TourismMap from '@/components/tourism-map'
import LocationSidebar from '@/components/location-sidebar'

export default function Home() {
  return (
    <main className="flex-1 overflow-hidden">
      <div className="grid lg:grid-cols-[300px_1fr] h-[calc(100vh-4rem)]">
        <LocationSidebar />
        <TourismMap />
      </div>
    </main>
  )
}

