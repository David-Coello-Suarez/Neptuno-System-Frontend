import { Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { NotData } from '../../../components/views'
import { AddButton } from '../../../components/ui'

const columns = [
  { title: 'Abreviatura' },
  { title: 'País' },
  { title: 'Descripción' },
  { title: 'Estado' },
]

const Country = () => {
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  return (
    <>
      <AddButton handleClickAdd={handleClickAdd} msgButton="Añadir Nuevo País" />

      <div className="row">
        <div className="col-md-12">
          <Table
            columns={columns}
            size="small"
            bordered
            // locale={'Sin datos para mostrar'}
            locale={{
              emptyText: <NotData onclick={handleClickAdd} btnMssg="Añadir Nuevo País" />,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Country
