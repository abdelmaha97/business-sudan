
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import type { Opportunity } from '@/pages/Opportunities';

interface InteractiveMapProps {
  opportunities: Opportunity[];
  onSelectOpportunity: (opportunity: Opportunity) => void;
}

export const InteractiveMap = ({ opportunities, onSelectOpportunity }: InteractiveMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkZWxtYWhhIiwiYSI6ImNtNzc3eW9mazB2d3EyaXF4bWkzaXJvdmUifQ.oZ5LH3PNtfoI3pq-3G7PgQ';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [32.5599, 15.5007], // مركز السودان
      zoom: 5
    });

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // إضافة العلامات للفرص الاستثمارية
    opportunities.forEach((opp) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([opp.location.lng, opp.location.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div dir="rtl" class="p-2">
                <h3 class="font-bold mb-1">${opp.title}</h3>
                <p class="text-sm text-gray-600">${opp.sector}</p>
              </div>
            `)
        )
        .addTo(map.current!);

      marker.getElement().addEventListener('click', () => {
        onSelectOpportunity(opp);
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [opportunities, onSelectOpportunity]);

  return (
    <div ref={mapContainer} className="w-full h-full" />
  );
};
