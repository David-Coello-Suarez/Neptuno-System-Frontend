import { lazy } from 'react'

const CountryBox = lazy(() => import('./Countr'))
const ProvinBox = lazy(() => import('./Provin'))
const CityxxBox = lazy(() => import('./Cityxx'))

export { CountryBox, ProvinBox, CityxxBox }
