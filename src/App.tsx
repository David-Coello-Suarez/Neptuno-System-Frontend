import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { storeReducer, storeRouter } from './store'
import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <>
    <ToastContainer />
    <Suspense fallback={<div>Loading....!!</div>}>
      <Provider store={storeReducer}>
        <RouterProvider router={storeRouter} />
      </Provider>
    </Suspense>
  </>
)

export default App
