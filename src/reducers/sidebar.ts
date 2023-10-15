import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideba: [
    {
      sideba_sideba: 1,
      sideba_nombre: 'Pacientes',
      sideba_ventan: 'patients',
      sideba_sidico: 'patient_list',
      sideba_submen: [],
    },
    {
      sideba_sideba: 2,
      sideba_nombre: 'Localización',
      sideba_ventan: '',
      sideba_sidico: 'public',
      sideba_submen: [
        {
          sideba_sideba: 3,
          sideba_nombre: 'Pais',
          sideba_ventan: 'pais',
          sideba_sidico: 'location_on',
          sideba_submen: [],
        },
      ],
    },
  ],
}

const SidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {},
})

export const SidebarReducer = SidebarSlice.reducer
