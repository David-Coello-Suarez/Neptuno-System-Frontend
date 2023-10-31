import { Pagination, Switch, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table'
import { NotData } from '../../../components/views'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { icountr } from '../../../interfaces'
import { set_countr } from '../../../reducers/countr'
import { delete_countr, get_countrs, put_countr } from '../../../controllers/countr'

const Country = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  const { countrs_countrs, loading_loading, countrs_paginat } = useAppSelector(
    (state) => state.countr,
  )

  const handleEdita = (countr: icountr) => {
    dispatch(set_countr(countr))
    navigate(`edit/${countr.countr_countr}`)
  }

  const handleDelete = (body: icountr) => {
    dispatch(delete_countr({ body }))
  }

  const columns: ColumnsType<icountr> = [
    { title: 'Abreviatura', dataIndex: 'countr_abbrev' },
    { title: 'País', dataIndex: 'countr_namcou' },
    {
      title: 'Estado',
      dataIndex: 'countr_status',
      className: 'text-center',
      render: (_x, record) => {
        const handleChecked = () => {
          const body = Object.assign({}, record)

          record.countr_status === 'A'
            ? (body.countr_status = 'I')
            : (body.countr_status = 'A')

          dispatch(put_countr({ body }))
        }

        const classStyle = record.countr_status === 'A' ? 'bg-success' : 'bg-danger'

        return (
          <Switch
            checkedChildren={<i className="fa fa-check" />}
            unCheckedChildren={<i className="fa fa-times" />}
            className={classStyle}
            onChange={handleChecked}
            checked={record.countr_status === 'A'}
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
          <Table<icountr>
            bordered
            size="small"
            columns={columns}
            className="m-b-20"
            loading={loading_loading}
            dataSource={countrs_countrs}
            rowKey={(countr) => countr.countr_countr}
            pagination={false}
            locale={{
              emptyText: <NotData onclick={handleClickAdd} btnMssg="Añadir Nuevo País" />,
            }}
          />

          {countrs_countrs.length > 0 && (
            <Pagination
              onChange={(pagina, limite) =>
                dispatch(get_countrs({ ...countrs_paginat, pagina, limite }))
              }
              className="text-center"
              total={countrs_paginat.totalItems}
              showSizeChanger
              showTotal={(total, range) =>
                `Mostrando del ${range[0]} a ${range[1]} de ${total} items`
              }
              defaultPageSize={countrs_paginat.limite}
              defaultCurrent={countrs_paginat.pagina}
              pageSizeOptions={[10, 50, 100]}
              size="small"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default Country
