import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { clean_form_citylo } from '../../../reducers/citylo'
import { InputControl } from '../../../components/common'
import { CountryBox, ProvinBox } from '../../../components/uiBox'
import { post_citylo, put_citylo } from '../../../controllers/city'
import { SchemaCity } from '../../../validation'
import { icitylo } from '../../../interfaces'

const FormCity = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleBack = () => {
    dispatch(clean_form_citylo())
    navigate(-1)
  }

  const { citylo_citylo } = useAppSelector((state) => state.citylo)

  const handleSubmitCity = (body: icitylo) => {
    if (body.citylo_citylo === 0) {
      dispatch(post_citylo({ body, navigate }))
    } else {
      dispatch(put_citylo({ body, navigate }))
    }
  }

  const { values, errors, setFieldValue, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: citylo_citylo,
      validateOnChange: false,
      validationSchema: SchemaCity,
      onSubmit: handleSubmitCity,
    })

  const [country, setCountry] = useState(values.countr_countr)

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="page-title">
            {values.citylo_citylo === 0 ? 'Agregar' : 'Actualizar'} Ciudad
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <CountryBox
                  displayLabel={'Pais'}
                  value={country}
                  nameSelect="countr_countr"
                  handleChange={setCountry}
                />
              </div>
              <div className="col-md-6">
                <ProvinBox
                  displayLabel
                  countryid={country}
                  nameSelect="provin_provin"
                  value={values.provin_provin}
                  classInvalid={errors.provin_provin}
                  handleChange={(valor) => setFieldValue('provin_provin', valor)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <InputControl
                  required
                  label="Abreviatura"
                  name="citylo_abbrev"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.citylo_abbrev}
                  classInvalid={errors.citylo_abbrev}
                />
              </div>

              <div className="col-md-12">
                <InputControl
                  required
                  label="Nombre"
                  name="citylo_namcit"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.citylo_namcit}
                  classInvalid={errors.citylo_namcit}
                />
              </div>
            </div>

            <div className="mt-2 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-rounded me-md-2 mb-2 mb-md-0">
                {values.citylo_citylo === 0 ? 'Agregar' : 'Actualizar'} Ciudad
              </button>
              <button
                type="button"
                onClick={handleBack}
                className="btn btn-light btn-rounded">
                Regresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormCity
