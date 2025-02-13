import {
  Card,
  CardButton,
  CardContent,
  CardDescription,
  CardTitle
} from './styles'

type Props = {
  image: string
  title: string
  description: string
  addToCart: () => void
}

const getDishDescription = (description: string) => {
  if (description.length > 135) {
    return description.slice(0, 132) + '...'
  }
  return description
}

const Dish = ({ image, title, description, addToCart }: Props) => {
  return (
    <Card>
      <CardContent>
        <img src={image} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{getDishDescription(description)}</CardDescription>
        <CardButton onClick={addToCart}>Add to cart</CardButton>
      </CardContent>
    </Card>
  )
}

export default Dish
