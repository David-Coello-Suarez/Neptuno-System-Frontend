import { createSlice } from '@reduxjs/toolkit'
import { isideba } from '../interfaces'
import { get_sideba } from '../controllers/sideba'

const initialState = {
  sideba: Array<isideba>(),
}

const SidebaSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    clean_sideba: (state) => {
      state.sideba = initialState.sideba
    },
  },
  extraReducers(builder) {
    builder.addCase(get_sideba.fulfilled, (state, { payload }) => {
      const { data, estado } = payload

      if (estado === 1) {
        state.sideba = data.sideba
      }
    })
  },
})

export const SidebaReducer = SidebaSlice.reducer

export const { clean_sideba } = SidebaSlice.actions
