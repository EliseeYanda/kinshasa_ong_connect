import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Profil = ({ ong }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-cover bg-center h-56 p-4" style={{ backgroundImage: `url(${ong.coverImage})` }}>
          <div className="flex justify-end">
            {/* Icônes des réseaux sociaux */}
            <a href={ong.facebook} className="text-white p-2"><FaFacebook /></a>
            <a href={ong.twitter} className="text-white p-2"><FaTwitter /></a>
            <a href={ong.instagram} className="text-white p-2"><FaInstagram /></a>
            <a href={ong.linkedin} className="text-white p-2"><FaLinkedin /></a>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-2xl font-bold">{ong.name}</h3>
          <div className="mt-2">
            <label className="font-bold">Mission:</label>
            <p>{ong.mission}</p>
          </div>
          <div className="mt-2">
            <label className="font-bold">Activités:</label>
            <p>{ong.activities}</p>
          </div>
          <div className="mt-2">
            <label className="font-bold">Projets:</label>
            <p>{ong.projects}</p>
          </div>
          <div className="mt-2">
            <label className="font-bold">Événements:</label>
            <p>{ong.events}</p>
          </div>
          <div className="mt-2">
            <label className="font-bold">Objectifs:</label>
            <p>{ong.objectives}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
