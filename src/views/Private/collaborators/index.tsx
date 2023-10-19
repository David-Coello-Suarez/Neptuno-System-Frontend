import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import FormCollaborators from './FormCollaborators'

const Collaborators = lazy(() => import('./Collaborators'))

const CollaboratorsRouter: RouteObject[] = [
  { index: true, element: <Collaborators /> },
  { path: 'add', element: <FormCollaborators /> },
]

export default CollaboratorsRouter
