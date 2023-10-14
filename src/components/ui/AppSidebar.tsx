import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { useAppSelector } from '../../hooks'
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'

interface isideba {
  sideba_sideba: number
  sideba_nombre: string
  sideba_ventan: string
  sideba_sidico: {
    icon_font: string
    icon_name: string
  }
  sideba_submen: isideba[]
}

const AppSidebar = () => {
  const { sideba } = useAppSelector((state) => state.sideba)

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <SimpleBar className="sidebar-menu">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title py-2">Main</li>
              <li>
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
                  <Pagina key={sd.sideba_sideba} {...sd} />
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
  const [open, setOpen] = useState(true)

  if (props.sideba_submen.length == 0) return <Pagina {...props} />

  const handleCollapse = () => setOpen(!open)

  return (
    <li className="submenu" style={{ cursor: 'pointer' }}>
      <a
        className="justify-content-between py-2"
        onClick={handleCollapse}
        aria-expanded={open}
        aria-controls="example-collapse-text">
        <div>
          <i className={props.sideba_sidico.icon_font}>{props.sideba_sidico.icon_name}</i>{' '}
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

const Pagina = (props: isideba) => {
  return (
    <li style={{ cursor: 'pointer' }}>
      <Link to={props.sideba_ventan} className="py-2">
        <span
          className={props.sideba_sidico.icon_font}
          style={{ lineHeight: '1', marginLeft: 0 }}>
          {props.sideba_sidico.icon_name}
        </span>
        <span>{props.sideba_nombre}</span>
      </Link>
    </li>
  )
}
