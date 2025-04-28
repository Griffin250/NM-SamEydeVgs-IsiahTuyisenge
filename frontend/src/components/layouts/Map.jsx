import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  const basePosition = [58.14320007527389, 8.004666059182107]; 

  const shipLocations = [
    {
      id: 1,
      name: "Sørlandet",
      coords: [58.124124068815235, 7.976698751718138],
    },
    {
      id: 2,
      name: "Christian Radich",
      coords: [58.13651924689933, 7.996500421966349],
    },
    {
      id: 3,
      name: "Statsraad Lehmkuhl",
      coords: [58.13501049926964, 7.970778664736713],
    },
    {
      id: 4,
      name: "Alexander Von Humboldt",
      coords: [58.139428793975426, 7.9783318791612885],
    },
    {
      id: 5,
      name: "Sea Cloud",
      coords: [58.14416976876044, 7.987314080098622],
    },
  ];

  return (
    <div className="h-[400px] w-[700px]">
      <MapContainer
        center={basePosition}
        zoom={16}
        style={{ height: "100%", width: "120%", overflowX: "hidden" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {shipLocations.map((ship) => (
          <Marker key={ship.id} position={ship.coords}>
            <Popup>
              <strong>{ship.name}</strong> <br />
              Docked at Kristiansand Harbor
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
