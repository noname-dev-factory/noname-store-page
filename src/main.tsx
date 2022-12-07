import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Products from './components/Products'
import './index.css'

const test = false

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {!test
      ? <App />
      : <Products />}
  </React.StrictMode>
)
