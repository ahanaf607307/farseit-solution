import { createBrowserRouter } from "react-router-dom";
import Backend from "../Home/Banner/Backend/Backend";
import Cms from "../Home/Banner/Cms/Cms";
import Database from "../Home/Banner/Database/Database";
import Frontend from "../Home/Banner/Frontend/Frontend";
import Tools from "../Home/Banner/Tools/Tools";
import Home from "../Home/Home";
import MainLayout from "../Main/MainLayout";




const routes = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout/>,
        children: [
            {
                path : '/',
                element : <Home/>,
                children : [
                    {
                        index: true,
                        element : <Frontend/>
                    },
                    {
                        path : '/backend',
                        element : <Backend/>
                    },
                    {
                        path : '/database',
                        element : <Database/>
                    },
                    {
                        path : '/cms',
                        element : <Cms/>
                    },
                    {
                        path : '/tools',
                        element : <Tools/>
                    },
                ]
            }
        ]
    }
]
)

export default routes