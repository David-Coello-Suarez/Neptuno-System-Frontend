import { Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { NotData } from '../../../components/views'
import { AddButton } from '../../../components/ui'

const columns = [
  { title: 'Abreviatura' },
  { title: 'Ciudad' },
  { title: 'Descripción' },
  { title: 'Estado' },
]

const City = () => {
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  return (
    <>
      <AddButton handleClickAdd={handleClickAdd} msgButton="Añadir Nuevo Ciudad" />

      <div className="row">
        <div className="col-md-12">
          <Table
            columns={columns}
            size="small"
            bordered
            locale={{
              emptyText: (
                <NotData onclick={handleClickAdd} btnMssg="Añadir Nuevo Ciudad" />
              ),
            }}
          />
        </div>
      </div>
    </>
  )
}

export default City
