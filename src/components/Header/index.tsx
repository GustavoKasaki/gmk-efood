import logo from '../../assets/images/logo.png'
import { HeaderBar, HeaderTitle } from './styles'
import headerBg from '../../assets/images/header-background.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${headerBg})` }}>
    <div className="container">
      <Link to={'/'}>
        <img src={logo} />
      </Link>
      <HeaderTitle>
        Gastronomic experiences in the comfort of your home
      </HeaderTitle>
    </div>
  </HeaderBar>
)

export default Header
