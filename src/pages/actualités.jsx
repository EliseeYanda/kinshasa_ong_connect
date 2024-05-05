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
        <div className="text-center bg-no-repeat bg-cover bg-center p-20 " style={{ backgroundImage: 'url("/src/images/img9.jpg")' }}>
          <h2 className="text-5xl font-bold text-white mb-4">Actualités</h2>
        </div>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center my-8">À l’écoute de chaque nouvelles</h2>
          <h3 className="text-xl text-center mb-6">KINSHASA ONG Connect</h3>
          <div className="flex flex-wrap -mx-2">
            {articles.map((article, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow p-4">
                <img src="src/images/img6.jpg" alt="" className="w-full h-auto mb-4" /> 
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
                  
                  <img src="src\images\img2.jpg" alt=""  />
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
                  <img src="src\images\img4.jpg" alt="" />
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
                  <img src="src\images\img9.jpg" alt="" />
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