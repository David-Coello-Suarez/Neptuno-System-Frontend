import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Province = lazy(() => import('./Province'))
const FormProvince = lazy(() => import('./FormProvince'))

const ProvinceRouter: RouteObject[] = [
  { index: true, element: <Province /> },
  { path: 'add', element: <FormProvince /> },
  { path: 'edit/:id', element: <FormProvince /> },
]

export default ProvinceRouter
