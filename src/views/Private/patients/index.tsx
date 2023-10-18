import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Patients = lazy(() => import('./Patients'))
const FormPatient = lazy(() => import('./FormPatient'))

const PatientRouter: RouteObject[] = [
  { index: true, element: <Patients /> },
  { path: 'add', element: <FormPatient /> },
]

export default PatientRouter
