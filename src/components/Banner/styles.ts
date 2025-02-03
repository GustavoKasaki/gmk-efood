import styled from 'styled-components'

export const BannerImg = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const BannerTitle = styled.h2`
  font-size: 36px;
  max-width: 450px;
  margin-bottom: 32px;
`

export const BannerPrices = styled.p`
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`
