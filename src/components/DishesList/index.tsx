import Dish from '../Dish'
import { List, Section } from './styles'
import Banner from '../Banner'
import { RestaurantsType } from '../../pages/Home'

type Props = {
  restaurant: RestaurantsType[]
}

const DishesList = ({ restaurant }: Props) => {
  return (
    <>
      <Banner restaurant={restaurant} />
      <Section>
        <div className="container">
          <List>
            {restaurant.map((dish) => (
              <Dish
                key={dish.id}
                id={dish.id}
                image={dish.cardapio.foto}
                title={dish.cardapio.nome}
                description={dish.cardapio.descricao}
              />
            ))}
          </List>
        </div>
      </Section>
    </>
  )
}

export default DishesList
