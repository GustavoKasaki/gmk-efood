import logo from '../../assets/images/logo.png'
import { HeaderBar, HeaderTitle } from './styles'
import headerBg from '../../assets/images/header-background.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${headerBg})` }}>
    <div className="container">
      <img src={logo} />
      <HeaderTitle>
        Enjoy gastronomic experiences in the comfort of your home.
      </HeaderTitle>
    </div>
  </HeaderBar>
)

export default Header
