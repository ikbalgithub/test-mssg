import {createSlice} from '@reduxjs/toolkit';

const counter = createSlice({
  name : 'counter',
  initialState : {
    value : 0
  },
  reducers : {
    increment : (state) => {
      state.value++
    }
  }
})

export const {increment} = counter.actions
export default counter.reducers