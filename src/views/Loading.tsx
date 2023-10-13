import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { obtene_reftok, uiResfresh } from '../reducers/loggIn'
import { Navigate } from 'react-router-dom'

const Loading = () => {
  const dispatch = useAppDispatch()

  const { loggedIn, isLoading } = useAppSelector((state) => state.loggin)

  useEffect(() => {
    const existe_token = localStorage.getItem('loggin_tokses')

    if (existe_token) {
      setTimeout(() => {
        dispatch(obtene_reftok())
      }, 3000)
    } else {
      dispatch(uiResfresh())
    }
  }, [dispatch])

  if (isLoading) return <div>Loadinng....!!</div>

  if (loggedIn.loggin_tokses.length == 0) return <Navigate to={'auth'} replace />

  if (loggedIn.loggin_tokses.length > 0) return <Navigate to={'dash'} replace />
}

export default Loading
