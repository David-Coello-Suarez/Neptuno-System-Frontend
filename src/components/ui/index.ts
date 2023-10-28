import { lazy } from 'react'

const AppNavbar = lazy(() => import('./app/AppNavbar'))
const AppUser = lazy(() => import('./app/AppUser'))
const AppNotification = lazy(() => import('./app/AppNotification'))
const AppMessage = lazy(() => import('./app/AppMessage'))
const AppSidebar = lazy(() => import('./app/AppSidebar'))
const AddButton = lazy(() => import('./AddButton'))
const InputControl = lazy(() => import('./InputControl'))

export {
  AppNavbar,
  AppUser,
  AppNotification,
  AppMessage,
  AppSidebar,
  AddButton,
  InputControl,
}
