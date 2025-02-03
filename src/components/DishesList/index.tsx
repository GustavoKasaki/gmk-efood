import { useLocation } from 'react-router-dom'

import Dish from '../Dishes'
import { List, Section } from './styles'
import { Key } from 'react'

const DishesList = () => {
  const location = useLocation()
  const dishesList = location.state?.dishesList || 'Dishes'

  return (
    <Section>
      <div className="container">
        <List>
          {dishesList.map(
            (dishes: {
              id: Key | null | undefined
              title: string
              description: string
              image: string
            }) => (
              <Dish
                key={dishes.id}
                title={dishes.title}
                description={dishes.description}
                image={dishes.image}
              />
            )
          )}
        </List>
      </div>
    </Section>
  )
}

export default DishesList
