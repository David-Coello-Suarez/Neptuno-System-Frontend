import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { AppNavbar, AppSidebar } from '../ui'

const Private = () => {
  const { loggin_tokses } = useAppSelector((state) => state.loggin.loggedIn)

  const loggout = Boolean(loggin_tokses.length == 0)

  if (loggout) return <Navigate to={'/'} />

  return (
    <>
      <div className="main-wrapper">
        <AppSidebar />

        <AppNavbar />
        <h1>HOME</h1>
      </div>
    </>
  )
}

export default Private
