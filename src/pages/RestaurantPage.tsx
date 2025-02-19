import { useParams } from 'react-router-dom'

import { useGetRestaurantsMenuQuery } from '../services/api'

import Header from '../components/Header'
import Footer from '../components/Footer'
import DishesList from '../components/DishesList'
import Banner from '../components/Banner'
import Loader from '../components/Loader'

const RestaurantPage = () => {
  const { id } = useParams()
  const { data: restaurant, isLoading: isLoadingDishes } =
    useGetRestaurantsMenuQuery(id!)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <Header showCart={true} />
      <Banner restaurant={restaurant} isLoading={isLoadingDishes} />
      <DishesList restaurant={restaurant} isLoading={isLoadingDishes} />
      <Footer />
    </>
  )
}

export default RestaurantPage
