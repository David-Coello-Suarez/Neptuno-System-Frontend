import { Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { NotData } from '../../../components/views'

const columns = [
  { title: 'Abreviatura' },
  { title: 'País' },
  { title: 'Descripción' },
  { title: 'Estado' },
]

const Pais = () => {
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  return (
    <>
      <div className="mb-3 row">
        <div className="col-md-4 col-3"></div>
        <div className="col-md-8 col-9 text-end">
          <button
            onClick={handleClickAdd}
            className="align-items-center btn btn-primary btn-rounded btn-sm d-inline-flex">
            <i className="material-symbols-outlined">person_add</i>
            <strong className="d-md-inline-block d-none ms-2">Añadir Nuevo Pais</strong>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <Table
            columns={columns}
            size="small"
            bordered
            // locale={'Sin datos para mostrar'}
            locale={{
              emptyText: <NotData onclick={handleClickAdd} btnMssg="Añadir Nuevo Pais" />,
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Pais
