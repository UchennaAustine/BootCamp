import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Static/Layout";
import HomeScreen from "../Pages/HomeScreen";
import Register from "../Pages/Auths/Register";



export const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index:true,
                element: <HomeScreen/>
            }
        ]
    },
    {
        path: "/register",
        element: <Register/>
    }
])