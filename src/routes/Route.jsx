import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Register from "../components/Register";
import Order from "../pages/Order";
import PrivateRoute from "../private/PrivateRoute";
import Blog from "../pages/Blog";
import Profile from "../pages/Profile";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/login',
            element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/order',
          element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path:'/blog',
          element:<PrivateRoute><Blog></Blog></PrivateRoute>

        },
        {
          path:'/profile',
          element:<PrivateRoute><Profile></Profile></PrivateRoute>

        }
      ]
    },
  ]);

  export default router;