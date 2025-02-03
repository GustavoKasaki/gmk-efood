import RestaurantModel from '../../models/RestaurantModel'
import Restaurant from '../Restaurant'
import { List, Section } from './styles'

type Props = {
  restaurant: RestaurantModel[]
}

const RestaurantList = ({ restaurant }: Props) => {
  return (
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
              id={restaurant.id}
              isHot={restaurant.isHot}
            />
          ))}
        </List>
      </div>
    </Section>
  )
}

export default RestaurantList
