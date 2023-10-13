import { createSlice } from '@reduxjs/toolkit'
// import { obtene_reftok, obtene_tokses } from '../controllers/loggin'
// import { irespue } from '../interfaces'

// interface iresacc extends irespue {
//   data: {
//     loggin_usuari: string
//     loggin_tokses: string
//   }
// }

const initialState = {
  isLoading: true,
  toamsg_toamsg: {
    bgc: 'success',
    msg: '',
  },
  loggin: {
    loggin_islofo: false,
    loggin_usuari: 'DAVID.COELLO',
    loggin_contra: 'DESARROLLADOR$202313',
  },
  loggedIn: {
    loggin_usuari: '',
    loggin_tokses: '',
  },
}

const LoggInSlice = createSlice({
  name: 'loggin',
  initialState,
  reducers: {
    clean_toamsg: (state) => {
      state.toamsg_toamsg = initialState.toamsg_toamsg
    },
    uiResfresh: (state) => {
      state.isLoading = false
    },
    obtene_reftok: (state) => {
      state.isLoading = false
      state.loggedIn.loggin_usuari = 'David Coello'
      state.loggedIn.loggin_tokses = 'A12Qw23ds'
      localStorage.setItem('loggin_tokses', state.loggedIn.loggin_tokses)
    },
  },

  // extraReducers(builder) {
  //   // LOGGIN
  //   builder
  //     .addCase(obtene_tokses.pending, (state) => {
  //       state.loggin.loggin_islofo = true
  //     })
  //     .addCase(obtene_tokses.fulfilled, (state, { payload }: PayloadAction<iresacc>) => {
  //       state.loggin.loggin_islofo = false

  //       const { estado, mensaje, data } = payload

  //       if (estado === 1) {
  //         state.loggedIn = data
  //         localStorage.setItem('loggin_tokses', data.loggin_tokses)
  //       } else {
  //         state.toamsg_toamsg.msg = mensaje
  //         state.toamsg_toamsg.bgc = 'warning'
  //       }
  //     })
  //     .addCase(obtene_tokses.rejected, (state) => {
  //       state.toamsg_toamsg.bgc = 'danger'
  //       state.toamsg_toamsg.msg = 'Ponte en contacto con soporte'
  //     })

  //   // REFRESH TOKEN
  //   builder
  //     .addCase(obtene_reftok.pending, (state) => {
  //       state.isLoading = true
  //     })
  //     .addCase(obtene_reftok.fulfilled, (state, { payload }: PayloadAction<iresacc>) => {
  //       state.isLoading = false

  //       const { estado, data } = payload

  //       if (estado === 1) {
  //         state.loggedIn = data
  //         localStorage.setItem('loggin_tokses', data.loggin_tokses)
  //       } else {
  //         localStorage.clear()
  //       }
  //     })
  //     .addCase(obtene_reftok.rejected, (state) => {
  //       state.toamsg_toamsg.bgc = 'danger'
  //       state.toamsg_toamsg.msg = 'Ponte en contacto con soporte'
  //     })
  // },
})

export const LoggInReducer = LoggInSlice.reducer

export const { clean_toamsg, uiResfresh, obtene_reftok } = LoggInSlice.actions
