import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideba: [
    {
      sideba_sideba: 1,
      sideba_nombre: 'Pacientes',
      sideba_ventan: 'patients',
      sideba_sidico: {
        icon_font: 'material-symbols-outlined',
        icon_name: 'patient_list',
      },
      sideba_submen: [],
    },
  ],
}

const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {},
})

export const SidebarReducer = SidebarSlice.reducer
