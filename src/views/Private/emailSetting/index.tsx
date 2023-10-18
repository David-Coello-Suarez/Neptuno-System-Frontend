import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const EmailSetting = lazy(() => import('./EmailSetting'))

const EmailSettingRouter: RouteObject[] = [{ index: true, element: <EmailSetting /> }]

export default EmailSettingRouter
