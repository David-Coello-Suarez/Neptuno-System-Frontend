import { RouteObject } from 'react-router-dom'
import PatientRouter from './patients'
import CountryRouter from './country'
import ProvinceRouter from './province'
import CityRouter from './city'
import RolePermissionsRouter from './rolesPermissions'
import EmailSettingRouter from './emailSetting'

const PrivateRouter: RouteObject[] = [
  { path: 'city', children: CityRouter },
  { path: 'country', children: CountryRouter },
  { path: 'patients', children: PatientRouter },
  { path: 'province', children: ProvinceRouter },
  { path: 'emailSetting', children: EmailSettingRouter },
  { path: 'rolesPermissions', children: RolePermissionsRouter },
]

export default PrivateRouter
