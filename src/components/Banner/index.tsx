import { useLocation } from 'react-router-dom'

import RestaurantModel from '../../models/RestaurantModel'
import { BannerImg, BannerPrices, BannerTitle } from './styles'

export type Props = {
  image: RestaurantModel[]
}

const Banner = () => {
  const location = useLocation()
  const backgroundImage = location.state?.backgroundImage || ''
  const restaurantName = location.state?.name || 'Restaurant'

  return (
    <BannerImg style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <BannerPrices>
          From <span>R$ 250,00</span> <br />
          for R$ 99,90
        </BannerPrices>
        <BannerTitle>{restaurantName}</BannerTitle>
      </div>
    </BannerImg>
  )
}

export default Banner
