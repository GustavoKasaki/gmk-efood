import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import { HeaderBar, HeaderTitle } from './styles'
import headerBg from '../../assets/images/header-background.png'

type Props = {
  showCart: boolean
}

const Header = ({ showCart }: Props) => (
  <HeaderBar style={{ backgroundImage: `url(${headerBg})` }}>
    {showCart ? (
      <div className="container container-cart">
        <Link to={'/'}>
          <p>Restaurants</p>
        </Link>
        <Link to={'/'}>
          <img src={logo} />
        </Link>
        <p>2 item(s) on cart</p>
      </div>
    ) : (
      <div className="container">
        <Link to={'/'}>
          <img src={logo} />
        </Link>
        <HeaderTitle>
          Gastronomic experiences in the comfort of your home
        </HeaderTitle>
      </div>
    )}
  </HeaderBar>
)

export default Header
