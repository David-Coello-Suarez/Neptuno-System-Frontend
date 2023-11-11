import { lazy } from 'react'

const CountryBox = lazy(() => import('./Countr'))
const ProvinBox = lazy(() => import('./Provin'))

export { CountryBox, ProvinBox }
