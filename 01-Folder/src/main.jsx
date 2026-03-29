// Import StrictMode (helps detect potential problems in development)
import { StrictMode } from 'react'

// Import createRoot to create a React root (React 18 feature)
import { createRoot } from 'react-dom/client'

// Import global CSS file
import './index.css'

// Import main App component
import App from './App.jsx'

// Select root div, create React root, and render App into the DOM
createRoot(document.getElementById('root')).render(<App />)