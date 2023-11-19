import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import SelectBox from './SelectBox'
import { clean_citylos } from '../../reducers/citylo'
import { get_citylos_active } from '../../controllers/city'

interface iprovin {
  nameSelect: string
  handleChange: (cityxx: number) => void
  classInvalid?: string | undefined
  provinid: number
  displayLabel?: string
  value: number
}

const Cityxx = (element: iprovin) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (element.provinid > 0) {
      dispatch(get_citylos_active(element.provinid))
    }

    return () => {
      dispatch(clean_citylos())
    }
  }, [dispatch, element.provinid])

  const { loading_loading, citylos_citylos } = useAppSelector((state) => state.citylo)

  const categoria_ciudades = citylos_citylos.map((cityxx) => ({
    value: cityxx.citylo_citylo.toString(),
    label: cityxx.citylo_namcit.toUpperCase(),
  }))

  const disabled = categoria_ciudades.length === 0

  categoria_ciudades.unshift({ value: '0', label: 'SELECCIONA' })

  const handleSelectChange = (selected: { value: string; label: string } | null) =>
    element.handleChange(Number(selected?.value))

  return (
    <>
      <div className="form-group">
        {element.displayLabel && (
          <label htmlFor={element.nameSelect}>
            Ciudad <span className="text-danger">*</span>
          </label>
        )}

        <SelectBox
          value={categoria_ciudades.filter((cp) => Number(cp.value) === element.value)}
          id={element.nameSelect}
          name={element.nameSelect}
          options={categoria_ciudades}
          onChange={handleSelectChange}
          isLoading={loading_loading}
          isDisabled={disabled}
        />
        {Boolean(element.classInvalid) && (
          <small className="text-danger">{element.classInvalid}</small>
        )}
      </div>
    </>
  )
}

export default Cityxx
