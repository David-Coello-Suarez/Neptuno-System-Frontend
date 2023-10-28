import { createAsyncThunk } from '@reduxjs/toolkit'
import { icountr, ipagina, irespue } from '../interfaces'
import { instanciaAxios } from '../api'
import { NavigateFunction } from 'react-router-dom'

const file = 'countr',
  rute = 'countr'

interface irescou {
  paginacion: ipagina
  countrs: icountr[]
}

interface icosaup {
  body: icountr
  navigate?: NavigateFunction
}

export const get_countrs = createAsyncThunk(`${file}/get_countrs`, async () => {
  const { data } = await instanciaAxios.get<irespue<irescou>>(`/${rute}`)

  return data
})

export const post_countr = createAsyncThunk(
  `${file}/post_countr`,
  async ({ body, navigate }: icosaup, thunk) => {
    const { data } = await instanciaAxios.post<irespue>(`/${rute}`, body)

    if (data.estado === 1 && navigate) {
      thunk.dispatch(get_countrs())
      navigate(-1)
    }

    return data
  },
)

export const put_countr = createAsyncThunk(
  `${file}/put_countr`,
  async ({ body, navigate }: icosaup, thunk) => {
    const { data } = await instanciaAxios.put<irespue>(
      `/${rute}/${body.countr_countr}`,
      body,
    )

    if (data.estado === 1 && navigate) {
      navigate(-1)
    }
    thunk.dispatch(get_countrs())

    return data
  },
)

export const delete_countr = createAsyncThunk(
  `${file}/delete_countr`,
  async ({ body }: icosaup, thunk) => {
    const { data } = await instanciaAxios.delete<irespue>(
      `/${rute}/${body.countr_countr}`,
    )

    if (data.estado === 1) {
      thunk.dispatch(get_countrs())
    }

    return data
  },
)
