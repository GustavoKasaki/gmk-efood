import { BannerImg, BannerCategory, BannerTitle } from './styles'
import { RestaurantsType } from '../../pages/Home'

type Props = {
  restaurant: RestaurantsType
}

const Banner = ({ restaurant }: Props) => {
  const capitalizeFirstLetter = (val: string) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1)
  }

  if (!restaurant) {
    return <h3>Loading...</h3>
  }

  return (
    <BannerImg style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <BannerCategory>{restaurant.tipo}</BannerCategory>
        <BannerTitle>{capitalizeFirstLetter(restaurant.titulo)}</BannerTitle>
      </div>
    </BannerImg>
  )
}

export default Banner
