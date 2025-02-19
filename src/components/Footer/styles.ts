import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { breakpoints, Colors } from '../../styles'

export const FooterBar = styled.footer`
  padding: 40px 0;
  background-color: ${Colors.beige};

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Logo = styled(Link)`
  width: 125px;
  display: block;
`

export const FooterLinks = styled.ul`
  font-size: 36px;
  font-weight: bold;
  width: 88px;
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const FooterLink = styled.li`
  img {
    width: 24px;
  }
`

export const FooterDisclaimer = styled.p`
  margin-top: 80px;
  width: 480px;
  text-align: center;
  font-size: 10px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin: 40px auto 0 auto;
  }
`
