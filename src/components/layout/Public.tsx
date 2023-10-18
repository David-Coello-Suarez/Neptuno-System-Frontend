/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks'

const Public = () => {
  const { loggin_tokses } = useAppSelector((state) => state.loggin.loggedIn)

  const loggout = Boolean(loggin_tokses.length > 0)

  if (loggout) return <Navigate to={'/dash'} />
  
  return <Outlet />
}

export default memo(Public)
