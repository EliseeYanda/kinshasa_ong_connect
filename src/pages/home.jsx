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

    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Qui nous sommes</h1>
      <p className="text-lg text-center mb-6">
        Organisation créée pour fournir de l'aide et collecter des fonds à ceux qui en ont besoin.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
        <img src="src\images\img1.jpg"/>
          <h2 className="text-xl font-semibold mb-2">Endroits pour se perdre</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
        <img src="src\images\img2.jpg"/>
          <h2 className="text-xl font-semibold mb-2">Une alimentation saine pour tous</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
           <img src="src\images\img2.jpg"/>
          <h2 className="text-xl font-semibold mb-2">Organisation verte</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    </div>

    <div className=" bg-gray-200 bg-cover bg-center p-8">
      <div className="flex p-5 m-5">
        <div className="md:w-1/2">
          {/* Remplacez '/path/to/video-thumbnail.jpg' par le chemin réel de votre vignette vidéo ou image */}
          <img src="src\images\img2.jpg" alt="Enfant sur une balançoire" className="w-full h-auto" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-4">
          <h1 className="text-3xl font-bold mb-3">Communauté de collecte de fonds</h1>
          <p className="mb-3">Nulla fermentum turpis id nunc tincidunt, vitae hendrerit orci viverra. Nulla facilisi. Duis tempor nisi nec dolor malesuada viverra. Morbi id tempus nisi, à divers enim. Morbi eget augue neque, in iugula.</p>
          <button className="bg-[#AF631D] text-white font-bold py-2 px-4 rounded transition duration-300">
            En savoir plus
          </button>
        </div>
      </div>
    </div>

    <div className="relative text-center bg-no-repeat bg-cover bg-center p-5 m-5" style={{ backgroundImage: 'url("./src/images/img1.jpg")' }}>
      <div className="bg-black bg-opacity-50 p-5 ">
        <h2 className="text-4xl font-bold text-white ">Ensemble nous pouvons</h2>
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
