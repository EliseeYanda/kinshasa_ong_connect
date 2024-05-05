const Inscription = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg font-bold text-gray-900">Inscription</h3>
          <div className="mt-2 px-7 py-3">
            <input type="text" placeholder="Nom de l'organisation" className="mb-3 px-3 py-2 border rounded w-full" />
            <input type="text" placeholder="Siège de l'organisation" className="mb-3 px-3 py-2 border rounded w-full" />
            <input type="email" placeholder="Email" className="mb-3 px-3 py-2 border rounded w-full" />
            <input type="text" placeholder="Téléphone" className="mb-3 px-3 py-2 border rounded w-full" />
            <input type="text" placeholder="Adresse" className="mb-3 px-3 py-2 border rounded w-full" />
            
            <div className="flex flex-col sm:flex-row justify-between mt-2">
              <button type="submit" className="mb-2 sm:mb-0 px-4 py-2 bg-[#AF631D] text-white text-base rounded-md shadow-sm w-full sm:w-auto">Envoyer</button>
              <button id="close-btn" className="px-4 py-2 bg-black text-white text-base rounded-md shadow-sm w-full sm:w-auto" onClick={onClose}>Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
