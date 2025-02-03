import styled from 'styled-components'

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
`
