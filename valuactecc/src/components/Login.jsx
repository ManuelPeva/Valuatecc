// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Swal from 'sweetalert2';
import '../Login.css';

// eslint-disable-next-line react/prop-types
function Login({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
        if(user){
            onLogin(user);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La contraseña es incorrecta'
            })
        }
    };

    return(
        <div className='login-container'>
            <h2 className='login-title'>Inicio de Sesión</h2>
            <form className='login-form' onSubmit={handleLogin}>
                <label className='login-label'>Email</label>
                <input className='login-input'
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <label className='login-label'>Contraseña</label>
                <input className='login-input'
                type='password'
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button type='submit' className='login-button'>Iniciar Sesión</button>
            </form>
        </div>
    )
}

export default Login