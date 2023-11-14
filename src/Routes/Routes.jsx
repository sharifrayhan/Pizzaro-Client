import {
    createBrowserRouter,
  } from "react-router-dom";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Rootpage from "../Pages/Rootpage/Rootpage";
import Home from "../Pages/Home/Home";
  
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
      ],
    }, 
  ]);
  