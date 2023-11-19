import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { clean_form_compan } from '../../../reducers/compan'
import { post_compan, put_compan } from '../../../controllers/compan'
import { InputControl } from '../../../components/common'
import { icompan } from '../../../interfaces'
import { SchemaCompan } from '../../../validation'
import { useEffect } from 'react'
import { CityxxBox, CountryBox, ProvinBox } from '../../../components/uiBox'

const Form = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      dispatch(clean_form_compan())
    }
  }, [dispatch])

  const { compan_compan, loading_loading } = useAppSelector((state) => state.compan)

  const handleSubmitCompan = (body: icompan) => {
    if (body.compan_compan === 0) {
      dispatch(post_compan({ body, navigate }))
    } else {
      dispatch(put_compan({ body, navigate }))
    }
  }

  const { values, errors, setFieldValue, handleChange, handleBlur, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: compan_compan,
      validateOnChange: false,
      validationSchema: SchemaCompan,
      onSubmit: handleSubmitCompan,
    })

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="page-title">
            {values.compan_compan === 0 ? 'Agregar' : 'Actualizar'} Compañia
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <InputControl
                  required
                  name={'compan_numdoc'}
                  label={'N°. Documento'}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  placeholder="0999999999999"
                  value={values.compan_numdoc}
                  classInvalid={errors.compan_numdoc}
                />
              </div>
              <div className="col-sm-6">
                <InputControl
                  required
                  name={'compan_nomcom'}
                  handleBlur={handleBlur}
                  label={'Nombre Compañia'}
                  handleChange={handleChange}
                  value={values.compan_nomcom}
                  classInvalid={errors.compan_nomcom}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <InputControl
                  required
                  label={'Dirección'}
                  name={'compan_dircom'}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.compan_dircom}
                  classInvalid={errors.compan_dircom}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <InputControl
                  required
                  name={'compan_correo'}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  label={'Correo electrónico'}
                  value={values.compan_correo}
                  placeholder="usuario@dominio.com"
                  classInvalid={errors.compan_correo}
                />
              </div>
              <div className="col-sm-6">
                <InputControl
                  required
                  name={'compan_nummob'}
                  placeholder="0999999999"
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  value={values.compan_nummob}
                  label={'Número de teléfono'}
                  classInvalid={errors.compan_nummob}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <CountryBox
                  displayLabel="País"
                  nameSelect={'comloc_countr'}
                  value={values.comloc_countr}
                  handleChange={(x) => setFieldValue('comloc_countr', x)}
                />
              </div>
              <div className="col-sm">
                <ProvinBox
                  displayLabel="Provincia"
                  nameSelect={'comloc_provin'}
                  value={values.comloc_provin}
                  countryid={values.comloc_countr}
                  handleChange={(x) => setFieldValue('comloc_provin', x)}
                />
              </div>
              <div className="col-sm">
                <CityxxBox
                  displayLabel="Provincia"
                  nameSelect={'comloc_cityxx'}
                  value={values.comloc_cityxx}
                  provinid={values.comloc_provin}
                  handleChange={(x) => setFieldValue('comloc_cityxx', x)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="compan_comlog">Logo</label>
                  <div className="form-group row">
                    <div className="col col-sm">
                      <input
                        className="form-control"
                        id="compan_comlog"
                        name="compan_comlog"
                        type="file"
                      />
                    </div>
                    <div className="col-2 col-sm-auto">
                      <div className="img-thumbnail float-right">
                        <img src={values.compan_comlog} width={40} height={40} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="form-group">
                  <label htmlFor="compan_comico">Favicon</label>
                  <div className="form-group row">
                    <div className="col col-sm">
                      <input
                        className="form-control"
                        id="compan_comico"
                        name="compan_comico"
                        type="file"
                      />
                    </div>
                    <div className="col-2 col-sm-auto">
                      <div className="img-thumbnail float-right">
                        <img src={values.compan_comico} width={16} height={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6 col-md-6 offset-md-3">
                <button
                  type="submit"
                  disabled={loading_loading}
                  className="btn btn-block btn-primary btn-rounded">
                  <i className="fa fa-floppy-o m-r-10" aria-hidden="true" />
                  Guardar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
