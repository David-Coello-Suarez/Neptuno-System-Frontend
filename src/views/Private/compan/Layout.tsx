import { useNavigate } from 'react-router-dom'
import { AddButton } from '../../../components/common'

const Layout = () => {
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  const msgBtn = 'Añadir Nueva Compañia'

  return (
    <>
      <AddButton handleClickAdd={handleClickAdd} msgButton={msgBtn} />
    </>
  )
}

export default Layout
