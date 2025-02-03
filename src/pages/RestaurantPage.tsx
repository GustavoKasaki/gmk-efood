import Header from '../components/Header'
import Footer from '../components/Footer'
import DishesList from '../components/DishesList'
import Banner from '../components/Banner'

const Japanese = () => (
  <>
    <Header showCart={true} />
    <Banner />
    <DishesList />
    <Footer />
  </>
)

export default Japanese
