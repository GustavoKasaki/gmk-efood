import { BrowserRouter } from 'react-router-dom'
import React from 'react'

import { GlobalCss } from './styles'
import RoutesDom from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <RoutesDom />
    </BrowserRouter>
  )
}

export default App
