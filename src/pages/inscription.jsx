const Inscription = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg  font-bold text-gray-900">Inscription</h3>
          <div className="mt-2 px-7 py-3">
            <input type="text" placeholder="Nom de l'organisation" className="mb-3 px-3 py-2 border rounded" />
            <input type="text" placeholder="Siège de l'organisation" className="mb-3 px-3 py-2 border rounded" />
            <input type="email" placeholder="Email" className="mb-3 px-3 py-2 border rounded" />
            <input type="text" placeholder="Téléphone" className="mb-3 px-3 py-2 border rounded" />
            <input type="text" placeholder="Adresse" className="mb-3 px-3 py-2 border rounded" />
            
            <div className="flex justify-between  mt-2">
              <button type="submit" className="px-4 py-2 bg-[#AF631D] text-white text-base rounded-md shadow-sm">Envoyer</button>
              <button id="close-btn" className="px-4 py-2 bg-black text-white text-base  rounded-md shadow-sm" onClick={onClose}>Fermer</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Inscription;
