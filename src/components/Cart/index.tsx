import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import { priceFormat } from '../DishesList'
import Button from '../Button'

import { CartContainer, CartItem, Overlay, Prices, Sidebar } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, curr) => {
      return (acc += curr.price!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <span>{priceFormat(item.price)}</span>
              </div>
              <button type="button" onClick={() => removeItem(item.id)} />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Total: {priceFormat(getTotalPrice())}{' '}
          <span>up to 6 interest-free payments</span>
        </Prices>
        <Button type={'button'} title={'Proceed to checkout'}>
          Proceed to checkout
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
