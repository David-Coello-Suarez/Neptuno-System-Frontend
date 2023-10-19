import { lazy } from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'antd'
import { AddButton } from '../../../components/ui'
import { NotData } from '../../../components/views'
const CollaboratingFilters = lazy(() => import('./CollaboratingFilters'))

const columns = [
  { title: 'Apellidos Nombres' },
  { title: 'Cédula' },
  { title: 'Correo electrónico' },
  { title: 'Móvil' },
  { title: 'Fecha Ingreso' },
  { title: 'Cargo' },
]

const Collaborators = () => {
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  return (
    <>
      <AddButton handleClickAdd={handleClickAdd} msgButton="Añadir Nuevo Colaborador" />

      <CollaboratingFilters />

      <div className="row">
        <div className="col-md-12">
          <Table
            columns={columns}
            size="small"
            bordered
            // locale={'Sin datos para mostrar'}
            locale={{
              emptyText: (
                <NotData onclick={handleClickAdd} btnMssg="Añadir Nuevo Colaborador" />
              ),
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Collaborators
