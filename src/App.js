
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Header/header';
import Home from './Home';




const Layout = () => {
  return (
    <>
      <Header/> 
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      
    ]
  },
])

function App() {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  );
}



export default App;
