import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className=" flex  justify-center p-40 m-5 bg-center bg-cover " style={{ backgroundImage: 'url("./src/images/arrière plan.jpg")' }}>
      
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">KINSHASA ONG Connect</h1>
        <h3 className="mt-4 text-xl text-white">Unis pour relever les défis humanitaires</h3>
        <div className=" mt-8 space-x-4">
          <button className="px-6 py-2  bg-white rounded ">
            <NavLink to="/contact" className="no-underline text-[#AF631D]">Contactez-Nous</NavLink>
          </button>
          <button className="px-6 py-2 text-white bg-[#AF631D] rounded">
            <NavLink to="/inscription" className="no-underline text-white">Inscrivez-Vous</NavLink>
          </button>
        </div>
      </div>
    </div>

    <div className="flex bg-gray-100 p-5  p-5 m-5 space-x-80">
      {/* Section À PROPOS */}
      <div className="text-black ">
        <h1 className="text-3xl font-bold p-5 text-[#AF631D] ">BIENVENU(e)</h1>
        <p className="text-xl font-bold p-5">KINSHASA ONG connect, meilleur plateforme.</p>
        
      </div>
      <div className=''>
        <p className="mt-20 p-5 m-5">
          Kinshasa ONG Connect est le carrefour où les organisations non gouvernementales 
          de Kinshasa se rencontrent pour tisser un réseau de solidarité et d'innovation. 
          Notre plateforme est dédiée à la collaboration, au partage des ressources et à l'amplification 
          de l'impact social à travers la capitale congolaise.
        </p>
      </div>
    </div>

    <div className=" bg-white p-5 m-5">
      <h2 className="text-xl mb-2 font-bold text-center text-3xl font-bold">Que pensez vous ?</h2>
      <p className="text-gray-700 text-base text-center">
        Les ONG jouent un rôle vital à Kinshasa, avec un impact significatif sur le bien-être 
        et le développement de la communauté kinoise.
      </p>
      <div className="flex justify-between mt-4">
        <div className="w-1/3 bg-gray-400 h-60"></div>
        <div className="w-1/3 bg-gray-400 h-60 mx-2"></div>
        <div className="w-1/3 bg-gray-400 h-60"></div>
      </div>
    </div>
    
    <div className="relative text-center bg-no-repeat bg-cover bg-center p-5 m-5" style={{ backgroundImage: 'url("./src/images/img1.jpg")' }}>
      <div className="bg-black bg-opacity-50 p-5 ">
        <h2 className="text-2xl font-bold text-white mb-4">Ensemble nous pouvons</h2>
        <p className="text-white mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button className="bg-[#AF631D] text-white  py-2 px-4 rounded">
          Faire un don
        </button>
      </div>
    </div>
    </>

    
  );
};


export default Home;
