import DishesModel from '../../models/Dishes'
import Dish from '../Dishes'
import { List, Section } from './styles'

type Props = {
  dishes: DishesModel[]
}

const DishesList = ({ dishes }: Props) => (
  <Section>
    <div className="container">
      <List>
        {dishes.map((dishes) => (
          <Dish
            key={dishes.id}
            title={dishes.title}
            description={dishes.description}
            image={dishes.image}
          />
        ))}
      </List>
    </div>
  </Section>
)

export default DishesList
