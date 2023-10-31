import { NavigateFunction } from 'react-router-dom'
import { icitylo, ipagina, irespue } from '../interfaces'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { instanciaAxios } from '../api'
import { clean_form_citylo } from '../reducers/citylo'

const file = 'city',
  rute = 'citylo'

interface irescit {
  paginacion: ipagina
  citylos: icitylo[]
}

interface icisaup {
  body: icitylo
  navigate?: NavigateFunction
}

interface iquerypagina extends ipagina {
  provin: number
}

export const get_citylos = createAsyncThunk(
  `${file}/get_citylos`,
  async (pagination: iquerypagina | undefined) => {
    const { data } = await instanciaAxios.get<irespue<irescit>>(`/${rute}`, {
      params: pagination,
    })

    return data
  },
)

export const get_citylos_active = createAsyncThunk(
  `${file}/get_citylos_active`,
  async (provin_provin: number) => {
    const { data } = await instanciaAxios.get<irespue<irescit>>(`/${rute}/active`, {
      params: provin_provin,
    })

    return data
  },
)

export const post_citylo = createAsyncThunk(
  `${file}/post_citylo`,
  async ({ body, navigate }: icisaup, thunk) => {
    const { data } = await instanciaAxios.post<irespue>(`/${rute}`, body)

    if (data.estado === 1 && navigate) {
      thunk.dispatch(clean_form_citylo())
      navigate(-1)
    }

    return data
  },
)

export const put_citylo = createAsyncThunk(
  `${file}/put_citylo`,
  async ({ body, navigate }: icisaup, thunk) => {
    const { data } = await instanciaAxios.put<irespue>(
      `/${rute}/${body.citylo_citylo}`,
      body,
    )

    if (data.estado === 1 && navigate) {
      navigate(-1)
    } else {
      thunk.dispatch(get_citylos())
    }

    thunk.dispatch(clean_form_citylo())

    return data
  },
)

export const delete_citylo = createAsyncThunk(
  `${file}/delete_citylo`,
  async ({ body }: icisaup, thunk) => {
    const { data } = await instanciaAxios.delete<irespue>(
      `/${rute}/${body.citylo_citylo}`,
    )

    if (data.estado === 1) {
      thunk.dispatch(get_citylos())
    }

    return data
  },
)
