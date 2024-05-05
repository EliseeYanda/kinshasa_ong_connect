import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        <div>
          <h2 className="font-bold text-[#AF631D] mb-3 text-lg sm:text-xl">À propos de nous</h2>
          <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Iste minima natus hic accusamus expedita </p>
          <p className="text-sm">Visitez-nous : Concession COTEX N° 63, Ave Colonel Mondjiba, Kinshasa, Ref : Show Buzz</p>
        </div>
        <div>
          <h2 className="font-bold text-[#AF631D] mb-3 text-xl">Derniers messages</h2>
          <ul>
            <li>lorem lorem lorem lorem </li>
            <li>lorem lorem lorem lorem </li>
            <li>lorem lorem lorem lorem </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[#AF631D] rounded hover: text-[#AF631D] mb-3 text-xl">Liens</h2>
          <ul>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/inscription">Inscription</NavLink></li>
            <li><NavLink to="/#">Faire un don</NavLink></li>
            <li><NavLink to="/home">Nouvelles</NavLink></li>
            
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[#AF631D] mb-3 text-xl">KINSHASA ONG Connect</h2>
          {/* Ici, vous pouvez ajouter une carte du monde avec des marqueurs */}
        </div>
      </div>
    <div className="flex flex-col sm:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm sm:text-base">© 2024 eliseeyanda05@gmail.com</p>
      <div>
        {/* Assurez-vous d'inclure les icônes correctement */}
        <FaFacebook className="inline mx-1 sm:mx-2" />
        <FaTwitter className="inline mx-1 sm:mx-2" />
        <FaInstagram className="inline mx-1 sm:mx-2" />
      </div>
    </div>
    </footer>
  );
};

export default Footer;