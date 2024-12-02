/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import "../Welcome.css";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import casaImage from "../assets/logol.jpg";
import muyPronto from "../assets/3.png";
import muyPronto2 from "../assets/4.png"
import muyPronto3 from "../assets/5.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { AvaluoProvider } from "../AvaluoContext";
import { Outlet, Link } from "react-router-dom";
// Ajusta la ruta según la ubicación del archivo
import Sidebar from "../Sidebar";

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
      timer: 1000,
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
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="spinner-grow text-primary" role="status">
            <br></br>
            <span className="visually-hidden">Cargando...</span>
            <br></br>
            <span className="visually">Cargando...</span>
          </div>
        </div>
      ) : (
        // Vista del Tablero que aparece después de 2 segundos

        <div className="tablero">
          {/* Aquí va el contenido principal */}

          <header className="welcome-header">
            <nav className="welcome-nav">
              <img src={casaImage} alt="logo" width={54} height={35} />
              <ul className="nav-list">
                <li style={{ listStyleType: "none" }}>
                  <Sidebar onLogout={handleLogout} />
                </li>
              </ul>
            </nav>
          </header>

          <div className="forzado">
          <h2 className="coming">COMING SOON</h2>
            <div className="card mb-3">
              <img src={muyPronto2} className="card-img-top" alt="#"></img>
              <div className="card-body">
                <h5 className="card-title">Reportes</h5>
                <p className="card-text">
                Proveen una visión detallada de los logros, retos y tareas realizadas durante la semana. Suelen incluir métricas clave, avances de proyectos, y áreas de mejora inmediata para garantizar un seguimiento ágil y efectivo.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Muy pronto
                  </small>
                </p>
              </div>
            </div>
          </div>


          
         
            <div className="card mb-3">
              <img src={muyPronto} className="card-img-top" alt="#"></img>
              <div className="card-body">
                <h5 className="card-title">Recibe alertas de desempeño</h5>
                <p className="card-text">
                  Obtén alertas acerca de tu desempeño y consejos de como mejorar tus labores semanales, mensuales y anuales.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Muy pronto
                  </small>
                </p>
              </div>
            </div>
          


         
            <div className="card mb-3">
              <img src={muyPronto3} className="card-img-top" alt="#"></img>
              <div className="card-body">
                <h5 className="card-title">Ubicaciones mas precisas con un solo clic</h5>
                <p className="card-text">
                  Olvídate de digitar todos los datos de la colonia, mejor señala en el mapa y deja que los datos se llenen solos
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Muy pronto
                  </small>
                </p>
              </div>
            </div>
            <span className="inset">®Valuatec</span>
          </div>


          

      )}
    </div>
  );
}

export default Welcome;
