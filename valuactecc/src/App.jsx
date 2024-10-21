import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Registro</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {user && <p>Bienvenido, {user.email}</p>}
      </div>
    </Router>
  );
}

export default App;
