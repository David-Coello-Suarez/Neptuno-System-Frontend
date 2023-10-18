import { Col, Row } from 'react-bootstrap'
import Select from 'react-select'

const options = [
  { value: 'NONE', label: 'NONE' },
  { value: 'SSL', label: 'SSL' },
  { value: 'TLS', label: 'TLS' },
]

const EmailSetting = () => {
  return (
    <>
      <Row>
        <Col lg={8} className="offset-lg-2">
          <form>
            <h4 className="page-title m-t-30">SMTP Email Settings</h4>

            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>SMTP HOST</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>SMTP USER</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>SMTP PASSWORD</label>
                  <input className="form-control" type="password" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>SMTP PORT</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>SMTP Security</label>
                  <Select
                    options={options}
                    closeMenuOnSelect={true}
                    onChange={console.log}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>SMTP Authentication Domain</label>
                  <input className="form-control" type="text" />
                </div>
              </div>
            </div>

            <div className="col-sm-12 m-t-20 text-center">
              <button type="button" className="btn btn-primary submit-btn">
                Save
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </>
  )
}

export default EmailSetting
