import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 m-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-[#AF631D] mb-3">À propos de nous</h2>
          <p className="mb-3">Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expet endis in mei an pericula.</p>
          <p>Appelez-nous +615 4640 3304</p>
          <p>Visitez-nous 2976 Washington St San Francisco, CA 94115</p>
        </div>
        <div>
          <h2 className="font-bold text-[#AF631D] mb-3">Derniers messages</h2>
          <ul>
            <li>Prendre soin de tous - 19 avril 2017</li>
            <li>Trouver un projet - 28 mars 2017</li>
            <li>Être bénévole - 28 mars 2017</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[#AF631D] mb-3">Liens</h2>
          <ul>
            <li>Les partenaires</li>
            <li>Causes récentes</li>
            <li>Derniers événements</li>
            <li>Nouvelles</li>
            <li>Qui nous sommes?</li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[#AF631D] mb-3">Organisations mondiales</h2>
          {/* Ici, vous pouvez ajouter une carte du monde avec des marqueurs */}
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
        <p>© 2017 Qode Interactif Tous droits réservés</p>
        <div>
          <FaFacebook className="inline mx-2" />
          <FaTwitter className="inline mx-2" />
          <FaInstagram className="inline mx-2" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;