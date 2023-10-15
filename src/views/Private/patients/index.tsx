import { RouteObject } from 'react-router-dom'
import Patients from './Patients'
import FormPatient from './FormPatient'

const PatientRouter: RouteObject[] = [
  { index: true, element: <Patients /> },
  { path: 'add', element: <FormPatient /> },
]

export default PatientRouter
