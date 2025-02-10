import { BannerImg, BannerCategory, BannerTitle } from './styles'
import { RestaurantsType } from '../../pages/Home'

type Props = {
  restaurant: RestaurantsType
}

const capitalizeFirstLetter = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}

const Banner = ({ restaurant }: Props) => {
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
