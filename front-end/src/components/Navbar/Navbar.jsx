import React from 'react'
import { NavbarDiv } from "./Style.jsx"

const Navbar = () => {
    return (
        <NavbarDiv>
            <h2>Team Collab</h2>
            <div>
                <button className="login">Login</button>
                <button className="signup">Signup</button>
            </div>

        </NavbarDiv>
    )
}

export default Navbar