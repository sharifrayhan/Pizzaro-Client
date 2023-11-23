import {
    createBrowserRouter,
  } from "react-router-dom";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Rootpage from "../Pages/Rootpage/Rootpage";
import Home from "../Pages/Home/Home";
import Bonus from "../Pages/Bonus/Bonus";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ReservationForm from "../Pages/Register/Register";
import AddItem from "../Pages/Additems/AddItem";
  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootpage></Rootpage>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Bonus",
          element: <Bonus></Bonus>,
        },
        {
          path: "/Login",
          element: <Login></Login>,
        },
        {
          path: "/Register",
          element:<ReservationForm></ReservationForm>,
        },
        {
          path: "/AddItem",
          element:<AddItem></AddItem>,
        },
      ],
    }, 
  ]);
  