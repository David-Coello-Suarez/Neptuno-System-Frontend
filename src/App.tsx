import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { storeReducer, storeRouter } from './store'

const App = () => (
  <Provider store={storeReducer}>
    <RouterProvider router={storeRouter} />
  </Provider>
)

export default App
