import { RouteObject } from 'react-router-dom'
import PatientRouter from './patients'
import CountryRouter from './country'
import ProvinceRouter from './province'
import CityRouter from './city'
import RolePermissionsRouter from './rolesPermissions'
import EmailSettingRouter from './emailSetting'
import CollaboratorsRouter from './collaborators'
import Home from './home'

const PrivateRouter: RouteObject[] = [
  { index: true, element: <Home /> },
  { path: 'city', children: CityRouter },
  { path: 'country', children: CountryRouter },
  { path: 'patients', children: PatientRouter },
  { path: 'province', children: ProvinceRouter },
  { path: 'emailSetting', children: EmailSettingRouter },
  { path: 'collaborators', children: CollaboratorsRouter },
  { path: 'rolesPermissions', children: RolePermissionsRouter },
]

export default PrivateRouter
