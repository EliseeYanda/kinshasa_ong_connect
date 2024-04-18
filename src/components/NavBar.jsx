import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="overflow-hidden shadow-lg p-5 m-5 bg-black">
            <nav className="flex justify-between w-full p-1 text-white bg-opacity-50  ">
                <div className="flex items-center space-x-4">
                     {/* Placeholder pour le logo */}
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                     <span className="text-xl font-bold">LOGO</span>
                </div>
                <div className="flex items-center space-x-4">
                    <NavLink to="/home" className="hover:text-[#AF631D]">Accueil</NavLink>
                    <NavLink to="/ong" className="hover:text-[#AF631D]">ONG</NavLink>
                    <NavLink to="/actualites" className="hover:text-[#AF631D]">Actualités</NavLink>
                    <NavLink to="/contact" className="hover:text-[#AF631D]">Contact</NavLink>
                    <NavLink to="/don" className="px-4 py-2 bg-[#AF631D] text-white rounded hover:bg-[#AF631D]">Faire un don</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;