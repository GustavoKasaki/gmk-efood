import styled from 'styled-components'
import { Colors } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${Colors.amaranth};
  color: ${Colors.beige};
  font-size: 12px
  font-weight: bold;
  padding: 6px 4px;
  display: inline-block;
  margin-left: 8px;
`
