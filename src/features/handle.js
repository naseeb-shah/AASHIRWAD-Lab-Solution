import { createSlice } from '@reduxjs/toolkit'

export const report = createSlice({
  name: 'counter',
  initialState: {
    value: {},
  },
  reducers: {
    add: (state,action) => {
  
      state.value ={...state.value,[action.payload.name]:action.payload.data}
    },

  },
})

// Action creators are generated for each case reducer function
export const { add } = report.actions

export default report.reducer