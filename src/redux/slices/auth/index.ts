import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from '@/utils/axios'
import { AxiosResponse, AxiosError } from 'axios'
import { Thunk } from '@/redux/store'

export interface Login {
  email: string
  password: string
}

export interface authState {
  accessToken: string | null
  isLoading: boolean
}

const initialState: authState = {
  accessToken: null,
  isLoading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { setAccessToken, setIsLoading } = authSlice.actions

export default authSlice.reducer

export const login =
  (data: Login): Thunk =>
  async (dispatch): Promise<AxiosResponse | AxiosError> => {
    dispatch(setIsLoading(true))
    try {
      const response: AxiosResponse = await axios.post('/login', data)
      dispatch(setAccessToken(response.data.token))
      return response
    } catch (error) {
      return error as AxiosError
    } finally {
      dispatch(setIsLoading(false))
    }
  }
