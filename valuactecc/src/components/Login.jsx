// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

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
            alert('Usuario o contraseña incorrectos');
        }
    };

    return(
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <input
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input
                type='password'
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <button type='submit'>Entrar</button>
            </form>
        </div>
    )
}

export default Login