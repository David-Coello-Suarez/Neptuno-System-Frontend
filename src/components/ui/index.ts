import { lazy } from 'react'

const AppNavbar = lazy(() => import('./AppNavbar'))
const AppUser = lazy(() => import('./AppUser'))
const AppNotification = lazy(() => import('./AppNotification'))
const AppMessage = lazy(() => import('./AppMessage'))
const AppSidebar = lazy(() => import('./AppSidebar'))
const AddButton = lazy(() => import('./AddButton'))

export { AppNavbar, AppUser, AppNotification, AppMessage, AppSidebar, AddButton }
