import { ToastContainer } from 'react-toastify'
import './App.css'
import useRouteElements from './useRouteElements'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElements = useRouteElements()
  return (
    <>
      {routeElements}
      <ToastContainer />
    </>
  )
}

export default App
