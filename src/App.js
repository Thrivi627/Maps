import React from 'react'


import MapSection from './components/map/Map'


import './App.css'

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}

const App = () => (
  <div className="App">
    <MapSection location={location} zoomLevel={17} /> 
  </div>
)

export default App

