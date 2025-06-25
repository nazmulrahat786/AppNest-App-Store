import { createBrowserRouter } from "react-router";
import NotFound from "../Pages/NotFound";
import HomeLauout from "../Components/Layouts/HomeLauout";
import AppLayout from "../Components/Layouts/AppLayout";
import AppDetails from "../Components/AppDetails";
import AuthLayout from "../Components/Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PriveteRoute from "../Provider/PriveteRoute";
import Loading from "../Provider/Loading";
import Profile from "../Pages/Profile";
import ReserPassword from "../Pages/ReserPassword";
import About from "../Components/Layouts/About";


const router = createBrowserRouter(
    [
        {
            path: "/",
            element:<AppLayout></AppLayout>,
            loader:()=>fetch("/app.json"),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path:"/auth",
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:"/auth/login",
                    element: <Login></Login>
                },
                {
                    path:"/auth/register",
                    element: <Register></Register>
                },
            
                {
                    path:"/auth/reset",
                    element: <ReserPassword></ReserPassword>
                },
            ]
            
        }
      ,
   
        {
            path:"/appDetails/:id",

            element:<PriveteRoute>
                <AppDetails></AppDetails>
            </PriveteRoute>
           
            
            ,
            loader:()=>fetch("/app.json"),
            hydrateFallbackElement: <Loading></Loading>

        },
        {
            path:"*",
            element: <NotFound></NotFound>
        },
        {
            path:"/profile",
            element: <PriveteRoute>
                <Profile></Profile>
            </PriveteRoute>
        },
      
        {
            path:"/about",
            element:  <About></About>
               
           
        },
      

    ]
)
export default router;