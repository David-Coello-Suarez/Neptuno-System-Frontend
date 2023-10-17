import { RouteObject } from 'react-router-dom'
import PatientRouter from './patients'
import CountryRouter from './country'
import ProvinceRouter from './province'
import CityRouter from './city'

const PrivateRouter: RouteObject[] = [
  { path: 'city', children: CityRouter },
  { path: 'country', children: CountryRouter },
  { path: 'patients', children: PatientRouter },
  { path: 'province', children: ProvinceRouter },
]

export default PrivateRouter
