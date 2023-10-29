import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Id, toast } from 'react-toastify'
import { iprovin } from '../interfaces'
import {
  delete_provin,
  get_provins,
  post_provin,
  put_provin,
} from '../controllers/provin'

const initialState = {
  loading_loading: false,
  provins_provins: Array<iprovin>(),
  provins_paginat: { pagina: 0, limite: 0, totalItems: 0, totalPages: 0, countr: 0 },
  provin_provin: {
    countr_countr: 0,
    countr_namcou: '',
    provin_provin: 0,
    provin_nampro: '',
    provin_abbrev: '',
    provin_status: 'A',
  },
}

let countr_toastId: Id

const ProvinSlice = createSlice({
  name: 'provin',
  initialState,
  reducers: {
    clean_provins: (state) => {
      state.provins_provins = Array<iprovin>()
    },
    set_provin: (state, { payload }: PayloadAction<iprovin>) => {
      state.provin_provin = payload
    },
    clean_form_provin: (state) => {
      state.provin_provin = initialState.provin_provin
    },
  },
  extraReducers(builder) {
    builder
      .addCase(get_provins.pending, (state) => {
        state.loading_loading = true
      })
      .addCase(get_provins.fulfilled, (state, { payload }) => {
        state.loading_loading = false

        const { estado, data } = payload

        if (estado === 1) {
          state.provins_provins = data.provins
          state.provins_paginat = { ...state.provins_paginat, ...data.paginacion }
        } else {
          state.provins_provins = initialState.provins_provins
          state.provins_paginat = initialState.provins_paginat
        }
      })

    // builder
    //   .addCase(get_countrs_active.pending, (state) => {
    //     state.loading_loading = true
    //   })
    //   .addCase(get_countrs_active.fulfilled, (state, { payload }) => {
    //     state.loading_loading = false

    //     const { estado, data } = payload

    //     if (estado === 1) {
    //       state.countrs_countrs = data.countrs
    //     }
    //   })

    builder
      .addCase(post_provin.pending, () => {
        countr_toastId = toast.loading('Creando provincia....')
      })
      .addCase(post_provin.fulfilled, (_, { payload }) => {
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
      .addCase(put_provin.pending, () => {
        countr_toastId = toast.loading('Actualizando provincia....')
      })
      .addCase(put_provin.fulfilled, (_, { payload }) => {
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
      .addCase(delete_provin.pending, () => {
        countr_toastId = toast.loading('Eliminando provincia....')
      })
      .addCase(delete_provin.fulfilled, (_, { payload }) => {
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

export const ProvinReducer = ProvinSlice.reducer

export const { clean_form_provin, clean_provins, set_provin } = ProvinSlice.actions
