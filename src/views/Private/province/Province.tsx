import { Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { NotData } from '../../../components/views'
import { AddButton } from '../../../components/ui'

const columns = [
  { title: 'Abreviatura' },
  { title: 'Provincia' },
  { title: 'Descripción' },
  { title: 'Estado' },
]

const Province = () => {
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  return (
    <>
      <AddButton handleClickAdd={handleClickAdd} msgButton="Añadir Nuevo Provincia" />

      <div className="row">
        <div className="col-md-12">
          <Table
            columns={columns}
            size="small"
            bordered
            locale={{
              emptyText: (
                <NotData onclick={handleClickAdd} btnMssg="Añadir Nuevo Provincia" />
              ),
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Province
