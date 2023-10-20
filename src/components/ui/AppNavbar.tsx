import { Link } from 'react-router-dom'
import { AppMessage, AppNotification, AppUser } from '.'
import { useAppDispatch } from '../../hooks'
import { setSidebar } from '../../reducers/app'

const AppNavbar = () => {
  const dispatch = useAppDispatch()

  const handleSetSidebar = () => dispatch(setSidebar())

  return (
    <div className="header">
      <div className="header-left">
        <Link to={'.'} className="logo">
          <img src="/assets/img/logo.png" width="35" height="35" /> <span>Preclinic</span>
        </Link>
      </div>
      <a id="toggle_btn" className="d-none">
        <span className="material-symbols-outlined">menu</span>
      </a>
      <a
        style={{ cursor: 'pointer' }}
        id="mobile_btn"
        className="mobile_btn float-start"
        onClick={handleSetSidebar}>
        <span className="material-symbols-outlined">menu</span>
      </a>

      <ul className="nav user-menu float-end">
        <li className="nav-item dropdown">
          <AppNotification />
        </li>

        <li className="nav-item dropdown">
          <AppMessage />
        </li>

        <li className="nav-item dropdown has-arrow">
          <AppUser />
        </li>
      </ul>
    </div>
  )
}

export default AppNavbar
