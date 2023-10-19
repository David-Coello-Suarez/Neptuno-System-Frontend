import { Button, Col, Form, Row } from 'react-bootstrap'
import Datetime from 'react-datetime'
import { UserRol } from '../../../components/views'
import { useNavigate } from 'react-router-dom'

const FormCollaborators = () => {
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)

  return (
    <>
      <Row>
        <Col lg={8} className="offset-lg-2">
          <h4 className="page-title">Añadir Colaborador</h4>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="offset-lg-2">
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    N°. Documento <span className="text-danger">*</span>
                  </Form.Label>
                  <div className="d-inline-flex">
                    <Form.Control type="text" size="sm" placeholder="0999999999" />
                    <Button type="button" size="sm" variant="primary" className="ms-2">
                      <span className="material-symbols-outlined">search</span>
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="danger"
                      className="ms-2"
                      disabled>
                      <span className="material-symbols-outlined">delete</span>
                    </Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Apellidos <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" size="sm" disabled />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Nombres <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" size="sm" disabled />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Correo Electrónico <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" size="sm" disabled />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Confirmar Correo Electrónico <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" size="sm" disabled />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Móvil <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" size="sm" disabled />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Confirmar Correo Electrónico <span className="text-danger">*</span>
                  </Form.Label>
                  <UserRol />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md>
                <Form.Group className="mb-3">
                  <div className="form-group gender-select">
                    <label className="gen-label">Estado:</label>
                    <div className="form-check-inline">
                      <label className="form-check-label">
                        <input
                          checked
                          disabled
                          type="radio"
                          name="gender"
                          className="form-check-input"
                        />
                        Activo
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
                        Inactivo
                      </label>
                    </div>
                  </div>
                </Form.Group>
              </Col>

              <Col md>
                <Form.Group className="mb-3" controlId="ok">
                  <Form.Label>
                    Fecha Ingreso <span className="text-danger">*</span>
                  </Form.Label>
                  <Datetime
                    inputProps={{ disabled: true }}
                    initialValue={new Date()}
                    dateFormat="DD/MM/YYYY"
                    timeFormat={false}
                    locale="es"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col md className="text-center">
                <Button type="submit" size="sm" variant="primary" className="btn-rounded">
                  Crear Doctor
                </Button>
              </Col>
              <Col md className="text-center">
                <Button
                  type="button"
                  variant="light"
                  className="btn-rounded"
                  onClick={handleBack}>
                  Regresar
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default FormCollaborators
