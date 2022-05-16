import { configureStore } from '@reduxjs/toolkit'
import productReducer from './redux/product.slice'

const reducer = {
  tutorials: productReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;