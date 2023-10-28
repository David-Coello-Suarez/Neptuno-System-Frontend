import { createAsyncThunk } from '@reduxjs/toolkit'
import { instanciaAxios } from '../api'
import { irespue, isideba } from '../interfaces'

const file = 'sideba',
  rute = 'sideba'

export const get_sideba = createAsyncThunk(`${file}/get_sideba`, async () => {
  const { data } = await instanciaAxios.get<irespue<{ sideba: isideba[] }>>(`/${rute}`)

  return data
})
