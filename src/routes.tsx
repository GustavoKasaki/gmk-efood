import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Japanese from './pages/Japanese'

const RoutesDom = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/japanese" element={<Japanese />} />
  </Routes>
)

export default RoutesDom
