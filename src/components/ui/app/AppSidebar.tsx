import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SimpleBar from 'simplebar-react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { get_sideba } from '../../../controllers/sideba'
import { Submenu } from './Submenu'
import { Pagina } from './Pagina'
import { clean_sideba } from '../../../reducers/sidebar'

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

  return (
    <div className="sidebar" id="sidebar">
      <SimpleBar
        className="sidebar-menu"
        style={{ maxHeight: '100%', width: '100%', cursor: 'pointer' }}>
        <div className="sidebar-inner slimscroll">
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
