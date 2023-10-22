import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('./Home'))

const HomeRouter: RouteObject[] = [{ index: true, element: <Home /> }]

export default HomeRouter
