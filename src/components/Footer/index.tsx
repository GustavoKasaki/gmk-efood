import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.svg'
import facebook from '../../assets/images/facebook.svg'
import xSocial from '../../assets/images/x.svg'

import * as S from './styles'

const Footer = () => (
  <S.FooterBar>
    <div className="container">
      <S.Logo to={'/'}>
        <img src={logo} />
      </S.Logo>
      <S.FooterLinks>
        <S.FooterLink>
          <a href="">
            <img src={instagram} alt="Instagram" />
          </a>
        </S.FooterLink>
        <S.FooterLink>
          <a href="">
            <img src={facebook} alt="Facebook" />
          </a>
        </S.FooterLink>
        <S.FooterLink>
          <a href="">
            <img src={xSocial} alt="X" />
          </a>
        </S.FooterLink>
      </S.FooterLinks>
      <S.FooterDisclaimer>
        The efood platform is used to promote establishments. Responsibility for
        delivery and product quality lies entirely with the contracted
        establishment.
      </S.FooterDisclaimer>
    </div>
  </S.FooterBar>
)

export default Footer
