'use client'

import { LatLngTuple } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Stack, Text } from '@mantine/core'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const position = [44.92257465805715, -91.32042143068749] as LatLngTuple

const Map = () => {
  return (
    <Stack w="100%" h="400px">
      <MapContainer
        style={{ height: '100%', width: '100%', borderRadius: '0.25rem' }}
        center={position}
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <Text>
              <strong>Wissota Lumber</strong>
              <br /> 5497 173rd Street, Chippewa Falls, WI 54729
            </Text>
          </Popup>
        </Marker>
      </MapContainer>
    </Stack>
  )
}

export default Map
