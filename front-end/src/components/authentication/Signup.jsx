import React from 'react'
import { SignupDiv } from './Style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LockResetIcon from '@mui/icons-material/LockReset';

const Signup = () => {
    return (
        <SignupDiv data-aos="zoom-in"  data-aos-duration="500">
            <div className='main'>
                <div className='heading'>
                    <h2>SIGN UP FOR CREATING <br />
                        YOUR FIRST PROJECT MODEL</h2>
                </div>
                <div className='formbox'>
                    <form>
                        <div>
                            <AccountCircleIcon fontSize='large' className = "field-icon"/>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div>
                            <EmailIcon fontSize='large' className = "field-icon"/>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <LockIcon fontSize='large' className = "field-icon"/>
                            <input type="password" placeholder="Password" />
                        </div>
                        <div>
                            <LockResetIcon  fontSize='large' className = "field-icon"/>
                            <input type="password" placeholder="Confirm Password" />
                        </div>
                        <button>Create Account</button>
                    </form>
                </div>
            </div>
        </SignupDiv >
    )
}

export default Signup