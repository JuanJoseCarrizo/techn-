import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { HashRouter } from "react-router-dom";
import ScrollManager from "./components/ScrollManager";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollManager />
      <App />
    </HashRouter>
  </React.StrictMode>,
)