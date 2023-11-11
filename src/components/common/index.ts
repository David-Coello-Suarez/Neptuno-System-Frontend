import { lazy } from 'react'

const AddButton = lazy(() => import('./AddButton'))
const InputControl = lazy(() => import('./InputControl'))

export { AddButton, InputControl }
