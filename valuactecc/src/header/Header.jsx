import { useState } from 'react'
import './Header.css'
import icono from "../assets/logol.jpg";
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false)
    const [showMenuItems, setShowMenuItems] = useState(false)


    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
        if(!showMenuItems){
            setShowMenuItems(true)
        }else{
            setShowMenuItems(false);
        }
    };


  return (
    <nav className="nav-bar">
    <button 
      className="back-button" 
      onClick={() => navigate(-1)} // Regresa a la página anterior
    >
      <img className='image' src={icono} alt="logo" width={54} height={35} />
    </button>
    <NavLink to="/welcome" className="title">Volver</NavLink>
  </nav>
  )
}

export default Header
