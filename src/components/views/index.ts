import { lazy } from 'react'

const NotData = lazy(() => import('./NotData'))
const Country = lazy(() => import('./Country'))
const City = lazy(() => import('./City'))
const Province = lazy(() => import('./Province'))
const UserRol = lazy(() => import('./UserRol'))

export { NotData, Country, Province, City, UserRol }
