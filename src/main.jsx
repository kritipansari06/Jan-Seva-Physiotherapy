import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js')
      .then(registration => {
        console.log('✅ Service Worker registered:', registration.scope);
      })
      .catch(err => {
        console.error('❌ Service Worker registration failed:', err);
      });
  });
} else {
  console.log('Service Workers not supported');
}