import { NavLink } from 'react-router-dom';
import Inscription from './inscription';// Importez le composant modal
import { useState } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = () => {
  const [showModal, setShowModal] = useState(false); // État pour gérer la visibilité du modal

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
<section className="text-white text-center  font-bold">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
      >
        <div className="flex justify-center items-center bg-center bg-cover p-10 md:p-40 bg-opacity-90 bg-black h-screen" style={{ backgroundImage: 'url("https://img.freepik.com/photos-gratuite/enfants-jouant-au-football-plein-air_23-2150888395.jpg?t=st=1715337695~exp=1715341295~hmac=fab3044e4ff8ffb682688a9f6235674e9fa37eacc1033dd4cc229230954645d7&w=826")' }}>
          <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">KINSHASA ONG Connect</h1>
              <h3 className="mt-4 text-sm md:text-lg lg:text-xl">Unis pour relever les défis humanitaires</h3>
            <div className="mt-8 space-x-2 md:space-x-4">
              <button className="px-3 py-1 md:px-4 md:py-2 bg-white rounded">
                <NavLink to="/contact" className="no-underline text-[#AF631D]">Contactez-Nous</NavLink>
              </button>
              <button className="px-3 py-1 md:px-4 md:py-2 text-white bg-[#AF631D] rounded" onClick={openModal}>
                <NavLink to="#" className="no-underline text-white">Inscrivez-Vous</NavLink>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-center bg-cover p-10 md:p-40 bg-opacity-90 bg-black h-screen" style={{ backgroundImage: 'url("https://img.freepik.com/photos-gratuite/enfant-africain-qui-profite-vie_23-2151448089.jpg?w=740&t=st=1715338827~exp=1715339427~hmac=88f98c41eed5186a4ad5ddcc00eb65c4ccd9ecd9a40d8c1d14f98d7b3f3c68e5")' }}>
          <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">KINSHASA ONG Connect</h1>
              <h3 className="mt-4 text-sm md:text-lg lg:text-xl">Unis pour relever les défis humanitaires</h3>
            <div className="mt-8 space-x-2 md:space-x-4">
              <button className="px-3 py-1 md:px-4 md:py-2 bg-white rounded">
                <NavLink to="/contact" className="no-underline text-[#AF631D]">Contactez-Nous</NavLink>
              </button>
              <button className="px-3 py-1 md:px-4 md:py-2 text-white bg-[#AF631D] rounded" onClick={openModal}>
                <NavLink to="#" className="no-underline text-white">Inscrivez-Vous</NavLink>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-center bg-cover p-10 md:p-40 bg-opacity-90 bg-black h-screen" style={{ backgroundImage: 'url("https://img.freepik.com/photos-gratuite/enfants-africains-profitent-vie_23-2151447261.jpg?t=st=1715338952~exp=1715342552~hmac=281ec2f8d9828a822de9e547c4d55176b1b80010c19b685a0877fbd27e9b5025&w=740")' }}>
          <div className="text-center">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">KINSHASA ONG Connect</h1>
              <h3 className="mt-4 text-sm md:text-lg lg:text-xl">Unis pour relever les défis humanitaires</h3>
            <div className="mt-8 space-x-2 md:space-x-4">
              <button className="px-3 py-1 md:px-4 md:py-2 bg-white rounded">
                <NavLink to="/contact" className="no-underline text-[#AF631D]">Contactez-Nous</NavLink>
              </button>
              <button className="px-3 py-1 md:px-4 md:py-2 text-white bg-[#AF631D] rounded" onClick={openModal}>
                <NavLink to="#" className="no-underline text-white">Inscrivez-Vous</NavLink>
              </button>
            </div>
          </div>
        </div>
        
      </Carousel>
    </section>


<div className="bg-gray-200 bg-cover bg-center p-4 sm:p-8 ">
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
      <img src="https://img.freepik.com/photos-gratuite/enfant-africain-qui-profite-vie_23-2151448529.jpg?t=st=1715339342~exp=1715342942~hmac=91cb79a739ede53f7db694e936fe49cb3cb82a03a36140cd782f6159756ddc5f&w=740" alt="Description de l'image"/>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Endroits pour se perdre</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="https://img.freepik.com/photos-gratuite/moment-capture-lors-crise-migratoire-personnes_23-2150901770.jpg?t=st=1715339496~exp=1715343096~hmac=1d8f9459818f219fedf184323458d1a804786e7ca848dd56ff649cb7b2bfd155&w=826" alt="Description de l'image"/>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Une alimentation saine pour tous</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src="https://img.freepik.com/photos-gratuite/enfant-africain-marche_23-2151489172.jpg?w=740&t=st=1715339772~exp=1715340372~hmac=d997f275c0482e66467b954ae6cddacc978b41d6fabb391f03a8af34f6a4642e" alt="Description de l'image"/>
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Organisation verte</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
  </div>
</div>


<div className="bg-gray-200 bg-cover bg-center p-4 sm:p-8">
  <div className="flex flex-col md:flex-row p-5 m-5">
    <div className="w-full md:w-1/2">
      <img src="https://img.freepik.com/photos-gratuite/enfants-jouant-au-football-plein-air_23-2150888395.jpg?t=st=1715337695~exp=1715341295~hmac=fab3044e4ff8ffb682688a9f6235674e9fa37eacc1033dd4cc229230954645d7&w=826" alt="Enfant sur une balançoire" className="w-full h-auto" />
    </div>
    <div className="w-full md:w-1/2">
      <img src="https://img.freepik.com/photos-gratuite/african-children-enjoying-life_23-2151438256.jpg?t=st=1715338395~exp=1715338995~hmac=3c4771cc8ffd6e9a8b5dddf130bad9e09b5208fc5c3b6af2279e93eae8db1c6f" alt="Enfant sur une balançoire" className="w-full h-auto" />
    </div>
    <div className="w-full md:w-1/2">
      <img src="https://img.freepik.com/photos-gratuite/enfants-africains-profitent-vie_23-2151447261.jpg?t=st=1715338952~exp=1715342552~hmac=281ec2f8d9828a822de9e547c4d55176b1b80010c19b685a0877fbd27e9b5025&w=740" alt="Enfant sur une balançoire" className="w-full h-auto" />
    </div>
    <div className="w-full md:w-1/2">
      <img src="https://img.freepik.com/photos-gratuite/african-children-enjoying-life_23-2151438256.jpg?t=st=1715338395~exp=1715338995~hmac=3c4771cc8ffd6e9a8b5dddf130bad9e09b5208fc5c3b6af2279e93eae8db1c6f" alt="Enfant sur une balançoire" className="w-full h-auto" />
    </div>
    
  </div>
</div>

<div className="flex flex-col md:flex-row items-center bg-gray-100 p-8">
      <div className="md:w-1/2 p-4">
        <img src="https://img.freepik.com/photos-gratuite/enfants-africains-profitent-vie_23-2151447261.jpg?t=st=1715338952~exp=1715342552~hmac=281ec2f8d9828a822de9e547c4d55176b1b80010c19b685a0877fbd27e9b5025&w=740" alt="CodeLikeAGirl" className="rounded-lg shadow-lg" />
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
        
      </div>
      
    </div>


<div className="relative text-center bg-no-repeat bg-cover bg-center p-5" style={{ backgroundImage: 'url("https://img.freepik.com/photos-gratuite/portrait-garcons-souriants-exterieur_23-2151008251.jpg?t=st=1715339989~exp=1715343589~hmac=1683b2b406b2071a9a634bcd625888050e4619194e19fe3e58bbef1eced58ff7&w=740")' }}>
  <div className="">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white ">Ensemble nous pouvons</h2>
    <p className="text-white mb-4 sm:mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    <button className="bg-[#AF631D] text-white py-2 px-4 rounded">
      <NavLink to="/contact" className="no-underline text-white">Contactez-Nous</NavLink>
    </button>
  </div>
</div>

<div className="bg-gray-100 p-6 sm:p-10 flex flex-col items-center justify-center ">
  <div className="bg-white shadow-lg rounded-full w-16 h-16 sm:w-24 sm:h-24 mb-4">
    
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
