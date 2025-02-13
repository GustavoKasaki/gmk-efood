import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, DishType, open } from '../../store/reducers/cart'
import { RestaurantsType } from '../../pages/Home'

import close from '../../assets/images/close.png'

import Dish from '../Dish'
import {
  CloseBtn,
  Item,
  List,
  Modal,
  ModalContent,
  ModalInfo,
  Section
} from './styles'

type Props = {
  restaurant: RestaurantsType
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

const DishesList = ({ restaurant }: Props) => {
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

  return (
    <>
      <Section>
        <div className="container">
          <List>
            {restaurant.cardapio.map((dish) => (
              <Item key={dish.id}>
                <Dish
                  image={dish.foto}
                  title={dish.nome}
                  description={dish.descricao}
                  addToCart={() => openModal(dish)}
                />
              </Item>
            ))}
          </List>
        </div>
      </Section>

      {modal.isVisible && modal.dish && (
        <Modal className="visible">
          <ModalContent className="container">
            <img src={modal.dish.foto} alt={modal.dish.nome} />
            <ModalInfo>
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
              <CloseBtn src={close} alt="Close" onClick={closeModal} />
            </ModalInfo>
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </Modal>
      )}
    </>
  )
}

export default DishesList
