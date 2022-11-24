import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface authState {
  accessToken: string | null
}

const initialState: authState = {
  accessToken: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload
    }
  }
})

export const { setAccessToken } = authSlice.actions

export default authSlice.reducer
