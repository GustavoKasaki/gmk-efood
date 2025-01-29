import styled from 'styled-components'
import { Colors } from '../../styles'

export const Card = styled.li`
  width: 472px;
  border: 1px solid ${Colors.amaranth};
  background-color: #fff;
`

export const CardContent = styled.div`
  padding: 8px;
`

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;

  .rating {
    display: flex;
    align-items: center;

    img {
      width: 20px;
      margin-left: 8px;
    }
  }
`

export const CardDescription = styled.p`
  font-size: 14px;
  text-align: justify;
  margin: 16px 0;
`

export const CardButton = styled.a`
  background-color: ${Colors.amaranth};
  color: ${Colors.beige};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  padding: 4px 6px;
`
