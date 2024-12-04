/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const validatePassword = (password) => {
    // Expresión regular para validar:
    // - Al menos 8 caracteres
    // - Al menos una letra
    // - Al menos un número
    // - Al menos un símbolo
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El usuario ya existe',
      });
    } else if (!validatePassword(password)) {
      Swal.fire({
        icon: 'warning',
        title: 'Contraseña inválida',
        text: 'La contraseña debe tener al menos 8 caracteres, incluyendo letras, números y un símbolo.',
      });
    } else {
      const newUser = { name, email, password, phone };
      localStorage.setItem('users', JSON.stringify([...users, newUser]));
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Ya puedes iniciar sesión',
      });
    }
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleRegister}>
        <h2 className='login-title'>Registro</h2>
        <br></br>
        <label className='login-label'></label>
        <input
          className='login-input'
          type="text"
          placeholder="Nombre Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className='login-label'></label>
        <input
          className='login-input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className='login-label'></label>
        <input
          className='login-input'
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className='login-label'></label>
        <input
          className='login-input'
          type="tel"
          placeholder="Número de Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit" className='login-button'>Registrar</button>
        <p></p>
        <Link to="/login" className="register-link">
          Ya tengo una cuenta
        </Link>
      </form>
    </div>
  );
}

export default Register;
