

function welcome({user}) {
  return (
    <div>
      <h1>Bienvenido, {user.email} 😊</h1>
      <p>Esta es la pagina de bienvenida despues de iniciar sesion.</p>
    </div>
  );
}

export default welcome
