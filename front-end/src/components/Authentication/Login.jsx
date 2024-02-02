import React from 'react'
import { SignupDiv } from './Style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    return (
        <SignupDiv data-aos="zoom-in"  data-aos-duration="500">
            <div className='main'>
                <div className='heading'>
                    <h2>Welcome Back!</h2>
                </div>
                <div className='formbox'>
                    <form>
                        <div>
                            <AccountCircleIcon fontSize='large' className = "field-icon"/>
                            <input type="text" placeholder="Username or Email"/>
                        </div>
                        <div>
                            <LockIcon fontSize='large' className = "field-icon"/>
                            <input type="password" placeholder="Password" />
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </SignupDiv >
    )
}

export default Login