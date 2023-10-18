import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const RolesPermissions = lazy(() => import('./RolesPermissions'))
const FormRol = lazy(() => import('./FormRol'))

const RolePermissionsRouter: RouteObject[] = [
  { index: true, element: <RolesPermissions /> },
  { path: 'addRol', element: <FormRol /> },
]

export default RolePermissionsRouter
