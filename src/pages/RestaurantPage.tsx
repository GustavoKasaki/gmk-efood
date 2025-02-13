import { useParams } from 'react-router-dom'

import { useGetRestaurantsMenuQuery } from '../services/api'

import Header from '../components/Header'
import Footer from '../components/Footer'
import DishesList from '../components/DishesList'
import Banner from '../components/Banner'

const RestaurantPage = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantsMenuQuery(id!)

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
