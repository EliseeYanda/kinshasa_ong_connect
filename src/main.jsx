import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Contact from './pages/contact.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/home.jsx";
import Inscription from './pages/inscription.jsx';
import Layout from "./pages/layout.jsx";
import Ong from './pages/ong.jsx';
import Actualites from './pages/actualités.jsx';
import Don from './pages/don.jsx';



const router = createBrowserRouter(
    [

        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/home",
                    element: <Home/>
                },
                {
                    path: "/contact",
                    element: <Contact/>
                },
                {
                    path: "/inscription",
                    element: <Inscription/>
                },
                {
                    path: "/don",
                    element: <Don/>
                },
                {
                    path: "/ong",
                    element: <Ong/>
                },
                
                {
                     path: "/actualites",
                     element: <Actualites/>
        
                }
            ]
        },

    ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)