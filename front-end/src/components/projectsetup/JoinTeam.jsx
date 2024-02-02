import React from 'react'
import { JoinTeamDiv } from './Style'

const JoinTeam = () => {
    
    return (
        <JoinTeamDiv data-aos="fade"  data-aos-duration="500">
            <div className='container'>
                <form action="">
                    <input type="text" placeholder="Enter Group Code" />
                    <button type="submit">Join</button>
                </form>
            </div>
        </JoinTeamDiv>

    )
}

export default JoinTeam