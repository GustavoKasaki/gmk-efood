import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, DishType, open } from '../../store/reducers/cart'

import close from '../../assets/images/close.png'
import Dish from '../Dish'

import * as S from './styles'
import Loader from '../Loader'

type Props = {
  restaurant: RestaurantsType
  isLoading: boolean
}

interface ModalState {
  isVisible: boolean
  dish?: DishType
}

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const DishesList = ({ restaurant, isLoading }: Props) => {
  const dispatch = useDispatch()

  const addToCart = (dish: DishType) => {
    dispatch(add(dish))
    dispatch(open())
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const openModal = (dish: ModalState['dish']) => {
    setModal({
      isVisible: true,
      dish
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <S.Section>
        <div className="container">
          <S.List>
            {restaurant.cardapio.map((dish) => (
              <S.Item key={dish.id}>
                <Dish
                  image={dish.foto}
                  title={dish.nome}
                  description={dish.descricao}
                  addToCart={() => openModal(dish)}
                />
              </S.Item>
            ))}
          </S.List>
        </div>
      </S.Section>

      {modal.isVisible && modal.dish && (
        <S.Modal className="visible">
          <S.ModalContent className="container">
            <img src={modal.dish.foto} alt={modal.dish.nome} />
            <S.ModalInfo>
              <h4>{modal.dish.nome}</h4>
              <p>{modal.dish.descricao}</p>
              <p>{`Serve ${modal.dish.porcao}`}</p>
              <button
                onClick={() => {
                  if (modal.dish) {
                    addToCart(modal.dish)
                    closeModal()
                  }
                }}
              >
                Add to cart - <span>{priceFormat(modal.dish.preco)}</span>
              </button>
              <S.CloseBtn src={close} alt="Close" onClick={closeModal} />
            </S.ModalInfo>
          </S.ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </S.Modal>
      )}
    </>
  )
}

export default DishesList
