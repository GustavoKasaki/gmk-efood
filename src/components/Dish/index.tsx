import Button from '../Button'

import * as S from './styles'

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
    <S.Card>
      <S.CardContent>
        <img src={image} alt={title} />
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{getDishDescription(description)}</S.CardDescription>
        <Button onClick={addToCart} type={'button'} title={title}>
          Add to cart
        </Button>
      </S.CardContent>
    </S.Card>
  )
}

export default Dish
