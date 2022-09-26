
import { configureStore } from '@reduxjs/toolkit'
import data from '../features/handle'
import authlevel from '../features/authlevel'
import alldata from '../component/stats.js'
export default configureStore({
  reducer: {
    data:data,
    auth:authlevel,
    alldata:alldata
  },
})