import Footer from '../components/Footer'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import { useGetRestaurantsQuery } from '../services/api'

export type RestaurantsType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header showCart={false} />
        <RestaurantList restaurant={restaurants} />
        <Footer />
      </>
    )
  }

  return <h2>Loading...</h2>
}

export default Home
