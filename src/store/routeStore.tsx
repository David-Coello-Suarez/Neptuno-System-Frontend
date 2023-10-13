import { createBrowserRouter } from 'react-router-dom'
import { Private, Public } from '../components/layout'
import { Loading } from '../views'

const storeRouter = createBrowserRouter([
  { index: true, element: <Loading /> },
  { path: '/auth', element: <Public />, children: [] },
  { path: '/dash', element: <Private />, children: [] },
  // { path: '*', element: <ResourceNotAvailable /> },
])

export default storeRouter
