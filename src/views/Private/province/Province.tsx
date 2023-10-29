import { useEffect } from 'react'
import { Pagination, Switch, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { NotData } from '../../../components/views'
import { AddButton } from '../../../components/ui'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { delete_provin, get_provins, put_provin } from '../../../controllers/provin'
import { iprovin } from '../../../interfaces/iprovin'
import { ColumnsType } from 'antd/es/table'
import { clean_provins, set_provin } from '../../../reducers/provin'

const Province = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  const { provins_provins, loading_loading, provins_paginat } = useAppSelector(
    (state) => state.provin,
  )

  useEffect(() => {
    dispatch(get_provins())

    return () => {
      dispatch(clean_provins())
    }
  }, [dispatch])

  const handleEdita = (provin: iprovin) => {
    dispatch(set_provin(provin))
    navigate(`edit/${provin.provin_provin}`)
  }

  const handleDelete = (body: iprovin) => {
    dispatch(delete_provin({ body }))
  }

  const columns: ColumnsType<iprovin> = [
    { title: 'País', dataIndex: 'countr_namcou' },
    { title: 'Abreviatura', dataIndex: 'provin_abbrev' },
    { title: 'Provincia', dataIndex: 'provin_nampro' },
    {
      title: 'Estado',
      dataIndex: 'provin_status',
      className: 'text-center',
      render: (_x, record) => {
        const handleChecked = () => {
          const body = Object.assign({}, record)

          record.provin_status === 'A'
            ? (body.provin_status = 'I')
            : (body.provin_status = 'A')

          dispatch(put_provin({ body }))
        }

        const classStyle = record.provin_status === 'A' ? 'bg-success' : 'bg-warning'

        return (
          <Switch
            checkedChildren={<i className="fa fa-check" aria-hidden="true" />}
            unCheckedChildren={<i className="fa fa-exclamation" aria-hidden="true" />}
            className={classStyle}
            onChange={handleChecked}
            checked={record.provin_status === 'A'}
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
      <AddButton handleClickAdd={handleClickAdd} msgButton="Añadir Nueva Provincia" />

      <div className="row">
        <div className="col-md-12">
          <Table<iprovin>
            bordered
            size="small"
            columns={columns}
            className="m-b-20"
            pagination={false}
            loading={loading_loading}
            dataSource={provins_provins}
            rowKey={(provin) => provin.provin_provin}
            locale={{
              emptyText: (
                <NotData onclick={handleClickAdd} btnMssg="Añadir Nueva Provincia" />
              ),
            }}
          />
          {provins_provins.length > 0 && (
            <Pagination
              onChange={(pagina, limite) =>
                dispatch(get_provins({ ...provins_paginat, pagina, limite }))
              }
              className="text-center"
              total={provins_paginat.totalItems}
              showSizeChanger
              showTotal={(total, range) =>
                `Mostrando del ${range[0]} a ${range[1]} de ${total} items`
              }
              defaultPageSize={provins_paginat.limite}
              defaultCurrent={provins_paginat.pagina}
              pageSizeOptions={[10, 50, 100]}
              size="small"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Province
