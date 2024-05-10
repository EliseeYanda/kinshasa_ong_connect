import { NavLink } from "react-router-dom";

function Actualites(){
    const articles = [
        // Remplacez ces objets par les vrais articles avec leurs titres et contenus
        { title: 'Titre de l\'article 1', content: 'Extrait de l\'article 1...' },
        { title: 'Titre de l\'article 2', content: 'Extrait de l\'article 2...' },
        { title: 'Titre de l\'article 3', content: 'Extrait de l\'article 3...' },
      ];
    
      return (
        <>
        <div className="text-center bg-no-repeat bg-cover bg-center p-20 " style={{ backgroundImage: 'url("https://img.freepik.com/photos-gratuite/vue-laterale-heureuse-mere-tenue-bebe_23-2150921971.jpg?t=st=1715339169~exp=1715342769~hmac=9a6a54a09dae7bc52853eb23788c5fd014c9072db431548f10bd85b9fc702b2f&w=740")' }}>
          <h2 className="text-5xl font-bold text-white mb-4">Actualités</h2>
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center my-8">À l’écoute de chaque nouvelles</h2>
          <h3 className="text-xl text-center mb-6">KINSHASA ONG Connect</h3>
          <div className="flex flex-wrap -mx-2">
            {articles.map((article, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow p-4">
                <img src="https://img.freepik.com/photos-gratuite/vue-laterale-heureuse-mere-tenue-bebe_23-2150921971.jpg?t=st=1715339169~exp=1715342769~hmac=9a6a54a09dae7bc52853eb23788c5fd014c9072db431548f10bd85b9fc702b2f&w=740" alt="" className="w-full h-auto mb-4" /> 
                <h4 className="font-semibold mb-2">{article.title}</h4>
                <p className="text-gray-700 mb-4">{article.content}</p>
                <NavLink to="/article-detail" className="text-blue-500 hover:text-gray-500 py-2 px-4">
                  En savoir plus
                </NavLink>
              </div>
            </div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          
          <div className="flex flex-wrap -mx-2">
            {articles.map((article, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow p-4">
                  
                  <img src="https://img.freepik.com/photos-gratuite/enfant-africain-marche_23-2151489172.jpg?w=740&t=st=1715339772~exp=1715340372~hmac=d997f275c0482e66467b954ae6cddacc978b41d6fabb391f03a8af34f6a4642e" alt=""  />
                  <h4 className="font-semibold mb-2">{article.title}</h4>
                  <p className="text-gray-700 mb-4">{article.content}</p>
                  <NavLink className=" text-blue-500 hover:text-gray-500  py-2 px-4">
                    En savoir plus
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          
          <div className="flex flex-wrap -mx-2">
            {articles.map((article, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow p-4">
                  <img src="https://img.freepik.com/photos-gratuite/moment-capture-lors-crise-migratoire-personnes_23-2150901770.jpg?t=st=1715339496~exp=1715343096~hmac=1d8f9459818f219fedf184323458d1a804786e7ca848dd56ff649cb7b2bfd155&w=826" alt="" />
                  <h4 className="font-semibold mb-2">{article.title}</h4>
                  <p className="text-gray-700 mb-4">{article.content}</p>
                  <NavLink className=" text-blue-500 hover:text-gray-500  py-2 px-4">
                    En savoir plus
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4">
          
          <div className="flex flex-wrap -mx-2">
            {articles.map((article, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow p-4">
                  <img src="https://img.freepik.com/photos-gratuite/enfant-africain-qui-profite-vie_23-2151448529.jpg?t=st=1715339342~exp=1715342942~hmac=91cb79a739ede53f7db694e936fe49cb3cb82a03a36140cd782f6159756ddc5f&w=740" alt="" />
                  <h4 className="font-semibold mb-2">{article.title}</h4>
                  <p className="text-gray-700 mb-4">{article.content}</p>
                  <NavLink className=" text-blue-500 hover:text-gray-500  py-2 px-4">
                    En savoir plus
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
        </>
      );
}

export default Actualites;