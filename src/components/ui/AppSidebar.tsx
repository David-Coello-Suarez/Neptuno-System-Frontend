import { memo, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { get_sideba } from '../../controllers/sideba'
import { clean_sideba } from '../../reducers/sidebar'
import { isideba } from '../../interfaces'

const AppSidebar = () => {
  const dispatch = useAppDispatch()

  const { sideba } = useAppSelector((state) => state.sideba)

  useEffect(() => {
    dispatch(get_sideba())

    return () => {
      dispatch(clean_sideba())
    }
  }, [dispatch])

  const path = useLocation().pathname

  const handleMouseEnter = () => {
    const body = document.getElementsByTagName('body')

    if (body) {
      const contiene_clase = body[0].classList.contains('mini-sidebar')

      if (contiene_clase) {
        body[0].classList.add('expand-menu')
      }
    }
  }

  const handleMouseLeave = () => {
    const body = document.getElementsByTagName('body')

    if (body) {
      body[0].classList.remove('expand-menu')
    }
  }

  return (
    <div className="sidebar" id="sidebar">
      <SimpleBar
        className="sidebar-menu"
        style={{
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          height: '281px',
        }}>
        <div
          className="sidebar-inner slimscroll"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Principal</li>
              <li className={`${path === '/' || path == '/dash' ? 'active' : ''}`}>
                <Link to={'.'}>
                  <i className="fa fa-dashboard" />
                  <span>Dashboard</span>
                </Link>
              </li>
              {sideba.map((sd) =>
                sd.sideba_submen.length === 0 ? (
                  <Pagina key={sd.sideba_sideba} link={sd} />
                ) : (
                  <Submenu menu={sd} key={sd.sideba_sideba} />
                ),
              )}
            </ul>
          </div>
        </div>
      </SimpleBar>
    </div>
  )
}

export default AppSidebar

const Pagina = memo(({ link }: { link: isideba }) => (
  <li>
    <Link to={link.sideba_namven}>
      {link.sideba_namico && <i className={link.sideba_namico} />}
      <span>{link.sideba_namsid}</span>
    </Link>
  </li>
))

const Submenu = memo(({ menu }: { menu: isideba }) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false)

  if (menu.sideba_submen.length === 0) return <Pagina link={menu} />

  const handleClickMenu = (e: React.MouseEvent) => {
    if (menu.sideba_submen?.length > 0) {
      e.preventDefault()
      setSubmenuOpen(!isSubmenuOpen)
    }
  }

  return (
    <>
      <li className={`submenu ${isSubmenuOpen ? 'open' : ''}`}>
        <a onClick={handleClickMenu} className={isSubmenuOpen ? 'subdrop' : ''}>
          {menu.sideba_namico && <i className={menu.sideba_namico} aria-hidden="true" />}
          <span>{menu.sideba_namsid}</span>
          {menu.sideba_submen.length > 0 && <span className="menu-arrow" />}
        </a>

        <ul style={{ display: isSubmenuOpen ? 'block' : 'none' }}>
          {menu.sideba_submen.length > 0 &&
            menu.sideba_submen.map((sdi) => (
              <Submenu menu={sdi} key={sdi.sideba_sideba} />
            ))}
        </ul>
      </li>
    </>
  )
})
