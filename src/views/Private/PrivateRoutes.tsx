import { RouteObject } from 'react-router-dom'
import PatientRouter from './patients'

const PrivateRouter: RouteObject[] = [{ path: 'patients', children: PatientRouter }]

export default PrivateRouter
