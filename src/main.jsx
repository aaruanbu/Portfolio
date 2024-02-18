import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Routings } from './Components/Routing.jsx'
// import { Portfolios } from './Components/Portfolios.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Routings />
    {/* <Portfolios /> */}
  </React.StrictMode>,
)
