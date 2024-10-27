import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

import Welcome from './components/Welcome'

//import Caract_terreno from './components/carac-terreno';
//import Comprobables from './components/comprobables';

import Datos from './components/portada'
import Portada from './components/portada'

//import conclusion from './components/conclusion';
//import Costos from './components/costos';
//import Definiciones from './components/definiciones';
//import descrip_inmueble from './components/descrip-inmueble';
//import fotoCasaEvaluo from './components/foto-casa-avaluo';
//import fotoCasaVenta from './components/foto-casa-venta';
//import i_espec from './components/i-espec';
//import Ingresos from './components/ingresos'
//import MercInmSimilares from './components/merc-inm-similares';
//import Mercado_terr from './components/mercado-terr';
//import Acabados from './components/acabados';
import './App.css';


function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);  // Limpiar el usuario
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/portada" element={<Portada />} />
          <Route path="/datos" element={<Datos />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/register" element={<Register />} />
          {/* Ruta de bienvenida protegida, solo accesible si el usuario está autenticado */}
          <Route
            path="/welcome"
            element={user ? <Welcome user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
          />
        </Routes>
        
        {/* Mostrar los enlaces de login/registro solo si el usuario no está autenticado */}
        {!user && (
          <nav>
            <Link className='app-nav' to="/login">Login</Link>
            <Link className='app-nav' to="/register">Registro</Link>
          </nav>
        )}
      </div>
    </Router>
  );
}

export default App;