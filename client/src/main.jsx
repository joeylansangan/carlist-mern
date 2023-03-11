import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    //  activates additional checks and warnings for its descendants
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )