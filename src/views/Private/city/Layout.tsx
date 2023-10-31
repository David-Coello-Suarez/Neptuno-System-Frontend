import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import City from './City'
import { AddButton } from '../../../components/ui'
import { useAppDispatch } from '../../../hooks'
import { get_citylos } from '../../../controllers/city'
import { clean_citylos } from '../../../reducers/citylo'

const Layout = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(get_citylos())

    return () => {
      dispatch(clean_citylos())
    }
  }, [dispatch])

  const handleClickAdd = () => navigate('add')

  return (
    <>
      <AddButton handleClickAdd={handleClickAdd} msgButton="Añadir Nuevo Ciudad" />

      <City handleClickAdd={handleClickAdd} />
    </>
  )
}

export default Layout
