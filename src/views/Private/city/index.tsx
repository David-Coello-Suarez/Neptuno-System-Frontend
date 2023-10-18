import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const FormCity = lazy(() => import('./FormCity'))
const City = lazy(() => import('./City'))

const CityRouter: RouteObject[] = [
  { index: true, element: <City /> },
  { path: 'add', element: <FormCity /> },
]

export default CityRouter
