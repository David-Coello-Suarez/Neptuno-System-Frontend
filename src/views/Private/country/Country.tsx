import { Switch, Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ColumnsType } from 'antd/es/table'
import { NotData } from '../../../components/views'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { icountr } from '../../../interfaces'
import { set_countr } from '../../../reducers/countr'
import { delete_countr, put_countr } from '../../../controllers/countr'

const Country = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleClickAdd = () => navigate('add')

  const { countrs_countrs, loading_loading } = useAppSelector((state) => state.countr)

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
            loading={loading_loading}
            dataSource={countrs_countrs}
            rowKey={(countr) => countr.countr_countr}
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
