import { PayloadAction, createSlice, isRejected } from '@reduxjs/toolkit'
import { Id, toast } from 'react-toastify'
import {
  delete_compan,
  get_compans,
  get_compans_active,
  post_compan,
  put_compan,
} from '../controllers/compan'
import { icompan } from '../interfaces'

const ruta_image = `${import.meta.env.VITE_APP_URL}/uploads`

const initialState = {
  loading_loading: false,
  compans_compans: Array<icompan>(),
  compans_paginat: { pagina: 0, limite: 0, totalItems: 0, totalPages: 0 },
  compan_compan: {
    compan_compan: 0,
    compan_comico: ruta_image + '/favicon.ico',
    compan_comlog: ruta_image + '/logo-dark.png',
    compan_numdoc: '',
    compan_nomcom: '',
    compan_dircom: '',
    compan_correo: '',
    compan_nummob: '',
    compan_numper: '',
    compan_estado: '',
    compan_latitu: '',
    compan_longit: '',
    comloc_countr: 0,
    comloc_provin: 0,
    comloc_cityxx: 0,
  },
}

let toastId: Id

const CompanSlice = createSlice({
  name: 'compan',
  initialState,
  reducers: {
    clean_compans: (state) => {
      state.compans_compans = Array<icompan>()
    },
    set_compan: (state, { payload }: PayloadAction<icompan>) => {
      state.compan_compan = payload
    },
    clean_form_compan: (state) => {
      state.compan_compan = initialState.compan_compan
    },
  },
  extraReducers(builder) {
    builder
      .addCase(get_compans.pending, (state) => {
        state.loading_loading = true
      })
      .addCase(get_compans.fulfilled, (state, { payload }) => {
        state.loading_loading = false

        const { estado, data } = payload

        if (estado === 1) {
          state.compans_compans = data.compans
          state.compans_paginat = data.paginacion
        } else {
          state.compans_compans = initialState.compans_compans
          state.compans_paginat = initialState.compans_paginat
        }
      })

      .addCase(get_compans_active.pending, (state) => {
        state.loading_loading = true
      })
      .addCase(get_compans_active.fulfilled, (state, { payload }) => {
        state.loading_loading = false

        const { estado, data } = payload

        if (estado === 1) {
          state.compans_compans = data.compans
        }
      })

      .addCase(post_compan.pending, () => {
        toastId = toast.loading('Creando compañia....')
      })
      .addCase(post_compan.fulfilled, (_, { payload }) => {
        const { estado, mensaje } = payload

        if (estado === 1) {
          toast.update(toastId, {
            render: mensaje,
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          })
        } else {
          toast.update(toastId, {
            render: mensaje,
            type: 'warning',
            isLoading: false,
            autoClose: 3000,
          })
        }
      })

      .addCase(put_compan.pending, () => {
        toastId = toast.loading('Actualizando compañia....')
      })
      .addCase(put_compan.fulfilled, (_, { payload }) => {
        const { estado, mensaje } = payload
        toastId
        if (estado === 1) {
          toast.update(toastId, {
            render: mensaje,
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          })
        } else {
          toast.update(toastId, {
            render: mensaje,
            type: 'warning',
            isLoading: false,
            autoClose: 3000,
          })
        }
      })

      .addCase(delete_compan.pending, () => {
        toastId = toast.loading('Eliminando compañia....')
      })
      .addCase(delete_compan.fulfilled, (_, { payload }) => {
        const { estado, mensaje } = payload

        if (estado === 1) {
          toast.update(toastId, {
            render: mensaje,
            type: 'success',
            isLoading: false,
            autoClose: 3000,
          })
        } else {
          toast.update(toastId, {
            render: mensaje,
            type: 'warning',
            isLoading: false,
            autoClose: 3000,
          })
        }
      })

      .addMatcher(isRejected, (state) => {
        state.loading_loading = false

        if (!toast.isActive(toastId)) {
          toast.update(toastId, {
            render: 'Se a producido un error. Ponte en contacto con el administrador1',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
          })
        }
      })
  },
})

export const CompanReducer = CompanSlice.reducer

export const { clean_compans, set_compan, clean_form_compan } = CompanSlice.actions
