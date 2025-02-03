import styled from 'styled-components'

export const BannerImg = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const BannerCategory = styled.p`
  font-size: 24px;
  margin-top: 32px;
  color: #fff;
`

export const BannerTitle = styled.h2`
  font-size: 36px;
  max-width: 450px;
  margin-bottom: 32px;
  color: #fff;
`
