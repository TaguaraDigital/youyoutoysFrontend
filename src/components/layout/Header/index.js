import React, { useState, useContext } from 'react';
import { useHistory   } from 'react-router-dom';

import logo from '../../../assets/image/logos/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

import { AuthContext } from '../../../hooks/contexts/AuthContext';

import {
    HeaderContainer,
    HeaderLogo,
    ToggleMenu,
    NavItems,
    NavLinks,
    NavLink,
    NavLinkR,
    ButtonLogin,

} from './Header.Styles';

const Header = ({ page="landing" }) => {

    let history = useHistory();
    const { currentUser, setAuth, logout } = useContext(AuthContext);
    const [showMobileMenu, SetShowMobileMenu] = useState(false);

    const handleShowToggleMenu = () => {
        SetShowMobileMenu(!showMobileMenu)
    }
   
    return (
        <>
            <HeaderContainer>
                <HeaderLogo to='/'>
                    <img src={logo} alt="Logo" />
                </HeaderLogo>

                <NavItems onClick={handleShowToggleMenu} showToggleMenu={showMobileMenu} >
                    {page === 'landing' &&
                        <>
                            <NavLinks><NavLink to='home' onClick={handleShowToggleMenu} >Inicio</NavLink></NavLinks>
                            <NavLinks><NavLink to='about' onClick={handleShowToggleMenu} >Nosotros</NavLink></NavLinks>
                            <NavLinks><NavLink to='product' onClick={handleShowToggleMenu} >Productos</NavLink></NavLinks>
                            <NavLinks><NavLink to='contact' onClick={handleShowToggleMenu} >Contacto</NavLink></NavLinks>
                            <NavLinks><ButtonLogin to='/login' onClick={handleShowToggleMenu} >Ingresar</ButtonLogin></NavLinks>    
                            <NavLinks><ButtonLogin to='/register' onClick={handleShowToggleMenu} >Registrarse</ButtonLogin></NavLinks>    
                        </>
                    }

                    {page === 'login' &&
                        <NavLinks><ButtonLogin to='/' onClick={handleShowToggleMenu} >Inicio</ButtonLogin></NavLinks>
                    }

                    {page === 'home' &&
                        <>
                            <NavLinks><NavLinkR to='/clientes' onClick={handleShowToggleMenu} >Inicio</NavLinkR></NavLinks>
                            <NavLinks><NavLink to='oferta' onClick={handleShowToggleMenu} >Oferta</NavLink></NavLinks>
                            <NavLinks><NavLinkR to='/orders' onClick={handleShowToggleMenu}> Pedidos</NavLinkR></NavLinks>
                            <NavLinks><NavLink to='contact' onClick={handleShowToggleMenu} >Contacto </NavLink></NavLinks>
                            <NavLinks><ButtonLogin to='/' onClick={(e) => logout(e)} >Cerrar sesión</ButtonLogin></NavLinks>    
                        </>
                    }   

                    {page === 'orders' &&
                        <>
                            <NavLinks><NavLinkR to='/clientes' onClick={handleShowToggleMenu} >Inicio</NavLinkR></NavLinks>
                            <NavLinks><NavLink to='contact' onClick={handleShowToggleMenu} >Contacto </NavLink></NavLinks>
                            <NavLinks><ButtonLogin to='/' onClick={(e) => logout(e)} >Cerrar sesión</ButtonLogin></NavLinks>    
                        </>
                    }   

                </NavItems>
                
                <ToggleMenu onClick={handleShowToggleMenu}>
                    {showMobileMenu ? <FaTimes /> : <FaBars />} 
                </ToggleMenu>
            </HeaderContainer>
        </>
    )
}

export default Header
