import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }
})

localStorage.removeItem('chakra-ui-color-mode')

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
)
