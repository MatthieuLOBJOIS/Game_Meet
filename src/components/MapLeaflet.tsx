import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "../index.css";


const MapLeaflet = () => {

  return (
    <Map center={[45.4, -75.7]} zoom={12}>
      <TileLayer
      style={{color: "red"}}
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
      />
    </Map>
  );
}

export default MapLeaflet;