import { lazy } from 'react'

const Loading = lazy(() => import('./Loading'))
const NotFound = lazy(() => import('./NotFound'))
import PrivateRouter from './Private/PrivateRoutes'

export { Loading, NotFound, PrivateRouter }
