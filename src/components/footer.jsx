import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-10 m-5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-[#AF631D] mb-3 text-xl">À propos de nous</h2>
          <p className="mb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Iste minima natus hic accusamus expedita </p>
          <p>Visitez-nous : Concession COTEX N° 63, Ave Colonel Mondjiba, Kinshasa, Ref : Show Buzz</p>
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
          <h2 className="font-bold text-[#AF631D] mb-3 text-xl">Liens</h2>
          <ul>
            <li>Contact</li>
            <li>Inscription</li>
            <li>Faire un don</li>
            <li>Nouvelles</li>
            
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[#AF631D] mb-3 text-xl">KINSHASA ONG Connect</h2>
          {/* Ici, vous pouvez ajouter une carte du monde avec des marqueurs */}
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
        <p>© 2024 eliseeyanda05@gmail.com</p>
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