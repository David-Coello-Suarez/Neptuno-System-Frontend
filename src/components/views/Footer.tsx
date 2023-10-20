import { useAppDispatch } from '../../hooks'
import { setSidebar } from '../../reducers/app'

const Footer = () => {
  const dispatch = useAppDispatch()

  const handleCloseSidebar = () => dispatch(setSidebar())

  return (
    <>
      <div id="foter" data-reff="#sidebar" onClick={handleCloseSidebar}></div>
    </>
  )
}

export default Footer
