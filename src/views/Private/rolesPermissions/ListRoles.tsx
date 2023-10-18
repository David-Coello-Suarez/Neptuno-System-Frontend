import { Link } from 'react-router-dom'

const ListRoles = () => {
  return (
    <>
      <Link
        to={'addRol'}
        className="align-items-center btn btn-primary btn-sm d-inline-flex justify-content-center w-100">
        <strong className="material-symbols-outlined me-2">add</strong>
        <span>Añadir Nuevo Rol</span>
      </Link>

      <div className="roles-menu">
        <ul>
          <li className="active">
            <a>
              <strong>Super Administrador</strong>
            </a>
            <span className="role-action">
              <Link to={`editRol/${1}`}>
                <span className="action-circle large">
                  <i className="material-icons material-symbols-outlined">edit</i>
                </span>
              </Link>
              <Link to={`deleteRol/${1}`} className="ms-1">
                <span className="action-circle large delete-btn">
                  <span className="material-icons material-symbols-outlined">delete</span>
                </span>
              </Link>
            </span>
          </li>
          <li>
            <a>
              <span>Administrador</span>
            </a>
            <span className="role-action">
              <Link to={`editRol/${1}`}>
                <span className="action-circle large">
                  <i className="material-icons material-symbols-outlined">edit</i>
                </span>
              </Link>
              <Link to={`deleteRol/${1}`}>
                <span className="action-circle large delete-btn">
                  <span className="material-icons material-symbols-outlined">delete</span>
                </span>
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default ListRoles
