import { Divider } from 'antd'
import { lazy } from 'react'
import { Col, Row } from 'react-bootstrap'

const ListRoles = lazy(() => import('./ListRoles'))
const AccessModule = lazy(() => import('./AccessModule'))
const AccessPermissions = lazy(() => import('./AccessPermissions'))

const RolesPermissions = () => {
  return (
    <>
      <Row>
        <Col sm={8}>
          <h4 className="page-title">Roles y permisos</h4>
        </Col>
      </Row>

      <Row>
        <Col sm={4} md={4} lg={4} xl={3}>
          <ListRoles />
        </Col>
        <Col sm={8} md={8} lg={8} xl={9}>
          <AccessModule />
          <Divider className="my-3" />
          <AccessPermissions />
        </Col>
      </Row>
    </>
  )
}

export default RolesPermissions
