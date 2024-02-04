import React from 'react'
import { NavbarDiv } from "./Style.jsx"
import favicon from '../../images/favicon.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <NavbarDiv>
            <NavLink to="/" className='icon-name'>
                <img src={favicon} alt="favicon" className='favicon-img' />
                <h2>Team-Collab</h2>
            </NavLink>
            <div className='btn-group'>
                <NavLink to="/login">
                    <button className="login">Login</button>
                </NavLink>  
                
                <NavLink to="/signup">
                    <button className="signup">Signup</button>
                </NavLink>  
            </div>

        </NavbarDiv>
    )
}

export default Navbar