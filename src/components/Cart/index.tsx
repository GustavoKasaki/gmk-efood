import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { priceFormat } from '../DishesList'
import Button from '../Button'

import {
  CartContainer,
  CartItem,
  CheckoutForm,
  InputGroup,
  OrderMessage,
  Overlay,
  Prices,
  Row,
  Sidebar
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [checkoutStep, setCheckoutStep] = useState(0)

  const closeCart = () => {
    dispatch(close())
    setCheckoutStep(0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, curr) => {
      return (acc += curr.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {checkoutStep === 0 && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{priceFormat(item.preco)}</span>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} />
                </CartItem>
              ))}
            </ul>
            <Prices>
              <p>Total:</p>
              <p>{priceFormat(getTotalPrice())}</p>
            </Prices>
            <Button
              type="button"
              title="Proceed to checkout"
              onClick={() => setCheckoutStep(1)}
            >
              Proceed to checkout
            </Button>
          </>
        )}

        {checkoutStep === 1 && (
          <>
            <CheckoutForm>
              <h3>Delivery info</h3>
              <InputGroup>
                <label htmlFor="deliveryName">Who will receive?</label>
                <input
                  id="deliveryName"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="address">Address:</label>
                <input
                  id="address"
                  type="text"
                  placeholder="React st, 123"
                  required
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="city">City:</label>
                <input id="city" type="text" placeholder="City" required />
              </InputGroup>
              <Row>
                <InputGroup>
                  <label htmlFor="postalCode">Postal code:</label>
                  <input
                    id="postalCode"
                    type="text"
                    placeholder="12345-678"
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="addressNumber">Address number:</label>
                  <input
                    id="addressNumber"
                    type="text"
                    placeholder="1234"
                    required
                  />
                </InputGroup>
              </Row>
              <InputGroup>
                <label htmlFor="additional">Additional info (optional):</label>
                <input id="additional" type="text" placeholder="1234" />
              </InputGroup>
              <Prices>
                <p>Total:</p>
                <p>{priceFormat(getTotalPrice())}</p>
              </Prices>
              <Button
                type="button"
                title="Proceed to payment"
                onClick={() => setCheckoutStep(2)}
              >
                Proceed to payment
              </Button>
              <Button
                type="button"
                title="Go back"
                onClick={() => setCheckoutStep(0)}
              >
                Go back
              </Button>
            </CheckoutForm>
          </>
        )}

        {checkoutStep === 2 && (
          <>
            <CheckoutForm>
              <h3>Payment - Total amount {priceFormat(getTotalPrice())}</h3>
              <InputGroup>
                <label htmlFor="cardOwner">Card holder:</label>
                <input
                  id="cardOwner"
                  type="text"
                  placeholder="Card holder"
                  required
                />
              </InputGroup>
              <Row>
                <InputGroup>
                  <label htmlFor="cardNumber">Card number:</label>
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    required
                  />
                </InputGroup>
                <InputGroup maxWidth="86px">
                  <label htmlFor="securityNumber">CVV:</label>
                  <input
                    id="securityNumber"
                    type="text"
                    placeholder="123"
                    required
                  />
                </InputGroup>
              </Row>
              <Row className="margin-bottom">
                <InputGroup>
                  <label htmlFor="expireMonth">Expiration month:</label>
                  <input
                    id="expireMonth"
                    type="text"
                    placeholder="02"
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <label htmlFor="expireYear">Expiration year:</label>
                  <input
                    id="expireYear"
                    type="text"
                    placeholder="2025"
                    required
                  />
                </InputGroup>
              </Row>
              <Button
                type="button"
                title="Finalizar Pedido"
                onClick={() => setCheckoutStep(3)}
              >
                Finish order
              </Button>
              <Button
                type="button"
                title="Voltar"
                onClick={() => setCheckoutStep(1)}
              >
                Go back
              </Button>
            </CheckoutForm>
          </>
        )}
        {checkoutStep === 3 && (
          <>
            <OrderMessage>
              <h3>Order complete - ORDER_ID</h3>
              <p>
                We are happy to inform you that your order is already being
                prepared and will soon be delivered to the provided address.
              </p>
              <p>
                We would like to emphasize that our delivery personnel are not
                authorized to request any additional charges.
              </p>
              <p>
                Please remember the importance of sanitizing your hands after
                receiving your order to ensure your safety and well-being during
                your meal.
              </p>
              <p>
                We hope you enjoy a delicious and pleasant dining experience.
                Bon appétit!
              </p>
            </OrderMessage>
            <Button type="button" title={'Click here to finish the purchase'}>
              Finish
            </Button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
