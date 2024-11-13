import { useState } from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
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
    <nav className='nav-bar'>
      <NavLink to="/welcome" className='title'>Valuatec</NavLink>
      <div className='menu' onClick={handleMenuOpen}>
        <span className='line'></span>
        <span className='line'></span>
      </div>
      <ul className={`list ${menuOpen ? "open" : ""}`}>
        <li className='nav-item'>
       <NavLink to="/welcome" className='nav-text'>volver</NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default Header
