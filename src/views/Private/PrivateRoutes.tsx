import { RouteObject } from 'react-router-dom'
import Home from './home'
import CountryRouter from './country'
import ProvinceRouter from './province'

const PrivateRouter: RouteObject[] = [
  { index: true, element: <Home /> },
  // { path: 'city', children: CityRouter },
  { path: 'country', children: CountryRouter },
  // { path: 'patients', children: PatientRouter },
  { path: 'province', children: ProvinceRouter },
  // { path: 'emailSetting', children: EmailSettingRouter },
  // { path: 'collaborators', children: CollaboratorsRouter },
  // { path: 'rolesPermissions', children: RolePermissionsRouter },
]

export default PrivateRouter
