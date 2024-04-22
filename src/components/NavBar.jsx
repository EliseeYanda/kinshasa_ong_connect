import {NavLink} from "react-router-dom";
import React from "react";

function NavBar() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className="overflow-hidden shadow-lg p-5 m-5 bg-black">
            <nav className="flex justify-between w-full p-1 text-white bg-opacity-50  ">
                <div className="flex items-center space-x-4">
                     {/* Placeholder pour le logo */}
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                     <span className="text-xl font-bold">LOGO</span>
                </div>
                <div className="flex items-center space-x-8 text-xl">
                    <NavLink to="/home" className="hover:text-[#AF631D]">Accueil</NavLink>
                    <NavLink to="/ong" className="hover:text-[#AF631D]">ONG</NavLink>
                    <NavLink to="/actualites" className="hover:text-[#AF631D]">Actualités</NavLink>
                    <NavLink to="/contact" className="hover:text-[#AF631D]">Contact</NavLink>
                    {/* <NavLink to="/don" className="px-4 py-2 bg-[#AF631D] text-white rounded hover:bg-[#AF631D]">Faire un don</NavLink> */}
                    <NavLink to="/home"
        className="bg-[#AF631D] text-white  text-sm px-6 py-2 rounded shadow  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button" 
        onClick={() => setShowModal(true)} 
      >
        Faire un don
      </NavLink>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Dolor sed libero obcaecati adipisci nihil sequi quisquam ducimus impedit dignissimos maiores 
                    debitis, fugit doloribus similique? Voluptatibus doloremque officia recusandae at ab!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                  <button
                    className="bg-[#AF631D] text-white active:bg-emerald-600  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
                </div>
            </nav>
        </div>
    );
}

export default NavBar;