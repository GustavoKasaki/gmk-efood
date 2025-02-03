import Header from '../components/Header'
import Footer from '../components/Footer'
import DishesList from '../components/DishesList'
import japaneseDishes from '../data/japaneseDishes'
import Banner from '../components/Banner'

const Japanese = () => (
  <>
    <Header showCart={true} />
    <Banner />
    <DishesList dishes={japaneseDishes} />
    <Footer />
  </>
)

export default Japanese
