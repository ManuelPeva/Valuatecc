import { useNavigate } from 'react-router-dom';
import '../Welcome.css';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import casaImage from '../assets/casa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types, no-unused-vars
function Welcome({ user, onLogout }) {
   // Cambié el nombre del componente a mayúsculas
  const navigate = useNavigate();
  //botones
  const [buttons, setButtons] = useState(Array.from({length: 16}, (_,i) => `Botón ${i + 1}`));
  const [newButtonText, setNewButtonText] = useState('');


  const handleLogout = () => {
    onLogout(); // limpiar el estado del usuario
    navigate('/login'); // redirigir al login
  };

  const handleAddButton = () => {
    if(newButtonText){
      setButtons([...buttons, newButtonText]);
      setNewButtonText(''); //Limpiar el campo de entrada
    }
  };



  return (
    <div className='welcome-page'>
      <header className="welcome-header"> 
        <nav className="welcome-nav">
          <img src={casaImage} alt='logo' width={55} height={35}></img>
          <button className='welcome-logout-button' onClick={handleLogout}><FontAwesomeIcon icon={faSignOutAlt} style={{color:'white'}} className='welcome-salir'/> Salir</button>
          <ul className="nav-list">
            <li>
            </li>
          </ul>
        </nav>
      </header>
    <div className='bienvenida'>
      <p className='welcome-p'>Bienvenido a:</p>
      <h2 className='welcome-h2'>ValuaTec</h2>
      <img src={casaImage} alt='imagen de bienvenida'></img>
    </div>
    <div className='tablero'>
      <h2 className='welcome-h2'>ValuaTec</h2>
      <ul>
        <li>
          <a className='welcome-botones' href='#'>Portada</a>
          <a className='welcome-botones' href='#'>Portada</a>
          <a className='welcome-botones' href='#'>Portada</a>
        </li>
      </ul>
    </div>
    </div>
    
  );
}

export default Welcome;