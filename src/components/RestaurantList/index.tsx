import Restaurant from '../Restaurant'
import { List, Section } from './styles'

type Props = {
  restaurant: RestaurantsType[]
}

const RestaurantList = ({ restaurant }: Props) => {
  if (!restaurant) {
    return <h3>Loading...</h3>
  }

  return (
    <Section>
      <div className="container">
        <List>
          {restaurant.map((restaurant) => (
            <Restaurant
              key={restaurant.id}
              id={restaurant.id}
              title={restaurant.titulo}
              category={restaurant.tipo}
              rating={restaurant.avaliacao}
              description={restaurant.descricao}
              image={restaurant.capa}
              isHot={restaurant.destacado}
              dishes={restaurant.cardapio}
            />
          ))}
        </List>
      </div>
    </Section>
  )
}

export default RestaurantList
