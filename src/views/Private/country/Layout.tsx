import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks'
import { get_countrs } from '../../../controllers/countr'
import { clean_countrs } from '../../../reducers/countr'
import { AddButton } from '../../../components/ui'
import Country from './Country'

const Layout = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  useEffect(() => {
    dispatch(get_countrs())

    return () => {
      dispatch(clean_countrs())
    }
  }, [dispatch])

  return (
    <>
      <AddButton handleClickAdd={handleClickAdd} msgButton="Añadir Nuevo País" />

      <Country />
    </>
  )
}

export default Layout
