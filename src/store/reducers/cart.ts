import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type DishType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

type CartState = {
  items: DishType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<DishType>) => {
      const dishExists = state.items.some(
        (dish) => dish.id === action.payload.id
      )

      if (!dishExists) {
        state.items.push(action.payload)
      } else {
        alert('This dish is already in the cart!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((dish) => dish.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
