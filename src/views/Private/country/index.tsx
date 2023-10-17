import { RouteObject } from 'react-router-dom'
import Country from './Country'
import FormCountry from './FormCountry'

const CountryRouter: RouteObject[] = [
  { index: true, element: <Country /> },
  { path: 'add', element: <FormCountry /> },
]

export default CountryRouter
