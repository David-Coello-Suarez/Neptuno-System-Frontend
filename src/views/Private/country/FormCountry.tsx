import { useNavigate } from 'react-router-dom'
import { InputControl } from '../../../components/ui'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { useFormik } from 'formik'
import { icountr } from '../../../interfaces'
import { post_countr, put_countr } from '../../../controllers/countr'
import { clean_form_countr } from '../../../reducers/countr'

const FormCountry = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleBack = () => {
    dispatch(clean_form_countr())
    navigate(-1)
  }

  const { countr_countr } = useAppSelector((state) => state.countr)

  const save_update = (body: icountr) => {
    if (body.countr_countr === 0) {
      dispatch(post_countr({ body, navigate }))
    } else {
      dispatch(put_countr({ body, navigate }))
    }
  }

  const { errors, values, handleSubmit, handleChange, handleBlur } = useFormik({
    validateOnChange: false,
    enableReinitialize: true,
    initialValues: countr_countr,
    onSubmit: save_update,
  })

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="page-title">
            {values.countr_countr === 0 ? 'Agregar' : 'Actualizar'} País
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12">
                <InputControl
                  required
                  name="countr_abbrev"
                  handleBlur={handleBlur}
                  label="Abreviatura País"
                  handleChange={handleChange}
                  value={values.countr_abbrev}
                  classInvalid={Boolean(errors.countr_abbrev)}
                />
              </div>
              <div className="col-md-12">
                <InputControl
                  required
                  name="countr_namcou"
                  handleBlur={handleBlur}
                  label="Nombre País"
                  handleChange={handleChange}
                  value={values.countr_namcou}
                  classInvalid={Boolean(errors.countr_namcou)}
                />
              </div>
            </div>

            <div className="mt-2 text-center">
              <button type="submit" className="btn btn-primary btn-rounded m-r-5">
                {values.countr_countr === 0 ? 'Agregar' : 'Actualizar'} País
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

export default FormCountry
