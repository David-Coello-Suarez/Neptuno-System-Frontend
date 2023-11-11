import { lazy } from 'react'

const AppNavbar = lazy(() => import('./AppNavbar'))
const AppSidebar = lazy(() => import('./AppSidebar'))
const NotData = lazy(() => import('./NotData'))

export { AppNavbar, AppSidebar, NotData }
