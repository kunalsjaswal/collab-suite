import React from 'react'
import { JoinTeamDiv } from './Style'

const JoinTeam = ({ setCreate }) => {
    return (
        <JoinTeamDiv>
            <div className='container'>
                <div className='heading'>
                    <button onClick={() => setCreate((prev) => !prev)}>Create New</button>
                    <button onClick={() => setCreate((prev) => !prev)}>Join Another</button>
                </div>
                <div className='formbox'>
                    <form action="">
                        <input type="text" placeholder="Enter Group Code" />
                        <button type="submit">Join</button>
                    </form>
                </div>
            </div>
        </JoinTeamDiv>

    )
}

export default JoinTeam