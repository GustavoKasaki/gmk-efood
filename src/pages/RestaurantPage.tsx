import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import DishesList from '../components/DishesList'
import { RestaurantsType } from './Home'
import Banner from '../components/Banner'

const RestaurantPage = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<RestaurantsType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h3>Loading...</h3>
  }

  return (
    <>
      <Header showCart={true} />
      <Banner restaurant={restaurant} />
      <DishesList restaurant={restaurant} />
      <Footer />
    </>
  )
}

export default RestaurantPage
