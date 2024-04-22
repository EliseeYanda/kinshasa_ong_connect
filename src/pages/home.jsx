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

    <div className=" bg-gray-200 bg-cover bg-center p-8 m-5">
      <div className="flex p-5 m-5">
        <div className="md:w-1/2">
          {/* Remplacez '/path/to/video-thumbnail.jpg' par le chemin réel de votre vignette vidéo ou image */}
          <h1 className='text-5xl font-bold p-5 text-[#AF631D]'>BIENVENU(e)</h1>
          <h3 className='text-2xl font-bold p-5'>KINSHASA ONG Connect, meilleur plateforme. </h3>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-4">
          <h1 className="text-3xl font-bold mb-3">Ensemble pour Kinshasa, unis pour l’humanité</h1>
          <p className="mb-3">Kinshasa ONG Connect est le carrefour où les organisations non gouvernementales 
          de Kinshasa se rencontrent pour tisser un réseau de solidarité et d'innovation. 
          Notre plateforme est dédiée à la collaboration, au partage des ressources et à l'amplification 
          de l'impact social à travers la capitale congolaise..</p>
          
        </div>
      </div>
    </div>

    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Qui nous sommes ?</h1>
      <p className="text-lg text-center mb-6">
        KINSHASA ONG Connect créée pour présenter les défis et collecter des fonds 
        pour les organisations non gouvernementales.
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
          <p className="mb-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Autem iure repellendus quidem? Sint laborum minus laudantium fuga labore nesciunt amet autem impedit cum, 
          fugit vel totam ipsa, ab consequatur. Laboriosam?.</p>
          <button className="bg-[#AF631D] text-white font-bold py-2 px-4 rounded transition duration-300">
            Faire un don
          </button>
        </div>
      </div>
    </div>

    <div className="relative text-center bg-no-repeat bg-cover bg-center p-5 m-5" style={{ backgroundImage: 'url("./src/images/arrière plan.jpg")' }}>
      <div className="">
        <h2 className="text-4xl font-bold text-white ">Ensemble nous pouvons</h2>
        <p className="text-white mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button className="bg-[#AF631D] text-white  py-2 px-4 rounded">
          <NavLink to="/contact" className="no-underline text-white">Contactez-Nous</NavLink>
        </button>
      </div>
    </div>

    <div className="bg-gray-100 p-10 flex flex-col items-center justify-center m-5">
      <div className="bg-white shadow-lg rounded-full w-24 h-24 mb-4">
        {/* Insérez ici l'avatar de la personne */}
      </div>
      <blockquote className="italic text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Rem nobis excepturi similique tempore cum sunt, sint ipsam quaerat. 
        Aut aliquam iste expedita atque fugit perspiciatis ipsam voluptates, tenetur veniam provident.
      </blockquote>
      
    </div>

    
    </>

    
  );
};


export default Home;
