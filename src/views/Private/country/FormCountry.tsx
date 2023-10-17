import { Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const FormCountry = () => {
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)

  return (
    <>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h4 className="page-title">Agregar País</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <Form>
            <Row>
              <Col md>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Abreviatura <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Nombre País <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control type="text" size="sm" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md>
                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>

            <div className="mt-2 text-center">
              <button
                type="submit"
                disabled
                className="btn btn-primary btn-rounded me-md-2 mb-2 mb-md-0">
                Crear País
              </button>
              <button
                type="button"
                onClick={handleBack}
                className="btn btn-light btn-rounded">
                Regresar
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default FormCountry
