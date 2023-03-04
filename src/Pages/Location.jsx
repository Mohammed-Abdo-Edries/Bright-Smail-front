import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'

function Location() {
        const position = [15.568029396601318, 32.53546863581726]
  return (
    <div className="location" id="location">
        <div>
        <h2 className="title">our Location</h2>
        <div className="map-wrap" >
            <MapContainer center={position} zoom={14} >
            <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>come say hi</Popup>
            </Marker>
            </MapContainer>
        </div>
        </div>
    </div>
    )
}

export default Location