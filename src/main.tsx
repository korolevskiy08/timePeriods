import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { register } from 'swiper/element/bundle';

register()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
