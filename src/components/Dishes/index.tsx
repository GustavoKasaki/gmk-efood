import {
  Card,
  CardButton,
  CardContent,
  CardDescription,
  CardTitle
} from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Dish = ({ title, description, image }: Props) => (
  <Card>
    <CardContent>
      <img src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton href="">Add to cart</CardButton>
    </CardContent>
  </Card>
)

export default Dish
