import React from 'react'
import { JoinTeamDiv } from './Style'

const JoinTeam = ({ selection, setSelection }) => {
    function changeSelection(e) {
        console.log(e.target.name)

        if ((selection === 'create' && e.target.name === 'createBtn')) {
            return setSelection('create')
        }
        else if ((selection === 'join' && e.target.name === 'joinBtn')) {
            return setSelection('join')
        }
        else if (selection === 'create') {
            return setSelection('join')
        }
        return setSelection('create')
    }
    return (
        <JoinTeamDiv>
            <div className='container'>
                <div className='heading'>
                    <button name='createBtn' onClick={changeSelection}>Create New</button>
                    <button name='joinBtn' onClick={changeSelection}>Join Another</button>
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