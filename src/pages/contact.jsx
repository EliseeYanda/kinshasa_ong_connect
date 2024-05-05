import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    noms: '',
    email: '',
    sujet: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traiter les données du formulaire ici
    console.log(formData);
  };

  return (
    <>
    <div className="text-center bg-no-repeat bg-cover bg-center p-10 sm:p-20" style={{ backgroundImage: 'url("./src/images/img7.jpg")' }}>
      <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Contactez-Nous</h2>
    </div>

    <div className="container mx-auto p-4 flex flex-wrap">
      <div className="w-full md:w-1/2 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="noms">
              Noms
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="noms" type="text" placeholder="Vos noms" name="noms" value={formData.noms} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Votre email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sujet">
              Sujet
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sujet" type="text" placeholder="Le sujet de votre message" name="sujet" value={formData.sujet} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Votre message" name="message" value={formData.message} onChange={handleChange} />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-[#AF631D] text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">KINSHASA ONG Connect</h1>
        <p className="text-gray-700 text-sm sm:text-base">
          Au cœur de Kinshasa, la vibrante capitale de la République Démocratique du Congo, 
          les ONG épanouissent comme des oasis de changement et espoir. Parmi elles, 
          Kinshasa ONG Connect se démarque comme une plateforme, unissant les forces pour un impact plus profond et plus large.
        </p>
      </div>
    </div>
    </>
  );
};

export default Contact;
