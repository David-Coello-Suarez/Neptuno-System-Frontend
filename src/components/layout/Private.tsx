/* eslint-disable react-refresh/only-export-components */
import { memo } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { AppNavbar, AppSidebar } from '../ui'
import { Footer } from '../views'

const Private = () => {
  const { loggin_tokses } = useAppSelector((state) => state.loggin.loggedIn)

  const { open_modal_notification, open_sidebar } = useAppSelector((state) => state.app)

  const loggout = Boolean(loggin_tokses.length == 0)

  if (loggout) return <Navigate to={'/'} />

  return (
    <>
      <div
        className={`main-wrapper ${open_modal_notification && 'open-msg-box'} ${
          open_sidebar && 'slide-nav'
        }`}>
        <AppNavbar />

        <AppSidebar />
        <div className="page-wrapper">
          <div className="content p-3">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default memo(Private)
