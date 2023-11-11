import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { clean_form_provin } from '../../../reducers/provin'
import { post_provin, put_provin } from '../../../controllers/provin'
import { SchemaProvin } from '../../../validation'
import { iprovin } from '../../../interfaces'
import { CountryBox } from '../../../components/uiBox'
import { InputControl } from '../../../components/common'

const FormProvince = () => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const handleBack = () => {
    dispatch(clean_form_provin())
    navigate(-1)
  }

  const { provin_provin } = useAppSelector((state) => state.provin)

  const handleProvin = (provin: iprovin) => {
    const data = { body: provin, navigate }

    if (provin.provin_provin === 0) {
      dispatch(post_provin(data))
    } else {
      dispatch(put_provin(data))
    }
  }

  const { values, errors, setFieldValue, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      validationSchema: SchemaProvin,
      initialValues: provin_provin,
      onSubmit: handleProvin,
    })

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="page-title">
            {values.provin_provin === 0 ? 'Agregar' : 'Actualizar'} Provincia
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <CountryBox
                  displayLabel
                  nameSelect="countr_countr"
                  handleChange={(countr_countr) =>
                    setFieldValue('countr_countr', countr_countr)
                  }
                  classInvalid={errors.countr_countr}
                  value={values.countr_countr}
                />
              </div>
              <div className="col-md-12">
                <InputControl
                  required
                  label="Abreviatura"
                  name="provin_abbrev"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.provin_abbrev}
                  classInvalid={errors.provin_abbrev}
                />
              </div>
              <div className="col-md-12">
                <InputControl
                  required
                  label="Nombre"
                  name="provin_nampro"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.provin_nampro}
                  classInvalid={errors.provin_nampro}
                />
              </div>
            </div>

            <div className="mt-2 text-center">
              <button type="submit" className="btn btn-primary btn-rounded m-r-5">
                {values.provin_provin === 0 ? 'Crear' : 'Actualizar'} Provincia
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

export default FormProvince
