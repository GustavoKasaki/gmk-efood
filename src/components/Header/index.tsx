import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.png'
import headerBg from '../../assets/images/header-background.png'

import * as S from './styles'

type Props = {
  showCart: boolean
}

const Header = ({ showCart }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderBar style={{ backgroundImage: `url(${headerBg})` }}>
      {showCart ? (
        <div className="container container-cart">
          <Link to={'/'}>
            <p>Restaurants</p>
          </Link>
          <Link to={'/'}>
            <img src={logo} />
          </Link>
          <S.CartButton onClick={openCart}>
            {items.length} item(s) on cart
          </S.CartButton>
        </div>
      ) : (
        <div className="container">
          <Link to={'/'}>
            <img src={logo} />
          </Link>
          <S.HeaderTitle>
            Gastronomic experiences in the comfort of your home
          </S.HeaderTitle>
        </div>
      )}
    </S.HeaderBar>
  )
}

export default Header
