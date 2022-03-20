import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import './map.css'

const LocationPin = ({ text }) => (
    <div className="pin">
      <Icon icon={locationIcon} className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  )

const Map = ({ location1, location2, location3, zoomLevel }) => (
    <div className="map">
      <h2 className="map-h2">Map Component</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC9PyaGrJAFo5EStOx4ZmwqeEujWEkl54Q' }}
          defaultCenter={location1}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location1.lat}
            lng={location1.lng}
            text={location1.address}
          />
          <LocationPin
            lat={location2.lat}
            lng={location2.lng}
            text={location2.address}
          />
          <LocationPin
            lat={location3.lat}
            lng={location3.lng}
            text={location3.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  )

  export default Map