/* eslint-disable no-unused-vars */
import { useState } from "react";
import Sidebar from "./Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import { AvaluoProvider } from "./AvaluoContext";
//import Caract_terreno from './components/carac-terreno';
import Comprobables from './components/comprobables';
import Layout from "./components/Layout.jsx" //importa el Layout


//otros componentes
import Datoss from "./components/datoss";
import Portada from "./components/portada";
import Caracterreno from  "./components/caracterreno";
import Definiciones from './components/definiciones';
//import conclusion from './components/conclusion';
//import Costos from './components/costos';

import Descripcion from './components/descripcion';
//import fotoCasaEvaluo from './components/foto-casa-avaluo';
//import fotoCasaVenta from './components/foto-casa-venta';
//import i_espec from './components/i-espec';
//import Ingresos from './components/ingresos'
import Similares from './components/Similares';
//import Mercado_terr from './components/mercado-terr';
import Acabados from './components/acabados';
//

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null); // Limpiar el usuario
  };

  return (
    <AvaluoProvider>
      <Router>
        <div>
          <Routes>
            {/* Ruta por defecto que redirige a login si no hay usuario autenticado */}
            <Route
              path="/"
              element={user ? <Navigate to="/welcome" /> : <Navigate to="/login" />}
            />

            <Route path="/welcome" element={<Welcome />} />
            <Route path="/portada" element={<Portada />} />
            <Route path="/datoss" element={<Datoss />} />
            <Route path="/caracterreno" element={<Caracterreno />} />
            <Route path="/definiciones" element={<Definiciones />} />
            <Route path="/descripcion" element={<Descripcion />} />
            <Route path="/similares" element={<Similares />} />
            <Route path="/acabados" element={<Acabados />} />
            <Route path="/comprobables" element={<Comprobables />} />
            <Route path="/login" element={<Login onLogin={setUser} />} />
            <Route path="/register" element={<Register />} />

            {/* Página de bienvenida, solo accesible si hay un usuario */}
            <Route
              path="/welcome"
              element={
                user ? <Welcome user={user} onLogout={handleLogout} /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </Router>
    </AvaluoProvider>
  );
}

export default App;
