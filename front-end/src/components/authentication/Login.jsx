import React, { useContext, useState } from 'react'
import { SignupDiv } from './Style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import contextStore from '../../context/ContextFile';

const Login = () => {
    const {loginUser} = useContext(contextStore)

    const [credentials, setCredentials] = useState(
        {
            username : "",
            password: ""
        }
    )
    const onLoginhandler=async(ev)=>{
        ev.preventDefault()
        if(credentials.username.length === 0 || credentials.password.length === 0){
            window.alert("Please enter all fields")
            return;
        }

        await loginUser(credentials)
    }
    return (
        <SignupDiv data-aos="zoom-in"  data-aos-duration="500">
            <div className='main'>
                <div className='heading'>
                    <h2>Welcome Back!</h2>
                </div>
                <div className='formbox'>
                    <div  className='form'>
                        <div>
                            <AccountCircleIcon fontSize='large' className = "field-icon"/>
                            <input type="text" placeholder="Username or Email"
                                    onChange={(ev)=>setCredentials({...credentials, username: ev.target.value})}
                                />
                        </div>
                        <div>
                            <LockIcon fontSize='large' className = "field-icon"/>
                            <input type="password" placeholder="Password" 
                                    onChange={(ev)=>setCredentials({...credentials, password: ev.target.value})}
                            />
                        </div>
                        <button onClick={onLoginhandler}>Login</button>
                    </div>
                </div>
            </div>
        </SignupDiv >
    )
}

export default Login