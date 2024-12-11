import React, { useEffect, useRef, useState, useCallback, memo } from 'react'
import Image from 'next/image'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react'
import touristSpots from './touristSpots'

if (!mapboxgl.accessToken) {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
}

const ImageCarousel = memo(({ isOpen, images, currentIndex, onClose, onNext, onPrev }) => {
    if (!isOpen) return null;
    
    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
                <button 
                    onClick={onClose} 
                    className="absolute -top-10 right-0 text-white hover:text-gray-300"
                >
                    <X size={30} />
                </button>

                <button 
                    onClick={onPrev} 
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                    <ChevronLeft size={30} />
                </button>

                <Image 
                    src={`/${images[currentIndex]}`}
                    alt={`Image ${currentIndex + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-contain rounded"
                />

                <button 
                    onClick={onNext} 
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                    <ChevronRight size={30} />
                </button>

                <div className="absolute bottom-0 left-0 right-0 text-center text-white py-2 bg-black/50">
                    {`${currentIndex + 1} / ${images.length}`}
                </div>
            </div>
        </div>
    );
});

ImageCarousel.displayName = 'ImageCarousel';

const createPopupElement = (spot, onImageClick) => {
    const container = document.createElement('div');
    container.className = 'max-w-sm p-4';
    
    container.innerHTML = `
        <h3 class="text-lg font-bold mb-2">${spot.name}</h3>
        <div class="grid grid-cols-2 gap-2 mb-3">
            <div>
                <iframe 
                    width="100%" 
                    height="150" 
                    src="https://www.youtube.com/embed/${spot.youtubeId}" 
                    title="${spot.name} Video" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    class="rounded"
                ></iframe>
            </div>
            <div>
                <img 
                    src="/${spot.images?.[0] || ''}" 
                    alt="${spot.name}"
                    class="w-full h-[150px] object-cover rounded cursor-pointer image-trigger"
                />
            </div>
        </div>
        <p class="text-sm text-gray-700 mb-2">${spot.history}</p>
        <div class="flex justify-between items-center">
            <a 
                href="https://www.google.com/maps/search/?api=1&query=${spot.coordinates[1]},${spot.coordinates[0]}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-blue-600 hover:underline flex items-center"
            >
                <span class="mr-1">📍</span> Street View
            </a>
        </div>
    `;

    // Add click event listener to the image
    const image = container.querySelector('.image-trigger');
    if (image) {
        image.addEventListener('click', () => {
            onImageClick(spot.images || []);
        });
    }

    return container;
};

const TourismMap = ({ selectedLocation }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const markersRef = useRef(new Map());
    const activePopupRef = useRef(null);

    const [imageCarousel, setImageCarousel] = useState({
        isOpen: false,
        images: [],
        currentIndex: 0
    });

    const handleImageClick = useCallback((images) => {
        setImageCarousel({
            isOpen: true,
            images,
            currentIndex: 0
        });
    }, []);

    const handleCarouselClose = useCallback(() => {
        setImageCarousel(prev => ({
            ...prev,
            isOpen: false
        }));
    }, []);

    const handleNextImage = useCallback(() => {
        setImageCarousel(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex + 1) % prev.images.length
        }));
    }, []);

    const handlePrevImage = useCallback(() => {
        setImageCarousel(prev => ({
            ...prev,
            currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
        }));
    }, []);

    // Initialize map
    useEffect(() => {
        if (map.current) return;

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-1.0232, 7.9465],
            zoom: 6,
        });

        map.current.addControl(new mapboxgl.NavigationControl());
        map.current.addControl(new mapboxgl.FullscreenControl());

        map.current.on('load', () => {
            touristSpots.forEach((spot) => {
                const popupElement = createPopupElement(spot, handleImageClick);
                
                const popup = new mapboxgl.Popup({
                    closeButton: true,
                    closeOnClick: true,
                    maxWidth: '400px',
                });
                
                popup.setDOMContent(popupElement);

                const marker = new mapboxgl.Marker({ color: '#3B82F6' })
                    .setLngLat(spot.coordinates)
                    .setPopup(popup)
                    .addTo(map.current);

                markersRef.current.set(spot.name, { marker, popup });
            });
        });

        return () => {
            map.current?.remove();
        };
    }, [handleImageClick]);

    // Handle selected location changes
    useEffect(() => {
        if (!selectedLocation || !map.current) return;

        if (activePopupRef.current) {
            activePopupRef.current.remove();
        }

        const selectedSpot = touristSpots.find(spot => spot.name === selectedLocation);
        if (!selectedSpot) return;

        map.current.flyTo({
            center: selectedSpot.coordinates,
            zoom: 12
        });

        const markerData = markersRef.current.get(selectedLocation);
        if (markerData) {
            activePopupRef.current = markerData.popup.addTo(map.current);
        }
    }, [selectedLocation]);

    return (
        <div className="relative w-full h-full">
            <div ref={mapContainer} className="w-full h-full" />
            <ImageCarousel 
                isOpen={imageCarousel.isOpen}
                images={imageCarousel.images}
                currentIndex={imageCarousel.currentIndex}
                onClose={handleCarouselClose}
                onNext={handleNextImage}
                onPrev={handlePrevImage}
            />
        </div>
    );
};

TourismMap.displayName = 'TourismMap';

export default memo(TourismMap);