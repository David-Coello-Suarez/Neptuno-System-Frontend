import { Link } from 'react-router-dom'

const AppNotification = () => {
  return (
    <>
      <a
        // href="javascript:void(0);"
        className="dropdown-toggle nav-link"
        data-bs-toggle="dropdown">
        <span className="material-symbols-outlined" id="icon">
          notifications_active
        </span>
        <span className="badge badge-pill bg-danger float-end">0</span>
      </a>
      <div className="dropdown-menu notifications">
        <div className="topnav-dropdown-header">
          <span>Notificaciones</span>
        </div>
        <div className="drop-scroll">
          <ul className="notification-list">
            <li className="notification-message">
              <Link to="/activities">
                <div className="media">
                  <span className="avatar">
                    <img
                      alt="John Doe"
                      src="/assets/img/user.jpg"
                      className="img-fluid rounded-circle"
                    />
                  </span>
                  <div className="media-body">
                    <p className="noti-details">
                      <span className="noti-title">John Doe</span> added new task{' '}
                      <span className="noti-title">Patient appointment booking</span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">4 mins ago</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="/activities">
                <div className="media">
                  <span className="avatar">V</span>
                  <div className="media-body">
                    <p className="noti-details">
                      <span className="noti-title">Tarah Shropshire</span> changed the
                      task name{' '}
                      <span className="noti-title">
                        Appointment booking with payment gateway
                      </span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">6 mins ago</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="/activities">
                <div className="media">
                  <span className="avatar">L</span>
                  <div className="media-body">
                    <p className="noti-details">
                      <span className="noti-title">Misty Tison</span> added{' '}
                      <span className="noti-title">Domenic Houston</span> and{' '}
                      <span className="noti-title">Claire Mapes</span> to project{' '}
                      <span className="noti-title">Doctor available module</span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">8 mins ago</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="/activities">
                <div className="media">
                  <span className="avatar">G</span>
                  <div className="media-body">
                    <p className="noti-details">
                      <span className="noti-title">Rolland Webber</span> completed task{' '}
                      <span className="noti-title">
                        Patient and Doctor video conferencing
                      </span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">12 mins ago</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
            <li className="notification-message">
              <Link to="/activities">
                <div className="media">
                  <span className="avatar">V</span>
                  <div className="media-body">
                    <p className="noti-details">
                      <span className="noti-title">Bernardo Galaviz</span> added new task{' '}
                      <span className="noti-title">Private chat module</span>
                    </p>
                    <p className="noti-time">
                      <span className="notification-time">2 days ago</span>
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="topnav-dropdown-footer">
          <Link to="/activities">Ver todas las notificaciones</Link>
        </div>
      </div>
    </>
  )
}

export default AppNotification
