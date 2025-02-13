import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Colors } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) =>
    props.variant === 'primary' ? Colors.amaranth : Colors.beige};
  background-color: ${(props) =>
    props.variant === 'primary' ? Colors.beige : Colors.amaranth};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  padding: 4px 6px;
  display: block;
  text-align: center;
  width: 100%;
  border: none;
`

export const ButtonLink = styled(Link)`
  background-color: ${Colors.amaranth};
  color: ${Colors.beige};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  padding: 4px 6px;
  text-align: center;
`
