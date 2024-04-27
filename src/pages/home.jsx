import { NavLink } from 'react-router-dom';
import Inscription from './inscription';// Importez le composant modal
import { useState } from 'react';


const Home = () => {
  const [showModal, setShowModal] = useState(false); // État pour gérer la visibilité du modal

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
  <div className="flex justify-center px-5 py-20 m-5 bg-center bg-cover sm:p-40" style={{ backgroundImage: 'url("./src/images/img7.jpg")' }}>
    <div className="text-center">
        <h1 className="text-3xl font-bold text-white sm:text-5xl">KINSHASA ONG Connect</h1>
        <h3 className="mt-4 text-lg text-white sm:text-xl">Unis pour relever les défis humanitaires</h3>
      <div className="mt-8 space-x-4">
        <button className="px-4 py-1 bg-white rounded sm:px-6 sm:py-2">
          <NavLink to="/contact" className="no-underline text-[#AF631D]">Contactez-Nous</NavLink>
        </button>
        <button className="px-4 py-1 text-white bg-[#AF631D] rounded sm:px-6 sm:py-2" onClick={openModal}>
          <NavLink to="#" className="no-underline text-white">Inscrivez-Vous</NavLink>
        </button>
      </div>
    </div>
  </div>


<div className="bg-gray-200 bg-cover bg-center p-4 sm:p-8 m-5">
  <div className="flex flex-col sm:flex-row p-5 m-5">
    <div className="w-full sm:w-1/2 p-5">
      <h1 className='text-3xl sm:text-5xl font-bold text-[#AF631D]'>BIENVENU(e)</h1>
      <h3 className='text-xl sm:text-2xl font-bold'>KINSHASA ONG Connect, meilleur plateforme.</h3>
    </div>
    <div className="w-full sm:w-1/2 flex flex-col justify-center p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3">Ensemble pour Kinshasa, unis pour l’humanité</h1>
      <p className="text-sm sm:text-base mb-3">Kinshasa ONG Connect est le carrefour où les organisations non gouvernementales 
      de Kinshasa se rencontrent pour tisser un réseau de solidarité et innovation. 
      Notre plateforme est dédiée à la collaboration, au partage des ressources et à l amplification 
      de l impact social à travers la capitale congolaise.</p>
    </div>
  </div>
</div>


<div className="container mx-auto px-4 py-6 sm:p-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6">Qui nous sommes ?</h1>
  <p className="text-base sm:text-lg text-center mb-4 sm:mb-6">
    KINSHASA ONG Connect créée pour présenter les défis et collecter des fonds 
    pour les organisations non gouvernementales.
  </p>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="src/images/img6.jpg" alt="Description de l'image"/>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Endroits pour se perdre</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="src/images/img6.jpg" alt="Description de l'image"/>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Une alimentation saine pour tous</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="src/images/img6.jpg" alt="Description de l'image"/>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Organisation verte</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  </div>
</div>


<div className="bg-gray-200 bg-cover bg-center p-4 sm:p-8">
  <div className="flex flex-col md:flex-row p-5 m-5">
    <div className="w-full md:w-1/2">
      <img src="src/images/img9.jpg" alt="Enfant sur une balançoire" className="w-full h-auto" />
    </div>
    <div className="w-full md:w-1/2">
      <img src="src/images/img6.jpg" alt="Enfant sur une balançoire" className="w-full h-auto" />
    </div>
    <div className="w-full md:w-1/2">
      <img src="src/images/img9.jpg" alt="Enfant sur une balançoire" className="w-full h-auto" />
    </div>
    
  </div>
</div>

<div className="flex flex-col md:flex-row items-center bg-gray-100 p-8">
      <div className="md:w-1/2 p-4">
        {/* Remplacez 'path-to-your-image.jpg' par le chemin réel de votre image */}
        <img src="src/images/img9.jpg" alt="CodeLikeAGirl" className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 p-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Contribuez avec vos fonds</h2>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Dolore saepe minima velit, vitae quae animi cupiditate rerum! Ipsa, 
          impedit ex sit magni incidunt consequatur provident dolor dolorem odit autem fugit!.
        </p>
        <ul className="list-none space-y-2 mb-4">
          <li className="flex items-center">
            <span className="text-red-500 mr-2">✅</span>
            Contribuez pour relever le défis.
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">❌</span>
            Ne pas participer à l évolution humanitaire.
          </li>
          <li className="flex items-center">
            <span className="text-red-500 mr-2">🔍</span>
            Faite un choix.
          </li>
        </ul>
        <button className="bg-[#AF631D] text-white py-2 px-4 rounded transition duration-300">
          Contactez-Nous
        </button>
      </div>
      
    </div>


<div className="relative text-center bg-no-repeat bg-cover bg-center p-5 m-5" style={{ backgroundImage: 'url("./src/images/img6.jpg")' }}>
  <div className="">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white ">Ensemble nous pouvons</h2>
    <p className="text-white mb-4 sm:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <button className="bg-[#AF631D] text-white py-2 px-4 rounded">
      <NavLink to="/contact" className="no-underline text-white">Contactez-Nous</NavLink>
    </button>
  </div>
</div>

<div className="bg-gray-100 p-6 sm:p-10 flex flex-col items-center justify-center m-5">
  <div className="bg-white shadow-lg rounded-full w-16 h-16 sm:w-24 sm:h-24 mb-4">
    {/* Insérez ici l'avatar de la personne */}
  </div>
  <blockquote className="italic text-center text-sm sm:text-base">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Rem nobis excepturi similique tempore cum sunt, sint ipsam quaerat. 
    Aut aliquam iste expedita atque fugit perspiciatis ipsam voluptates, tenetur veniam provident.
  </blockquote>
</div>


    <Inscription isOpen={showModal} onClose={closeModal} />
    </>

    
  );
};


export default Home;
