import { RouteObject } from 'react-router-dom'
import PatientRouter from './patients'
import CountryRouter from './pais'

const PrivateRouter: RouteObject[] = [
  { path: 'patients', children: PatientRouter },
  { path: 'pais', children: CountryRouter },
]

export default PrivateRouter
