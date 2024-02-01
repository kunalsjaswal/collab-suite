import React from 'react'
import { NavbarDiv } from "./Style.jsx"
import favicon from '../../images/favicon.png'

const Navbar = () => {
    return (
        <NavbarDiv>
            <div className='icon-name'>
                <img src={favicon} alt="favicon" className='favicon-img' />
                <h2>Team-Collab</h2>
            </div>
            <div className='btn-group'>
                <button className="login">Login</button>
                <button className="signup">Signup</button>
            </div>

        </NavbarDiv>
    )
}

export default Navbar