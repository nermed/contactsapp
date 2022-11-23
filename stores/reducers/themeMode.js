import { createSlice } from '@reduxjs/toolkit'

const initialState = { mode: "light" }

const themeMode = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.mode = action.payload
    },
  },
})

export const { changeTheme } = themeMode.actions
export default themeMode.reducer