const Home = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
        <div className="d-flex dash-widget justify-content-between">
          <span className="dash-widget-bg1">
            <i className="fa fa-stethoscope" aria-hidden="true"></i>
          </span>
          <div className="dash-widget-info text-end">
            <h3>98</h3>
            <span className="align-items-center d-inline-flex widget-title1">
              Doctors <span className="ms-2 material-symbols-outlined">check_circle</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
        <div className="d-flex dash-widget justify-content-between">
          <span className="dash-widget-bg2">
            <i className="fa fa-user-o"></i>
          </span>
          <div className="dash-widget-info text-end">
            <h3>1072</h3>
            <span className="align-items-center d-inline-flex widget-title2">
              Patients{' '}
              <span className="ms-2 material-symbols-outlined">check_circle</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
        <div className="d-flex dash-widget justify-content-between">
          <span className="dash-widget-bg3">
            <i className="fa fa-user-md" aria-hidden="true"></i>
          </span>
          <div className="dash-widget-info text-end">
            <h3>72</h3>
            <span className="align-items-center d-inline-flex widget-title3">
              Attend <span className="ms-2 material-symbols-outlined">check_circle</span>
            </span>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
        <div className="d-flex dash-widget justify-content-between">
          <span className="dash-widget-bg4">
            <i className="fa fa-heartbeat" aria-hidden="true"></i>
          </span>
          <div className="dash-widget-info text-end">
            <h3>618</h3>
            <span className="align-items-center d-inline-flex widget-title4">
              Pending <span className="ms-2 material-symbols-outlined">check_circle</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
