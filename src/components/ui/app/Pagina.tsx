import { Link } from 'react-router-dom'
import { isideba } from '../../../interfaces'
import { memo } from 'react'

export const Pagina = memo(({ link }: { link: isideba }) => (
  <li>
    <Link to={link.sideba_namven}>
      {link.sideba_namico && <i className={link.sideba_namico} />}
      <span>{link.sideba_namsid}</span>
    </Link>
  </li>
))
