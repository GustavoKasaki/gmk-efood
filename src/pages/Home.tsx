import Footer from '../components/Footer'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import Restaurants from '../data/restaurants'

const Home = () => (
  <>
    <Header showCart={false} />
    <RestaurantList restaurant={Restaurants} />
    <Footer />
  </>
)

export default Home
