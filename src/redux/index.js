import { configureStore } from '@reduxjs/toolkit'
import like from './likeSlice'
import cart from './card'
const store = configureStore({
  reducer:{
    like,
    cart
  }
})

export default store