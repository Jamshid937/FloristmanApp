import { createSelector, createSlice } from "@reduxjs/toolkit";
 const initialState = JSON.parse(localStorage.getItem('cartItem') || '{}');
const saveLocalStorage =(state) => {localStorage.setItem('cartItem', JSON.stringify(state));}
const  cartSlice = createSlice({
  name: 'cart',
  initialState, 
  reducers:{
   addToCart: (state,action )=>{
    state[action.payload.id] = {...action.payload,quantity: 1}
   
    saveLocalStorage(state)
},
   removeFromCart: (state,action )=>{
    delete state[action.payload];
    saveLocalStorage(state)
},
   addOne: (state,action )=>{
    state[action.payload].quantity++;
    saveLocalStorage(state)
},
   removeOne: (state,action)=>{
  if(state[action.payload].quantity > 1)
  {  
  state[action.payload].quantity--;
  saveLocalStorage(state)
} 
},
},

})

export const getItemsCount = createSelector(
  state => Object.values(state.cart),

  
  (cartItems) => cartItems.reduce((acc,item)=>acc + item.quantity,0)
  )

export const {addToCart,removeFromCart,addOne,removeOne} = cartSlice.actions

export default cartSlice.reducer