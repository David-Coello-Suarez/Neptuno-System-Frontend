import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const FormRol = () => {
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)

  return (
    <>
      <Row>
        <Col lg={8} className="offset-lg-2">
          <h4 className="page-title">Añadir Nuevo Rol</h4>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="offset-lg-2">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>
                Nombre de Rol <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control type="text" size="sm" />
            </Form.Group>

            <Form.Label className="display-block">Estado</Form.Label>

            <Form.Check // prettier-ignore
              type="radio"
              id="custom-switch"
              label="Activo"
              className="form-check-inline"
            />
            <Form.Check // prettier-ignore
              type="radio"
              id="custom-switch"
              label="Inactivo"
              className="form-check-inline"
            />

            <div className="mt-3 text-center">
              <Button className="rounded-5 px-5 py-2 me-2" size="sm">
                CREAR ROL
              </Button>
              <Button
                size="sm"
                variant="light"
                onClick={handleBack}
                className="rounded-5 px-5 py-2 ms-2">
                Regresar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default FormRol
