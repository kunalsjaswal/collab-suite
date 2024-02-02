import React from 'react'
import { SignupDiv } from './Style'

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
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </SignupDiv >
    )
}

export default Signup