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
  isHot: boolean
  title: string
  description: string
  image: string
  id: number
}

const Restaurant = ({
  category,
  title,
  description,
  image,
  id,
  isHot
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {isHot ? <Tag>Hot</Tag> : ''}
      <Tag>{category}</Tag>
    </Infos>
    <CardContent>
      <CardTitle>
        <p>{title}</p>
        <div className="rating">
          <p>4,9</p>
          <img src={star} alt="star" />
        </div>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton
        to={`/restaurant/${id}`}
        state={{ backgroundImage: image, name: title, categoryName: category }}
      >
        Learn more
      </CardButton>
    </CardContent>
  </Card>
)

export default Restaurant
