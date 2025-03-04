import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../Main/MainLayout";
import Frontend from "../Home/Banner/Frontend/Frontend";
import Backend from "../Home/Banner/Backend/Backend";
import Database from "../Home/Banner/Database/Database";
import Cms from "../Home/Banner/Cms/Cms";
import Tools from "../Home/Banner/Tools/Tools";




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
                        path : '/frontend',
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