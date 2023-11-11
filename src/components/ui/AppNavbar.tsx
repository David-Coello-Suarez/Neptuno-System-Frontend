import { Link } from 'react-router-dom'

const AppNavbar = () => {
  const handleSetSidebar = () => console.log('click')

  const handleMiniSidebar = () =>
    document.getElementsByTagName('body')[0]?.classList.toggle('mini-sidebar')

  return (
    <div className="header">
      <div className="header-left">
        <Link to={'.'} className="logo">
          <img src="/assets/img/logo.png" width="35" height="35" /> <span>Preclinic</span>
        </Link>
      </div>
      <a id="toggle_btn" style={{ cursor: 'pointer' }} onClick={handleMiniSidebar}>
        <i className="fa fa-bars" aria-hidden="true" />
      </a>
      <a
        style={{ cursor: 'pointer' }}
        id="mobile_btn"
        className="mobile_btn float-start"
        onClick={handleSetSidebar}>
        <i className="fa fa-bars" aria-hidden="true" />
      </a>

      <ul className="nav user-menu float-end">
        <li className="nav-item dropdown has-arrow">{/* <AppUser /> */}</li>
      </ul>
    </div>
  )
}

export default AppNavbar
