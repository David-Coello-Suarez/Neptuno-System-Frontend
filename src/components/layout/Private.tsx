import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { AppNavbar } from '../ui'

const Private = () => {
  const { loggin_tokses } = useAppSelector((state) => state.loggin.loggedIn)

  const loggout = Boolean(loggin_tokses.length == 0)

  if (loggout) return <Navigate to={'/'} />

  return (
    <>
      <AppNavbar />

      <h1>HOME</h1>
    </>
  )
}

export default Private
