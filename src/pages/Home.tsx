import { useEffect, useState } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'

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
  const [restaurants, setRestaurants] = useState<RestaurantsType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header showCart={false} />
      <RestaurantList restaurant={restaurants} />
      <Footer />
    </>
  )
}

export default Home
