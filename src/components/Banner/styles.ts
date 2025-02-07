import styled from 'styled-components'

export const BannerImg = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 50%;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    position: relative;
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
