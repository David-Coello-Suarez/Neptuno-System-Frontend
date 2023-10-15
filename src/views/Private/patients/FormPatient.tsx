import { useNavigate } from 'react-router-dom'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'
import { City, Country, Province } from '../../../components/views'

const FormPatient = () => {
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="page-title">
            <strong>Añadir Paciente</strong>
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    N°. Documento <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="0999999999"
                    />
                    <button
                      type="button"
                      className="align-items-center btn btn-primary btn-sm d-inline-flex ms-1">
                      <span className="material-symbols-outlined">search</span>
                    </button>
                    <button
                      disabled
                      style={{ cursor: 'not-allowed' }}
                      type="button"
                      className="align-items-center btn btn-danger btn-sm d-inline-flex ms-1">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Apellidos <span className="text-danger">*</span>
                  </label>
                  <input disabled className="form-control" type="text" />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Nombres <span className="text-danger">*</span>
                  </label>
                  <input disabled className="form-control" type="text" />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Correo Electrónico <span className="text-danger">*</span>
                  </label>
                  <input disabled className="form-control" type="text" />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Fec. Nacimiento <span className="text-danger">*</span>
                  </label>
                  <Datetime
                    inputProps={{ disabled: true }}
                    initialValue={new Date()}
                    dateFormat="DD/MM/YYYY"
                    timeFormat={false}
                    locale="es"
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group gender-select">
                  <label className="gen-label">Gender:</label>
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input
                        disabled
                        type="radio"
                        name="gender"
                        className="form-check-input"
                      />
                      Masculino
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input
                        disabled
                        type="radio"
                        name="gender"
                        className="form-check-input"
                      />
                      Femenino
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label>Edad</label>
                  <input
                    disabled
                    readOnly
                    type="text"
                    className="form-control"
                    placeholder="0 años 0 meses"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-md-4">
                    <Country />
                  </div>
                  <div className="col-md-4">
                    <Province />
                  </div>
                  <div className="col-md-4">
                    <City />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Telefóno celular <span className="text-danger">*</span>
                  </label>
                  <input disabled className="form-control" type="text" />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="form-group">
                  <label>Avatar</label>
                  <div className="profile-upload">
                    <div className="upload-img">
                      <img alt="" src="/assets/img/user.jpg" />
                    </div>
                    <div className="upload-input">
                      <input disabled type="file" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 text-center">
                <button
                  type="submit"
                  disabled
                  className="btn btn-primary btn-rounded me-md-2 mb-2 mb-md-0">
                  Crear Paciente
                </button>
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-light btn-rounded">
                  Regresar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormPatient
