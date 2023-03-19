import { createSlice } from '@reduxjs/toolkit'
const initialState =  JSON.parse(localStorage.getItem('favorite') || '{}')


export const likeSlice = createSlice({
  name: 'Like',
  initialState,
  reducers: {
   handleLike: (state,action) => {
    if (state[action.payload.id]) {
      delete state[action.payload.id]
     } else {
      state[action.payload.id] = action.payload
      localStorage.setItem('favorite', JSON.stringify(state))
    }
  }
  }
 
})

export const { handleLike } = likeSlice.actions

export default likeSlice.reducer