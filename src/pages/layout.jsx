import NavBar from "../components/NavBar";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <nav>
                <NavBar/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout;