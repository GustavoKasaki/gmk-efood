import * as S from './styles'

type Props = {
  restaurant: RestaurantsType
}

const capitalizeFirstLetter = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1)
}

const Banner = ({ restaurant }: Props) => {
  return (
    <S.BannerImg style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <S.BannerCategory>{restaurant.tipo}</S.BannerCategory>
        <S.BannerTitle>
          {capitalizeFirstLetter(restaurant.titulo)}
        </S.BannerTitle>
      </div>
    </S.BannerImg>
  )
}

export default Banner
