import { Link, useLocation } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useAppSelector } from '../../hooks'
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'

interface isideba {
  sideba_sideba: number
  sideba_nombre: string
  sideba_ventan: string
  sideba_sidico: string
  sideba_submen: isideba[]
}

const AppSidebar = () => {
  const { sideba } = useAppSelector((state) => state.sideba)

  const path = useLocation().pathname

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <SimpleBar className="sidebar-menu">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title py-2">Principal</li>
              <li className={`${path === '/dash' ? 'active' : ''}`}>
                <Link to={'.'} className="py-2">
                  <span
                    className="material-symbols-outlined"
                    style={{ lineHeight: '1', marginLeft: 0 }}>
                    home
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>
              {sideba.map((sd) =>
                sd.sideba_submen.length === 0 ? (
                  <Pagina key={sd.sideba_sideba} propsp={sd} />
                ) : (
                  <Submenu key={sd.sideba_sideba} {...sd} />
                ),
              )}
            </ul>
          </div>
        </SimpleBar>
      </div>
    </div>
  )
}

export default AppSidebar

const Submenu = (props: isideba) => {
  const [open, setOpen] = useState(false)

  if (props.sideba_submen.length == 0) return <Pagina propsp={props} addClass />

  const handleCollapse = () => setOpen(!open)

  return (
    <li className="submenu" style={{ cursor: 'pointer' }}>
      <a
        className="justify-content-between py-2"
        onClick={handleCollapse}
        aria-expanded={open}
        aria-controls="example-collapse-text">
        <div>
          <i className="material-symbols-outlined">{props.sideba_sidico}</i>{' '}
          <span> {props.sideba_nombre} </span>{' '}
        </div>
        <span
          className="material-symbols-outlined"
          style={{ lineHeight: '1', marginRight: 0 }}>
          {!open ? 'expand_more' : 'expand_less'}
        </span>
      </a>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <ul className="d-block">
            {props.sideba_submen.length > 0 &&
              props.sideba_submen.map((sdi) => (
                <Submenu key={sdi.sideba_sideba} {...sdi} />
              ))}
          </ul>
        </div>
      </Collapse>
    </li>
  )
}

interface ipagina {
  propsp: isideba
  addClass?: boolean
}
const Pagina = ({ propsp, addClass }: ipagina) => {
  const path = useLocation().pathname

  const pathString = path.split('/').filter(Boolean)

  return (
    <li
      style={{ cursor: 'pointer' }}
      className={`${pathString[1] === propsp.sideba_ventan ? 'active' : ''}`}>
      <Link
        to={propsp.sideba_ventan}
        className={`${addClass ? 'align-items-center d-inline-flex w-100' : ''} py-2`}>
        <span
          className="material-symbols-outlined"
          style={{ lineHeight: '1', marginLeft: 0 }}>
          {propsp.sideba_sidico}
        </span>
        <span className={`${addClass ? 'ms-2' : ''}`}>{propsp.sideba_nombre}</span>
      </Link>
    </li>
  )
}
