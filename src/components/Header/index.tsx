import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import logo from '../../assets/images/logo.png'
import headerBg from '../../assets/images/header-background.png'

import { CartButton, HeaderBar, HeaderTitle } from './styles'

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
    <HeaderBar style={{ backgroundImage: `url(${headerBg})` }}>
      {showCart ? (
        <div className="container container-cart">
          <Link to={'/'}>
            <p>Restaurants</p>
          </Link>
          <Link to={'/'}>
            <img src={logo} />
          </Link>
          <CartButton onClick={openCart}>
            {items.length} item(s) on cart
          </CartButton>
        </div>
      ) : (
        <div className="container">
          <Link to={'/'}>
            <img src={logo} />
          </Link>
          <HeaderTitle>
            Gastronomic experiences in the comfort of your home
          </HeaderTitle>
        </div>
      )}
    </HeaderBar>
  )
}

export default Header
