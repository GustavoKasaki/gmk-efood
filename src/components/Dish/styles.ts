import styled from 'styled-components'

import { Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  background-color: ${Colors.amaranth};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const CardContent = styled.div`
  padding: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }

  ${ButtonContainer} {
    margin-top: auto;
  }
`

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.beige};
  margin: 8px 0;
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
  margin-bottom: 8px;
  color: ${Colors.beige};
`
