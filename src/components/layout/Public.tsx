import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks'

const Public = () => {
  const { loggin_tokses } = useAppSelector((state) => state.loggin.loggedIn)

  const loggout = Boolean(loggin_tokses.length > 0)

  if (loggout) return <Navigate to={'/dash'} />
  
  return <Outlet />
}

export default Public
