import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open_modal_notification: false,
  open_sidebar: false,
}

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSidebar: (state) => {
      const html = document.getElementsByTagName('html')

      if (html) {
        html[0].classList.toggle('menu-opened')

        document.getElementById('foter')?.classList.toggle('sidebar-overlay')
      }

      state.open_sidebar = !state.open_sidebar
    },
    setModalNoti: (state) => {
      state.open_modal_notification = !state.open_modal_notification
    },
  },
})

export const AppReducer = AppSlice.reducer

export const { setModalNoti, setSidebar } = AppSlice.actions
