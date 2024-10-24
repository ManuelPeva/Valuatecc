import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {user && <p className='app-p'>Bienvenido, {user.email} 😊</p>}

        <nav>
          <Link className='app-nav' to="/login">Login</Link>
          <Link className='app-nav' to="/register">Registro</Link>
        </nav>
      </div>
    </Router>
  );
}

export default App;
