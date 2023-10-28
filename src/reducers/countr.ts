import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Id, toast } from 'react-toastify'
import {
  delete_countr,
  get_countrs,
  post_countr,
  put_countr,
} from '../controllers/countr'
import { icountr } from '../interfaces'

const initialState = {
  loading_loading: false,
  countrs_countrs: Array<icountr>(),
  countr_countr: {
    countr_countr: 0,
    countr_namcou: '',
    countr_abbrev: '',
    countr_status: 'A',
  },
  countr_toastId: 0,
}

let countr_toastId: Id

const CountrSlice = createSlice({
  name: 'countr',
  initialState,
  reducers: {
    clean_countrs: (state) => {
      state.countrs_countrs = Array<icountr>()
    },
    set_countr: (state, { payload }: PayloadAction<icountr>) => {
      state.countr_countr = payload
    },
    clean_form_countr: (state) => {
      state.countr_countr = initialState.countr_countr
    },
  },
  extraReducers(builder) {
    builder
      .addCase(get_countrs.pending, (state) => {
        state.loading_loading = true
      })
      .addCase(get_countrs.fulfilled, (state, { payload }) => {
        state.loading_loading = false

        const { estado, data } = payload

        if (estado === 1) {
          state.countrs_countrs = data.countrs
        }
      })

    builder
      .addCase(post_countr.pending, () => {
        countr_toastId = toast.loading('Creando país....')
      })
      .addCase(post_countr.fulfilled, (_, { payload }) => {
        const { estado, mensaje } = payload

        if (estado === 1) {
          toast.update(countr_toastId, {
            render: mensaje,
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          })
        } else {
          toast.update(countr_toastId, {
            render: mensaje,
            type: 'warning',
            isLoading: false,
            autoClose: 3000,
          })
        }
      })

    builder
      .addCase(put_countr.pending, () => {
        countr_toastId = toast.loading('Actualizando país....')
      })
      .addCase(put_countr.fulfilled, (_, { payload }) => {
        const { estado, mensaje } = payload

        if (estado === 1) {
          toast.update(countr_toastId, {
            render: mensaje,
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          })
        } else {
          toast.update(countr_toastId, {
            render: mensaje,
            type: 'warning',
            isLoading: false,
            autoClose: 3000,
          })
        }
      })

    builder
      .addCase(delete_countr.pending, () => {
        countr_toastId = toast.loading('Eliminando país....')
      })
      .addCase(delete_countr.fulfilled, (_, { payload }) => {
        const { estado, mensaje } = payload

        if (estado === 1) {
          toast.update(countr_toastId, {
            render: mensaje,
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          })
        } else {
          toast.update(countr_toastId, {
            render: mensaje,
            type: 'warning',
            isLoading: false,
            autoClose: 3000,
          })
        }
      })
  },
})

export const CountrReducer = CountrSlice.reducer

export const { clean_countrs, set_countr, clean_form_countr } = CountrSlice.actions
