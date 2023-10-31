import { Pagination, Switch, Table } from 'antd'
import { NotData } from '../../../components/views'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { icitylo } from '../../../interfaces/icitylo'
import { ColumnsType } from 'antd/es/table'
import { delete_citylo, get_citylos, put_citylo } from '../../../controllers/city'
import { useNavigate } from 'react-router-dom'
import { set_citylo } from '../../../reducers/citylo'

interface icity {
  handleClickAdd: () => void
}

const City = ({ handleClickAdd }: icity) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { loading_loading, citylos_citylos, citylos_paginat } = useAppSelector(
    (state) => state.citylo,
  )

  const handleEdita = (citylo: icitylo) => {
  
    dispatch(set_citylo(citylo))
    navigate(`edit/${citylo.citylo_citylo}`)
  }

  const handleDelete = (body: icitylo) => {
    dispatch(delete_citylo({ body }))
  }

  const columns: ColumnsType<icitylo> = [
    { title: 'Provincia', dataIndex: 'provin_nampro' },
    { title: 'Abreviatura', dataIndex: 'citylo_abbrev' },
    { title: 'Ciudad', dataIndex: 'citylo_namcit' },
    {
      title: 'Estado',
      dataIndex: 'citylo_status',
      className: 'text-center',
      render: (_x, record) => {
        const handleChecked = () => {
          const body = Object.assign({}, record)

          record.citylo_status === 'A'
            ? (body.citylo_status = 'I')
            : (body.citylo_status = 'A')

          dispatch(put_citylo({ body }))
        }

        const classStyle = record.citylo_status === 'A' ? 'bg-success' : 'bg-warning'

        return (
          <Switch
            checkedChildren={<i className="fa fa-check" aria-hidden="true" />}
            unCheckedChildren={<i className="fa fa-exclamation" aria-hidden="true" />}
            className={classStyle}
            onChange={handleChecked}
            checked={record.citylo_status === 'A'}
          />
        )
      },
    },
    {
      title: 'Acciones',
      className: 'text-center',
      render: (_value, record) => (
        <>
          <button
            className="btn btn-sm btn-success m-r-5"
            onClick={() => handleEdita(record)}>
            <i className="fa fa-edit" />
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => handleDelete(record)}>
            <i className="fa fa-trash" />
          </button>
        </>
      ),
    },
  ]

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Table<icitylo>
            bordered
            size="small"
            columns={columns}
            className="m-b-20"
            pagination={false}
            loading={loading_loading}
            dataSource={citylos_citylos}
            rowKey={(provin) => provin.provin_provin}
            locale={{
              emptyText: (
                <NotData onclick={handleClickAdd} btnMssg="Añadir Nuevo Ciudad" />
              ),
            }}
          />

          {citylos_citylos.length > 0 && (
            <Pagination
              onChange={(pagina, limite) =>
                dispatch(get_citylos({ ...citylos_paginat, pagina, limite }))
              }
              className="text-center"
              total={citylos_paginat.totalItems}
              showSizeChanger
              showTotal={(total, range) =>
                `Mostrando del ${range[0]} a ${range[1]} de ${total} items`
              }
              defaultPageSize={citylos_paginat.limite}
              defaultCurrent={citylos_paginat.pagina}
              pageSizeOptions={[10, 50, 100]}
              size="small"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default City
