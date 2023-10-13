import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="main-wrapper error-wrapper" style={{ height: '100vh !important;' }}>
      <div className="error-box">
        <h1>404</h1>
        <h3>
          <i className="fa fa-warning"></i> ¡Ups! ¡Página no encontrada!
        </h3>
        <p>La página que usted solicitó no fue encontrada.</p>
        <Link to="/" className="btn btn-primary go-home">
          Ir a casa
        </Link>
      </div>
    </div>
  )
}

export default NotFound
