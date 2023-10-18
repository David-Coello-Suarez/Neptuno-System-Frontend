import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Country = lazy(() => import('./Country'))
const FormCountry = lazy(() => import('./FormCountry'))

const CountryRouter: RouteObject[] = [
  { index: true, element: <Country /> },
  { path: 'add', element: <FormCountry /> },
]

export default CountryRouter
