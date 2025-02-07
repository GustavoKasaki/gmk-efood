import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import DishesList from '../components/DishesList'
import { RestaurantsType } from './Home'

const RestaurantPage = () => {
  const { id } = useParams()

  const [dishes, setDishes] = useState<RestaurantsType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setDishes(res))
  }, [id])

  if (!dishes) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Header showCart={true} />
      <DishesList restaurant={dishes} />
      <Footer />
    </>
  )
}

export default RestaurantPage
