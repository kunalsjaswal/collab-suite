import React from 'react'
import { CreateTeamDiv } from './Style'

const CreateTeam = ({ setCreate }) => {
    return (
        <CreateTeamDiv>
            <div className='container'>
                <div className='heading'>
                    <button onClick={() => setCreate((prev) => !prev)}>Create New</button>
                    <button onClick={() => setCreate((prev) => !prev)}>Join Another</button>
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