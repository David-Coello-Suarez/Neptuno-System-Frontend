import { useEffect, useState } from 'react'
import Select from 'react-select'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { get_countrs_active } from '../../controllers/countr'
import { clean_countrs } from '../../reducers/countr'

interface icountr {
  nameSelect: string
  handleChange: (countr: number) => void
  classInvalid?: string | undefined
  value: number
  displayLabel: boolean
}

const Countr = (element: icountr) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(get_countrs_active())

    return () => {
      dispatch(clean_countrs())
    }
  }, [dispatch])

  const { loading_loading, countrs_countrs } = useAppSelector((state) => state.countr)

  const categoria_paises = countrs_countrs.map((countr) => ({
    value: countr.countr_countr.toString(),
    label: countr.countr_namcou,
  }))

  categoria_paises.unshift({ value: '0', label: 'Selecciona' })

  const handleSelectChange = (selected: { value: string; label: string } | null) =>
    element.handleChange(Number(selected?.value))

  return (
    <>
      <div className="form-group">
        {element.displayLabel && (
          <label htmlFor={element.nameSelect}>
            País <span className="text-danger">*</span>
          </label>
        )}

        <SelectBox
          value={categoria_paises.filter((cp) => Number(cp.value) === element.value)}
          id={element.nameSelect}
          name={element.nameSelect}
          options={categoria_paises}
          onChange={handleSelectChange}
          isLoading={loading_loading}
        />
        {Boolean(element.classInvalid) && (
          <small className="text-danger">{element.classInvalid}</small>
        )}
      </div>
    </>
  )
}

export default Countr

interface iselectbox {
  name: string
  options: { value: string; label: string }[]
  onChange: (x: { value: string; label: string } | null) => void
  [key: string]: unknown
}

const SelectBox = ({ name, onChange, options, ...rest }: iselectbox) => {
  const [optionSelected, setSelectedOptions] = useState<{
    value: string
    label: string
  } | null>(null)

  const handleChange = (selected: { value: string; label: string } | null) => {
    onChange(selected)
    setSelectedOptions(selected)
  }

  return (
    <Select
      options={options}
      closeMenuOnSelect={true}
      onChange={handleChange}
      value={optionSelected}
      name={name}
      {...rest}
      placeholder={'ESCOJE UN OPCIÓN'}
      noOptionsMessage={() => 'NO HAY DATOS DISPONIBLE, CON EL CRITERIO INGRESADO'}
    />
  )
}
