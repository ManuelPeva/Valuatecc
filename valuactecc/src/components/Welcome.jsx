/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "../Welcome.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import casaImage from "../assets/casa.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { AvaluoProvider } from "../AvaluoContext";
import { Outlet, Link } from "react-router-dom";
// Ajusta la ruta según la ubicación del archivo

// eslint-disable-next-line react/prop-types, no-unused-vars
function Welcome({ user, onLogout }) {
  // Cambié el nombre del componente a mayúsculas
  const navigate = useNavigate();
  //botones
  const [buttons, setButtons] = useState(
    Array.from({ length: 16 }, (_, i) => `Botón ${i + 1}`)
  );
  const [newButtonText, setNewButtonText] = useState("");

  //aqui esta el temporizador
  const [showWelcome, setShowWelcome] = useState(true); // Estado para controlar la vista de bienvenida

  useEffect(() => {
    // Configurar un temporizador para ocultar la bienvenida después de 2 segundos
    const timer = setTimeout(() => {
      setShowWelcome(false); // Cambiar a la vista del tablero
    }, 2000);

    return () => clearTimeout(timer); // Limpiar el temporizador cuando se desmonte el componente
  }, []);

  //fin del temporizador
  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // limpiar el estado del usuario
    }
    
    Swal.fire({
      title: "Adiós",
      text: "¡Gracias por visitarnos!",
      icon: "success",
      confirmButtonText: "Cerrar",
      timer: 2000,
      timerProgressBar: true,
    }).then(() => {
      navigate("/login"); // redirigir al login después de cerrar la alerta
    });
  };

  const handleAddButton = () => {
    if (newButtonText) {
      setButtons([...buttons, newButtonText]);
      setNewButtonText(""); //Limpiar el campo de entrada
    }
  };

  return (
    <div className="welcome-page">
      {showWelcome ? (
        // Vista de Bienvenida
        <div className="bienvenida">
          <p className="welcome-p">Bienvenido a:</p>
          <h2 className="welcome-h2">ValuaTec</h2>
         {/*<img src={casaImage} alt="imagen de bienvenida" />*/ } 
        </div>
      ) : (
        // Vista del Tablero que aparece después de 2 segundos
        <div className="tablero">
          <header className="welcome-header">
            <nav className="welcome-nav">
              <img src={casaImage} alt="logo" width={54} height={35} />
              <ul className="nav-list">
                <li style={{listStyleType:'none'}}>
                  <button
                    className="welcome-logout-button"
                    onClick={handleLogout}
                  >
                    Salir
                  </button>
                </li>
              </ul>
            </nav>
          </header>
          <div className="forzado">
          <h2 className="welcome-h2-sub">ValuaTec</h2>
          <ul className="link-list">
            <li className="welcome-li">
              <Link className="welcome-botones" to="/portada">
                Portada
              </Link>
              <Link className="welcome-botones" to="/datoss">
                Datos
              </Link>
              <Link className="welcome-botones" to="/carac-terreno">
                Carac-Terreno
              </Link>
              <Link className="welcome-botones" to="/definiciones">
                Definiciones
              </Link>
              <Link className="welcome-botones" to="/descrip-inmueble">
                Descrip Inmueble
              </Link>
              <Link className="welcome-botones" to="/acabados">
                Acabados
              </Link>
              <Link className="welcome-botones" to="/merc-inm-similares">
                Merc Inm Similares
              </Link>
              <Link className="welcome-botones" to="/comprobables">
                Comprobables
              </Link>
              <Link className="welcome-botones" to="/mercado-terr">
                Mercado Terr
              </Link>
              <Link className="welcome-botones" to="/i-espec">
                i-Espec
              </Link>
              <Link className="welcome-botones" to="/costos">
                Costos
              </Link>
              <Link className="welcome-botones" to="/ingresos">
                Ingresos
              </Link>
              <Link className="welcome-botones" to="/conclusion">
                Conclusión
              </Link>
              <Link className="welcome-botones" to="/foto-casa-avaluo">
                Foto de la casa en Avaluó
              </Link>
              <Link className="welcome-botones" to="/foto-casa-venta">
                Foto de casa en venta
              </Link>
              <Link className="welcome-botones" to="/fotos-terrenos">
                Fotos de terrenos
              </Link>
            </li>
          </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Welcome;
