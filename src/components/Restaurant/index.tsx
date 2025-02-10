import star from '../../assets/images/star.png'
import Tag from '../Tag'

import {
  Card,
  CardButton,
  CardContent,
  CardDescription,
  CardTitle,
  Infos
} from './styles'

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
    <Card>
      <img src={image} alt={title} />
      <Infos>
        {isHot ? <Tag>Hot</Tag> : ''}
        <Tag>{capitalizeFirstLetter(category)}</Tag>
      </Infos>
      <CardContent>
        <CardTitle>
          <p>{title}</p>
          <div className="rating">
            <p>{rating}</p>
            <img src={star} alt="star" />
          </div>
        </CardTitle>
        <CardDescription>{getDescription(description)}</CardDescription>
        <CardButton to={`/restaurant/${id}`}>Learn more</CardButton>
      </CardContent>
    </Card>
  )
}

export default Restaurant
