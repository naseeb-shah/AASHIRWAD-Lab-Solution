
import { configureStore } from '@reduxjs/toolkit'
import data from '../features/handle'
import authlevel from '../features/authlevel'
export default configureStore({
  reducer: {
    data:data,
    auth:authlevel
  },
})