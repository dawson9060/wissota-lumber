'use client'

import { LatLngTuple } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Stack } from '@mantine/core'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

// const position = [51.505, -0.09] as LatLngTuple
const position = [44.92257465805715, -91.32042143068749] as LatLngTuple

// import L from 'leaflet'
// import 'leaflet/dist/leaflet.css'

// delete L.Icon.Default.prototype._getIconUrl

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
//   iconUrl: '/leaflet/images/marker-icon.png',
//   shadowUrl: '/leaflet/images/marker-shadow.png',
// })

const Map = () => {
  return (
    <Stack w="100%" h="400px">
      <MapContainer
        style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
        center={position}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Wissota Lumber</Popup>
        </Marker>
      </MapContainer>
    </Stack>
  )
}

export default Map
