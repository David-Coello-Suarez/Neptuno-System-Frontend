import { createAsyncThunk } from '@reduxjs/toolkit'
import { icompan, ipagina, irespue } from '../interfaces'
import { instanciaAxios } from '../api'
import { NavigateFunction } from 'react-router-dom'
import { clean_form_compan } from '../reducers/compan'

const file = 'compan',
  rute = 'compan'

interface irescou {
  paginacion: ipagina
  compans: icompan[]
}

interface icosaup {
  body: icompan
  navigate?: NavigateFunction
}

export const get_compans = createAsyncThunk(
  `${file}/get_compans`,
  async (pagination: ipagina | undefined) => {
    const { data } = await instanciaAxios.get<irespue<irescou>>(`/${rute}`, {
      params: pagination,
    })

    return data
  },
)

export const get_compans_active = createAsyncThunk(
  `${file}/get_compans_active`,
  async () => {
    const { data } = await instanciaAxios.get<irespue<irescou>>(`/${rute}/active`)

    return data
  },
)

export const post_compan = createAsyncThunk(
  `${file}/post_compan`,
  async ({ body, navigate }: icosaup, thunk) => {
    const { data } = await instanciaAxios.post<irespue>(`/${rute}`, body)

    if (data.estado === 1 && navigate) {
      thunk.dispatch(get_compans())
      thunk.dispatch(clean_form_compan())
      navigate(-1)
    }

    return data
  },
)

export const put_compan = createAsyncThunk(
  `${file}/put_compan`,
  async ({ body, navigate }: icosaup, thunk) => {
    const { data } = await instanciaAxios.put<irespue>(
      `/${rute}/${body.compan_compan}`,
      body,
    )

    if (data.estado === 1 && navigate) {
      navigate(-1)
    }
    thunk.dispatch(get_compans())
    thunk.dispatch(clean_form_compan())

    return data
  },
)

export const delete_compan = createAsyncThunk(
  `${file}/delete_compan`,
  async ({ body }: icosaup, thunk) => {
    const { data } = await instanciaAxios.delete<irespue>(
      `/${rute}/${body.compan_compan}`,
    )

    if (data.estado === 1) {
      thunk.dispatch(get_compans())
    }

    return data
  },
)
