import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2322219613675!2d81.07408895010786!3d6.981900519577246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae4618a1a9fec37%3A0x1dd900702229654b!2sUva%20Wellassa%20University%20of%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1642687269718!5m2!1sen!2slk" 
      width="100%" 
      height="450" 
      style={{border:"0"}} 
      allowfullscreen="" 
      loading="lazy"></iframe>
    
  </React.StrictMode>,
  document.getElementById('root')
)