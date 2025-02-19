import Footer from '../components/Footer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import RestaurantList from '../components/RestaurantList'
import { useGetRestaurantsQuery } from '../services/api'

const Home = () => {
  const { data: restaurants, isLoading: isLoadingRestaurants } =
    useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header showCart={false} />
        <RestaurantList
          restaurant={restaurants}
          isLoading={isLoadingRestaurants}
        />
        <Footer />
      </>
    )
  }

  return <Loader />
}

export default Home
