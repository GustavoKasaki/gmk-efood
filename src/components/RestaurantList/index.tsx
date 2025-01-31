import RestaurantModel from '../../models/RestaurantModel'
import Restaurant from '../Restaurant'
import { List, Section } from './styles'

export type Props = {
  restaurant: RestaurantModel[]
}

const RestaurantList = ({ restaurant }: Props) => (
  <Section>
    <div className="container">
      <List>
        {restaurant.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            title={restaurant.title}
            category={restaurant.category}
            description={restaurant.description}
            image={restaurant.image}
          />
        ))}
      </List>
    </div>
  </Section>
)

export default RestaurantList
