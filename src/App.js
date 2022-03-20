import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import SimpleForm from "./components/SimpleForm";


import MapSection from './components/map/Map'


import './App.css'

const location1 = {
  address: 'Sirimavo Bandaranaike Vidyalaya, Colombo-07.',
  lat: 6.89692,
  lng: 79.86300, 
}
const location2 = {
  address: 'Royal College, Colombo-07.',
  lat: 6.90510,
  lng: 79.8611,  
}
const location3 = {
  address: 'Visakha Vidyalaya, Colombo-05.',
  lat: 6.89188,
  lng: 79.85957,   
}

const App = () => (
  <div className="App">
    <MapSection location1={location1} location2={location2} location3={location3} zoomLevel={15} /> 
  </div>
)

export default App

