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
          sideba_ventan: 'country',
          sideba_sidico: 'location_on',
          sideba_submen: [],
        },
        {
          sideba_sideba: 4,
          sideba_nombre: 'Provincia',
          sideba_ventan: 'province',
          sideba_sidico: 'location_on',
          sideba_submen: [],
        },
        {
          sideba_sideba: 5,
          sideba_nombre: 'Ciudad',
          sideba_ventan: 'city',
          sideba_sidico: 'location_on',
          sideba_submen: [],
        },
      ],
    },
    {
      sideba_sideba: 7,
      sideba_nombre: 'Ajustes',
      sideba_ventan: 'patients',
      sideba_sidico: 'manage_accounts',
      sideba_submen: [
        {
          sideba_sideba: 6,
          sideba_nombre: 'Roles y permisos',
          sideba_ventan: 'rolesPermissions',
          sideba_sidico: 'supervisor_account',
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
