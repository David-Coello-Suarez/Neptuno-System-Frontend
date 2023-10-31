import { lazy } from 'react'

const NotData = lazy(() => import('./NotData'))
const Countr = lazy(() => import('./Countr'))
// const City = lazy(() => import('./City'))
const Provin = lazy(() => import('./Provin'))
const UserRol = lazy(() => import('./UserRol'))
const Footer = lazy(() => import('./Footer'))

export { NotData, Countr, Provin, UserRol, Footer }
