import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ChakraProvider><App /></ChakraProvider> 
  </React.StrictMode>,
)
