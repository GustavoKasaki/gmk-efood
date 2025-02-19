import star from '../../assets/images/star.png'
import Button from '../Button'
import Tag from '../Tag'

import * as S from './styles'

type Props = {
  category: string
  rating: number
  isHot: boolean
  title: string
  description: string
  image: string
  id: number
  dishes: object
}

export const capitalizeFirstLetter = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}

export const getDescription = (description: string) => {
  if (description.length > 250) {
    return description.slice(0, 247) + '...'
  }
  return description
}

const Restaurant = ({
  category,
  rating,
  title,
  description,
  image,
  id,
  isHot
}: Props) => {
  return (
    <S.Card>
      <img src={image} alt={title} />
      <S.Infos>
        {isHot ? <Tag>Hot</Tag> : ''}
        <Tag>{capitalizeFirstLetter(category)}</Tag>
      </S.Infos>
      <S.CardContent>
        <S.CardTitle>
          <p>{title}</p>
          <div className="rating">
            <p>{rating}</p>
            <img src={star} alt="star" />
          </div>
        </S.CardTitle>
        <S.CardDescription>{getDescription(description)}</S.CardDescription>
        <Button to={`/restaurant/${id}`} type="link" title={title}>
          Learn more
        </Button>
      </S.CardContent>
    </S.Card>
  )
}

export default Restaurant
