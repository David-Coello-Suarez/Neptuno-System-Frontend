import { memo, useState } from 'react'
import { isideba } from '../../../interfaces'
import { Pagina } from './Pagina'

export const Submenu = memo(({ menu }: { menu: isideba }) => {
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
