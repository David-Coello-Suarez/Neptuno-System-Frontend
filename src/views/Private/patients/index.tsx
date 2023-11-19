import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Layout = lazy(() => import('./Layout'))
const FormPatient = lazy(() => import('./FormPatient'))

const PatientRouter: RouteObject[] = [
  { index: true, element: <Layout /> },
  { path: 'add', element: <FormPatient /> },
]

export default PatientRouter
