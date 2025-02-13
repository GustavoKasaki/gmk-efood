import styled from 'styled-components'

import close from '../../assets/images/close.png'

import { Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${Colors.amaranth};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Colors.beige};
  margin-bottom: 24px;

  span {
    display: block;
    font-size: 12px;
    color: ${Colors.amaranth};
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px 0;
  border-bottom: 1px solid ${Colors.amaranth};
  background-color: ${Colors.beige};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${close});
    background-color: transparent;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
