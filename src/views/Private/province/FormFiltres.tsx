import { useState } from 'react'
import { Countr } from '../../../components/views'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { get_provins } from '../../../controllers/provin'

const FormFiltres = () => {
  const dispatch = useAppDispatch()

  const { provins_paginat } = useAppSelector((state) => state.provin)

  const [countr, setCountr] = useState(0)

  const data = {
    ...provins_paginat,
    countr,
    totalItems: 0,
    totalPages: 0,
  }

  const handleSearch = () => dispatch(get_provins(data))

  return (
    <div className="row filter-row">
      <div className="col-sm-6 col-md-3"></div>
      <div className="col-sm-6 col-md-3"></div>
      <div className="col-sm-6 col-md-3">
        <Countr
          nameSelect="countr_countr"
          value={countr}
          handleChange={setCountr}
          displayLabel={false}
        />
      </div>
      <div className="col-sm-6 col-md-3">
        <button
          disabled={countr == 0}
          onClick={handleSearch}
          className="btn btn-success btn-block">
          {' '}
          Buscar{' '}
        </button>
      </div>
    </div>
  )
}

export default FormFiltres
