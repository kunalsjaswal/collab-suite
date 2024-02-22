import React, { useContext, useState } from 'react'
import { SignupDiv } from './Style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LockResetIcon from '@mui/icons-material/LockReset';
import contextStore from '../../context/ContextFile';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const {signupUser} = useContext(contextStore)
    const [credentials, setCredentials] = useState({
        username:"",
        email:"",
        password:"",
        cpassword:""
    })
    
    const onSignupHandler=async(ev)=>{
        const {username, email, password, cpassword} = credentials
        
        if(username.length === 0 || email.length === 0 || password.length === 0 || cpassword.length === 0){
            window.alert("Please enter all fields")
            return
        }
        if(password !== cpassword){
            window.alert("Password not matching")
            return
        }

        await signupUser(username, email, password)
        
    }
    return (
        <SignupDiv data-aos="zoom-in"  data-aos-duration="500">
            <div className='main'>
                <div className='heading'>
                    <h2>SIGN UP FOR CREATING <br />
                        YOUR FIRST PROJECT MODEL</h2>
                </div>
                <div className='formbox'>
                    <div className='form'>
                        <div>
                            <AccountCircleIcon fontSize='large' className = "field-icon"/>
                            <input type="text" placeholder="Username" 
                                    onChange={ev => setCredentials({...credentials , username: ev.target.value})} />
                        </div>
                        <div>
                            <EmailIcon fontSize='large' className = "field-icon"/>
                            <input type="email" placeholder="Email" 
                                    onChange={ev => setCredentials({...credentials , email: ev.target.value})} />
                        </div>
                        <div>
                            <LockIcon fontSize='large' className = "field-icon"/>
                            <input type="password" placeholder="Password" 
                                onChange={ev => setCredentials({...credentials , password: ev.target.value})} />
                        </div>
                        <div>
                            <LockResetIcon  fontSize='large' className = "field-icon"/>
                            <input type="password" placeholder="Confirm Password" 
                                onChange={ev => setCredentials({...credentials , cpassword: ev.target.value})} />
                        </div>
                        <button onClick={onSignupHandler}>Create Account</button>
                    </div>
                </div>
            </div>
        </SignupDiv >
    )
}

export default Signup