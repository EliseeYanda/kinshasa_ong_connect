import React, { useState } from 'react';
import Profil from './profil';

// Composant de barre de recherche
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Gère la mise à jour de la requête de recherche
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  // Gère la soumission de la recherche
  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex justify-end w-full mb-4" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Rechercher..."
        className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="px-4 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {/* Icône de loupe */}
      </button>
    </form>
  );
};

// Composant Ong avec un design amélioré
const Ong = () => {
  const [ongs, setOngs] = useState([
    // Ajoutez des images et des liens pour chaque ONG ici
    { name: 'Oeuvre d\'amour', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img2.jpg', link: '/lien-vers-plus-dinfos-1' },
    { name: 'Oeuvre d\'amour', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img2.jpg', link: '/lien-vers-plus-dinfos-1' },

    { name: 'Oeuvre d\'amour', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img2.jpg', link: '/lien-vers-plus-dinfos-1' },

    { name: 'Oeuvre d\'amour', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img2.jpg', link: '/lien-vers-plus-dinfos-1' },

    { name: 'Oeuvre d\'amour', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img2.jpg', link: '/lien-vers-plus-dinfos-1' },

    { name: 'Oeuvre d\'amour', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img2.jpg', link: '/lien-vers-plus-dinfos-1' },

    // Répétez pour chaque ONG...
  ]);
  const [filteredOngs, setFilteredOngs] = useState(ongs);

  // Fonction pour gérer la recherche
  const handleSearch = (query) => {
    const results = ongs.filter(ong =>
      ong.name.toLowerCase().includes(query.toLowerCase()) ||
      ong.address.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredOngs(results);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full p-4 flex justify-between">
        <h2 className="text-xl font-bold">KINSHASA ONG Connect présente :</h2>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {filteredOngs.map((ong, index) => (
          <div key={index} className="m-4 w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img src={ong.image} alt={`Actualité de ${ong.name}`} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{ong.name}</h3>
              <p className="text-sm">{ong.address}</p>
              <a href="Profil" to="/profil" className="text-blue-500 hover:underline">En savoir plus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ong;
