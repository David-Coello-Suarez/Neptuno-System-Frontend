import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

// const Layout = lazy(() => import('./Layout'))
const Form = lazy(() => import('./Form'))

const CompanRouter: RouteObject[] = [
  // { index: true, element: <Layout /> },
  // { path: 'add', element: <Form /> },
  { index: true, element: <Form /> },

  // { path: 'edit/:id', element: <Form /> },
]

export default CompanRouter
