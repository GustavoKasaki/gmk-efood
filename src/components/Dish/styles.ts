import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Colors } from '../../styles'

export const Card = styled.li`
  background-color: ${Colors.amaranth};
`

export const CardContent = styled.div`
  padding: 8px;

  img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }
`

export const CardTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.beige};
  }
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  text-align: justify;
  margin: 8px 0;
  color: ${Colors.beige};
`

export const CardButton = styled(Link)`
  background-color: ${Colors.beige};
  color: ${Colors.amaranth};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  padding: 4px 6px;
  display: block;
  text-align: center;
  width: 100%;
`
