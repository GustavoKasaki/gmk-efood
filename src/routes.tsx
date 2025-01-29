import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

const RoutesDom = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default RoutesDom
