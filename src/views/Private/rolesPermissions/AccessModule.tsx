const AccessModule = () => {
  return (
    <>
      <h6 className="card-title m-b-10">Módulo de acceso</h6>

      <ul className="list-group">
        <li className="align-content-center d-inline-flex justify-content-between list-group-item">
          <span>Employee</span>
          <div className="material-switch float-right">
            <input id="staff_module" type="checkbox" />
            <label htmlFor="staff_module" className="badge-success"></label>
          </div>
        </li>
        <li className="align-content-center d-inline-flex justify-content-between list-group-item">
          <span>Holidays</span>
          <div className="material-switch float-right">
            <input id="holidays_module" type="checkbox" />
            <label htmlFor="holidays_module" className="badge-success"></label>
          </div>
        </li>
        <li className="align-content-center d-inline-flex justify-content-between list-group-item">
          <span> Leave Request</span>
          <div className="material-switch float-right">
            <input id="leave_module" type="checkbox" />
            <label htmlFor="leave_module" className="badge-success"></label>
          </div>
        </li>
        <li className="align-content-center d-inline-flex justify-content-between list-group-item">
          <span>Events</span>
          <div className="material-switch float-right">
            <input id="events_module" type="checkbox" />
            <label htmlFor="events_module" className="badge-success"></label>
          </div>
        </li>
        <li className="align-content-center d-inline-flex justify-content-between list-group-item">
          <span>Chat</span>
          <div className="material-switch float-right">
            <input id="chat_module" type="checkbox" />
            <label htmlFor="chat_module" className="badge-success"></label>
          </div>
        </li>
      </ul>
    </>
  )
}

export default AccessModule
