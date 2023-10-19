import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap'

const CollaboratingFilters = () => {
  return (
    <Row className="filter-row">
      <Col sm={6} md={3}>
        <Form.Group className=" mb-4">
          <FloatingLabel controlId="floatingInput" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
      </Col>
      <Col sm={6} md={3}>
        <Form.Group className=" mb-4">
          <FloatingLabel controlId="floatingInput" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
      </Col>
      <Col sm={6} md={3}>
        <Form.Group>
          <FloatingLabel controlId="floatingSelect" label="Works with selects">
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
        </Form.Group>
      </Col>
      <Col sm={6} md={3}>
        <Button type="button" className="btn-block">
          Buscar
        </Button>
      </Col>
    </Row>
  )
}

export default CollaboratingFilters
