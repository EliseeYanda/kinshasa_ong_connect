import {NavLink} from "react-router-dom";
import Don from "../pages/don";
import { useState } from "react";

function NavBar() {
  const [showDonModal, setShowDonModal] = useState(false); // État pour gérer la visibilité du modal

  const openDonModal = () => setShowDonModal(true);
  const closeDonModal = () => setShowDonModal(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
    return (
<div className="overflow-hidden shadow-lg p-5 bg-black z-10">
  <nav className="flex justify-between items-center w-full p-1 text-white bg-opacity-50">
    <div className="flex items-center space-x-4">
      {/* Placeholder pour le logo */}
      <div className="w-12 h-12 bg-gray-300 rounded-full">
        <img src="src/images/logo1.png" alt="Logo KOC" />
      </div>
      <span className="hidden md:block text-xl font-bold">KOC</span>
    </div>
    <div className="hidden md:flex items-center space-x-8 text-xl">
      <NavLink to="/home" className="hover:text-[#AF631D]">Accueil</NavLink>
      <NavLink to="/ong" className="hover:text-[#AF631D]">ONG</NavLink>
      <NavLink to="/actualites" className="hover:text-[#AF631D]">Actualités</NavLink>
      <NavLink to="/contact" className="hover:text-[#AF631D]">Contact</NavLink>
      <NavLink to="#" className="px-4 py-2 bg-[#AF631D] text-white rounded hover:bg-[#AF631D]" onClick={openDonModal}>Faire un don</NavLink>
    </div>
    {/* Bouton de menu pour les écrans mobiles */}
    <div className="md:hidden flex items-center">
      <button type="button" className="text-white" onClick={toggleMenu}>
        {/* Icône de menu (exemple avec Heroicons) */}
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
  </nav>
  {/* Contenu du menu mobile */}
  <div className={`absolute top-10 right-2 transform -translate-x-1/2  max-w-md bg-white   rounded-b-lg ${menuOpen ? 'block' : 'hidden'}`}>
    <NavLink to="/home" className="block px-4 py-2 text-black hover:text-[#AF631D]">Accueil</NavLink>
    <NavLink to="/ong" className="block px-4 py-2 text-black hover:text-[#AF631D]">ONG</NavLink>
    <NavLink to="/actualites" className="block px-4 py-2 text-black hover:text-[#AF631D]">Actualités</NavLink>
    <NavLink to="/contact" className="block px-4 py-2 text-black hover:text-[#AF631D]">Contact</NavLink>
    <NavLink to="#" className="block px-4 py-2 text-white bg-[#AF631D] rounded hover:bg-[#AF631D]" onClick={openDonModal}>Faire un don</NavLink>
  </div>

  <Don isOpen={showDonModal} onClose={closeDonModal} />
</div>

    );
}

export default NavBar;