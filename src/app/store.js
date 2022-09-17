
import { configureStore } from '@reduxjs/toolkit'
import data from '../features/handle'

export default configureStore({
  reducer: {
    data:data,
  },
})