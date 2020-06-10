import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
 
import "./Map.css";
 
const Map = props => {
  const { center, zoom } = props;
  const mapRef = useRef();
  useEffect(() => {
    mapboxgl.accessToken ='pk.eyJ1IjoibWlpYWhhcmphIiwiYSI6ImNrYjU2bzhxeTBtbmYyc283dDgwcGZnYnAifQ.S9-LwEnpQAUxyZSSppxZlA';
const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center,
      zoom,
    });
    new mapboxgl.Marker().setLngLat(center).addTo(map);
  }, [center, zoom]);
  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};
 
export default Map;
