import styled from 'styled-components'
import { Colors } from '../../styles'

export const Card = styled.li`
  border: 1px solid ${Colors.amaranth};
  background-color: #fff;
  position: relative;

  > img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardContent = styled.div`
  padding: 8px 8px 12px 8px;
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
