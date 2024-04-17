function Ong() {
    const ongs = [
        { name: 'Oeuvre d\'amour', address: '48, rue Oukala, Christiana ville de Kinshasa' },
        { name: 'Race bénie', address: '48, rue Oukala, Christiana ville de Kinshasa' },
        { name: 'Bon samaritain', address: '48, rue Oukala, Christiana ville de Kinshasa' },
        { name: 'ONG Compassion', address: '48, rue Oukala, Christiana ville de Kinshasa' },
        { name: 'ONG Dieu est bon', address: '48, rue Oukala, Christiana ville de Kinshasa' }
      ];
    
      return (
        <div className="flex flex-row">
          <div className="w-1/2 p-4">
            <ul>
              {ongs.map((ong, index) => (
                <li key={index} className="mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-6 w-6 mr-2"> {/* Ici, vous pouvez ajouter l'icône de votre choix */}</div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">{ong.name}</h3>
                      <p className="text-sm">{ong.address}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-xl mb-2 font-bold">KINSHASA ONG Connect présente :</h2>
            <div className="bg-gray-300 h-48 mb-4"> {/* Ici, vous pouvez ajouter l'image de votre choix */}</div>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </div>
      );
};

export default Ong;