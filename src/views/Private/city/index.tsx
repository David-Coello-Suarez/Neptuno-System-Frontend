import { RouteObject } from 'react-router-dom'
import FormCity from './FormCity'
import City from './City'

const CityRouter: RouteObject[] = [
  { index: true, element: <City /> },
  { path: 'add', element: <FormCity /> },
]

export default CityRouter
