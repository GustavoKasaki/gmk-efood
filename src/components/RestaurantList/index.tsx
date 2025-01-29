import Restaurant from '../Restaurant'
import { List, Section } from './styles'

const RestaurantList = () => (
  <Section>
    <div className="container">
      <List>
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </List>
    </div>
  </Section>
)

export default RestaurantList
