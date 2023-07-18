"use client";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

function Map({ locationCoord, destinationCoord }) {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: locationCoord || [31.2569, 29.9602],
      zoom: 10,
    });

    if (locationCoord && destinationCoord) {
      new mapboxgl.Marker({ color: "#FE7569" })
        .setLngLat(locationCoord)
        .addTo(map);
      new mapboxgl.Marker().setLngLat(destinationCoord).addTo(map);
    }
  }, [locationCoord, destinationCoord]);

  return <div id="map" className="h-[100%] " />;
}

export default Map;
