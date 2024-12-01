/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar la visibilidad del sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Cambia entre abierto y cerrado
  };

 

  return (
    <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "⮜" : "⮞"}
      </button>
      <div className={`sidebar ${isOpen ? "visible" : "hidden"}`}>
        <div className="profile">
          <img
            src="https://img.lovepik.com/png/20231128/3d-illustration-avatar-profile-man-collection-guy-cheerful_716220_wh860.png"
            alt="User"
            className="profile-pic"
          />
          <h3>Valuactec</h3>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/portada" className="sidebar-link">
              Portada
            </Link>
          </li>
          <li>
            <Link to="/datoss" className="sidebar-link">
              Datos
            </Link>
          </li>
          <li>
            <Link to="/caracterreno" className="sidebar-link">
              Carac-Terreno
            </Link>
          </li>
          <li>
            <Link to="/definiciones" className="sidebar-link">
              Definiciones
            </Link>
          </li>
          <li>
            <Link to="/descripcion" className="sidebar-link">
              Descrip Inmueble
            </Link>
          </li>
          <li>
            <Link to="/acabados" className="sidebar-link">
              Acabados
            </Link>
          </li>
          <li>
            <Link to="/similares" className="sidebar-link">
              Merc Inm Similares
            </Link>
          </li>
          <li>
            <Link to="/comprobables" className="sidebar-link">
              Comprobables
            </Link>
          </li>
        </ul>
        <div className="logout-container">
        <button className="welcome-logout-button" onClick={onLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Salir
        </button>
        
       <span className="copri">&copy; Todos los derechos reservados</span>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
