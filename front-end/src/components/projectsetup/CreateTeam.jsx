import React from 'react'
import { CreateTeamDiv } from './Style'

const CreateTeam = ({ selection, setSelection }) => {
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

        <CreateTeamDiv>
            <div className='container'>
                <div className='heading'>
                    <button name='createBtn' onClick={changeSelection}>Create New</button>
                    <button name='joinBtn' onClick={changeSelection}>Join Another</button>
                </div>
                <div className='formbox'>
                    <form action="">
                        <input type="text" placeholder="Select Model" />
                        <select>
                            <option value="option1">Waterfall</option>
                            <option value="option2">Agile</option>
                            <option value="option3">Option 3</option>
                        </select>

                        <input type="text" placeholder='Description' />
                        <button type="submit">Create</button>
                    </form>
                </div>
            </div>
        </CreateTeamDiv >
    )
}

export default CreateTeam