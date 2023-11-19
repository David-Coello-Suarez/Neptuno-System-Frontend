import { RouteObject } from 'react-router-dom'
import Home from './home'
import CountryRouter from './country'
import ProvinceRouter from './province'
import CityRouter from './city'
import PatientRouter from './patients'
import CompanRouter from './compan'

const PrivateRouter: RouteObject[] = [
  { index: true, element: <Home /> },
  { path: 'city', children: CityRouter },
  { path: 'country', children: CountryRouter },
  { path: 'patien', children: PatientRouter },
  { path: 'province', children: ProvinceRouter },
  { path: 'compan', children: CompanRouter },
  // { path: 'emailSetting', children: EmailSettingRouter },
  // { path: 'collaborators', children: CollaboratorsRouter },
  // { path: 'rolesPermissions', children: RolePermissionsRouter },
]

export default PrivateRouter
