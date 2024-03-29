import { Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { NotData } from '../../../components/views'
import { AddButton } from '../../../components/ui'

const columns = [
  { title: 'Apellidos Nombres' },
  { title: 'Edad' },
  { title: 'Fec. Nac.' },
  { title: 'N°. Contacto' },
  { title: 'Correo Electrónico' },
]

const Patients = () => {
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  return (
    <>
      <AddButton handleClickAdd={handleClickAdd} msgButton="Añadir Nuevo Paciente" />

      <div className="row">
        <div className="col-md-12">
          <Table
            columns={columns}
            size="small"
            bordered
            // locale={'Sin datos para mostrar'}
            locale={{
              emptyText: (
                <NotData onclick={handleClickAdd} btnMssg="Añadir Nuevo Paciente" />
              ),
            }}
          />
        </div>
      </div>
    </>
  )
}

export default Patients
