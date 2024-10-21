import './App.css'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element:<SignUp></SignUp>,
    },
    {
      path: "/login",
      element: <LogIn></LogIn>
    },
  ])

  return (
    <>
      <h1 className='heading'>Vaccination System</h1>
      <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
