import { RouteObject } from 'react-router-dom'
import PatientRouter from './patients'
import PaisRouter from './pais'

const PrivateRouter: RouteObject[] = [
  { path: 'patients', children: PatientRouter },
  { path: 'pais', children: PaisRouter },
]

export default PrivateRouter
