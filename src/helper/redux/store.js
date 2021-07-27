import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './slice'

export default configureStore({
  reducer: {
    languageReducer
  }
})