"use client";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

export default function LocationMap(): JSX.Element {
  const markers = [
    {
      geocode: [32.195189, -95.852155],
      popUp: "first office",
    },

    {
      geocode: [35.432421, -83.150185],
      popUp: "first office",
    },
  ];

  const customIcon = new Icon({
    iconUrl: require("./img/Combined-Shape.svg"),
    iconSize: [40, 48],
  });

  return (
    <div className="w-[375px] h-[367px]">
      <MapContainer
        center={[34.756846, -90.068075]}
        zoom={3}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => {
          const [lat, lng] = marker.geocode;
          return <Marker position={[lat, lng]} icon={customIcon}></Marker>;
        })}
      </MapContainer>
    </div>
  );
}
