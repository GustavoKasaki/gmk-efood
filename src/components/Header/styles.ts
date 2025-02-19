import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  padding: 40px 0;

  .container {
    display: block;
    text-align: center;

    &-cart {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;

      @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;

        img {
          margin: 12px 0;
        }
      }
    }
  }

  img {
    width: 125px;
  }
`

export const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  width: 540px;
  margin: 140px auto 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    width: 100%;
    margin: 40px auto 0 auto;
  }
`

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`
