import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Layout = lazy(() => import('./Layout'))
const FormCountry = lazy(() => import('./FormCountry'))

const CountryRouter: RouteObject[] = [
  { index: true, element: <Layout /> },
  { path: 'add', element: <FormCountry /> },
  { path: 'edit/:id', element: <FormCountry /> },
]

export default CountryRouter
