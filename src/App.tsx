import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import KdsProvider from './providers/KdsProvider'
import Routes from './routes'

const App: React.FC = () => (
  <KdsProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </KdsProvider>
)

export default App
