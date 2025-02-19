import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'

export const Section = styled.section`
  background-color: ${Colors.offwhite};
  padding: 80px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    li {
      margin-bottom: 32px;
    }
  }
`

export const Item = styled.li`
  position: relative;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  background-color: ${Colors.amaranth};
  display: flex;
  padding: 32px;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    text-align: center;

    > img {
      width: 200px;
      height: 200px;
    }
  }
`

export const ModalInfo = styled.div`
  margin-left: 24px;

  h4 {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: #fff;
    margin-bottom: 16px;
  }

  button {
    padding: 4px 8px;
    height: 24px;
    font-size: 14px;
    font-weight: bold;
    background-color: ${Colors.beige};
    border: none;
    cursor: pointer;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    margin-top: 12px;
  }
`

export const CloseBtn = styled.img`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
