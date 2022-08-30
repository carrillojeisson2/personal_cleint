import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

// admin section
import AdminHome from '../pages/Admin'
import AdminSignIn from '../pages/Admin/SignIn'
import AdminUsers from "../pages/Admin/Users/Users";
import MenuWeb from "../pages/Admin/MenuWeb/MenuWeb";


// pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Courses from "../pages/Courses";



// other
import Erro404 from "../pages/Erro404";


const routes = [
    {
        path: "/admin",
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: "/admin",
                component: AdminHome,
                exact: true,
            },
            {
                path: "/admin/login",
                component: AdminSignIn,
                exact: true,
            },
            {
                path: "/admin/users",
                component: AdminUsers,
                exact: true,
            },
            {
                path: "/admin/menu",
                component: MenuWeb,
                exact: true,
            },
            {
                component: Erro404
            }
        ]
    },
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true,
            },
            {
                path: "/contact",
                component: Contact,
                exact: true,
            },
            {
                path: "/courses",
                component: Courses,
                exact: true,
            },
            {
                component: Erro404
            }
        ]
    }
]

export default routes;