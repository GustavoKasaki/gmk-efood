import styled from 'styled-components'
import { Colors } from '../../styles'

export const Section = styled.section`
  background-color: ${Colors.offwhite};
  padding: 80px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  row-gap: 48px;
`
