import {
  FooterBar,
  FooterDisclaimer,
  FooterLink,
  FooterLinks,
  Logo
} from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import xSocial from '../../assets/images/x.svg'

const Footer = () => (
  <FooterBar>
    <div className="container">
      <Logo to={'/'}>
        <img src={logo} />
      </Logo>
      <FooterLinks>
        <FooterLink>
          <a href="">
            <img src={instagram} alt="Instagram" />
          </a>
        </FooterLink>
        <FooterLink>
          <a href="">
            <img src={facebook} alt="Facebook" />
          </a>
        </FooterLink>
        <FooterLink>
          <a href="">
            <img src={xSocial} alt="X" />
          </a>
        </FooterLink>
      </FooterLinks>
      <FooterDisclaimer>
        The efood platform is used to promote establishments. Responsibility for
        delivery and product quality lies entirely with the contracted
        establishment.
      </FooterDisclaimer>
    </div>
  </FooterBar>
)

export default Footer
