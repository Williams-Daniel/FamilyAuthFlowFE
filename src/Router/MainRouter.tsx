import {createBrowserRouter} from "react-router-dom"
import Layout from "../Controller/Common/Layout"
import Homepage from "../Pages/Screens/Homepage"
import Error from "../Error/Error"
import Register from "../Pages/Auth/Register"
import SignIn from "../Pages/Auth/SignIn"
import PrivateRoute from "./privateRouter"



const MainRouter = createBrowserRouter(
    [
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"signin",
            element:<SignIn/>
        },
        {
            path:"*",
            element:<Error/>
        },
        {
            path:"/",
            element:<PrivateRoute>
                <Layout/>
            </PrivateRoute>,
            children:[
                {
                    index:true,
                    element:<Homepage/>
                }
            ]
        }
    ]
)

export default MainRouter