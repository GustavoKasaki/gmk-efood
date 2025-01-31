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
  category: string[]
  title: string
  description: string
  image: string
}

const Restaurant = ({ category, title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {category.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
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
      <CardButton href="#">Learn more</CardButton>
    </CardContent>
  </Card>
)

export default Restaurant
