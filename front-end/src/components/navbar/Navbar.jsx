import React from 'react'
import { NavbarDiv } from "./Style.jsx"
import favicon from '../../images/favicon.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import contextStore from '../../context/ContextFile'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const { currentUser } = useContext(contextStore)
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("collab-token")
        localStorage.removeItem("collab-username")
        localStorage.removeItem("collab-email")
        navigate("/")
        window.location.reload()
    }

    return (
        <NavbarDiv>
            <NavLink to="/" className='icon-name'>
                <img src={favicon} alt="favicon" className='favicon-img' />
                <h2>Team-Collab</h2>
            </NavLink>
            <div className='btn-group'>
                {!currentUser.token && <NavLink to="/login">
                    <button className="login">Login</button>
                </NavLink>}

                {!currentUser.token && <NavLink to="/signup">
                    <button className="signup">Signup</button>
                </NavLink>}

                {currentUser.token && <NavLink to="/dashboard">
                    <button className="signup">Dashboard</button>
                </NavLink>}

                {currentUser.token && <NavLink to="/projectsetup">
                    <button className="signup">Teams</button>
                </NavLink>}


                {currentUser.token && <NavLink to="/">
                    <button className="signup" onClick={handleLogout}>Logout</button>
                </NavLink>}

            </div>

        </NavbarDiv>
    )
}

export default Navbar