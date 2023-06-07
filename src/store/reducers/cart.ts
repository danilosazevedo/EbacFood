import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapio, Restaurant } from '../../Pages/Home'

type CartState = {
  items: Cardapio[]
  isOpenItemDetail: boolean
  cartTemp: Cardapio[]
  isOpen: boolean
  isCart: boolean
  isDelivery: boolean
  isPayment: boolean
  isConfirmation: boolean
}

const initialState: CartState = {
  items: [],
  isOpenItemDetail: false,
  cartTemp: [],
  isOpen: false,
  isCart: false,
  isDelivery: false,
  isPayment: false,
  isConfirmation: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      state.items.push(action.payload)
    },
    openItemDetail: (state, action: PayloadAction<Cardapio>) => {
      const itemTemp = action.payload
      state.isOpenItemDetail = true
      state.cartTemp.pop()
      state.cartTemp.push(itemTemp)
    },
    closeItemDetail: (state) => {
      state.isOpenItemDetail = false
    },
    open: (state) => {
      state.isOpen = true
      state.isCart = true
    },
    close: (state) => {
      state.isOpen = false
      state.isCart = false
      state.isDelivery = false
      state.isPayment = false
      state.isConfirmation = false
    },
    delivery: (state) => {
      state.isDelivery = true
      state.isCart = false
    },
    backCart: (state) => {
      state.isOpen = true
      state.isCart = true
      state.isDelivery = false
      state.isPayment = false
      state.isConfirmation = false
    },
    backDelivery: (state) => {
      state.isOpen = true
      state.isCart = false
      state.isDelivery = true
      state.isPayment = false
      state.isConfirmation = false
    },
    payment: (state) => {
      state.isDelivery = false
      state.isCart = false
      state.isPayment = true
    },
    confirmation: (state) => {
      state.isDelivery = false
      state.isCart = false
      state.isPayment = false
      state.isConfirmation = true
    }
  }
})

export const {
  open,
  close,
  delivery,
  payment,
  confirmation,
  backCart,
  backDelivery,
  openItemDetail,
  closeItemDetail,
  add
} = cartSlice.actions
export default cartSlice.reducer
