import { useEffect } from "react"
import { get_provins_active } from "../../controllers/provin"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { clean_provins } from "../../reducers/provin"
import SelectBox from "./SelectBox"

interface iprovin {
    nameSelect: string
    handleChange: (provin: number) => void
    classInvalid?: string | undefined
    countryid: number
    displayLabel: boolean
    value: number
  }
  
  const Provin = (element: iprovin) => {
    const dispatch = useAppDispatch()
  
    useEffect(() => {
      if (element.countryid > 0) {
        dispatch(get_provins_active(element.countryid))
      }
  
      return () => {
        dispatch(clean_provins())
      }
    }, [dispatch, element.countryid])
  
    const { loading_loading, provins_provins } = useAppSelector((state) => state.provin)
  
    const categoria_provincias = provins_provins.map((provin) => ({
      value: provin.provin_provin.toString(),
      label: provin.provin_nampro,
    }))
  
    const disabled = categoria_provincias.length === 0
  
    categoria_provincias.unshift({ value: '0', label: 'Selecciona' })
  
    const handleSelectChange = (selected: { value: string; label: string } | null) =>
      element.handleChange(Number(selected?.value))
  
    return (
      <>
        <div className="form-group">
          {element.displayLabel && (
            <label htmlFor={element.nameSelect}>
              Provincia <span className="text-danger">*</span>
            </label>
          )}
  
          <SelectBox
            value={categoria_provincias.filter((cp) => Number(cp.value) === element.value)}
            id={element.nameSelect}
            name={element.nameSelect}
            options={categoria_provincias}
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
  
  export default Provin