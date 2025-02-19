import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FormikTouched, useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'

import { RootReducer } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { priceFormat } from '../DishesList'
import Button from '../Button'
import basket from '../../assets/images/basket.svg'

import {
  CartContainer,
  CartItem,
  CheckoutForm,
  EmptyCart,
  InputGroup,
  OrderMessage,
  Overlay,
  Prices,
  Row,
  Sidebar
} from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { isSuccess, data, reset }] = usePurchaseMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [checkoutStep, setCheckoutStep] = useState(0)

  const closeCart = () => {
    dispatch(close())
    setCheckoutStep(0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acc, curr) => acc + curr.preco, 0)
  }

  const form = useFormik({
    initialValues: {
      deliveryName: '',
      address: '',
      city: '',
      zipCode: '',
      addressNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      securityNumber: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      deliveryName: Yup.string()
        .min(5, 'This field must have at least 5 characters')
        .required('This field must be filled!'),
      address: Yup.string().required('This field must be filled!'),
      city: Yup.string().required('This field must be filled!'),
      zipCode: Yup.string().required('This field must be filled!'),
      addressNumber: Yup.string().required('This field must be filled!'),
      cardOwner: Yup.string().required('This field must be filled!'),
      cardNumber: Yup.string().required('This field must be filled!'),
      securityNumber: Yup.string().required('This field must be filled!'),
      expireMonth: Yup.string().required('This field must be filled!'),
      expireYear: Yup.string().required('This field must be filled!')
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log('Enviando formulário...', values)

      try {
        await purchase({
          delivery: {
            receiver: values.deliveryName,
            address: {
              description: values.address,
              city: values.city,
              zipCode: values.zipCode,
              number: Number(values.addressNumber),
              complement: values.complement
            }
          },
          payment: {
            card: {
              name: values.cardOwner,
              number: values.cardNumber,
              code: Number(values.securityNumber),
              expires: {
                month: Number(values.expireMonth),
                year: Number(values.expireYear)
              }
            }
          },
          products: items.map((item) => ({
            id: item.id,
            price: item.preco as number
          }))
        })
        resetForm()

        console.log('Compra realizada com sucesso!')
      } catch (error) {
        console.error('Erro ao enviar o pedido:', error)
      }
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const stepFields = [
    [],
    [
      'deliveryName',
      'address',
      'city',
      'zipCode',
      'addressNumber',
      'complement'
    ],
    ['cardOwner', 'cardNumber', 'securityNumber', 'expireMonth', 'expireYear']
  ]

  const handleNextStep = async () => {
    const currentStepFields = stepFields[checkoutStep]

    const errors = await form.validateForm()
    const stepErrors = Object.keys(errors).filter((field) =>
      currentStepFields.includes(field)
    )

    if (stepErrors.length === 0) {
      setCheckoutStep((prevStep) => prevStep + 1)
    } else {
      const touchedFields = stepErrors.reduce(
        (acc, field) => {
          acc[field as keyof typeof form.values] = true
          return acc
        },
        {} as FormikTouched<typeof form.values>
      )
      console.log(touchedFields)
      form.setTouched(touchedFields)
    }
  }

  const handleFinish = () => {
    dispatch(close())
    dispatch(clear())
    setCheckoutStep(0)
    reset()
    navigate('/')
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length === 0 ? (
          <EmptyCart>
            <img src={basket} alt="Shopping basket" />
            <p>Your cart is empty!</p>
          </EmptyCart>
        ) : (
          <>
            {isSuccess && data ? (
              <>
                <OrderMessage>
                  <h3>Order complete - {data.orderId}</h3>
                  <p>
                    We are happy to inform you that your order is already being
                    prepared and will soon be delivered to the provided address.
                  </p>
                  <p>
                    We would like to emphasize that our delivery personnel are
                    not authorized to request any additional charges.
                  </p>
                  <p>
                    Please remember the importance of sanitizing your hands
                    after receiving your order to ensure your safety and
                    well-being during your meal.
                  </p>
                  <p>
                    We hope you enjoy a delicious and pleasant dining
                    experience. Bon appétit!
                  </p>
                </OrderMessage>
                <Button
                  type="button"
                  title={'Click here to finish the purchase'}
                  onClick={handleFinish}
                >
                  Finish
                </Button>
              </>
            ) : (
              <>
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
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                          />
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

                <CheckoutForm onSubmit={form.handleSubmit}>
                  {checkoutStep === 1 && (
                    <>
                      <h3>Delivery info</h3>
                      <InputGroup>
                        <label htmlFor="deliveryName">Who will receive?</label>
                        <input
                          id="deliveryName"
                          placeholder="Name"
                          type="text"
                          name="deliveryName"
                          value={form.values.deliveryName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('deliveryName') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="address">Address:</label>
                        <input
                          id="address"
                          placeholder="Street / avenue"
                          type="text"
                          name="address"
                          value={form.values.address}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('address') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <InputGroup>
                        <label htmlFor="city">City:</label>
                        <input
                          id="city"
                          placeholder="City"
                          type="text"
                          name="city"
                          value={form.values.city}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('city') ? 'error' : ''}
                        />
                      </InputGroup>
                      <Row>
                        <InputGroup>
                          <label htmlFor="zipCode">Zip code:</label>
                          <InputMask
                            mask="99999-999"
                            placeholder="00000-000"
                            id="zipCode"
                            type="text"
                            name="zipCode"
                            value={form.values.zipCode}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('zipCode') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                        <InputGroup>
                          <label htmlFor="addressNumber">Address number:</label>
                          <input
                            id="addressNumber"
                            placeholder="0000"
                            type="text"
                            name="addressNumber"
                            value={form.values.addressNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('addressNumber') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                      </Row>
                      <InputGroup>
                        <label htmlFor="complement">
                          Complement (optional):
                        </label>
                        <input
                          id="complement"
                          placeholder="Commercial building, ..."
                          name="complement"
                          value={form.values.complement}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('complement') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <Button
                        type="button"
                        title="Proceed to payment"
                        onClick={handleNextStep}
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
                    </>
                  )}

                  {checkoutStep === 2 && (
                    <>
                      <h3>
                        Payment - Total amount {priceFormat(getTotalPrice())}
                      </h3>
                      <InputGroup>
                        <label htmlFor="cardOwner">Card holder:</label>
                        <input
                          id="cardOwner"
                          placeholder="Name in the card"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('cardOwner') ? 'error' : ''
                          }
                        />
                      </InputGroup>
                      <Row>
                        <InputGroup>
                          <label htmlFor="cardNumber">Card number:</label>
                          <InputMask
                            mask="9999 9999 9999 9999"
                            placeholder="0000 0000 0000 0000"
                            id="cardNumber"
                            name="cardNumber"
                            value={form.values.cardNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardNumber') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                        <InputGroup maxWidth="86px">
                          <label htmlFor="securityNumber">CVV:</label>
                          <InputMask
                            mask="999"
                            placeholder="000"
                            id="securityNumber"
                            name="securityNumber"
                            value={form.values.securityNumber}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('securityNumber')
                                ? 'error'
                                : ''
                            }
                          />
                        </InputGroup>
                      </Row>
                      <Row>
                        <InputGroup>
                          <label htmlFor="expireMonth">Expiration month:</label>
                          <InputMask
                            mask="99"
                            placeholder="00"
                            id="expireMonth"
                            name="expireMonth"
                            value={form.values.expireMonth}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expireMonth') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                        <InputGroup>
                          <label htmlFor="expireYear">Expiration year:</label>
                          <InputMask
                            mask="9999"
                            placeholder="0000"
                            id="expireYear"
                            name="expireYear"
                            value={form.values.expireYear}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('expireYear') ? 'error' : ''
                            }
                          />
                        </InputGroup>
                      </Row>
                      <Button type="submit" title="Finish order">
                        Finish order
                      </Button>
                      <Button
                        type="button"
                        title="Go back"
                        onClick={() => setCheckoutStep(1)}
                      >
                        Go back
                      </Button>
                    </>
                  )}
                </CheckoutForm>
              </>
            )}
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
