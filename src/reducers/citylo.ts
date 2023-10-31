import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Id, toast } from 'react-toastify'
import { icitylo } from '../interfaces'
import {
  delete_citylo,
  get_citylos,
  get_citylos_active,
  post_citylo,
  put_citylo,
} from '../controllers/city'

const initialState = {
  loading_loading: false,
  citylos_citylos: Array<icitylo>(),
  citylos_paginat: { pagina: 0, limite: 0, totalItems: 0, totalPages: 0, provin: 0 },
  citylo_citylo: {
    countr_countr: 0,
    provin_provin: 0,
    provin_nampro: '',
    citylo_citylo: 0,
    citylo_namcit: '',
    citylo_abbrev: '',
    citylo_status: 'A',
  },
}

let countr_toastId: Id

const CityloSlice = createSlice({
  name: 'provin',
  initialState,
  reducers: {
    clean_citylos: (state) => {
      state.citylos_citylos = Array<icitylo>()
    },
    set_citylo: (state, { payload }: PayloadAction<icitylo>) => {
      state.citylo_citylo = payload
    },
    clean_form_citylo: (state) => {
      state.citylo_citylo = initialState.citylo_citylo
    },
  },
  extraReducers(builder) {
    builder
      .addCase(get_citylos.pending, (state) => {
        state.loading_loading = true
      })
      .addCase(get_citylos.fulfilled, (state, { payload }) => {
        state.loading_loading = false

        const { estado, data } = payload

        if (estado === 1) {
          state.citylos_citylos = data.citylos
          state.citylos_paginat = { ...state.citylos_paginat, ...data.paginacion }
        } else {
          state.citylos_citylos = initialState.citylos_citylos
          state.citylos_paginat = initialState.citylos_paginat
        }
      })

    builder
      .addCase(get_citylos_active.pending, (state) => {
        state.loading_loading = true
      })
      .addCase(get_citylos_active.fulfilled, (state, { payload }) => {
        state.loading_loading = false

        const { estado, data } = payload

        if (estado === 1) {
          state.citylos_citylos = data.citylos
        }
      })

    builder
      .addCase(post_citylo.pending, () => {
        countr_toastId = toast.loading('Creando Ciudad....')
      })
      .addCase(post_citylo.fulfilled, (_, { payload }) => {
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
      .addCase(put_citylo.pending, () => {
        countr_toastId = toast.loading('Actualizando Ciudad....')
      })
      .addCase(put_citylo.fulfilled, (_, { payload }) => {
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
      .addCase(delete_citylo.pending, () => {
        countr_toastId = toast.loading('Eliminando Ciudad....')
      })
      .addCase(delete_citylo.fulfilled, (_, { payload }) => {
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

export const CityloReducer = CityloSlice.reducer

export const { clean_form_citylo, clean_citylos, set_citylo } = CityloSlice.actions
