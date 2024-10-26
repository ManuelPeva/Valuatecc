import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
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