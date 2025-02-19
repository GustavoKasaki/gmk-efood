import styled from 'styled-components'

import trash from '../../assets/images/trash.png'

import { Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'
import { TagContainer } from '../Tag/styles'

type Width = {
  maxWidth?: string
}

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
  overflow-y: auto;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    margin-bottom: 8px;
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  width: 100%;

  img {
    max-width: 100px;
  }

  p {
    color: ${Colors.offwhite};
  }
`

export const CartItem = styled.li`
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  border-bottom: 1px solid ${Colors.amaranth};
  background-color: ${Colors.beige};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background-image: url(${trash});
    background-size: contain;
    background-color: transparent;
    width: 16px;
    height: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;

  p {
    font-weight: bold;
    font-size: 14px;
    color: ${Colors.beige};
  }
`

export const CheckoutForm = styled.form`
  margin: 0 8px;

  h3 {
    color: ${Colors.offwhite};
    margin-bottom: 16px;
  }
`

export const Row = styled.div`
  display: flex;
  column-gap: 34px;

  &.margin-bottom {
    margin-bottom: 24px;
  }
`

export const InputGroup = styled.div<Width>`
  max-width: ${(props) => props.maxWidth || 'auto'};
  flex: auto;
  margin-bottom: 8px;

  label {
    color: ${Colors.offwhite};
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  input {
    color: #000;
    background-color: ${Colors.beige};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${Colors.beige};
    width: 100%;

    &.error {
      border: 2px solid red;
    }
  }
`

export const OrderMessage = styled.div`
  h3 {
    color: ${Colors.offwhite};
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  p {
    color: ${Colors.offwhite};
    font-size: 14px;
    margin-bottom: 16px;
  }
`

export const ErrorText = styled.p`
  font-size: 14px;
  color: ${Colors.offwhite};
`
