import  { useState } from 'react';

const Don = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    // Ici, vous pouvez également gérer l'envoi des données du formulaire à un serveur
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full" id="don-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg font-bold text-gray-900">Faire un Don</h3>
          <form onSubmit={handleSubmit} className="mt-2 px-7 py-3">
            
            <input type="text" placeholder="Nom complet" className="mb-3 px-3 py-2 border rounded" />
            <input type="email" placeholder="Email" className="mb-3 px-3 py-2 border rounded" />
            <input type="text" placeholder="Téléphone" className="mb-3 px-3 py-2 border rounded" />
            <input type="text" placeholder="Montant à envoyer" className="mb-3 px-3 py-2 border rounded" />
            <textarea placeholder="Message" className="mb-3 px-3 py-2 border rounded" />
            
            
            <div className="flex justify-between  mt-2">
              <button type="submit" className="px-4 py-2 bg-[#AF631D] text-white text-base rounded-md shadow-sm">Envoyer</button>
              <button id="close-btn" className="px-4 py-2 bg-black text-white text-base rounded-md shadow-sm" onClick={onClose}>Fermer</button>
            </div>
          </form>
          {isSubmitted && <p className="text-green-500">Votre don a été soumis avec succès. Merci!</p>}
        </div>
      </div>
    </div>
  );
};

export default Don;
