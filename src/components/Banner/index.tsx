import { useLocation } from 'react-router-dom'

import RestaurantModel from '../../models/RestaurantModel'
import { BannerImg, BannerCategory, BannerTitle } from './styles'

export type Props = {
  image: RestaurantModel[]
}

const Banner = () => {
  const location = useLocation()
  const backgroundImage = location.state?.backgroundImage || ''
  const restaurantName = location.state?.name || 'Restaurant'
  const categoryName = location.state?.categoryName || 'Category'

  return (
    <BannerImg style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="container">
        <BannerCategory>{categoryName}</BannerCategory>
        <BannerTitle>{restaurantName}</BannerTitle>
      </div>
    </BannerImg>
  )
}

export default Banner
