import { Link } from 'react-router-dom'

const AppUser = () => {
  return (
    <>
      <a
        // href="javascript:void(0);"
        className="dropdown-toggle nav-link user-link"
        data-bs-toggle="dropdown">
        <span className="user-img">
          <img
            className="rounded-circle me-1"
            src="/assets/img/user.jpg"
            width="40"
            alt="Admin"
          />
          <span className="status me-1"></span>
        </span>
        <span>Admin</span>
      </a>
      <div className="dropdown-menu">
        <Link className="dropdown-item" to="/profile">
          My Profile
        </Link>
        <Link className="dropdown-item" to="/edit-profile">
          Edit Profile
        </Link>
        <Link className="dropdown-item" to="/settings">
          Settings
        </Link>
        <Link className="dropdown-item" to="/">
          Logout
        </Link>
      </div>
    </>
  )
}

export default AppUser
