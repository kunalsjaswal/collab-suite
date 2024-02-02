import React from 'react'
import { LoginDiv } from './Style'
const Login = () => {
    return (
        <LoginDiv data-aos="zoom-in"  data-aos-duration="500">
            <div className='main'>
                <div className='heading'>
                    <h2>Welcome Back!</h2>
                </div>
                <div className='formbox'>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </LoginDiv >
    )
}

export default Login