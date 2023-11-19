import { createAsyncThunk } from '@reduxjs/toolkit'
import { NavigateFunction } from 'react-router-dom'
import { instanciaAxios } from '../api'
import { ipagina, iprovin, irespue } from '../interfaces'
import { clean_form_provin } from '../reducers/provin'

const file = 'provin',
  rute = 'provin'

interface irespro {
  paginacion: ipagina
  provins: iprovin[]
}

interface iprsaup {
  body: iprovin
  navigate?: NavigateFunction
}

interface iquerypagina extends ipagina {
  countr: number
}

export const get_provins = createAsyncThunk(
  `${file}/get_provins`,
  async (pagination: iquerypagina | undefined) => {
    const { data } = await instanciaAxios.get<irespue<irespro>>(`/${rute}`, {
      params: pagination,
    })

    return data
  },
)

export const get_provins_active = createAsyncThunk(
  `${file}/get_provins_active`,
  async (countr_countr: number) => {
    const response = await instanciaAxios.get(`/${rute}/active`, {
      params: { countr_countr },
    })

    return response.data
  },
)

export const post_provin = createAsyncThunk(
  `${file}/post_provin`,
  async ({ body, navigate }: iprsaup, thunk) => {
    const { data } = await instanciaAxios.post<irespue>(`/${rute}`, body)

    if (data.estado === 1 && navigate) {
      thunk.dispatch(clean_form_provin())
      navigate(-1)
    }

    return data
  },
)

export const put_provin = createAsyncThunk(
  `${file}/put_provin`,
  async ({ body, navigate }: iprsaup, thunk) => {
    const { data } = await instanciaAxios.put<irespue>(
      `/${rute}/${body.provin_provin}`,
      body,
    )

    if (data.estado === 1 && navigate) {
      navigate(-1)
    } else {
      thunk.dispatch(get_provins())
    }

    thunk.dispatch(clean_form_provin())

    return data
  },
)

export const delete_provin = createAsyncThunk(
  `${file}/delete_provin`,
  async ({ body }: iprsaup, thunk) => {
    const { data } = await instanciaAxios.delete<irespue>(
      `/${rute}/${body.provin_provin}`,
    )

    if (data.estado === 1) {
      thunk.dispatch(get_provins())
    }

    return data
  },
)
