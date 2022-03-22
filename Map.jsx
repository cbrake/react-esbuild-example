import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const position = [51.505, -0.09];
const style = {height: "300px"};

export const Map = () => {
  return (
    <MapContainer center={position} zoom={13} style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
