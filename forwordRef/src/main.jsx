import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import User from './User.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import Course from './Course.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {path:"/user",
       element:<User />
      },
      {
        path:"/home",
        element: <Home />
      },
      {
        path:"/Course",
        element:< Course />
      },
      {
        path:"/About",
        element: <About/>
      },
    ],
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
)
