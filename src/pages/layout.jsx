import NavBar from "../components/NavBar";
import Footer from "../components/footer";
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
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout;