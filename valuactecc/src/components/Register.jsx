import { useState } from 'react';
import Swal from 'sweetalert2';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El usuario ya existe',
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
      <h2 className='login-title'>Registro</h2>
      <form className='login-form' onSubmit={handleRegister}>
        <label className='login-label'>Nombre Completo</label>
        <input className='login-input'
          type="text"
          placeholder="Nombre Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className='login-label'>Email</label>
        <input className='login-input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className='login-label'>contraseña</label>
        <input className='login-input'
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className='login-label'>Numero de Teléfono</label>
        <input className='login-input'
          type="tel"
          placeholder="Número de Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit" className='login-button'>Registrar</button>
      </form>
    </div>
  );
}

export default Register;
