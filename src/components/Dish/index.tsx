import Button from '../Button'

import { Card, CardContent, CardDescription, CardTitle } from './styles'

type Props = {
  image: string
  title: string
  description: string
  addToCart: () => void
}

const getDishDescription = (description: string) => {
  if (description.length > 140) {
    return description.slice(0, 137) + '...'
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
        <Button onClick={addToCart} type={'button'} title={title}>
          Add to cart
        </Button>
      </CardContent>
    </Card>
  )
}

export default Dish
