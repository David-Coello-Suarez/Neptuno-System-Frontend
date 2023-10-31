import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const FormCity = lazy(() => import('./FormCity'))
const Layout = lazy(() => import('./Layout'))

const CityRouter: RouteObject[] = [
  { index: true, element: <Layout /> },
  { path: 'add', element: <FormCity /> },
  { path: 'edit/:id', element: <FormCity /> },
]

export default CityRouter
