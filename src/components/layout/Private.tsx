import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { AppNavbar, AppSidebar } from '../ui'

const Private = () => {
  const { loggin_tokses } = useAppSelector((state) => state.loggin.loggedIn)

  const loggout = Boolean(loggin_tokses.length == 0)

  if (loggout) return <Navigate to={'/'} />

  return (
    <>
      <div className={`main-wrapper`}>
        <AppNavbar />

        <AppSidebar />

        <div className="page-wrapper">
          <div className="content p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Private
