import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
  name: 'languageSettings',
  initialState: 'it',
  reducers: {
    setLang: (state, action) => state = action.payload
  }
})

// Action creators are generated for each case reducer function
export const { setLang } = languageSlice.actions

export default languageSlice.reducer