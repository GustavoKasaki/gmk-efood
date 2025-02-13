import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalCss } from './styles'
import RoutesDom from './routes'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <RoutesDom />
      </BrowserRouter>
      <Cart />
    </Provider>
  )
}

export default App
