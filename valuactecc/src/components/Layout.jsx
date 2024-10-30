/* eslint-disable react/prop-types */
// src/components/Layout.js
import { Link } from "react-router-dom";

const Layout = ({ children, user }) => {
  return (
    <div>
      {/* Condicionalmente renderiza la navegación si no hay usuario autenticado */}
      {!user && (
        <nav>
          <Link className="app-nav" to="/login">
            Login
          </Link>
          <Link className="app-nav" to="/register">
            Registro
          </Link>
        </nav>
      )}
      {children}
    </div>
  );
};

export default Layout;
