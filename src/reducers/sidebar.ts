import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideba: [
    {
      sideba_sideba: 1,
      sideba_nombre: 'Pacientes',
      sideba_ventan: 'patients',
      sideba_sidico: 'person',
      sideba_submen: [],
    },
    {
      sideba_sideba: 8,
      sideba_nombre: 'Colaboradores',
      sideba_ventan: 'collaborators',
      sideba_sidico: 'person',
      sideba_submen: [],
    },
    {
      sideba_sideba: 9,
      sideba_nombre: 'Sucursales',
      sideba_ventan: 'branchOffices',
      sideba_sidico: 'apartment',
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
          sideba_sidico: 'manage_accounts',
          sideba_submen: [],
        },
        {
          sideba_sideba: 7,
          sideba_nombre: 'Ajustes de e-mail',
          sideba_ventan: 'emailSetting',
          sideba_sidico: 'inbox_customize',
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
