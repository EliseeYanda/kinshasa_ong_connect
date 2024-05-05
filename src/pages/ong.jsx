import { useState } from 'react';


// Composant de barre de recherche
const SearchBar = (onSearch) => {
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
        className="px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#AF631D]"
        value={query}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="px-4 text-white bg-[#AF631D] rounded-r-lg  focus:ring-2 "
      >
        {/* Icône de loupe */}
      </button>
    </form>
  );
};

const Ong = () => {
  const [ongs] = useState([
    
    { name: 'Oeuvre d\'amour', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img2.jpg', link: '/lien-vers-plus-dinfos-1' },
    { name: 'Aide les demunis', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/arrière plan.jpg', link: '/lien-vers-plus-dinfos-1' },

    { name: 'ONG Ensemble', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img8.jpg', link: '/lien-vers-plus-dinfos-1' },

    { name: 'Soutenons notre pays', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img6.jpg', link: '/lien-vers-plus-dinfos-1' },

    { name: 'Bon Serviteur', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img7.jpg', link: '/lien-vers-plus-dinfos-1' },

    { name: 'ONG Dieu est bon', address: '48, rue Oukala, Christiana ville de Kinshasa', image: 'src/images/img5.jpg', link: '/lien-vers-plus-dinfos-1' },

    
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
      <div className="w-full p-4 flex flex-col md:flex-row justify-between">
        <h2 className="text-xl font-bold mb-4 md:mb-0">KINSHASA ONG Connect présente :</h2>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {filteredOngs.map((ongs, index) => (
          <div key={index} className="m-4 w-full sm:w-80 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <img src={ongs.image} alt={`Actualité de ${ongs.name}`} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{ongs.name}</h3>
              <p className="text-sm">{ongs.address}</p>
              <a href={ongs.link} className="text-blue-500 hover:underline">En savoir plus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ong;
