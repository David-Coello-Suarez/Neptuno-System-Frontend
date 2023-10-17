import { RouteObject } from 'react-router-dom'
import Province from './Province'
import FormProvince from './FormProvince'

const ProvinceRouter: RouteObject[] = [
  { index: true, element: <Province /> },
  { path: 'add', element: <FormProvince /> },
]

export default ProvinceRouter
